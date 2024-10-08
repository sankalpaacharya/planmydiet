import { createResponse } from '../utils/openai.js'; 
import { generatePrompt } from '../utils/prompt.js';
import supabase from '../supabaseClient.js'

export const createPlanController = async (req, res) => {
    let { weight, height, gender, dietpreference, user_id, age, healthGoal, activitylevel, duration } = req.body;
    console.log(req.body)
    const prompt = generatePrompt(weight, height, gender, dietpreference, user_id, age, healthGoal, activitylevel, duration)
    const data =JSON.parse(await createResponse(prompt))
    user_id = "97540b8d-26cd-49a4-bb85-e1eafc2abd6c";
    console.log(req.body);
    const { data: insert_data, error: insert_error } = await supabase
        
        .from('plans')
        .insert({ 
            user_id,data,title:healthGoal
        });
        res.status(201).json({ message: 'User Log registered successfully'});
};

export const getPlanController = async (req, res) => {
    const user_id = req.params.user_id;
    // user_id = "97540b8d-26cd-49a4-bb85-e1eafc2abd6c"

    const { data: mealData, error: mealError } = await supabase
        .from("plans")
        .select("id,created_at,title")
        .eq("user_id", user_id);
    
        console.log(mealData);
        res.send(mealData)
};
