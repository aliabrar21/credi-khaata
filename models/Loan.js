import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    itemDescription: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    issueDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    frequency: { type: String, enum: ['bi-weekly', 'monthly'], required: true },
    interest: { type: Number, default: 0 },
    graceDays: { type: Number, default: 0 },
    status: { type: String, enum: ['pending', 'paid', 'overdue'], default: 'pending' },
});

export default mongoose.model('Loan', loanSchema);
