import express from 'express'
import {logCreateController} from '../controllers/mealLoggerController.js'

const router = express.Router()

router.post("/create",logCreateController)


export default router;