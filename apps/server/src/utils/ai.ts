import Groq from "groq-sdk";
import { generatePlanPrompt, DietPlanPromptType, mealLogPrompt } from "./prompt";
import { config } from "dotenv";

config({ path: ".env" });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export type PromptMaker<T> = (data: T) => string;

interface GroqChatCompletion<T> {
  promptMaker: PromptMaker<T>;
  promptData: T;
}

export async function getGroqChatCompletion<T>({
  promptMaker,
  promptData,
}: GroqChatCompletion<T>) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: promptMaker(promptData),
      },
    ],
    max_completion_tokens: 32768,
    model: "llama-3.3-70b-versatile",
  });
}

export const promptData: DietPlanPromptType = {
  weight: 70,
  height: 175,
  gender: "Male",
  dietpreference: "non-vegetarian",
  age: 30,
  goal: "muscle build",
  activitylevel: "easy",
  calorieintake: 2000,
  duration: 12,
  foodAllergies: "nuts",
  medicalConditions: "diabetes",
  existingSupplements: "whey protein",
  budget: "rich",
};

export async function getPlan(promptData:DietPlanPromptType) {
  const chatCompletion = await getGroqChatCompletion({
    promptMaker: generatePlanPrompt,
    promptData: promptData,
  });

  const planData = chatCompletion.choices[0]?.message?.content || "";
  if (planData === "") {
    throw new Error("Couldn't generate the data");
  }
  return planData;
}


//meal log 

export const promptText: string = 
  "I ate a bowl of nuts, a glass of wine for snacks and a 4 rotis and 1 bowl of panner palak for lunch"
;

export async function getNewMealLog(promptText:string) {
  const chatCompletion = await getGroqChatCompletion({
    promptMaker: mealLogPrompt,
    promptData: promptText,
  });

  const planData = chatCompletion.choices[0]?.message?.content || "";
  if (planData === "") {
    throw new Error("Couldn't generate the data");
  }
  return planData;
}