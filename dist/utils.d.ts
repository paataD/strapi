interface BucketInfo {
    bucket?: string | null;
    err?: string;
}
/**
 * Parse the bucket name from a URL.
 * See all URL formats in https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-bucket-intro.html
 *
 * @param {string} fileUrl - the URL to parse
 * @returns {object} result
 * @returns {string} result.bucket - the bucket name
 * @returns {string} result.err - if any
 */
export declare function getBucketFromUrl(fileUrl: string): BucketInfo;
export {};
