import express from 'express'
import { getPlanController } from '../controllers/planController'

const router = express.Router()

router.get("/get",getPlanController)


export default router
