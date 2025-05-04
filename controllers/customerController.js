import Customer from '../models/Customer.js';

export const addCustomer = async (req, res) => {
    const { name, phone, address, trustScore, creditLimit } = req.body;

    try {
        const customer = new Customer({ name, phone, address, trustScore, creditLimit });
        await customer.save();
        res.status(201).json({ message: 'Customer added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding customer' });
    }
};
