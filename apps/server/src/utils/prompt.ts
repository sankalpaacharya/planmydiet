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
  budget,
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
- Budget for meal: ${budget} per day
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
  "dietpreference":"${dietpreference}",
  "workoutRoutine": {
    "Monday": "Cardio - 30 minutes",//example
    ...and so on for 7 days
  },
  "mealPlans": [
    {
      "day": "Monday",
      "calories": 2200,//example in kcal
      "macronutrients": {
        "carbohydrates": 275,//example in grams
        "proteins": 165,
        "fats": 49
      },
      "meals": {
        "breakfast": [{
            "name": "Idli with Sambhar",
            "ingredients": [
              "rawa",
              "tomatoes",
              "dal",
              "spices",
              "onions"
            ],
            "calories": 350
          },...... //so on atleast 2 item per meal of Indian/Gujarati cusine with its estimated calories and average must meet above daily average calorie
          ],
        "lunch": [...],
        "dinner": [...],
        "snacks": [...]
      }
    },
    ...and so on for 7 days (Indian/Gujarati cuisine, at least 2 items per meal)
  ]
}
`;
};

//meal log prompt

export const mealLogPrompt = (text: string): string => {
  return `You are provided with the meals a user had in breakfast OR lunch OR snacks OR dinner.
Your task is to convert the meal descriptions into a structured JSON format as shown below. If the text includes details about the fat, carbs, protein, and calories, use those values directly. Otherwise, if it's possible to calculate or estimate based on common nutritional data, provide an estimate. 
If user loggs multiple item of food at once, separete the food items in array of similar below objects.
User may log 2 meal type example - lunch and breakfast together like "I ate 2 bananas a glass of milk for breakfast and a bowl of curd and 2 chappatis for lunch" you need to separate as 4 food items like -
-breakfast : 2 bananas (count) , 200gms milk (amount)
-lunch : 2 chapatis (count), 100gms curd (amount) //this was just an example you need to figure out yourself
As stated in above example, make sure to put estimated amount value in grams instead of "NA" for weighable items in bowl, glass or any utensils

Here's user text: ${text}

This is the JSON format, provide me only JSON String nothing except that don't quote into anything just json String.
Give data into this JSON format don't add anything extra yourself.


[
{
  "food": "Grilled Chicken Sandwich", //example, make a name of users meal dynamically
	"meal_type: "meal_type",//extract the meal type is "breakfast" | "lunch" | "snacks" | "dinner" from the users text, 
	// if not provided default is "lunch"

	"amount" : 100 | "NA" //if food is weighable provides OR is not a countable item , then estimate the grams else place "NA" here,
	"count" : 2 | "NA" //if food is countable like banans or apples, then put number of pieces here, else place "NA",
	//make sure one of the above two fields has any value other than "NA"

  "nutrition": {
    "fat": 7,
    "carbs": 30,
    "protein": 25,
    "calories": 320
  }
},
{
	//food 2 and so on if multiple food items logged at once
}
]
`;
};
