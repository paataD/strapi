"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
exports.default = {
    error(message) {
        console.error(`${chalk_1.default.red('error')}: ${message}`);
    },
    warn(message) {
        console.log(`${chalk_1.default.yellow('warning')}: ${message}`);
    },
    info(message) {
        console.log(`${chalk_1.default.blue('info')}: ${message}`);
    },
};
//# sourceMappingURL=logger.js.map