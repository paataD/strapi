"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// Prompts the user with required questions to create the project and return the answers
async function promptUser(projectName, starter, program) {
    const questions = [
        {
            type: 'input',
            default: 'my-strapi-project',
            name: 'directory',
            message: 'What would you like to name your project?',
            when: !projectName,
        },
        {
            type: 'list',
            name: 'quick',
            message: 'Choose your installation type',
            when: !program.quickstart,
            choices: [
                {
                    name: 'Quickstart (recommended)',
                    value: true,
                },
                {
                    name: 'Custom (manual settings)',
                    value: false,
                },
            ],
        },
        {
            type: 'input',
            name: 'starter',
            when: !starter,
            message: 'Please provide the npm package name of the starter you want to use:',
        },
    ];
    return inquirer_1.default.prompt(questions);
}
exports.default = promptUser;
//# sourceMappingURL=prompt-user.js.map