const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('Server Connection Error:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, category, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${process.env.GMAIL_USER}>`, // Gmail requires the "from" to be the authenticated user
        to: process.env.RECEIVER_EMAIL,
        cc: 'vishwam.league@gmail.com, nidhi.league@gmail.com,  Vishwam.league@gmail.com',
        replyTo: email,
        subject: `New Inquiry: ${category} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}`,
        html: `
            <h3>New Inquiry from Website</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
