import { createResponse } from '../utils/openai.js'; 
import { generatePrompt } from '../utils/prompt.js';
import supabase from '../supabaseClient.js'

export const createPlanController = async (req, res) => {
    const { weight, height, gender, weightloss, dietpreference, user_id, age, goal, activitylevel, calorieintake, duration } = req.body;
    const prompt = generatePrompt(weight, height, gender, weightloss, dietpreference, user_id, age, goal, activitylevel, calorieintake, duration)
    const plan = await createResponse(prompt)
    console.log(plan)

    const { data: insert_data, error: insert_error } = await supabase
        .from('diet_plan')
        .insert([{ 
            user_id, plan
        }]);

        console.log(insert_data, insert_error)
    res.status(201).json({ message: 'User Log registered successfully'});

    return res.send(plan)
};
