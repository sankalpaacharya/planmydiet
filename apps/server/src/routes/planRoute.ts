import express from 'express'
import { getAllPlansController, createPlanController} from '../controllers/planController'

const router = express.Router()

router.get("/get",getAllPlansController)
router.post("/create",createPlanController)

export default router
