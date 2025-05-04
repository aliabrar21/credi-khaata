import { Router } from 'express';
import { createLoan, getAllLoans } from '../controllers/loanController.js';

const router = Router();

router.post('/loan', createLoan);
router.get('/loans', getAllLoans);

export default router;
