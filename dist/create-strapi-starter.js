"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const commander_1 = __importStar(require("commander"));
const build_starter_1 = __importDefault(require("./utils/build-starter"));
const prompt_user_1 = __importDefault(require("./utils/prompt-user"));
const packageJson = JSON.parse((0, node_fs_1.readFileSync)((0, node_path_1.resolve)(__dirname, '../package.json'), 'utf8'));
const program = new commander_1.default.Command(packageJson.name);
const incompatibleQuickstartOptions = [
    'dbclient',
    'dbhost',
    'dbport',
    'dbname',
    'dbusername',
    'dbpassword',
    'dbssl',
    'dbfile',
];
program
    .version(packageJson.version)
    .arguments('[directory], [starter]')
    .option('--use-npm', 'Force usage of npm instead of yarn to create the project')
    .option('--debug', 'Display database connection error')
    .option('--quickstart', 'Quickstart app creation')
    .option('--dbclient <dbclient>', 'Database client')
    .option('--dbhost <dbhost>', 'Database host')
    .option('--dbport <dbport>', 'Database port')
    .option('--dbname <dbname>', 'Database name')
    .option('--dbusername <dbusername>', 'Database username')
    .option('--dbpassword <dbpassword>', 'Database password')
    .option('--dbssl <dbssl>', 'Database SSL')
    .option('--dbfile <dbfile>', 'Database file path for sqlite')
    .option('--dbforce', 'Overwrite database content if any')
    .description('Create a fullstack monorepo application using the strapi backend template specified in the provided starter')
    .action((directory, starter, programArgs) => {
    const projectArgs = { projectName: directory, starter };
    initProject(projectArgs, programArgs);
});
function generateApp(projectArgs, programArgs) {
    if (!projectArgs.projectName || !projectArgs.starter) {
        console.error('Please specify the <directory> and <starter> of your project when using --quickstart');
        // eslint-disable-next-line no-process-exit
        process.exit(1);
    }
    return (0, build_starter_1.default)(projectArgs, programArgs);
}
async function initProject(projectArgs, programArgs) {
    const hasIncompatibleQuickstartOptions = incompatibleQuickstartOptions.some((opt) => programArgs[opt]);
    if (programArgs.quickstart && hasIncompatibleQuickstartOptions) {
        console.error(`The quickstart option is incompatible with the following options: ${incompatibleQuickstartOptions.join(', ')}`);
        process.exit(1);
    }
    if (hasIncompatibleQuickstartOptions) {
        programArgs.quickstart = false; // Will disable the quickstart question because != 'undefined'
    }
    const { projectName, starter } = projectArgs;
    if (programArgs.quickstart) {
        return generateApp(projectArgs, programArgs);
    }
    const prompt = await (0, prompt_user_1.default)(projectName, starter, programArgs);
    const promptProjectArgs = {
        projectName: prompt.directory || projectName,
        starter: prompt.starter || starter,
    };
    return generateApp(promptProjectArgs, {
        ...programArgs,
        quickstart: prompt.quick || programArgs.quickstart,
    });
}
try {
    program.parse(process.argv);
}
catch (err) {
    if (err instanceof commander_1.CommanderError) {
        if (err.exitCode && err.exitCode !== 0) {
            program.outputHelp();
        }
    }
}
//# sourceMappingURL=create-strapi-starter.js.map