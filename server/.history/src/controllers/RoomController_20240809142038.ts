import { Prisma ,PrismaClient ,Room } from "@prisma/client";

const prisma = new PrismaClient()

interface payloadData{
               content:string
               password:string
}              


export const createRoom = async (payload:payloadData):Promise<Room>=>{
               return prisma.room.create({
                              data:{
                                   password:payload.password,
                                   content:payload.content          
                              }
               })
};
