import express from 'express';
import planRouter from "./routes/planRoute"
import challengeRoute from "./routes/challengeRoute"
import { checkUserAuth } from './middleware';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(checkUserAuth)


app.use("/challenge",challengeRoute)
app.use("/plan",planRouter)


app.get("/",(req,res)=>{
    res.send("all good now")
})


app.listen(3000, () => {
    console.log("Listening at port 3000");
});