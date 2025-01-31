import { Request, Response } from "express"
import { getNewMealLog } from "../utils/ai"
import { ZodError } from "zod"
import { zodErrorParser } from "../utils/zodErrorParser"
import { insertMealLogSchema } from "../db/schema"
import { insertMealLog } from "../db/queries/insert"

export const newMealLogController = async (req: Request, res: Response): Promise<any> => {
	try {
		const userId = req.auth.userId
		const {challengeId,log,type} = req.body
		const nutrition = JSON.parse(await getNewMealLog(log))
		console.log({userId,challengeId,nutrition,type})
		const logData = insertMealLogSchema.parse({userId,challengeId,nutrition,type})
		console.log(logData)
		await insertMealLog(logData)
		res.send({data:["meal log added successfully"],error:null})

	} catch (error) {
		if (error instanceof ZodError) {
			return res.send({data:[],error:zodErrorParser(error)})
		}
		res.send({data:[],error:error})
	}
}