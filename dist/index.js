"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const form_data_1 = __importDefault(require("form-data"));
const mailgun_js_1 = __importDefault(require("mailgun.js"));
const utils_1 = __importDefault(require("@strapi/utils"));
const optionsMap = {
    apiKey: { field: 'key', fn: (value) => `${value}` },
    host: { field: 'url', fn: (value) => `https://${value || 'api.mailgun.net'}` },
};
module.exports = {
    convertProviderOptions(providerOptions) {
        const newOptions = {};
        if (typeof providerOptions === 'object') {
            Object.keys(providerOptions).forEach((key) => {
                if (Object.keys(optionsMap).includes(key)) {
                    newOptions[optionsMap[key].field] = optionsMap[key].fn(providerOptions[key]);
                }
                else {
                    newOptions[key] = providerOptions[key];
                }
            });
        }
        return newOptions;
    },
    init(providerOptions, settings) {
        const defaults = {
            username: 'api',
        };
        const mailgun = new mailgun_js_1.default(form_data_1.default);
        const mg = mailgun.client({
            ...defaults,
            ...this.convertProviderOptions(providerOptions),
        });
        return {
            send(options) {
                const { from, to, cc, bcc, replyTo, subject, text, html, ...rest } = options;
                const data = {
                    from: from || settings.defaultFrom,
                    to,
                    cc,
                    bcc,
                    'h:Reply-To': replyTo || settings.defaultReplyTo,
                    subject,
                    text,
                    html,
                    ...rest,
                };
                return mg.messages.create(providerOptions.domain, utils_1.default.removeUndefined(data));
            },
        };
    },
};
//# sourceMappingURL=index.js.map