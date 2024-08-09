import express , {Request,Response} from "express"
import { createRoom, FindRoom } from "../controllers/RoomController";
export const router = express.Router()

router.post("/CreateRoom", async (req:Request,res:Response)=>{
               const payload = req.body;
               console.log(payload)
               try{
                              const newRoom = await createRoom(payload);
                              if(newRoom){
                                             res.status(200).json({
                                                            msg:"new room created" , 
                                                            newRoom
                                             })
                              }else{
                                             res.status(400).json({
                                                            msg:"new room was not created"
                                             })
                              }

               }
               catch(err){
                              res.status(400).json({
                                             msg:"something went wrong"
                              })
               }


})

router.get("/room/:roomid",async (req:Request,res:Response)=>{
               const roomId = req.params
               // now i have to find the room with the roomId that is present in the params
               try{
                              const roomData = await FindRoom(roomId as number);
               }

               catch(err){
                              console.log(err)
                              res.status(400).json({
                                             msg:"something went wrong"
                              })
               }
               res.status(200).json({
                              roomId
               })
})




