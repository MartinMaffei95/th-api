"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ThumbnailSchema = new mongoose_1.Schema({
    media: {
        type: String,
        required: true,
    },
    private: {
        type: Boolean,
        default: false,
    },
    uploaded_by: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const ThumbnailModel = (0, mongoose_1.model)('thumbnail', ThumbnailSchema);
exports.default = ThumbnailModel;
