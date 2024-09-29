import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API);

export async function createResponse(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}



// -> /goal/
// {user_id:"",date:""} 

// 2024-9-28


/* 

plans 
(user_id,data)

daily goal
{complete,fat,carbs,protein,date,user_id}


meals log
{breakfast,lunch,snacks,dinner,date,user_id}


i had 2 egg, 2 bread, milk ->breakfast protein,fat 
[
{
  name 
  description
  fat
  carbs
  protein
  kal
}
  
]


*/