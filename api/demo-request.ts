import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Safe Supabase Init
const getSupabase = () => {
    const url = process.env.SUPABASE_URL || '';
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';
    return url ? createClient(url, key) : null;
};

// Initialize Resend safely
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

    // 2. Wrap EVERYTHING in a master try-catch
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method Not Allowed' });
        }

        const body = req.body || {};
        const { name, email, company, phone, message, industry } = body;

        // Validate required fields
        if (!name || !email || !company || !phone || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 3. Insert into Supabase with extra safety
        if (supabase) {
            try {
                await (supabase as any).from('leads').insert([
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
            } catch (dbErr: any) {
                console.error("Supabase Error:", dbErr.message);
                // We DON'T return 500 here, we want the user to see success even if DB is slow
            }
        }

        // 4. Webhook Notification (Albert Agent)
        try {
            const albertUrl = 'https://after5-agent-production.up.railway.app/form-webhook';
            const payload = {
                first_name: name.split(' ')[0] || name,
                name: name,
                phone: phone,
                company: company,
                industry: industry,
                message: message,
                source: 'website_demo_form'
            };

            // Use global fetch
            if (typeof fetch === 'function') {
                fetch(albertUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }).catch((e: any) => console.error("Albert Webhook Fetch Error:", e));
            }
        } catch (err: any) {
            console.error("Albert Webhook Init Error:", err.message);
        }

        return res.status(200).json({ success: true });

    } catch (error: any) {
        console.error("CRITICAL API ERROR:", error);
        return res.status(500).json({ 
            error: 'Internal Server Error', 
            details: error.message || 'Unknown error' 
        });
    }
}
