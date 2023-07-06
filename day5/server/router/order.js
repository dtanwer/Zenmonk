import express from 'express';
import { addOrder,getOrders } from '../controller/order.js';

const router = express.Router()
router.get('/:id',getOrders)
router.post('/add',addOrder)

export default router