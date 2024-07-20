import express from 'express';
import { test } from '../controllers/user.controller.js';
const router = express.Router();
//when we want to get information router.get
router.get('/test', test);
export default router;