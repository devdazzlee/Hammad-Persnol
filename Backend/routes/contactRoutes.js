// routes/contactRoutes.js

import express from 'express';
import { sendContactEmail } from '../services/emailService.js';

const router = express.Router();

// POST endpoint for contact form submission
router.post('/contact', async (req, res) => {
    const { firstName, lastName, email, phone, service, genre, message } = req.body;
    try {
        await sendContactEmail({ firstName, lastName, email, message });
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

export default router;
