import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';
import { useGlowTrigger } from '../hooks/useGlowTrigger';

const Contact = () => {
    const glowRef = useGlowTrigger('contact-page');
    usePageMeta({
        title: "After5 Digital - Contact Us",
        description: "Get in touch with After5 Digital to learn more about our AI sales agents."
    });

    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<'call' | 'message'>(() => {
        const tab = searchParams.get('tab');
        return tab === 'message' ? 'message' : 'call';
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [enquiryType, setEnquiryType] = useState('');
    const [isCalendlyLoading, setIsCalendlyLoading] = useState(true);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    // 5 Figma variants — one per enquiry type
    const successVariants: Record<string, { heading: string; body: string }> = {
        'sales enquiry': {
            heading: "You're all set.",
            body: "Our sales team will be in touch shortly. We'll send you everything you need to get started with After5."
        },
        'demo request': {
            heading: "Demo booked!",
            body: "In a second you'll receive a confirmation. The demo will begin shortly — if you don't see it, check your spam folder and try again."
        },
        'technical support': {
            heading: "Support ticket received.",
            body: "Our technical team has received your request and will respond as soon as possible. Check your inbox for a confirmation."
        },
        'other': {
            heading: "Message received!",
            body: "Thanks for reaching out. We'll review your message and get back to you within one business day."
        },
        '': {
            heading: "You're all set.",
            body: "In a second you will receive a message from us, and the demo will begin. If you don't see it within a minute, check your inbox and try again. This prevents drop-off and confusion."
        }
    };

    const successContent = successVariants[enquiryType] ?? successVariants[''];

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'message') {
            setActiveTab('message');
        } else if (tab === 'call') {
            setActiveTab('call');
        }
    }, [searchParams]);


    useEffect(() => {
        // Load Calendly script dynamically if not already present
        if (document.getElementById('calendly-script')) {
            setScriptLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.id = 'calendly-script';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        if (!scriptLoaded || activeTab !== 'call') return;

        const timer = setTimeout(() => setIsCalendlyLoading(false), 1500);

        if ((window as any).Calendly) {
            (window as any).Calendly.initInlineWidget({
                url: 'https://calendly.com/after5/ai-sales-agent-discovery-call?primary_color=2effa1&hide_landing_page_details=1&hide_gdpr_banner=1',
                parentElement: document.querySelector('.calendly-inline-widget'),
                prefill: {},
                utm: {}
            });
        }

        return () => clearTimeout(timer);
    }, [scriptLoaded, activeTab]);

    return (
        <div ref={glowRef} className="bg-background min-h-screen font-inter flex flex-col pb-24">
            <PageHero title="Contact" accent="Us" />
            <div className="max-w-[1411px] mx-auto px-6 w-full flex-1 flex flex-col gap-12 mt-12">


                {/* Booking Section — 2 columns */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="bg-white rounded-[20px] overflow-hidden flex flex-col lg:flex-row border border-black/5 shadow-sm"
                >

                    {/* LEFT — CTA content */}
                    <div className="lg:w-[42%] shrink-0 border-b lg:border-b-0 lg:border-r border-black/[0.06] relative">
                        <div className="p-12 lg:p-16 flex flex-col justify-between lg:sticky lg:top-32 min-h-[400px] lg:min-h-[500px]">
                            {/* Top: heading + subtext */}
                            <div className="space-y-5">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="font-cabinet font-bold text-[32px] md:text-[36px] text-[#0f172a] leading-[1.1] tracking-tight"
                                >
                                    <span className="text-[#2EFFA1]">Interested in hearing more?</span><br /> You can book a call directly here.
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="font-inter text-[15px] text-[#64748b] leading-relaxed"
                                >
                                    Send us a message below, or book a call when it suits you
                                </motion.p>
                            </div>

                            {/* Divider & Demo CTA */}
                            <div className="mt-12 lg:mt-0 space-y-12">
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    whileInView={{ opacity: 1, scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    style={{ originX: 0 }}
                                    className="h-px bg-[#f1f5f9] w-full"
                                />

                                {/* Bottom: demo CTA */}
                                <div className="space-y-5">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="font-inter font-bold text-[17px] text-[#0f172a]"
                                    >
                                        Not tested it out yet?
                                    </motion.p>
                                    <motion.a
                                        href="/demo"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.4, delay: 0.6 }}
                                        className="inline-flex items-center gap-0 bg-[#0f172a] text-white pl-7 pr-1.5 py-2 rounded-full font-inter font-bold text-[16px] transition-all hover:bg-[#1e293b] group"
                                    >
                                        Try the Demo
                                        <span className="ml-5 w-10 h-10 rounded-full bg-[#2EFFA1] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(54,215,142,0.3)] group-hover:shadow-[0_0_20px_rgba(54,215,142,0.5)] transition-shadow">
                                            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 8h10M9 4l4 4-4 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Tabs + Calendly inline widget */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex-1 flex flex-col pt-0 px-4 md:px-8 pb-10 bg-background"
                    >
                        {/* Tabs Header */}
                        <div className="flex items-center gap-8 mb-4 mt-8 border-b border-[#f1f5f9] px-4 md:px-0">
                            <div className="pb-4 relative">
                                <button
                                    onClick={() => setActiveTab('call')}
                                    className={`font-cabinet font-bold text-[20px] transition-colors ${activeTab === 'call' ? 'text-[#0f172a]' : 'text-[#94a3b8] hover:text-[#0f172a]'}`}
                                >
                                    Schedule a call
                                </button>
                                {activeTab === 'call' && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0f172a] rounded-t-full"
                                    />
                                )}
                            </div>
                            <div className="pb-4 relative">
                                <button
                                    onClick={() => setActiveTab('message')}
                                    className={`font-cabinet font-bold text-[20px] transition-colors ${activeTab === 'message' ? 'text-[#0f172a]' : 'text-[#94a3b8] hover:text-[#0f172a]'}`}
                                >
                                    Drop us a message
                                </button>
                                {activeTab === 'message' && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0f172a] rounded-t-full"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 relative">
                            {activeTab === 'call' ? (
                                <motion.div
                                    key="call-tab"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Removed custom scaling to allow widget to fill width naturally */}
                                    <div className="relative w-full overflow-hidden" style={{ height: '1100px' }}>
                                        {isCalendlyLoading && (
                                            <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center gap-6">
                                                <div className="w-12 h-12 border-2 border-[#f1f5f9] border-t-[#2EFFA1] rounded-full animate-spin" />
                                                <div className="w-full h-full bg-[#f8fafc] rounded-[12px] animate-pulse overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shimmer" />
                                                </div>
                                            </div>
                                        )}
                                        <div
                                            className="calendly-inline-widget w-full h-full"
                                            data-url="https://calendly.com/after5/ai-sales-agent-discovery-call?primary_color=2fffa1&hide_landing_page_details=1&hide_gdpr_banner=1"
                                            style={{ minWidth: '320px', height: '100%' }}
                                        />
                                    </div>
                                </motion.div>
                            ) : formSubmitted ? (
                                <motion.div
                                    key="success-card"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.15,
                                                delayChildren: 0.1
                                            }
                                        },
                                        exit: { opacity: 0, scale: 0.95 }
                                    }}
                                    className="flex flex-col items-start gap-8 pt-8"
                                >
                                    <div className="space-y-6 max-w-[540px]">
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, x: -20 },
                                                visible: { opacity: 1, x: 0 }
                                            }}
                                            className="flex items-center gap-4"
                                        >
                                            <motion.div
                                                initial={{ scale: 0, rotate: -45 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20,
                                                    delay: 0.2
                                                }}
                                                className="w-10 h-10 rounded-full bg-accent-green flex items-center justify-center text-white"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <motion.path
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.5 }}
                                                        d="M20 6L9 17L4 12"
                                                    />
                                                </svg>
                                            </motion.div>
                                            <motion.h3
                                                variants={{
                                                    hidden: { opacity: 0, y: 10 },
                                                    visible: { opacity: 1, y: 0 }
                                                }}
                                                className="font-cabinet font-bold text-[36px] text-[#0f172a] leading-none"
                                            >
                                                {successContent.heading}
                                            </motion.h3>
                                        </motion.div>
                                        <motion.p
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            className="font-inter text-[18px] text-[#64748b] leading-relaxed"
                                        >
                                            {successContent.body}
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="flex flex-col sm:flex-row items-center gap-4 w-full"
                                    >
                                        <motion.button
                                            onClick={() => window.location.href = '/'}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-10 py-5 bg-[#0f172a] text-white rounded-full font-cabinet font-bold text-[17px] w-full sm:w-auto transition-transform"
                                        >
                                            Back to Homepage
                                        </motion.button>
                                        <motion.button
                                            onClick={() => {
                                                setFormSubmitted(false);
                                                setEnquiryType('');
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-10 py-5 bg-white text-[#0f172a] border border-[#e2e8f0] rounded-full font-cabinet font-bold text-[17px] w-full sm:w-auto transition-all hover:border-[#0f172a]"
                                        >
                                            Submit a New Form
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="message-tab"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                when: "beforeChildren",
                                                staggerChildren: 0.1
                                            }
                                        },
                                        exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
                                    }}
                                    className="pt-4"
                                >
                                    <form
                                        className="space-y-10"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            setFormSubmitted(true);
                                        }}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                            {/* Left Column */}
                                            <div className="space-y-10">
                                                {[
                                                    { label: 'Enquiry Type', type: 'select', options: ['Sales Enquiry', 'Demo Request', 'Technical Support', 'Other'] },
                                                    { label: 'Work Email', type: 'email', placeholder: 'email@company.com' },
                                                    { label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' }
                                                ].map((field, i) => (
                                                    <motion.div
                                                        key={`field-left-${i}`}
                                                        variants={{
                                                            hidden: { opacity: 0, y: 10 },
                                                            visible: { opacity: 1, y: 0 }
                                                        }}
                                                        className="space-y-3"
                                                    >
                                                        <label className="block text-[11px] font-cabinet font-bold text-[#475569] uppercase tracking-widest ml-1">{field.label}</label>
                                                        {field.type === 'select' ? (
                                                            <div className="relative">
                                                                <select
                                                                    value={enquiryType}
                                                                    onChange={(e) => setEnquiryType(e.target.value)}
                                                                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[16px] px-6 py-4 text-[#0f172a] font-cabinet font-bold text-[17px] focus:outline-none focus:border-[#2EFFA1] focus:ring-4 focus:ring-[#2EFFA1]/10 appearance-none cursor-pointer transition-all"
                                                                >
                                                                    <option value="" disabled selected hidden>Select an option</option>
                                                                    {field.options?.map(opt => <option key={opt} value={opt.toLowerCase()}>{opt}</option>)}
                                                                </select>
                                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none transition-transform">
                                                                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                                                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <input
                                                                type={field.type}
                                                                placeholder={field.placeholder}
                                                                className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[16px] px-6 py-4 text-[#0f172a] font-cabinet font-bold text-[17px] placeholder:text-[#cbd5e1] focus:outline-none focus:border-[#2EFFA1] focus:ring-4 focus:ring-[#2EFFA1]/10 transition-all"
                                                            />
                                                        )}
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Right Column */}
                                            <div className="space-y-10">
                                                {[
                                                    { label: 'Your Full Name', type: 'text', placeholder: 'John Doe' },
                                                    { label: 'Company Name', type: 'text', placeholder: 'Acme Inc.' },
                                                    { label: 'Industry', type: 'text', placeholder: 'Technology' }
                                                ].map((field, i) => (
                                                    <motion.div
                                                        key={`field-right-${i}`}
                                                        variants={{
                                                            hidden: { opacity: 0, y: 10 },
                                                            visible: { opacity: 1, y: 0 }
                                                        }}
                                                        className="space-y-3"
                                                    >
                                                        <label className="block text-[11px] font-cabinet font-bold text-[#475569] uppercase tracking-widest ml-1">{field.label}</label>
                                                        <input
                                                            type={field.type}
                                                            placeholder={field.placeholder}
                                                            className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[16px] px-6 py-4 text-[#0f172a] font-cabinet font-bold text-[17px] placeholder:text-[#cbd5e1] focus:outline-none focus:border-[#2EFFA1] focus:ring-4 focus:ring-[#2EFFA1]/10 transition-all"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            className="space-y-3"
                                        >
                                            <label className="block text-[11px] font-cabinet font-bold text-[#475569] uppercase tracking-widest ml-1">Message</label>
                                            <textarea
                                                rows={4}
                                                placeholder="Tell us more about your needs..."
                                                className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[16px] px-6 py-4 text-[#0f172a] font-cabinet font-bold text-[17px] placeholder:text-[#cbd5e1] focus:outline-none focus:border-[#2EFFA1] focus:ring-4 focus:ring-[#2EFFA1]/10 resize-none transition-all min-h-[120px]"
                                            />
                                        </motion.div>

                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            className="flex items-center gap-3 pt-2"
                                        >
                                            <div className="relative flex items-center">
                                                <input type="checkbox" id="privacy" className="peer appearance-none w-5 h-5 border border-[#e2e8f0] rounded bg-white checked:bg-[#2EFFA1] checked:border-[#2EFFA1] transition-all cursor-pointer hover:border-[#2EFFA1]" />
                                                <svg className="absolute w-3.5 h-3.5 left-[3px] top-[3px] text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <label htmlFor="privacy" className="text-[13px] text-[#64748b] font-cabinet font-medium cursor-pointer select-none">
                                                By submitting this form, you agree to our <a href="/privacy" className="text-[#0f172a] font-bold hover:text-[#2EFFA1] transition-colors underline underline-offset-2">Privacy Policy</a>
                                            </label>
                                        </motion.div>

                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.95 },
                                                visible: { opacity: 1, scale: 1 }
                                            }}
                                        >
                                            <motion.button
                                                type="submit"
                                                whileHover="hover"
                                                whileTap={{ scale: 0.98 }}
                                                initial="rest"
                                                animate="rest"
                                                variants={{
                                                    rest: { backgroundColor: '#0f172a', scale: 1 },
                                                    hover: { backgroundColor: '#2EFFA1', scale: 1.02 }
                                                }}
                                                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                                                className="relative px-14 py-4 md:py-5 rounded-full font-cabinet font-bold text-[16px] md:text-[18px] w-full md:w-auto overflow-hidden flex items-center justify-center gap-3 text-white"
                                            >
                                                <span>Submit Enquiry</span>

                                                <motion.svg
                                                    variants={{
                                                        rest: { x: -4, opacity: 0 },
                                                        hover: { x: 0, opacity: 1 }
                                                    }}
                                                    transition={{ duration: 0.25 }}
                                                    className="w-5 h-5"
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
                                            </motion.button>
                                        </motion.div>
                                    </form>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
                {/* Contact Info Bar — Moved to bottom to be right above footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="bg-white rounded-[24px] overflow-hidden relative min-h-[220px] flex flex-col md:flex-row items-center border border-black/[0.03] shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8"
                >

                    {/* Vertical Dividers for Desktop - Animated */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hidden md:block absolute left-[33.33%] top-1/2 -translate-y-1/2 w-[1px] h-[120px] bg-gradient-to-b from-transparent via-[#2EFFA1]/40 to-transparent origin-center"
                    />
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="hidden md:block absolute left-[66.66%] top-1/2 -translate-y-1/2 w-[1px] h-[120px] bg-gradient-to-b from-transparent via-[#36d78e]/40 to-transparent origin-center"
                    />

                    {/* Email Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 py-10 px-8 flex flex-col items-center justify-center text-center gap-4 transition-all"
                    >
                        <span className="text-[#94a3b8] text-[14px] uppercase tracking-[0.2em] font-cabinet font-bold">Email</span>
                        <a href="mailto:info@after5.digital" className="text-[#0f172a] text-[20px] md:text-[22px] font-bold font-cabinet hover:text-[#36d78e] transition-colors break-all">
                            info@after5.digital
                        </a>
                    </motion.div>

                    <div className="md:hidden w-[80%] h-px bg-black/[0.05]" />

                    {/* Address Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 py-10 px-8 flex flex-col items-center justify-center text-center gap-4 transition-all"
                    >
                        <span className="text-[#94a3b8] text-[14px] uppercase tracking-[0.2em] font-cabinet font-bold">Address</span>
                        <p className="text-[#0f172a] text-[18px] md:text-[22px] font-bold font-cabinet leading-[1.3] max-w-[340px]">
                            71–75 Shelton Street, Covent Garden, London, WC2H 9JQ United Kingdom
                        </p>
                    </motion.div>

                    <div className="md:hidden w-[80%] h-px bg-black/[0.05]" />

                    {/* Contact Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 py-10 px-8 flex flex-col items-center justify-center text-center gap-4 transition-all"
                    >
                        <span className="text-[#94a3b8] text-[14px] uppercase tracking-[0.2em] font-cabinet font-bold">Contact</span>
                        <a href="tel:+971585992301" className="text-[#0f172a] text-[20px] md:text-[22px] font-bold font-cabinet hover:text-[#36d78e] transition-colors">
                            +971 58 599 2301
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
