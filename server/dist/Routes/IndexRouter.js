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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const RoomController_1 = require("../controllers/RoomController");
exports.router = express_1.default.Router();
exports.router.post("/CreateRoom", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    console.log(payload);
    try {
        const newRoom = yield (0, RoomController_1.createRoom)(payload);
        if (newRoom) {
            res.status(200).json({
                msg: "new room created",
                newRoom
            });
        }
        else {
            res.status(400).json({
                msg: "new room was not created"
            });
        }
    }
    catch (err) {
        res.status(400).json({
            msg: "something went wrong"
        });
    }
}));
// this is the room for sharing the textual links
exports.router.get("/room/:roomid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = req.params.roomid;
    console.log(roomId);
    const id = parseInt(roomId);
    // now i have to find the room with the roomId that is present in the params
    try {
        const roomData = yield (0, RoomController_1.FindRoom)(id);
        if (roomData) {
            res.status(200).json({
                roomData
            });
        }
        else {
            res.status(200).json({
                roomData,
                msg: "there is no such room"
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "something went wrong"
        });
    }
}));
exports.router.post("/create_room_files", (req, res) => {
    res.status(200).json({
        msg: "files room created "
    });
});
