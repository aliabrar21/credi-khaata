import User from '../models/User.js';
import jwt from 'jwt-simple';
import { JWT_SECRET, JWT_EXPIRATION } from '../config/config.js';

export const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = new User({ email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const payload = { userId: user._id };
        const token = jwt.encode(payload, JWT_SECRET, 'HS256', { expiresIn: JWT_EXPIRATION });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in' });
    }
};
