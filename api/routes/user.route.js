import express from 'express';
import { deleteUser, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();
//when we want to get information router.get
router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
export default router;
