import express, { Request, Response } from 'express';
import { getPlan } from './utils/ai';
import planRouter from "./routes/planRoute"

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/plan",planRouter)


app.listen(3000, () => {
    console.log("Listening at port 3000");
});