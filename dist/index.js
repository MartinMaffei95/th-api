"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const mongo_1 = __importDefault(require("./config/mongo"));
const cors_1 = __importDefault(require("cors"));
//CREATE EXPRESS APP
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
//ROUTES WILL GO HERE
app.use(routes_1.router);
(0, mongo_1.default)();
app.listen(3000, () => console.log('Server started on port 3000'));
