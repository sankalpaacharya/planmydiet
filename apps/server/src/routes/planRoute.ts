import express from 'express'
import { getPlanController } from '../controllers/planController'

const router = express.Router()

router.get("/create",getPlanController)

export default router
