/// <reference types="node" />
import type { Schema, Utils } from '@strapi/strapi';
import { Readable } from 'stream';
import { WebSocket } from 'ws';
import type { IMetadata, ISourceProvider, ISourceProviderTransferResults, MaybePromise, ProviderType } from '../../../../types';
import { ILocalStrapiSourceProviderOptions } from '../local-source';
import { createDispatcher } from '../utils';
interface ITransferTokenAuth {
    type: 'token';
    token: string;
}
export interface IRemoteStrapiSourceProviderOptions extends ILocalStrapiSourceProviderOptions {
    url: URL;
    auth?: ITransferTokenAuth;
    retryMessageOptions?: {
        retryMessageTimeout: number;
        retryMessageMaxRetries: number;
    };
}
declare class RemoteStrapiSourceProvider implements ISourceProvider {
    #private;
    name: string;
    type: ProviderType;
    options: IRemoteStrapiSourceProviderOptions;
    ws: WebSocket | null;
    dispatcher: ReturnType<typeof createDispatcher> | null;
    constructor(options: IRemoteStrapiSourceProviderOptions);
    results?: ISourceProviderTransferResults | undefined;
    createEntitiesReadStream(): MaybePromise<Readable>;
    createLinksReadStream(): MaybePromise<Readable>;
    createAssetsReadStream(): Promise<Readable>;
    createConfigurationReadStream(): MaybePromise<Readable>;
    getMetadata(): Promise<IMetadata | null>;
    assertValidProtocol(url: URL): void;
    initTransfer(): Promise<string>;
    bootstrap(): Promise<void>;
    close(): Promise<void>;
    getSchemas(): Promise<Utils.String.Dict<Schema.Schema> | null>;
}
export declare const createRemoteStrapiSourceProvider: (options: IRemoteStrapiSourceProviderOptions) => RemoteStrapiSourceProvider;
export {};
