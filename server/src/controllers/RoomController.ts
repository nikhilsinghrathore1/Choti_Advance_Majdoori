import { Prisma ,PrismaClient ,Room } from "@prisma/client";

const prisma = new PrismaClient()

interface payloadData{
               id:string
               content:string
               roomId:string
}              


export const createRoom = async (payload:payloadData):Promise<Room>=>{
               return prisma.room.create({
                              data:{
                                   password:payload.roomId,      
                              }
               })
};

export const updateTextRoomValue = async (payload: payloadData): Promise<Room | null> => {
     const id = parseInt(payload.id, 10); // Convert id to a number
     
     return prisma.room.update({
       where: {
         id: id, // Use the converted number
       },
       data: {
         content: payload.content,
       },
     });
   };
export const FindRoom =async (roomId:number):Promise<Room | null> => {
               return prisma.room.findUnique({
                              where:{
                                             id:roomId
                              }
               })
}