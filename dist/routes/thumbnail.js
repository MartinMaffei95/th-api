"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const thumbnail_1 = require("../controllers/thumbnail");
const uploadMiddleware_1 = require("../middlewares/uploadMiddleware");
const upload_service_1 = require("../services/upload.service");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/?', thumbnail_1.getThumbnailByQuery);
router.get('/all', thumbnail_1.getAllThumbnails);
// router.get('/:id', getOneThumbnail);
// router.get('/:nickname', getMyThumbnails);
router.post('/', upload_service_1.upload.single('thumbnail'), uploadMiddleware_1.uploadImage, // Here create
thumbnail_1.uploadThumbail);
