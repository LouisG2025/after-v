import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { name, email, company, phone, message, enquiryType, industry } = req.body;

        // Validate required fields
        if (!name || !email || !company || !phone || !message || !enquiryType || !industry) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 1. Send Admin Notification Email
        const adminEmailData = await resend.emails.send({
            from: 'Contact Enquiry <onboarding@resend.dev>', // Change this to your verified domain
            to: process.env.ADMIN_EMAIL || 'admin@example.com',
            subject: `New ${enquiryType.toUpperCase()} Received - After5`,
            html: `
        <h2>New contact form submission</h2>
        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
        <hr/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f8fafc; padding: 15px; border-left: 4px solid #2EFFA1; border-radius: 4px;">
          ${message.replace(/\n/g, '<br/>')}
        </blockquote>
      `,
        });

        if (adminEmailData.error) {
            console.error("Resend Admin Email Error:", adminEmailData.error);
            return res.status(500).json({ error: 'Failed to send enquiry to admin' });
        }

        // 2. Send User Confirmation Email
        if (process.env.NODE_ENV === 'production' && process.env.VERIFIED_DOMAIN) {
            await resend.emails.send({
                from: `After5 Team <hello@${process.env.VERIFIED_DOMAIN}>`,
                to: email,
                subject: 'We Have Received Your Enquiry',
                html: `
          <p>Hi ${name.split(' ')[0] || name},</p>
          <p>Thank you for reaching out to After5 Digital regarding <strong>${enquiryType}</strong>.</p>
          <p>We have received your message and our team will get back to you within one business day.</p>
          <br/>
          <p>Best regards,</p>
          <p>The After5 Team</p>
        `,
            });
        }

        return res.status(200).json({ success: true, message: 'Enquiry submitted successfully' });

    } catch (error) {
        console.error("Unhandled error in contact-request API:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
