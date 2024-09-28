import { createResponse } from '../utils/openai.js'; 
import { generatePrompt } from '../utils/prompt.js';

export const createPlanController = async (req, res) => {
    const { weight, height, gender, weightloss, dietpreference, user_id, age, goal, activitylevel, calorieintake, duration } = req.body;
    const prompt = generatePrompt(weight, height, gender, weightloss, dietpreference, user_id, age, goal, activitylevel, calorieintake, duration)
    const plan = await createResponse(prompt)
    console.log(plan)
    return res.send(plan)
};
