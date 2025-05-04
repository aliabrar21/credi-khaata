import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import loanRoutes from './routes/loanRoutes.js';
import repaymentRoutes from './routes/repaymentRoutes.js';
import summaryRoutes from './routes/summaryRoutes.js';  // <-- Import summary routes
import authMiddleware from './middleware/authMiddleware.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/customers', authMiddleware, customerRoutes);
app.use('/api/loans', authMiddleware, loanRoutes);
app.use('/api/repayments', authMiddleware, repaymentRoutes);
app.use('/api/summary', authMiddleware, summaryRoutes);  // <-- Use summary routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
