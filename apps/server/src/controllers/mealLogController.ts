import { Request, Response } from "express"
import { getNewMealLog } from "../utils/ai"
import { ZodError } from "zod"
import { zodErrorParser } from "../utils/zodErrorParser"
import { promptText } from "../utils/ai"

export const newMealLogController = async (req: Request, res: Response): Promise<any> => {
	try {
		const planData = await getNewMealLog(promptText)
		res.send(JSON.parse(planData))
	} catch (error) {
		if (error instanceof ZodError) {
			return { errors: zodErrorParser(error) }
		}
	}
}