import express from 'express';
import planRouter from "./routes/planRoute"
import challengeRoute from "./routes/challengeRoute"
import Groq from "groq-sdk";
import mealLogRoute from "./routes/mealLogRoute"
import mailRoute from "./routes/mailRoute"
import { checkUserAuth } from './middleware';
import { config } from "dotenv";
import cors from 'cors'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(checkUserAuth)
app.use(cors())

app.use("/challenge",challengeRoute)
app.use("/plan",planRouter)
app.use("/meallog",mealLogRoute)
app.use("/mail",mailRoute)

config({ path: ".env" });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/",async (req,res):Promise<any>=>{
    const {prompt} = req.body

  const chatCompletion =await  groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content:prompt,

      },
    ],
    max_completion_tokens: 32768,
    model: "llama-3.3-70b-versatile",
  });
  const data = JSON.stringify(chatCompletion.choices[0]?.message?.content || "")
  res.send({response:JSON.parse(data)})
})


app.listen(3000, () => {
    console.log("Listening at port 3000");
});