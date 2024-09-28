import express from 'express';
import { postnewUserController, getnewUserController} from '../controllers/newUserController.js'; 
import {postuserLogController, getuserLogController} from '../controllers/userLogController.js'; 

const router = express.Router();

router.post('/newUser', postnewUserController);
router.get('/newUser', getnewUserController);
router.post('/userLog', postuserLogController);
router.get('/userLog', getuserLogController);

export default router;