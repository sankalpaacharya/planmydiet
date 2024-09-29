import express from 'express';
import {createPlanController,getPlanController} from "../controllers/planController.js" 

const router = express.Router();

router.post('/create', createPlanController);
router.get('/:user_id', getPlanController);

export default router;