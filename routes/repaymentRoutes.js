import { Router } from 'express';
import { addRepayment } from '../controllers/repaymentController.js';

const router = Router();

router.post('/repayment', addRepayment);

export default router;
