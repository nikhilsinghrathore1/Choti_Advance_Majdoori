"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IndexRouter_1 = require("./Routes/IndexRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", IndexRouter_1.router);
app.listen(3000);
