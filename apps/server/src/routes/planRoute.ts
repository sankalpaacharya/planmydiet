import express from 'express'
import { getAllPlansController, createPlanController, getParticularPlanController} from '../controllers/planController'

const router = express.Router()

router.get("/get",getAllPlansController)
router.get("/getParticular",getParticularPlanController)
router.post("/create",createPlanController)

export default router
