import express , {Request,Response} from "express"
import { createRoom } from "../controllers/RoomController";
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
               console.log(roomId)
               res.status(200).json({
                              roomId
               })
})




