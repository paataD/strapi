"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const os_1 = __importDefault(require("os"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const ora_1 = __importDefault(require("ora"));
const ci_info_1 = __importDefault(require("ci-info"));
const chalk_1 = __importDefault(require("chalk"));
const generate_new_1 = require("@strapi/generate-new");
const has_yarn_1 = __importDefault(require("./has-yarn"));
const child_process_1 = require("./child-process");
const fetch_npm_starter_1 = require("./fetch-npm-starter");
const logger_1 = __importDefault(require("./logger"));
const stop_process_1 = __importDefault(require("./stop-process"));
function readStarterJson(filePath, starter) {
    try {
        const data = fs_extra_1.default.readFileSync(filePath);
        return JSON.parse(data.toString());
    }
    catch (err) {
        (0, stop_process_1.default)(`Could not find ${chalk_1.default.yellow('starter.json')} in ${chalk_1.default.yellow(starter)}`);
    }
}
async function initPackageJson(rootPath, projectName, { useYarn } = {}) {
    const packageManager = useYarn ? 'yarn --cwd' : 'npm run --prefix';
    try {
        await fs_extra_1.default.writeJson((0, path_1.join)(rootPath, 'package.json'), {
            name: projectName,
            private: true,
            version: '0.0.0',
            scripts: {
                'develop:backend': `${packageManager} backend develop`,
                'develop:frontend': `wait-on http://localhost:1337/admin && ${packageManager} frontend develop`,
                develop: 'cross-env FORCE_COLOR=1 npm-run-all -l -p develop:*',
            },
            devDependencies: {
                'npm-run-all': '4.1.5',
                'wait-on': '5.2.1',
                'cross-env': '7.0.3',
            },
        }, {
            spaces: 2,
        });
    }
    catch (err) {
        (0, stop_process_1.default)(`Failed to create ${chalk_1.default.yellow('package.json')} in ${chalk_1.default.yellow(rootPath)}`);
    }
}
async function installWithLogs(path, options) {
    const installPrefix = chalk_1.default.yellow('Installing dependencies:');
    const loader = (0, ora_1.default)(installPrefix).start();
    const logInstall = (chunk = '') => {
        loader.text = `${installPrefix} ${chunk.toString().split('\n').join(' ')}`;
    };
    const runner = (0, child_process_1.runInstall)(path, options);
    runner.stdout?.on('data', logInstall);
    runner.stderr?.on('data', logInstall);
    await runner;
    loader.stop();
    console.log(`Dependencies installed ${chalk_1.default.green('successfully')}.`);
}
async function getStarterInfo(starter, { useYarn } = {}) {
    const isLocalStarter = ['./', '../', '/'].some((filePrefix) => starter.startsWith(filePrefix));
    let starterPath;
    let starterParentPath;
    let starterPackageInfo;
    if (isLocalStarter) {
        // Starter is a local directory
        console.log('Installing local starter.');
        starterPath = (0, path_1.resolve)(starter);
    }
    else {
        // Starter should be an npm package. Fetch starter info
        starterPackageInfo = await (0, fetch_npm_starter_1.getStarterPackageInfo)(starter, { useYarn });
        console.log(`Installing ${chalk_1.default.yellow(starterPackageInfo.name)} starter.`);
        // Download starter repository to a temporary directory
        starterParentPath = await fs_extra_1.default.mkdtemp((0, path_1.join)(os_1.default.tmpdir(), 'strapi-'));
        starterPath = await (0, fetch_npm_starter_1.downloadNpmStarter)(starterPackageInfo, starterParentPath, { useYarn });
    }
    return { isLocalStarter, starterPath, starterParentPath, starterPackageInfo };
}
/**
 * @param {Object} projectArgs - The arguments for create a project
 * @param {string|null} projectArgs.projectName - The name/path of project
 * @param {string|null} projectArgs.starter - The npm package of the starter
 * @param {Object} program - Commands for generating new application
 */
async function buildStarter({ projectName, starter }, program) {
    const hasYarnInstalled = (0, has_yarn_1.default)();
    const { isLocalStarter, starterPath, starterParentPath, starterPackageInfo } = await getStarterInfo(starter, { useYarn: hasYarnInstalled });
    // Project directory
    const rootPath = (0, path_1.resolve)(projectName);
    const projectBasename = (0, path_1.basename)(rootPath);
    const starterJson = readStarterJson((0, path_1.join)(starterPath, 'starter.json'), starter);
    try {
        await fs_extra_1.default.ensureDir(rootPath);
    }
    catch (error) {
        if (error instanceof Error) {
            (0, stop_process_1.default)(`Failed to create ${chalk_1.default.yellow(rootPath)}: ${error.message}`);
        }
        (0, stop_process_1.default)(`Failed to create ${chalk_1.default.yellow(rootPath)}: ${error}`);
    }
    // Copy the downloaded frontend folder to the project folder
    const frontendPath = (0, path_1.join)(rootPath, 'frontend');
    try {
        await fs_extra_1.default.copy((0, path_1.join)(starterPath, 'starter'), frontendPath, {
            overwrite: true,
            recursive: true,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            (0, stop_process_1.default)(`Failed to create ${chalk_1.default.yellow(frontendPath)}: ${error.message}`);
        }
        (0, stop_process_1.default)(`Failed to create ${chalk_1.default.yellow(frontendPath)}`);
    }
    // Delete the starter directory if it was downloaded
    if (!isLocalStarter && starterParentPath) {
        await fs_extra_1.default.remove(starterParentPath);
    }
    // Set command options for Strapi app
    const generateStrapiAppOptions = {
        ...program,
        starter: starterPackageInfo?.name,
        run: false,
    };
    if (starterJson.template.version) {
        generateStrapiAppOptions.template = `${starterJson.template.name}@${starterJson.template.version}`;
    }
    else {
        generateStrapiAppOptions.template = starterJson.template.name;
    }
    // Create strapi app using the template
    await (0, generate_new_1.generateNewApp)((0, path_1.join)(rootPath, 'backend'), generateStrapiAppOptions);
    // Install frontend dependencies
    console.log(`Creating Strapi starter frontend at ${chalk_1.default.yellow(frontendPath)}.`);
    console.log('Installing frontend dependencies');
    await installWithLogs(frontendPath, { useYarn: hasYarnInstalled });
    // Setup monorepo
    initPackageJson(rootPath, projectBasename, { useYarn: hasYarnInstalled });
    // Add gitignore
    try {
        const gitignore = (0, path_1.join)(__dirname, '..', 'resources', 'gitignore');
        await fs_extra_1.default.copy(gitignore, (0, path_1.join)(rootPath, '.gitignore'));
    }
    catch (err) {
        logger_1.default.warn(`Failed to create file: ${chalk_1.default.yellow('.gitignore')}`);
    }
    await installWithLogs(rootPath, { useYarn: hasYarnInstalled });
    if (!ci_info_1.default.isCI) {
        await (0, child_process_1.initGit)(rootPath);
    }
    console.log(chalk_1.default.green('Starting the app'));
    await (0, child_process_1.runApp)(rootPath, { useYarn: hasYarnInstalled });
}
exports.default = buildStarter;
//# sourceMappingURL=build-starter.js.map