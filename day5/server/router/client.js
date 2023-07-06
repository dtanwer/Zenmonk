import express from 'express';
import { clientLogin,clientSignUp } from '../controller/client.js';

const router = express.Router()
router.post('/signup',clientSignUp)
router.post('/login',clientLogin)

export default router