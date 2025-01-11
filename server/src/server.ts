import express, { Application} from 'express';
import multer from 'multer';
import cloudinary from './cloudinaryConfig';
import { v2 as cloudinaryV2 } from 'cloudinary';
import { router as IndexRouter} from "./Routes/IndexRouter";
import cors from "cors"
const app:Application = express()

app.use(cors())

app.use(express.json())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  },
});
             
 const upload = multer({ storage });
 
 import fs from 'fs';
 if (!fs.existsSync('uploads')) {
   fs.mkdirSync('uploads');
 }
             
app.use("/",IndexRouter);

app.listen(3000);
