import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    trustScore: { type: Number, default: 0 },
    creditLimit: { type: Number, required: true },
});

export default mongoose.model('Customer', customerSchema);
