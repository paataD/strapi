import type { Program } from '../types';
/**
 * @param {Object} projectArgs - The arguments for create a project
 * @param {string|null} projectArgs.projectName - The name/path of project
 * @param {string|null} projectArgs.starter - The npm package of the starter
 * @param {Object} program - Commands for generating new application
 */
export default function buildStarter({ projectName, starter }: {
    projectName: string;
    starter: string;
}, program: Program): Promise<void>;
