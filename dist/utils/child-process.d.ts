import execa from 'execa';
import type { Options } from '../types';
export declare function runInstall(path: string, { useYarn }?: Options): execa.ExecaChildProcess<string>;
export declare function runApp(rootPath: string, { useYarn }?: Options): execa.ExecaChildProcess<string>;
export declare function initGit(rootPath: string): Promise<void>;
