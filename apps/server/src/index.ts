import express, { Request, Response } from 'express';

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "Hello world" });
});

app.listen(3000, () => {
    console.log("Listening at port 3000");
});