import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Safe Supabase Init Inline
const getSupabase = () => {
    try {
        const url = process.env.SUPABASE_URL || '';
        const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';
        if (!url || !key) return null;
        return createClient(url, key);
    } catch (e) {
        console.error("Supabase Init Error:", e);
        return null;
    }
};

// Safe Resend Init Inline
const getResend = () => {
    try {
        if (!process.env.RESEND_API_KEY) return null;
        return new Resend(process.env.RESEND_API_KEY);
    } catch (e) {
        return null;
    }
};

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // 1. Force JSON header immediately
    res.setHeader('Content-Type', 'application/json');

    // 2. Master try-catch for stability
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method Not Allowed' });
        }

        const body = req.body || {};
        const { name, email, company, phone, message = '' } = body;

        // Validate required fields
        if (!name || !email || !company || !phone) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 3. Insert into Supabase
        const supabase = getSupabase();
        if (supabase) {
            try {
                await supabase.from('leads').insert([
                    {
                        name,
                        email,
                        phone,
                        company,
                        message,
                        enquiry_type: 'demo'
                    }
                ]);
            } catch (dbErr: any) {
                console.error("Supabase Insert Error:", dbErr.message);
            }
        }

        // 4. Webhook Notification (Albert Agent)
        try {
            const albertUrl = 'https://api.apexai.ae/form-webhook';
            const payload = {
                first_name: name.split(' ')[0] || name,
                name: name,
                phone: phone,
                company: company,
                message: message,
                source: 'after5.digital'
            };

            if (typeof fetch === 'function') {
                await fetch(albertUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': process.env.AFTER5_API_KEY || ''
                    },
                    body: JSON.stringify(payload)
                });
            }
        } catch (err: any) {
            console.error("Albert Webhook Error:", err.message);
        }

        // Response
        return res.status(200).json({ success: true });

    } catch (error: any) {
        console.error("CRITICAL API ERROR:", error);
        return res.status(500).json({ 
            error: 'Internal Server Error', 
            details: error.message || 'Unknown error' 
        });
    }
}
