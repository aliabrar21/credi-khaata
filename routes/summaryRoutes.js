import { Router } from 'express';
import { getLoanSummary } from '../controllers/summaryController.js';

const router = Router();

router.get('/summary', getLoanSummary); // Endpoint to fetch loan summary for a shopkeeper

export default router;
