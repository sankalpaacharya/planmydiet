import express from 'express'
import { createChallengeController } from '../controllers/challengeController'

const router = express.Router()

router.post("/create",createChallengeController)

export default router