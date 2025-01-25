import express from 'express'
import { getPlanController, createPlanController} from '../controllers/planController'

const router = express.Router()

router.get("/get",getPlanController)
router.get("/create",createPlanController)

export default router
