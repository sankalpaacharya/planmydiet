import express from 'express'
import { createChallengeController } from 'controllers/challengeController'
const router = express.Router()

router.get("/get",createChallengeController)


export default router