import type { Program } from '../types';
interface Answers {
    directory: string;
    quick: boolean;
    starter: string;
}
export default function promptUser(projectName: string, starter: string, program: Program): Promise<Answers>;
export {};
