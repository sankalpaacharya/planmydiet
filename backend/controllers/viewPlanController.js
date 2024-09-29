import supabase from '../supabaseClient.js'

export const getPlanOnlyController = async (req, res) => {
    const {plan_id }= req.params;
    // const duration = 30;
    // console.log(plan_id);
    const { data: planData, error: planError } = await supabase
    .from("plans")
    .select("*")
    .eq("id", plan_id);

    if(planData){
        res.status(200).send(planData);
    }
    else{
        res.status(500).send({
            ok: false,
            error: planError ? planError.message : "Unable to retrieve plan data",
        });
    }
};