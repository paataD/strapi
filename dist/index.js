"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mail_1 = __importDefault(require("@sendgrid/mail"));
const utils_1 = __importDefault(require("@strapi/utils"));
module.exports = {
    init(providerOptions, settings) {
        mail_1.default.setApiKey(providerOptions.apiKey);
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
                        text,
                        html,
                        ...rest,
                    };
                    mail_1.default.send(utils_1.default.removeUndefined(msg), false, (err) => {
                        if (err) {
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