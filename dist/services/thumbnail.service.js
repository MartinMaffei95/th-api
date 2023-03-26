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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findThumbnailByQuery = exports.findThumbnailById = exports.findThumbnailByNickname = exports.saveOneThumbnail = exports.findAllThumbnails = void 0;
const thumbnail_model_1 = __importDefault(require("../models/thumbnail.model"));
const createQuery_handler_1 = require("../utils/createQuery.handler");
const findAllThumbnails = () => __awaiter(void 0, void 0, void 0, function* () {
    const allThumbnails = yield thumbnail_model_1.default.find();
    return allThumbnails;
});
exports.findAllThumbnails = findAllThumbnails;
const findThumbnailByNickname = (nickname) => __awaiter(void 0, void 0, void 0, function* () {
    const allThumbnails = yield thumbnail_model_1.default.find({ uploaded_by: nickname });
    return allThumbnails;
});
exports.findThumbnailByNickname = findThumbnailByNickname;
const findThumbnailById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const allThumbnails = yield thumbnail_model_1.default.find({ _id: id });
    return allThumbnails;
});
exports.findThumbnailById = findThumbnailById;
const findThumbnailByQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoQuery = (0, createQuery_handler_1.createQuery)(query);
    console.log(mongoQuery);
    const thumbnails = yield thumbnail_model_1.default.find(Object.assign({}, mongoQuery));
    console.log(thumbnails);
    return thumbnails;
});
exports.findThumbnailByQuery = findThumbnailByQuery;
const saveOneThumbnail = (thumbnail_url, body) => __awaiter(void 0, void 0, void 0, function* () {
    const { uploaded_by, name } = body;
    const newThumbnail = yield thumbnail_model_1.default.create({
        media: thumbnail_url,
        private: false,
        uploaded_by: uploaded_by,
        name: name || 'Mr. Enigma',
    });
    return newThumbnail;
});
exports.saveOneThumbnail = saveOneThumbnail;
