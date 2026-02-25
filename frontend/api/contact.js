import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Enable CORS for allowed domains (or '*' for all)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, category, message } = req.body;

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

    const mailOptions = {
        from: `"${name}" <${process.env.GMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        cc: 'vishwam.league@gmail.com, nidhi.league@gmail.com',
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
}
