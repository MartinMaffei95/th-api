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
exports.s3Upload = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const config_1 = require("../config/config");
const client = new client_s3_1.S3Client({
    region: config_1.AWS_REGION,
    credentials: {
        accessKeyId: config_1.AWS_ACCESS_KEY_ID,
        secretAccessKey: config_1.AWS_SECRET_ACCESS_KEY,
    },
});
const s3Upload = (file, fileExtension) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = `${Date.now()}-thumbnail.${fileExtension}`;
    const uploadParams = {
        Bucket: config_1.AWS_BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType: 'image/jpeg',
    };
    const command = new client_s3_1.PutObjectCommand(uploadParams);
    const res = yield client.send(command);
    console.log({
        response: res,
        thumbnail_url: `${config_1.AWS_THUBNAIL_URI}${fileName}`,
    });
    return {
        response: res,
        thumbnail_url: `${config_1.AWS_THUBNAIL_URI}${fileName}`,
    };
});
exports.s3Upload = s3Upload;
