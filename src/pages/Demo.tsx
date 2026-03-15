import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';
import { useGlowTrigger } from '../hooks/useGlowTrigger';

const DemoForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        message: ''
    });

    const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone && formData.company && formData.industry && formData.message;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg('');
        setIsSubmitting(true);

        const fd = new FormData(e.currentTarget);
        const firstName = fd.get('firstName') as string;
        const lastName = fd.get('lastName') as string;
        const name = `${firstName} ${lastName}`.trim();
        const email = fd.get('email') as string;
        const phone = fd.get('phone') as string;
        const company = fd.get('company') as string;
        const industry = fd.get('industry') as string;
        const message = fd.get('message') as string;

        try {
            const response = await fetch('/api/demo-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    company,
                    industry,
                    message
                }),
            });

            if (!response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    throw new Error(data.error || 'Something went wrong');
                } else {
                    // This handles the "A server error occurred" HTML cases gracefully
                    throw new Error('Server error: Please try again later or contact us directly.');
                }
            }

            setFormSubmitted(true);
        } catch (error: any) {
            setErrorMsg(error.message || 'Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="registration-form" className="bg-[#efefef] py-24 md:py-32 px-6 lg:px-20 font-inter">
            <div className="max-w-[1411px] mx-auto bg-white rounded-[24px] flex flex-col lg:flex-row border border-black/10 shadow-lg relative z-10">

                {/* LEFT COLUMN - Form */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black/6">
                    <div className="space-y-12">
                        {/* Header Text */}
                        <div className="space-y-4">
                            <h2 className="font-cabinet font-bold text-[32px] md:text-[42px] text-[#0f172a] leading-[1.1] tracking-tight">
                                See how After5 would work <br className="hidden md:block" /> for your business
                            </h2>
                            <p className="font-inter text-[15px] text-[#64748b] leading-relaxed max-w-[500px]">
                                Submit the form and you'll see exactly how After5 engages leads via WhatsApp, SMS, and email.
                            </p>
                        </div>

                        <div className="h-px bg-[#f1f5f9] w-full" />

                        {formSubmitted ? (
                            /* SUCCESS STATE */
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-10 py-4"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-accent-green flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(54,215,142,0.4)]">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <h3 className="font-cabinet font-bold text-[28px] md:text-[32px] text-[#0f172a] leading-none">
                                            You're all set.
                                        </h3>
                                    </div>
                                    <div className="space-y-4 font-inter text-[16px] text-[#64748b] leading-relaxed max-w-[540px]">
                                        <p className="font-bold text-[#0f172a]">Thanks for submitting!</p>
                                        <p>
                                            You'll hear from Albert, our personal AI sales agent, very shortly.<br />
                                            If you don't receive a message within 60 seconds, please check your number and resubmit the form.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link to="/">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-8 py-4 bg-[#0f172a] text-white rounded-full font-cabinet font-bold text-[16px] transition-all hover:bg-[#1e293b] shadow-md"
                                        >
                                            Back to Homepage
                                        </motion.button>
                                    </Link>
                                    <motion.button
                                        onClick={() => {
                                            setFormSubmitted(false);
                                            setIsAgreed(false);
                                            setFormData({
                                                firstName: '',
                                                lastName: '',
                                                email: '',
                                                phone: '',
                                                company: '',
                                                industry: '',
                                                message: ''
                                            });
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-4 bg-white text-[#0f172a] border border-[#cbd5e1] rounded-full font-cabinet font-bold text-[16px] transition-all hover:border-[#0f172a] shadow-sm"
                                    >
                                        Submit a New Form
                                    </motion.button>
                                </div>
                            </motion.div>
                        ) : (
                            /* FORM STATE */
                            <div className="space-y-10">
                                <h3 className="font-cabinet font-bold text-[24px] text-[#0f172a]">
                                    Ready to check out a Demo?
                                </h3>
                                <p className="font-inter text-[14px] text-[#64748b]">
                                    Just drop your details down below to start right away
                                </p>

                                <form
                                    className="space-y-8"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                        {[
                                            { label: 'FIRST NAME', name: 'firstName', placeholder: '' },
                                            { label: 'LAST NAME', name: 'lastName', placeholder: '' },
                                            { label: 'EMAIL ADDRESS', name: 'email', type: 'email', placeholder: '' },
                                            { label: 'MOBILE NUMBER (WHATSAPP)', name: 'phone', type: 'tel', placeholder: '' },
                                            { label: 'COMPANY NAME', name: 'company', placeholder: '' },
                                            { label: 'INDUSTRY', name: 'industry', placeholder: '' },
                                        ].map((field, i) => (
                                            <div key={i} className="space-y-3">
                                                <label className="block text-[11px] font-cabinet font-bold text-[#475569] uppercase tracking-widest ml-1">{field.label}</label>
                                                <input
                                                    type={field.type || "text"}
                                                    name={field.name}
                                                    required
                                                    value={(formData as any)[field.name]}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                                                    placeholder={field.placeholder}
                                                    className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[16px] px-6 py-4 font-cabinet font-bold text-[17px] focus:outline-none focus:border-[#2EFFA1] focus:ring-4 focus:ring-[#2EFFA1]/10 transition-all placeholder:text-[#94a3b8]"
                                                />
                                            </div>
                                        ))}
                                    </div>


                                    <div className="space-y-3">
                                        <label className="block text-[11px] font-cabinet font-bold text-[#475569] uppercase tracking-widest ml-1">MESSAGE</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                            rows={4}
                                            placeholder="How can we help you?"
                                            className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[16px] px-6 py-4 font-cabinet font-bold text-[17px] focus:outline-none focus:border-[#2EFFA1] focus:ring-4 focus:ring-[#2EFFA1]/10 resize-none transition-all placeholder:text-[#94a3b8]"
                                        />
                                    </div>

                                    <div className="flex items-start gap-4 pt-4">
                                        <div className="relative flex items-center pt-1">
                                            <input
                                                type="checkbox"
                                                name="agree"
                                                required
                                                id="privacy-demo"
                                                checked={isAgreed}
                                                onChange={(e) => setIsAgreed(e.target.checked)}
                                                className="peer appearance-none w-5 h-5 border border-[#cbd5e1] rounded bg-white checked:bg-accent-green checked:border-accent-green transition-all cursor-pointer"
                                            />
                                            <svg className="absolute w-3.5 h-3.5 left-[3px] top-[4px] text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <label htmlFor="privacy-demo" className="text-[13px] text-[#64748b] leading-snug cursor-pointer select-none">
                                            By submitting, you agree to receive messages via WhatsApp, SMS, or email to run the demo, and you accept our <Link to="/privacy-policy" className="text-[#0f172a] hover:underline" onClick={(e) => e.stopPropagation()}>[Privacy Policy]</Link> and <Link to="/terms-and-conditions" className="text-[#0f172a] hover:underline" onClick={(e) => e.stopPropagation()}>[Terms & Conditions]</Link>.
                                        </label>
                                    </div>

                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.95 },
                                            visible: { opacity: 1, scale: 1 }
                                        }}
                                    >
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting || !isAgreed || !isFormValid}
                                            whileHover={(isAgreed && isFormValid) ? "hover" : "rest"}
                                            whileTap={{ scale: 0.98 }}
                                            initial="rest"
                                            animate="rest"
                                            variants={{
                                                rest: { backgroundColor: '#0f172a', scale: 1, opacity: (isAgreed && isFormValid) ? 1 : 0.5 },
                                                hover: { backgroundColor: '#2EFFA1', scale: 1.02 }
                                            }}
                                            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                                            className={`mt-12 relative px-14 py-4 md:py-5 rounded-full font-cabinet font-bold text-[17px] w-full md:w-auto overflow-hidden flex items-center justify-center gap-3 text-white shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] ${(!isAgreed || !isFormValid) ? 'cursor-not-allowed' : ''}`}
                                        >
                                            <span>{isSubmitting ? 'Submitting...' : (!isFormValid ? 'Please fill all details' : (!isAgreed ? 'Please accept terms to continue' : 'Click Here to Get Started!'))}</span>

                                            {isAgreed && !isSubmitting && (
                                                <motion.svg
                                                    variants={{
                                                        rest: { x: -4, opacity: 0 },
                                                        hover: { x: 0, opacity: 1 }
                                                    }}
                                                    transition={{ duration: 0.25 }}
                                                    className="w-5 h-5 ml-1"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </motion.svg>
                                            )}
                                        </motion.button>
                                    </motion.div>
                                    {errorMsg && <p className="text-red-500 mt-4 text-sm font-medium">{errorMsg}</p>}
                                </form>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN - Call CTA */}
                <div className="lg:w-[32%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#f8fafc]/50">
                    <div className="space-y-8 max-w-[300px] mx-auto lg:mx-0">
                        <h3 className="font-cabinet font-bold text-[28px] text-[#0f172a] leading-tight">
                            {formSubmitted
                                ? "Ready to jump on a call to get things moving?"
                                : "Prefer to talk about it with us on a call?"
                            }
                        </h3>

                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-4 bg-[#0f172a] text-white pl-8 pr-2 py-2 rounded-full font-cabinet font-bold text-[16px] transition-all hover:bg-[#1e293b] group"
                            >
                                Book a Strategy Call
                                <span className="w-10 h-10 rounded-full bg-accent-green flex items-center justify-center shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </motion.button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

const Demo = () => {
    const glowRef = useGlowTrigger('demo-page');
    usePageMeta({
        title: "After5 Digital - Try the Demo",
        description: "Experience After5 Digital's AI sales agents in action with our interactive demo."
    });
    return (
        <div ref={glowRef} className="bg-background">
            <PageHero title="Ready To Try The" accent="Demo?" />
            <DemoForm />
        </div>
    );
};

export default Demo;
