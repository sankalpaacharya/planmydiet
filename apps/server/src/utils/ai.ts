import Groq from "groq-sdk";
import {generatePlanPrompt} from "./prompt"
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


type GroqChatCompletion = {
    promptMaker: (arq:any)=>string,
    promptData:any
}

// export async function main() {
//   const chatCompletion = await getGroqChatCompletion();
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }

export async function getGroqChatCompletion({promptMaker,promptData}:GroqChatCompletion) {
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

export async function getPlan(){
//   const chatCompletion = await getGroqChatCompletion(generatePlanPrompt,{name:string});

}
