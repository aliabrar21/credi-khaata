import Loan from '../models/Loan.js';
import Repayment from '../models/Repayment.js';
import moment from 'moment';

export const getLoanSummary = async (req, res) => {
    try {
        // Fetch loans for the authenticated user
        const loans = await Loan.find({ customerId: req.user.userId });

        let totalLoaned = 0;
        let totalCollected = 0;
        let overdueAmount = 0;
        let totalRepaymentTime = 0;
        let repaymentCount = 0;

        for (const loan of loans) {
            totalLoaned += loan.loanAmount;

            const repayments = await Repayment.find({ loanId: loan._id });
            repayments.forEach((repayment) => {
                totalCollected += repayment.amount;
                totalRepaymentTime += moment(repayment.repaymentDate).diff(moment(loan.issueDate), 'days');
                repaymentCount++;
            });

            if (loan.status === 'overdue') {
                overdueAmount += loan.loanAmount;
            }
        }

        const avgRepaymentTime = repaymentCount > 0 ? totalRepaymentTime / repaymentCount : 0;

        const summary = {
            totalLoaned,
            totalCollected,
            overdueAmount,
            avgRepaymentTime
        };

        res.json(summary);
    } catch (err) {
        res.status(500).json({ message: 'Error generating loan summary' });
    }
};
