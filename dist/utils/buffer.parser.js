"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToDataURI = void 0;
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
const bufferToDataURI = (fileFormat, buffer) => parser.format(fileFormat, buffer);
exports.bufferToDataURI = bufferToDataURI;
