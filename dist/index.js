"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const node_ses_1 = __importDefault(require("node-ses"));
const utils_1 = __importDefault(require("@strapi/utils"));
module.exports = {
    init(providerOptions, settings) {
        const client = node_ses_1.default.createClient(providerOptions);
        return {
            send(options) {
                return new Promise((resolve, reject) => {
                    const { from, to, cc, bcc, replyTo, subject, text, html, ...rest } = options;
                    const msg = {
                        from: from || settings.defaultFrom,
                        to,
                        cc,
                        bcc,
                        replyTo: replyTo || settings.defaultReplyTo,
                        subject,
                        altText: text,
                        message: html,
                        ...rest,
                    };
                    client.sendEmail(utils_1.default.removeUndefined(msg), (err) => {
                        if (err) {
                            if (err.Message) {
                                // eslint-disable-next-line prefer-promise-reject-errors
                                reject(`${err.Message} ${err.Detail ? err.Detail : ''}`);
                            }
                            reject(err);
                        }
                        else {
                            resolve();
                        }
                    });
                });
            },
        };
    },
};
//# sourceMappingURL=index.js.map