import mongoose from 'mongoose';

const repaymentSchema = new mongoose.Schema({
    loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan', required: true },
    amount: { type: Number, required: true },
    repaymentDate: { type: Date, required: true },
});

export default mongoose.model('Repayment', repaymentSchema);
