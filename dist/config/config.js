"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWS_THUBNAIL_URI = exports.AWS_BUCKET_NAME = exports.AWS_SECRET_ACCESS_KEY = exports.AWS_ACCESS_KEY_ID = exports.AWS_REGION = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.AWS_REGION = process.env.AWS_REGION;
exports.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
exports.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
exports.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
exports.AWS_THUBNAIL_URI = process.env.AWS_THUBNAIL_URI;
