"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configEnvs = void 0;
const dotenv = require("dotenv");
dotenv.config();
const { MONGO_URL, JWT_SECRET_KEY, PORT, MAIL_HOST, MAIL_USER, MAIL_PASSWORD, MAIL_FROM, CLD_CLOUD_NAME, CLD_API_KEY, CLD_API_SECRET, } = process.env;
exports.configEnvs = {
    mongoURL: MONGO_URL,
    jwt: JWT_SECRET_KEY,
    port: PORT,
    mailSMPT: MAIL_HOST,
    mailUser: MAIL_USER,
    mailPassword: MAIL_PASSWORD,
    mailFrom: MAIL_FROM,
    cloudinaryName: CLD_CLOUD_NAME,
    cloudinaryKey: CLD_API_KEY,
    cloudinarySecretKey: CLD_API_SECRET,
};
//# sourceMappingURL=index.js.map