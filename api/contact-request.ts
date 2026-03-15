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
    if (!process.env.RESEND_API_KEY) return null;
    return new Resend(process.env.RESEND_API_KEY);
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

        const { name, email, company, phone, message, enquiryType, industry } = req.body;

        // Validate required fields
        if (!name || !email || !company || !phone || !message || !enquiryType || !industry) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 3. Insert into Supabase with extra safety
        const supabase = getSupabase();
        if (supabase) {
            try {
                const { error: dbError } = await supabase.from('leads').insert([
                    {
                        name,
                        email,
                        phone,
                        company,
                        industry,
                        message,
                        enquiry_type: enquiryType
                    }
                ]);
                if (dbError) console.error("Supabase Insert Error:", dbError);
            } catch (err: any) {
                console.error("Supabase Try/Catch Error:", err.message);
            }
        }

        // Emails temporarily disabled per user request
        /*
        const resendInstance = getResend();
        if (resendInstance) {
            // Logic for emails here when re-enabled
        }
        */

        return res.status(200).json({ success: true });

    } catch (error: any) {
        console.error("Contact API Error:", error);
        return res.status(500).json({ 
            error: 'Internal Server Error',
            details: error.message || 'Unknown error'
        });
    }
}
