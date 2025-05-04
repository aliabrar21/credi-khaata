import Repayment from '../models/Repayment.js';
import Loan from '../models/Loan.js';

export const addRepayment = async (req, res) => {
    const { loanId, amount, repaymentDate } = req.body;

    try {
        const repayment = new Repayment({ loanId, amount, repaymentDate });
        await repayment.save();

        const loan = await Loan.findById(loanId);
        loan.loanAmount -= amount;
        loan.status = loan.loanAmount <= 0 ? 'paid' : loan.status;
        await loan.save();

        res.status(201).json({ message: 'Repayment recorded' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding repayment' });
    }
};
