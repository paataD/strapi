import type { Options, PackageInfo } from '../types';
/**
 * Get the version and full package name of the starter
 */
export declare function getStarterPackageInfo(starter: string, options?: Options): Promise<PackageInfo>;
/**
 * Download a starter package from the npm registry
 */
export declare function downloadNpmStarter(packageInfo: PackageInfo, parentDir: string, options?: Options): Promise<string>;
