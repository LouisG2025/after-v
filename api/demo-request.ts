import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { supabase } from './_lib/supabase';

// Initialize Resend lazily only when needed
let resend: Resend;

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { name, email, company, phone, message, industry } = req.body;

        // Validate required fields
        if (!name || !email || !company || !phone || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 0. Insert into Supabase
        try {
            const { error: dbError } = await supabase.from('leads').insert([
                {
                    name,
                    email,
                    phone,
                    company,
                    industry,
                    message,
                    enquiry_type: 'demo'
                }
            ]);

            if (dbError) throw dbError;

            // 0.1 Notify Albert AI Agent for WhatsApp outreach
            try {
                // Use globalThis.fetch to be safe in different Node environments
                const globalFetch = (globalThis as any).fetch;
                if (typeof globalFetch === 'function') {
                    globalFetch('https://after5-agent-production.up.railway.app/form-webhook', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            first_name: name.split(' ')[0] || name,
                            name: name,
                            phone: phone,
                            company: company,
                            industry: industry,
                            message: message,
                            source: 'website_demo_form'
                        })
                    }).catch((e: any) => console.error("Albert Webhook Error (Silent):", e));
                }
            } catch (albertError) {
                console.error("Albert Notification Failed:", albertError);
            }
        } catch (dbError) {
            console.error("Supabase Database Error:", dbError);
            // We continue even if DB fails to not block the user UI
        }

        /* Email sending temporarily disabled 
        const adminEmailData = await resend.emails.send({
            from: process.env.VERIFIED_DOMAIN ? `Demo Request <notifications@${process.env.VERIFIED_DOMAIN}>` : 'Demo Request <onboarding@resend.dev>',
            to: process.env.ADMIN_EMAIL || 'admin@example.com',
            subject: 'New Demo Request Received - After5 Digital',
            html: `
        <h2 style="color: #0f172a;">New demo request submitted</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Industry:</strong> ${industry}</p>
            <br/>
            <p><strong>Message / Use Case:</strong></p>
            <blockquote style="background: #ffffff; padding: 15px; border-left: 4px solid #2EFFA1; border-radius: 4px; border: 1px solid #e2e8f0;">
              ${message.replace(/\n/g, '<br/>')}
            </blockquote>
        </div>
      `,
        });

        if (adminEmailData.error) {
            console.error("Resend Admin Email Error:", adminEmailData.error);
            return res.status(500).json({ error: 'Failed to send admin notification email' });
        }
        */

        // 2. Send User Confirmation Email (Temporarily disabled)
        /*
        if (process.env.NODE_ENV === 'production' && process.env.VERIFIED_DOMAIN) {
            const userEmailData = await resend.emails.send({
                from: `After5 Team <hello@${process.env.VERIFIED_DOMAIN}>`,
                to: email,
                subject: 'Your After5 Demo Request',
                html: `
          <p>Hi ${name.split(' ')[0] || name},</p>
          <p>Thank you for requesting a demo with After5 Digital.</p>
          <p>We've received your request and our team will contact you shortly to schedule your personalized demo session.</p>
          <br/>
          <p>Best regards,</p>
          <p>The After5 Team</p>
        `,
            });

            if (userEmailData.error) {
                console.warn("Resend User Email Error:", userEmailData.error);
            }
        }
        */

        return res.status(200).json({ success: true, message: 'Demo request submitted successfully' });

    } catch (error) {
        console.error("Unhandled error in demo-request API:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
