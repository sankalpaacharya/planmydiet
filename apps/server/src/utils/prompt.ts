export interface DietPlanPromptType {
  weight: number;
  height: number;
  gender: "Male" | "Female";
  dietpreference: string;
  age: number;
  goal: string;
  activitylevel: string;
  calorieintake: number;
  duration: number;
  foodAllergies: string;
  medicalConditions: string;
  existingSupplements: string;
  budget: string;
}

export const generatePlanPrompt = ({
  weight,
  height,
  gender,
  dietpreference,
  age,
  goal,
  activitylevel,
  calorieintake,
  duration,
  foodAllergies,
  medicalConditions,
  existingSupplements,
  budget
}: DietPlanPromptType): string => {
  return `
Design a personalized nutrition and diet plan for a user based on their provided details:

- Age: ${age} years
- Weight: ${weight} kg
- Height: ${height} cm
- Gender: ${gender}
- Primary goal: ${goal}
- Diet preferences: ${dietpreference}
- Food Allergies: ${foodAllergies}
- Medical Conditions: ${medicalConditions}
- Existing Supplements: ${existingSupplements}
- Budget for meal: ${budget}
- Activity level: ${activitylevel}
- Daily calorie intake limit: ${calorieintake}
- Duration: ${duration} days

You have to provide the diet according to the diet preferences if user is veg, do not provide the non-veg food items, and same for vegan—do not include any dairy products or non-vegetarian food items.
If user has any medical conditions or allergies towards a food item, avoid those items that enhance the medical condition or allergies in the diet.

Requirements for the diet plan:
- Provide daily calorie distribution broken down into macronutrients (carbohydrates, proteins, fats).
- Create a daily meal plan with breakfast, lunch, dinner, and snacks.
- Ensure the meal plan meets the recommended intake of essential vitamins and minerals.
- Include daily water intake recommendations.
- Consider any allergies or intolerances specified by the user.

Provide a 7-day plan.

Structure the JSON data in this format, provide me only the JSON string (without quotes or backticks):

{
  "dailyCalorieDistribution": {
    "carbohydrates": "50%",
    "proteins": "30%",
    "fats": "20%"
  },
  "dailyNutritionAverage": {
    "calories": "1850",
    "carbs": "260",
    "fats": "55",
    "protein": "110"
  },
  "dailyWaterIntake": "4 liters",
  "primaryGoal": "${goal}",
  "workoutRoutine": {
    "Monday": "Cardio - 30 minutes",
    ...and so on for 7 days
  },
  "mealPlans": [
    {
      "day": "Monday",
      "calories": 2200,
      "macronutrients": {
        "carbohydrates": 275,
        "proteins": 165,
        "fats": 49
      },
      "meals": {
        "breakfast": [...],
        "lunch": [...],
        "dinner": [...],
        "snacks": [...]
      }
    },
    ...and so on for 7 days (Indian cuisine, at least 2 items per meal)
  ]
}
`;
};
