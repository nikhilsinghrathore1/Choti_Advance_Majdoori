import express from "express"
import { router as IndexRouter} from "./Routes/IndexRouter";
const app = express()

app.use(express.json())


app.use("/",IndexRouter);

app.listen(3000);
