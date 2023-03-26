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
exports.getThumbnailByQuery = exports.getOneThumbnail = exports.getMyThumbnails = exports.getAllThumbnails = exports.uploadThumbail = void 0;
const thumbnail_service_1 = require("../services/thumbnail.service");
const error_handler_1 = require("../utils/error.handler");
const getAllThumbnails = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thumbnails = yield (0, thumbnail_service_1.findAllThumbnails)();
        return res.send(thumbnails);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GETING_THUMBNAIL', e);
    }
});
exports.getAllThumbnails = getAllThumbnails;
const getMyThumbnails = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nickname } = params;
        const thumbnails = yield (0, thumbnail_service_1.findThumbnailByNickname)(nickname);
        return res.send(thumbnails);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GETING_THUMBNAIL', e);
    }
});
exports.getMyThumbnails = getMyThumbnails;
const getOneThumbnail = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = params;
        const thumbnails = yield (0, thumbnail_service_1.findThumbnailById)(_id);
        return res.send(thumbnails);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GETING_THUMBNAIL', e);
    }
});
exports.getOneThumbnail = getOneThumbnail;
const getThumbnailByQuery = ({ query }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('QUERYYYYY=>>>>>>>>>>', query);
        const thumbnails = yield (0, thumbnail_service_1.findThumbnailByQuery)(query);
        return res.send(thumbnails);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GETING_THUMBNAIL', e);
    }
});
exports.getThumbnailByQuery = getThumbnailByQuery;
const uploadThumbail = ({ thumbnailData, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!thumbnailData)
            return;
        //thumbnailData contains url of image
        const thumbnail = yield (0, thumbnail_service_1.saveOneThumbnail)(thumbnailData, body);
        return res.send(thumbnail);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_UPLOADING_THUMBNAIL', e);
    }
});
exports.uploadThumbail = uploadThumbail;
