"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuery = void 0;
const createQuery = (query) => {
    let mongooseQuery = {};
    for (const [key, value] of Object.entries(query)) {
        switch (key) {
            case 'nickname':
                mongooseQuery = Object.assign(Object.assign({}, mongooseQuery), { uploaded_by: value });
                break;
            case 'id':
                mongooseQuery = Object.assign(Object.assign({}, mongooseQuery), { _id: value });
                break;
            default:
                // mongooseQuery = { ...mongooseQuery, [key]: value };
                break;
        }
    }
    return mongooseQuery;
};
exports.createQuery = createQuery;
