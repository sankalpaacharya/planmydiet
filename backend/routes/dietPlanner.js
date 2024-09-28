import express from 'express';
import {createPlanController} from "../controllers/planController.js" 

const router = express.Router();

router.post('/create', createPlanController);

export default router;