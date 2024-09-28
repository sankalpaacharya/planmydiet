import supabase from '../supabaseClient.js';

const postuserLogController = async (req, res) => {
    const { user_id, meal_type, meal_desc, calories, proteins, fats, carbs, vitamins, minerals} = req.query;  
    console.log(user_id, meal_type, meal_desc, calories, proteins, fats, carbs, vitamins, minerals);

    const { data: insert_data, error: insert_error } = await supabase
        .from('logged_meals')
        .insert([{ 
            user_id, meal_type, meal_desc, calories, proteins, fats, carbs, vitamins, minerals 
        }]);

        console.log(insert_data, insert_error)
    res.status(201).json({ message: 'User Log registered successfully'});
}

const getuserLogController = async (req, res) => {
    // const { user_id, meal_type, meal_desc, calories, proteins, fats, carbs, vitamins, minerals} = req.query;  
    // console.log(user_id, meal_type, meal_desc, calories, proteins, fats, carbs, vitamins, minerals);

    // const { data: insert_data, error: insert_error } = await supabase
    //     .from('logged_meals')
    //     .insert([{ 
    //         user_id, meal_type, meal_desc, calories, proteins, fats, carbs, vitamins, minerals 
    //     }]);

    //     console.log(insert_data, insert_error)
    // res.status(201).json({ message: 'User Log registered successfully'});
}

export { postuserLogController, getuserLogController };