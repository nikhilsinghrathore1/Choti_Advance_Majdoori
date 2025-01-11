"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = __importDefault(require("cloudinary"));
cloudinary_1.default.v2.config({
    cloud_name: 'your-cloud-name',
    api_key: 'your-api-key',
    api_secret: 'your-api-secret',
});
exports.default = cloudinary_1.default;
