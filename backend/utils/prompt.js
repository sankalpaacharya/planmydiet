export  const generatePrompt = (weight, height, gender, weightloss, dietpreference, user_id, age, goal, activitylevel, calorieintake, duration)=>{return `
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

Provide a 7 days plan

structure the json data in this format ,  provide me only JSON string, don't quote into any \` \` just json string, 

{

"dailyCalorieDistribution": {
"carbohydrates": "50%",
"proteins": "30%",
"fats": "20%"
},
"dailyWaterIntake": "3 liters",
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
    "breakfast": {
      "name": "Vegetarian Omelette",
      "ingredients": ["egg whites", "tomatoes", "spinach", "bell peppers", "onions"],
      "calories": 350
    },
    "lunch": {
      "name": "Quinoa Salad",
      "ingredients": ["quinoa", "chickpeas", "cucumbers", "tomatoes", "feta cheese", "olive oil"],
      "calories": 600
    },
    "dinner": {
      "name": "Vegetable Stir-fry with Tofu",
      "ingredients": ["tofu", "broccoli", "carrots", "bell peppers", "soy sauce"],
      "calories": 650
    },
    "snacks": [{
      "name": "Greek Yogurt with Berries",
      "ingredients": ["greek yogurt", "mixed berries"],
      "calories": 250
    },
    {
      "name": "Nuts Mix",
      "ingredients": ["almonds", "walnuts"],
      "calories": 350
    }]
  }
},
{
  "day": "Tuesday",
  "calories": 2200,
  "macronutrients": {
    "carbohydrates": 275,
    "proteins": 165,
    "fats": 49
  },
  "meals": {
    "breakfast": {
      "name": "Oatmeal with Banana and Almond Butter",
      "ingredients": ["oats", "banana", "almond butter"],
      "calories": 400
    },
    "lunch": {
      "name": "Lentil Soup with Whole Grain Bread",
      "ingredients": ["lentils", "carrots", "celery", "onions", "whole grain bread"],
      "calories": 550
    },
    "dinner": {
      "name": "Grilled Vegetables with Couscous",
      "ingredients": ["eggplant", "zucchini", "red bell pepper", "couscous"],
      "calories": 600
    },
    "snacks": [{
      "name": "Apple with Peanut Butter",
      "ingredients": ["apple", "peanut butter"],
      "calories": 250
    },
    {
      "name": "Hummus with Carrot Sticks",
      "ingredients": ["hummus", "carrots"],
      "calories": 400
    }]
  }
},
{
  "day": "Wednesday",
  "calories": 2200,
  "macronutrients": {
    "carbohydrates": 275,
    "proteins": 165,
    "fats": 49
  },
  "meals": {
    "breakfast": {
      "name": "Smoothie Bowl",
      "ingredients": ["spinach", "banana", "almond milk", "chia seeds", "berries"],
      "calories": 350
    },
    "lunch": {
      "name": "Chickpea and Avocado Sandwich",
      "ingredients": ["chickpeas", "avocado", "whole grain bread"],
      "calories": 600
    },
    "dinner": {
      "name": "Vegetable Pasta",
      "ingredients": ["whole wheat pasta", "tomatoes", "zucchini", "mushrooms", "parmesan"],
      "calories": 700
    },
    "snacks": [{
      "name": "Cottage Cheese with Pineapple",
      "ingredients": ["cottage cheese", "pineapple"],
      "calories": 250
    },
    {
      "name": "Protein Bar",
      "ingredients": ["chocolate protein bar"],
      "calories": 300
    }]
  }
},
{
  "day": "Thursday",
  "calories": 2200,
  "macronutrients": {
    "carbohydrates": 275,
    "proteins": 165,
    "fats": 49
  },
  "meals": {
    "breakfast": {
      "name": "Greek Yogurt with Granola and Honey",
      "ingredients": ["greek yogurt", "granola", "honey"],
      "calories": 400
    },
    "lunch": {
      "name": "Veggie Burrito",
      "ingredients": ["black beans", "brown rice", "corn", "salsa", "whole wheat tortilla"],
      "calories": 600
    },
    "dinner": {
      "name": "Stuffed Bell Peppers",
      "ingredients": ["bell peppers", "quinoa", "black beans", "cheese"],
      "calories": 650
    },
    "snacks": [{
      "name": "Mixed Nuts",
      "ingredients": ["almonds", "cashews", "pecans"],
      "calories": 300
    },
    {
      "name": "Carrots and Hummus",
      "ingredients": ["carrots", "hummus"],
      "calories": 250
    }]
  }
},
{
  "day": "Friday",
  "calories": 2200,
  "macronutrients": {
    "carbohydrates": 275,
    "proteins": 165,
    "fats": 49
  },
  "meals": {
    "breakfast": {
      "name": "Almond Butter Banana Toast",
      "ingredients": ["whole grain bread", "almond butter", "banana"],
      "calories": 400
    },
    "lunch": {
      "name": "Spinach and Feta Wrap",
      "ingredients": ["whole wheat wrap", "spinach", "feta cheese", "tomatoes"],
      "calories": 550
    },
    "dinner": {
      "name": "Roasted Vegetables with Quinoa",
      "ingredients": ["brussels sprouts", "sweet potatoes", "quinoa"],
      "calories": 700
    },
    "snacks": [{
      "name": "Fruit Salad",
      "ingredients": ["mixed fruits"],
      "calories": 200
    },
    {
      "name": "Peanut Butter Smoothie",
      "ingredients": ["peanut butter", "banana", "almond milk"],
      "calories": 350
    }]
  }
},
{
  "day": "Saturday",
  "calories": 2200,
  "macronutrients": {
    "carbohydrates": 275,
    "proteins": 165,
    "fats": 49
  },
  "meals": {
    "breakfast": {
      "name": "Chia Pudding",
      "ingredients": ["chia seeds", "almond milk", "vanilla extract", "mixed berries"],
      "calories": 350
    },
    "lunch": {
      "name": "Veggie Burger",
      "ingredients": ["veggie burger patty", "whole grain bun", "lettuce", "tomato"],
      "calories": 600
    },
    "dinner": {
      "name": "Eggplant Parmesan",
      "ingredients": ["eggplant", "tomato sauce", "parmesan cheese", "whole wheat spaghetti"],
      "calories": 650
    },
    "snacks": [{
      "name": "Trail Mix",
      "ingredients": ["nuts", "dried fruit"],
      "calories": 400
    },
    {
      "name": "Celery and Peanut Butter",
      "ingredients": ["celery sticks", "peanut butter"],
      "calories": 200
    }]
  }
},
{
  "day": "Sunday",
  "calories": 2200,
  "macronutrients": {
    "carbohydrates": 275,
    "proteins": 165,
    "fats": 49
  },
  "meals": {
    "breakfast": {
      "name": "Avocado Toast",
      "ingredients": ["whole grain bread", "avocado", "red pepper flakes"],
      "calories": 350
    },
    "lunch": {
      "name": "Tomato Basil Soup with Grilled Cheese",
      "ingredients": ["tomatoes", "basil", "whole grain bread", "cheese"],
      "calories": 650
    },
    "dinner": {
      "name": "Sweet Potato and Black Bean Chili",
      "ingredients": ["sweet potatoes", "black beans", "chili powder"],
      "calories": 600
    },
    "snacks": [{
      "name": "Veggie Sticks and Hummus",
      "ingredients": ["carrot", "celery", "cucumber", "hummus"],
      "calories": 300
    },
    {
      "name": "Yogurt and Granola",
      "ingredients": ["greek yogurt", "granola"],
      "calories": 300
    }]
  }
}
],
"workoutRoutine": {
"goal": "Fat Loss",
"schedule": {
  "Monday": "30 min cardio + 30 min strength training",
  "Tuesday": "45 min HIIT",
  "Wednesday": "30 min cardio + 30 min strength training",
  "Thursday": "45 min HIIT",
  "Friday": "30 min cardio + 30 min strength training",
  "Saturday": "45 min HIIT",
  "Sunday": "Rest or light yoga"
}
},
"progressTrackingAndAdjustments": {
"method": "Weekly weigh-ins and body measurements",
"adjustments": "Adjust portion sizes and meal components based on progress"
}
}

`;}
// LA-7c8b77366d884fb6959073c259fd6dc0554393c741034353bcf4421cf4bc1f95



export const generateMealLogPrompt = (text,meal_type)=>{

return `You are provided with the meals a user had during breakfast, lunch, snacks, and dinner. Your task is to convert the meal descriptions into a structured JSON format as shown below. If the text includes details about the fat, carbs, protein, and calories, use those values directly. Otherwise, if it's possible to calculate or estimate based on common nutritional data, provide an estimate. If the nutritional information cannot be calculated or estimated, leave the values as an empty string.

meal_type: ${meal_type}

Here's user text: ${text}



This is the JSON format, provide me only JSON String nothing except that don't quote into anything just json String.

Give data into this JSON format don't add anything extra yourself.
{
  "name": "Grilled Chicken Sandwich",
  "description": "A sandwich made with grilled chicken breast, lettuce, tomato, and whole wheat bread.",
  "nutrition": {
    "fat": 7,
    "carbs": 30,
    "protein": 25,
    "calories": 320
  }
}


`



}