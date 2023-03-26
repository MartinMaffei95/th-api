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
const app = (0, express_1.default)();
//CREATE EXPRESS APP
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: `*`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
//ROUTES WILL GO HERE
app.use(routes_1.router);
const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env;
(0, mongo_1.default)().then(() => {
    console.log('Connection with DB is ready');
});
app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}`);
});
