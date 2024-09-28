import { openai } from './openai.js'; 

export const createPlanController = async (req, res) => {
    const { weight, height, gender, weightloss, dietpreference, user_id, age, goal, activitylevel, calorieintake, duration } = req.body;

    const prompt = `
    Design a personalized nutrition and diet plan for a user based on their provided details:
    
    - Weight: ${weight} kg
    - Height: ${height} cm
    - Gender: ${gender}
    - Current weight loss goal: ${weightloss} kg per week
    - Diet preferences: ${dietpreference}
    - Age: ${age} years
    - Primary goal: ${goal}
    - Activity level: ${activitylevel}
    - Daily calorie intake limit: ${calorieintake ? calorieintake + ' calories' : 'not specified'}
    - Duration: ${duration} days

    Requirements for the diet plan:
    - Provide daily calorie distribution broken down into macronutrients (carbohydrates, proteins, fats).
    - Create a daily meal plan with breakfast, lunch, dinner, and snacks.
    - Ensure the meal plan meets the recommended intake of essential vitamins and minerals.
    - Include daily water intake recommendations.
    - Optionally, incorporate a suggested workout routine if the goal is muscle building or fat loss.
    - Allow alternatives for each meal based on user preferences.
    - Suggest how to track progress and make weekly adjustments.
    - Consider any allergies or intolerances specified by the user.

    Please provide a 7-day plan in JSON format.
    `;

    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-4-turbo',
            messages: [{ role: 'user', content: prompt }],
        });

        const plan = response.data.choices[0].message.content;

        console.log(plan);

        res.status(200).json({ plan });
    } catch (error) {
        console.error("Error generating plan:", error);
        res.status(500).json({ error: 'Failed to generate nutrition plan' });
    }
};
