import express from 'express'
import {getPlanDateController} from '../controllers/planDateController.js'

const router = express.Router()

router.get("/view/:plan_id",getPlanDateController);
router.get("/:plan_id/:date",getPlanDateController);

export default router;