/// <reference types="node" />
import { Writable } from 'stream';
import type { IDestinationProvider, IMetadata, ProviderType, Transaction } from '../../../../types';
import { restore } from './strategies';
export declare const VALID_CONFLICT_STRATEGIES: string[];
export declare const DEFAULT_CONFLICT_STRATEGY = "restore";
export interface ILocalStrapiDestinationProviderOptions {
    getStrapi(): Strapi.Strapi | Promise<Strapi.Strapi>;
    autoDestroy?: boolean;
    restore?: restore.IRestoreOptions;
    strategy: 'restore' | 'merge';
}
declare class LocalStrapiDestinationProvider implements IDestinationProvider {
    #private;
    name: string;
    type: ProviderType;
    options: ILocalStrapiDestinationProviderOptions;
    strapi?: Strapi.Strapi;
    transaction?: Transaction;
    constructor(options: ILocalStrapiDestinationProviderOptions);
    bootstrap(): Promise<void>;
    close(): Promise<void>;
    rollback(): Promise<void>;
    beforeTransfer(): Promise<void>;
    getMetadata(): IMetadata;
    getSchemas(): import("@strapi/strapi/lib/types/utils/string").Dict<import("@strapi/strapi/lib/types/core/schemas").Schema>;
    createEntitiesWriteStream(): Writable;
    createAssetsWriteStream(): Promise<Writable>;
    createConfigurationWriteStream(): Promise<Writable>;
    createLinksWriteStream(): Promise<Writable>;
}
export declare const createLocalStrapiDestinationProvider: (options: ILocalStrapiDestinationProviderOptions) => LocalStrapiDestinationProvider;
export {};
