"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fp_1 = require("lodash/fp");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const utils_1 = require("./utils");
// TODO V5: Migrate to aws-sdk v3
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
function hasUrlProtocol(url) {
    // Regex to test protocol like "http://", "https://"
    return /^\w*:\/\//.test(url);
}
module.exports = {
    init({ baseUrl, rootPath, s3Options, ...legacyS3Options }) {
        if (Object.keys(legacyS3Options).length > 0) {
            process.emitWarning("S3 configuration options passed at root level of the plugin's providerOptions is deprecated and will be removed in a future release. Please wrap them inside the 's3Options:{}' property.");
        }
        const config = { ...s3Options, ...legacyS3Options };
        const S3 = new aws_sdk_1.default.S3({
            apiVersion: '2006-03-01',
            ...config,
        });
        const filePrefix = rootPath ? `${rootPath.replace(/\/+$/, '')}/` : '';
        const getFileKey = (file) => {
            const path = file.path ? `${file.path}/` : '';
            return `${filePrefix}${path}${file.hash}${file.ext}`;
        };
        const ACL = (0, fp_1.getOr)('public-read', ['params', 'ACL'], config);
        // if ACL is private and baseUrl is set, we need to warn the user
        // signed url's will not have the baseUrl prefix
        if (ACL === 'private' && baseUrl) {
            process.emitWarning('You are using a private ACL with a baseUrl. This is not recommended as the files will be accessible without the baseUrl prefix.');
        }
        const upload = (file, customParams = {}) => new Promise((resolve, reject) => {
            const fileKey = getFileKey(file);
            if (!file.stream && !file.buffer) {
                reject(new Error('Missing file stream or buffer'));
                return;
            }
            const params = {
                Key: fileKey,
                Bucket: config.params.Bucket,
                Body: file.stream || file.buffer,
                ACL,
                ContentType: file.mime,
                ...customParams,
            };
            const onUploaded = (err, data) => {
                if (err) {
                    return reject(err);
                }
                // set the bucket file url
                if (baseUrl) {
                    // Construct the url with the baseUrl
                    file.url = `${baseUrl}/${fileKey}`;
                }
                else {
                    // Add the protocol if it is missing
                    // Some providers like DigitalOcean Spaces return the url without the protocol
                    file.url = hasUrlProtocol(data.Location) ? data.Location : `https://${data.Location}`;
                }
                resolve();
            };
            S3.upload(params, onUploaded);
        });
        return {
            isPrivate() {
                return ACL === 'private';
            },
            async getSignedUrl(file) {
                // Do not sign the url if it does not come from the same bucket.
                if (!(0, utils_1.isUrlFromBucket)(file.url, config.params.Bucket, baseUrl)) {
                    return { url: file.url };
                }
                const signedUrlExpires = (0, fp_1.getOr)(15 * 60, ['params', 'signedUrlExpires'], config); // 15 minutes
                return new Promise((resolve, reject) => {
                    const fileKey = getFileKey(file);
                    S3.getSignedUrl('getObject', {
                        Bucket: config.params.Bucket,
                        Key: fileKey,
                        Expires: parseInt(signedUrlExpires, 10),
                    }, (err, url) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve({ url });
                    });
                });
            },
            uploadStream(file, customParams = {}) {
                return upload(file, customParams);
            },
            upload(file, customParams = {}) {
                return upload(file, customParams);
            },
            delete(file, customParams = {}) {
                return new Promise((resolve, reject) => {
                    // delete file on S3 bucket
                    const fileKey = getFileKey(file);
                    S3.deleteObject({
                        Key: fileKey,
                        Bucket: config.params.Bucket,
                        ...customParams,
                    }, (err) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve();
                    });
                });
            },
        };
    },
};
//# sourceMappingURL=index.js.map