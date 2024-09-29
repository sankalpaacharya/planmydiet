import supabase from '../supabaseClient.js'

export const getPlanDateController = async (req, res) => {
    const {plan_id,date }= req.params;
    const duration = 30;
    
    let result = {"created_at":date,"duration":duration}
    const { data: mealData, error: mealError } = await supabase
    .from("meal_log")
    .select("*")
    .eq("plan_id", plan_id)
    .eq("created_at",date);

    
    result["breakfast"]=mealData[0]["breakfast"]
    result["snacks"]=mealData[0]["snacks"]
    result["dinner"]=mealData[0]["dinner"]
    result["lunch"]=mealData[0]["lunch"]

    const { data: planData, error: planError } = await supabase
    .from("plans")
    .select("data")
    .eq("id", plan_id);
    
    const target_cal = (planData[0]["data"]["mealPlans"][0]["calories"]);
    const target_fats = (planData[0]["data"]["mealPlans"][0]["macronutrients"]['fats']);
    const target_proteins = (planData[0]["data"]["mealPlans"][0]["macronutrients"]['proteins']);
    const target_carbs = (planData[0]["data"]["mealPlans"][0]["macronutrients"]['carbohydrates']);

    const meals = ["breakfast","snacks","lunch","dinner"]
    let complete_cal=0;
    let complete_fats=0;
    let complete_proteins=0;
    let complete_carbs=0;

    meals.forEach(meal => {
        mealData[0][meal].forEach(element => {

            complete_cal +=((element["nutrition"]["calories"]) ? parseInt(element["nutrition"]["calories"]) : 0)
            complete_proteins += ((element["nutrition"]["protein"]) ? parseInt(element["nutrition"]["protein"]) :0)
            complete_carbs += ((element["nutrition"]["carbs"]) ? parseInt(element["nutrition"]["carbs"]) : 0)
            complete_fats += ((element["nutrition"]["fat"]) ? parseInt(element["nutrition"]["fat"]) : 0)
        })
    });

    result["completed_cal"]=complete_cal;
    result["completed_fats"]=complete_fats;
    result["completed_carbs"]=complete_carbs;
    result["completed_proteins"]=complete_proteins;

    result["remaining_cal"]=target_cal-complete_cal;
    result["remaining_carbs"]=target_carbs-complete_carbs;
    result["remaining_fats"]=target_fats-complete_fats;
    result["remaining_proteins"]=target_proteins-complete_proteins;

    res.send(result);
};