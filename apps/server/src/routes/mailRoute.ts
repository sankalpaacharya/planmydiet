import express from 'express'
import sendMailController from '../controllers/mailController'

const router = express.Router()

router.get("/send",sendMailController)

export default router