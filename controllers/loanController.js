import Loan from '../models/Loan.js';
import moment from 'moment';

export const createLoan = async (req, res) => {
    const { customerId, itemDescription, loanAmount, issueDate, dueDate, frequency, interest, graceDays } = req.body;

    try {
        const loan = new Loan({
            customerId,
            itemDescription,
            loanAmount,
            issueDate,
            dueDate,
            frequency,
            interest,
            graceDays,
        });

        await loan.save();
        res.status(201).json({ message: 'Loan created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error creating loan' });
    }
};

export const getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find({ customerId: req.user.userId });
        res.json(loans);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching loans' });
    }
};
