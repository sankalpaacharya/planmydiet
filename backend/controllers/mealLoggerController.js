import { generateMealLogPrompt } from "../utils/prompt.js";
import { createResponse } from "../utils/openai.js";
import supabase from '../supabaseClient.js';

export const logCreateController = async (req, res) => {
  const { plan_id, user_id, meal_type, text } = req.body;

  const prompt = generateMealLogPrompt(text, meal_type);
  const response = await createResponse(prompt);
  console.log(response);

  let parsedResponse;
  try {
    parsedResponse = JSON.parse(response);
  } catch (error) {
    return res.status(400).json({ error: "Failed to parse AI response" });
  }

  const data = {
    user_id,
    plan_id,
    [meal_type]: [parsedResponse], 
  };

  const { data: mealData, error: mealError } = await supabase
    .from("meal_log")
    .select(meal_type)
    .eq("plan_id", plan_id)
    .eq("user_id", user_id);

  if (mealError) {
    return res.status(400).json({ error: mealError.message });
  }

  if (mealData.length === 0) {
    const { data: insertData, error: insertError } = await supabase
      .from("meal_log")
      .insert(data);

    if (insertError) {
      return res.status(400).json({ error: insertError.message });
    }
    return res.status(201).json(JSON.parse(response));
  }

  const existingMealLog = mealData[0][meal_type] || [];
  const updatedMealLog = [...existingMealLog, parsedResponse];

  const { data: updateData, error: updateError } = await supabase
    .from("meal_log")
    .update({ [meal_type]: updatedMealLog })
    .eq("plan_id", plan_id)
    .eq("user_id", user_id);

  if (updateError) {
    return res.status(400).json({ error: updateError.message });
  }

  res.status(200).json(JSON.parse(response));
};
