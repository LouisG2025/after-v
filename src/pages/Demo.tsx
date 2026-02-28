import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';

const DemoForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

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
                                        <div className="w-8 h-8 rounded-full bg-[#2EFFA1] flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(54,215,142,0.4)]">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <h3 className="font-cabinet font-bold text-[28px] md:text-[32px] text-[#0f172a] leading-none">
                                            You're all set.
                                        </h3>
                                    </div>
                                    <p className="font-inter text-[16px] text-[#64748b] leading-relaxed max-w-[540px]">
                                        In a second you will receive a message from us, and the demo will begin. If you don't see it within a minute, check your number and try again.
                                    </p>
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
                                        onClick={() => setFormSubmitted(false)}
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
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setFormSubmitted(true);
                                    }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                        {[
                                            { label: 'FIRST NAME', placeholder: '' },
                                            { label: 'LAST NAME', placeholder: '' },
                                            { label: 'EMAIL ADDRESS', placeholder: '' },
                                            { label: 'MOBILE NUMBER (WHATSAPP)', placeholder: '' },
                                            { label: 'COMPANY NAME', placeholder: '' },
                                            { label: 'INDUSTRY', placeholder: '' },
                                        ].map((field, i) => (
                                            <div key={i} className="space-y-3">
                                                <label className="block text-[11px] font-cabinet font-bold text-[#475569] uppercase tracking-widest ml-1">{field.label}</label>
                                                <input
                                                    type="text"
                                                    placeholder={field.placeholder}
                                                    className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[16px] px-6 py-4 font-cabinet font-bold text-[17px] focus:outline-none focus:border-[#2EFFA1] focus:ring-4 focus:ring-[#2EFFA1]/10 transition-all placeholder:text-[#94a3b8]"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-3">
                                        <label className="block text-[11px] font-cabinet font-bold text-[#475569] uppercase tracking-widest ml-1">WHERE DO MOST OF YOUR ENQUIRIES COME FROM?</label>
                                        <div className="relative">
                                            <select className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[16px] px-6 py-4 font-cabinet font-bold text-[17px] focus:outline-none focus:border-[#2EFFA1] focus:ring-4 focus:ring-[#2EFFA1]/10 appearance-none cursor-pointer transition-all">
                                                <option value="" disabled selected hidden>Select an option</option>
                                                <option value="google">Google</option>
                                                <option value="meta">Meta (FB/IG)</option>
                                                <option value="referral">Referral</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                                                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="block text-[11px] font-cabinet font-bold text-[#475569] uppercase tracking-widest ml-1">MESSAGE</label>
                                        <textarea
                                            rows={4}
                                            placeholder="How can we help you?"
                                            className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[16px] px-6 py-4 font-cabinet font-bold text-[17px] focus:outline-none focus:border-[#2EFFA1] focus:ring-4 focus:ring-[#2EFFA1]/10 resize-none transition-all placeholder:text-[#94a3b8]"
                                        />
                                    </div>

                                    <div className="flex items-start gap-4 pt-4">
                                        <div className="relative flex items-center pt-1">
                                            <input type="checkbox" id="privacy-demo" className="peer appearance-none w-5 h-5 border border-[#cbd5e1] rounded bg-white checked:bg-[#2EFFA1] checked:border-[#2EFFA1] transition-all cursor-pointer" />
                                            <svg className="absolute w-3.5 h-3.5 left-[3px] top-[4px] text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <label htmlFor="privacy-demo" className="text-[13px] text-[#64748b] leading-snug">
                                            By submitting, you agree to receive messages via WhatsApp, SMS, or email to run the demo, and you accept our <Link to="/privacy-policy" className="text-[#0f172a] hover:underline">[Privacy Policy]</Link> and <Link to="/terms-and-conditions" className="text-[#0f172a] hover:underline">[Terms & Conditions]</Link>.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-12 px-12 py-5 bg-[#0f172a] text-white rounded-full font-cabinet font-bold text-[17px] shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] hover:bg-[#1e293b] hover:scale-[1.02] transition-all active:scale-[0.98]"
                                    >
                                        Click Here to Get Started!
                                    </button>
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
                                <span className="w-10 h-10 rounded-full bg-[#2EFFA1] flex items-center justify-center shrink-0">
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
    usePageMeta({
        title: "After5 Digital - Try the Demo",
        description: "Experience After5 Digital's AI sales agents in action with our interactive demo."
    });
    return (
        <div className="bg-background">
            <PageHero title="Ready To Try The" accent="Demo?" />
            <DemoForm />
        </div>
    );
};

export default Demo;
