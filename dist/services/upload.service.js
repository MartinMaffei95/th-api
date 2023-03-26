"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer = require('multer');
const memoryStorage = multer.memoryStorage();
exports.upload = multer({
    storage: memoryStorage,
});
