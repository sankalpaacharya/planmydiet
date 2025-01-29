import express from 'express'
import { newMealLogController } from '../controllers/mealLogController'

const router = express.Router()

router.post("/new",newMealLogController)

export default router