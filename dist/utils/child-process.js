"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGit = exports.runApp = exports.runInstall = void 0;
const child_process_1 = require("child_process");
const execa_1 = __importDefault(require("execa"));
const logger_1 = __importDefault(require("./logger"));
function runInstall(path, { useYarn } = {}) {
    return (0, execa_1.default)(useYarn ? 'yarn' : 'npm', ['install'], {
        cwd: path,
        stdin: 'ignore',
    });
}
exports.runInstall = runInstall;
function runApp(rootPath, { useYarn } = {}) {
    if (useYarn) {
        return (0, execa_1.default)('yarn', ['develop'], {
            stdio: 'inherit',
            cwd: rootPath,
        });
    }
    return (0, execa_1.default)('npm', ['run', 'develop'], {
        stdio: 'inherit',
        cwd: rootPath,
    });
}
exports.runApp = runApp;
async function initGit(rootPath) {
    try {
        await (0, execa_1.default)('git', ['init'], {
            cwd: rootPath,
        });
    }
    catch (err) {
        logger_1.default.warn('Could not initialize a git repository');
    }
    try {
        await (0, execa_1.default)('git', ['add', '-A'], { cwd: rootPath });
        (0, child_process_1.execSync)('git commit -m "Create Strapi starter project"', {
            cwd: rootPath,
        });
    }
    catch (err) {
        logger_1.default.warn('Could not create initial git commit');
    }
}
exports.initGit = initGit;
//# sourceMappingURL=child-process.js.map