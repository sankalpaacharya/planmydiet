import {z} from 'zod'

export const getPlanSchema = z.object({
    user_id: z.string(),
    weight: z.number(),
    height: z.number(),
    gender: z.enum(["M","F"]),
    weightloss: z.number(),
    dietpreference: z.enum(["veg","nonveg"]).default("veg"),
    age: z.number(),
    goal: z.string(),
    activitylevel: z.string(),
    calorieintake: z.number(),
    duration: z.number()
  } 
)
    
 
 