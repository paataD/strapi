"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const execa_1 = __importDefault(require("execa"));
function hasYarn() {
    try {
        const { exitCode } = execa_1.default.commandSync('yarn --version', { shell: true });
        if (exitCode === 0)
            return true;
    }
    catch (err) {
        return false;
    }
}
exports.default = hasYarn;
//# sourceMappingURL=has-yarn.js.map