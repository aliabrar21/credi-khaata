import { Router } from 'express';
import { addCustomer } from '../controllers/customerController.js';

const router = Router();

router.post('/customer', addCustomer);

export default router;
