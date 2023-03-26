"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const error_handler_1 = require("../utils/error.handler");
const s3_service_1 = require("../services/s3.service");
const uploadImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { file } = req;
        if (!file)
            return (0, error_handler_1.handleHttp)(res, 'no file');
        const fileFormat = file.mimetype.split('/')[1];
        const upS3 = yield (0, s3_service_1.s3Upload)(req === null || req === void 0 ? void 0 : req.file, fileFormat);
        console.log(upS3);
        req.thumbnailData = upS3.thumbnail_url;
        next();
    }
    catch (error) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_cloudinary_THUMBNAIL');
        // return;
    }
});
exports.uploadImage = uploadImage;
