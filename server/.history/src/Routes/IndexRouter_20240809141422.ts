import express , {Request,Response} from "express"
export const router = express.Router()

router.post("/CreateRoom",(req:Request,res:Response)=>{
               const payload = req.body;
               console.log(payload)
               try{
                              
               }
               catch(err){
                              res.status(400).json({
                                             msg:"something went wrong"
                              })
               }
               res.send("done")

})




