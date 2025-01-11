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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindRoom = exports.updateTextRoomValue = exports.createRoom = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createRoom = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.room.create({
        data: {
            password: payload.roomId,
        }
    });
});
exports.createRoom = createRoom;
const updateTextRoomValue = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(payload.id, 10); // Convert id to a number
    return prisma.room.update({
        where: {
            id: id, // Use the converted number
        },
        data: {
            content: payload.content,
        },
    });
});
exports.updateTextRoomValue = updateTextRoomValue;
const FindRoom = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.room.findUnique({
        where: {
            id: roomId
        }
    });
});
exports.FindRoom = FindRoom;
