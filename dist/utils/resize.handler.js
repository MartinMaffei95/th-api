"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const resizeImage = (req, res, next) => {
    var _a, _b;
    //   console.log(bodyParser);
    console.log('req.file =>', req === null || req === void 0 ? void 0 : req.file);
    (0, sharp_1.default)((_a = req === null || req === void 0 ? void 0 : req.file) === null || _a === void 0 ? void 0 : _a.path)
        .resize({ width: 512, height: 512, fit: 'cover' })
        //   .toBuffer()
        .toFile(`./src/uploads/_${(_b = req === null || req === void 0 ? void 0 : req.file) === null || _b === void 0 ? void 0 : _b.filename}`)
        .then((data) => {
        // ... do something with data
        console.log('SHARP DATA =>', data);
        return data;
    });
    return next();
};
exports.resizeImage = resizeImage;
