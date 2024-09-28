import express from "express";
import bodyParser from 'body-parser';

import dietPlanner from './routes/dietPlanner.js';
import userRoute from "./routes/userRoute.js"
import logRoute from "./routes/logRoute.js"

const app = express()
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/plan',dietPlanner);
app.use('/user',userRoute);
app.use('/log',logRoute);



app.get("/",(req,res)=>{
    res.send("Diet Planner Backend")
})


app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`);
});