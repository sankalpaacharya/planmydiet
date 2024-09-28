import { generatePrompt } from "../utils/prompt.js"
import { createResponse } from "../utils/openai.js"

export const logCreateController =async (req,res)=>{
    const prompt = generatePrompt()
    const data = await createResponse(prompt)
    return res.send("hello")
}