import Groq from "groq-sdk";
import {generatePlanPrompt} from "./prompt"
import { DietPlanType } from "./prompt";
import { config } from "dotenv";

config({ path:'.env' });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export type PromptMaker<T> = (data:T) => string;

interface GroqChatCompletion<T>{
    promptMaker: PromptMaker<T>;
    promptData:T
}

// export async function main() {
//   const chatCompletion = await getGroqChatCompletion();
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }

export async function getGroqChatCompletion<T>({promptMaker,promptData}:GroqChatCompletion<T>) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: promptMaker(promptData),
      },
    ],
    max_completion_tokens:32768,
    model: "llama-3.3-70b-versatile",
  });
}

const promptData: DietPlanType = {

    weight:70,
    height:175,
    gender: "male",
    weightloss: 5,
    dietpreference: "vegetarian",
    age:30,
    goal: "weight loss",
    activitylevel: "moderate",
    calorieintake:2000,
    duration:12
  };


export async function getPlan(){
  const chatCompletion = await getGroqChatCompletion({promptMaker:generatePlanPrompt,promptData:promptData});
  const planData = chatCompletion.choices[0]?.message?.content || ""
  if(planData==""){
    throw Error("couldn't generate the data")
  }
  return planData;
}
