import express, { Request, Response } from 'express';
import {selectUserById} from "./db/queries/select"
const app = express();

app.get("/", async (req: Request, res: Response) => {
    const user = await selectUserById("clerk_id")
    console.log(user)
    res.send({ message: "Hello world" });
});

app.listen(3000, () => {
    console.log("Listening at port 3000");
});