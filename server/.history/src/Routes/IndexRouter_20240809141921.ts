import express , {Request,Response} from "express"
import { createRoom } from "../controllers/RoomController";
export const router = express.Router()

router.post("/CreateRoom", async (req:Request,res:Response)=>{
               const payload = req.body;
               console.log(payload)
               try{
                              const newRoom = await createRoom(payload);
               }
               catch(err){
                              res.status(400).json({
                                             msg:"something went wrong"
                              })
               }
               res.send("done")

})




