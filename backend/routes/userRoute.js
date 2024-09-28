import express from "express";
import { postnewUserController, getnewUserController} from '../controllers/newUserController.js'; 


const router = express.Router()

router.post('/newUser', postnewUserController);
router.get('/newUser', getnewUserController);


export default router;