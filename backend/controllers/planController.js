import { createResponse } from '../utils/openai.js'; 
import { generatePrompt } from '../utils/prompt.js';
import supabase from '../supabaseClient.js'

export const createPlanController = async (req, res) => {
    let { weight, height, gender, dietpreference, user_id, age, goal, activitylevel, duration } = req.body;
    const prompt = generatePrompt(weight, height, gender, dietpreference, user_id, age, goal, activitylevel, duration)
    const data =JSON.parse(await createResponse(prompt))
    user_id = "97540b8d-26cd-49a4-bb85-e1eafc2abd6c"

    const { data: insert_data, error: insert_error } = await supabase
        
        .from('plans')
        .insert({ 
            user_id,data
        });
        res.status(201).json({ message: 'User Log registered successfully'});
};