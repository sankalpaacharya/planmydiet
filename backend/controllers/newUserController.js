import supabase from '../supabaseClient.js';

const postnewUserController = async (req, res) => {
    const { height, weight, age, gender, diet_prefrence, duration, primary_health_goal } = req.query;  

    const { data: insert_data, error: insert_error } = await supabase
        .from('user_data')
        .insert([{ 
            height, weight, age, gender, diet_prefrence, duration, primary_health_goal 
        }]);

    res.status(201).json({ message: 'User registered successfully'});
}

const getnewUserController = async (req, res) => {
    const { height, weight, age, gender, diet_prefrence, duration, primary_health_goal } = req.query;  

    const { data: insert_data, error: insert_error } = await supabase
        .from('user_data')
        .insert([{ 
            height, weight, age, gender, diet_prefrence, duration, primary_health_goal 
        }]);

    res.status(201).json({ message: 'User registered successfully'});
}

export { postnewUserController, getnewUserController};