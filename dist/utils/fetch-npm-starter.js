"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadNpmStarter = exports.getStarterPackageInfo = void 0;
const path_1 = __importDefault(require("path"));
const execa_1 = __importDefault(require("execa"));
const chalk_1 = __importDefault(require("chalk"));
const stop_process_1 = __importDefault(require("./stop-process"));
/**
 * Gets the package version on npm. Will fail if the package does not exist
 */
async function getPackageInfo(packageName, options) {
    const { useYarn } = options ?? {};
    // Use yarn if possible because it's faster
    if (useYarn) {
        const { stdout } = await (0, execa_1.default)('yarn', ['info', packageName, '--json']);
        const yarnInfo = JSON.parse(stdout);
        return {
            name: yarnInfo.data.name,
            version: yarnInfo.data.version,
        };
    }
    // Fallback to npm
    const { stdout } = await (0, execa_1.default)('npm', ['view', packageName, 'name', 'version', '--silent']);
    // Use regex to parse name and version from CLI result
    const match = stdout.match(/(?<=')(.*?)(?=')/gm);
    if (!match) {
        throw new Error('No match for name@version');
    }
    const [name, version] = match;
    return { name, version };
}
/**
 * Get the version and full package name of the starter
 */
async function getStarterPackageInfo(starter, options) {
    const { useYarn } = options ?? {};
    // Check if starter is a shorthand
    try {
        const longhand = `@strapi/starter-${starter}`;
        return await getPackageInfo(longhand, { useYarn });
    }
    catch (error) {
        // Ignore error, we now know it's not a shorthand
    }
    // Fetch version of the non-shorthand package
    try {
        return await getPackageInfo(starter, { useYarn });
    }
    catch (error) {
        return (0, stop_process_1.default)(`Could not find package ${chalk_1.default.yellow(starter)} on npm`);
    }
}
exports.getStarterPackageInfo = getStarterPackageInfo;
/**
 * Download a starter package from the npm registry
 */
async function downloadNpmStarter(packageInfo, parentDir, options) {
    const { name, version } = packageInfo;
    const { useYarn } = options ?? {};
    // Download from npm, using yarn if possible
    if (useYarn) {
        await (0, execa_1.default)('yarn', ['add', `${name}@${version}`, '--no-lockfile', '--silent'], {
            cwd: parentDir,
        });
    }
    else {
        await (0, execa_1.default)('npm', ['install', `${name}@${version}`, '--no-save', '--silent'], {
            cwd: parentDir,
        });
    }
    // Return the path of the actual starter
    const exactStarterPath = path_1.default.dirname(require.resolve(`${name}/package.json`, { paths: [parentDir] }));
    return exactStarterPath;
}
exports.downloadNpmStarter = downloadNpmStarter;
//# sourceMappingURL=fetch-npm-starter.js.map