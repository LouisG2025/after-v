import { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Zap, Search, Filter, CalendarCheck, MessageSquare, Database, BarChart3, Settings, Rocket, Target, Users } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        subtitle: "Let's see what's possible.",
        description: "A proper introduction to what we do and to understand your business and how we can help.",
        items: [
            { text: "Where do your leads come from", icon: Search },
            { text: "How do you currently handle them", icon: Users },
            { text: "Where the gaps are (evenings, weekends, follow-ups)", icon: MessageSquare },
            { text: "What the revenue impact could look like", icon: BarChart3 },
        ]
    },
    {
        number: "02",
        title: "Strategic Audit",
        subtitle: "We map what's really happening.",
        description: "We dig into your current operations between marketing and sales to find where revenue is being missed.",
        items: [
            { text: "Lead sources and volume across channels", icon: Filter },
            { text: "Response times (especially after hours)", icon: Zap },
            { text: "Follow-up patterns and where they break down", icon: MessageSquare },
            { text: "Actual ROI potential if we tighten this up", icon: Target },
        ]
    },
    {
        number: "03",
        title: "Channel Strategy & Design",
        subtitle: "We decide what's worth building.",
        description: "Not every business needs multi-channel. We map out what actually makes sense for you.",
        items: [
            { text: "Primary channel (WhatsApp, email, or SMS)", icon: MessageSquare },
            { text: "Qualification flow that matches how you sell", icon: Filter },
            { text: "CRM and other integrations", icon: Database },
            { text: "When and how sales steps in", icon: Users },
        ]
    },
    {
        number: "04",
        title: "Build & Integrate",
        subtitle: "We build infrastructure, not plug-ins.",
        description: "Bespoke sales agents that sound just like your team, fully integrated into your systems.",
        items: [
            { text: "Sales agents that feel natural and human", icon: Users },
            { text: "Smart qualification and follow-up logic", icon: Settings },
            { text: "Full CRM integration", icon: Database },
            { text: "Clean handover with full context for sales", icon: CalendarCheck },
        ]
    },
    {
        number: "05",
        title: "Test & Launch",
        subtitle: "Where the magic happens.",
        description: "We test tone, timing, and flow until it feels right — then it's go time.",
        items: [
            { text: "Does it sound natural enough?", icon: MessageSquare },
            { text: "Are there drop offs at any point?", icon: BarChart3 },
            { text: "Is follow-up timing perfect?", icon: Zap },
            { text: "Are integrations all working properly?", icon: Settings },
        ]
    },
    {
        number: "06",
        title: "Measure & Optimise",
        subtitle: "What gets measured gets improved.",
        description: "We track everything and optimize based on real data, continuously improving results.",
        items: [
            { text: "Qualification and booking rates", icon: Target },
            { text: "Sales team feedback", icon: Users },
            { text: "Revenue impact and conversion lift", icon: BarChart3 },
            { text: "Fall off points", icon: MousePointer2 },
        ]
    }
];

const DetailedProcess = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="bg-black text-white py-32 relative">
            {/* Ambient glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2EFFA1]/5 blur-[160px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2EFFA1]/4 blur-[130px] rounded-full pointer-events-none" />
            </div>

            <div className="max-w-[1411px] mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* ── LEFT: Sticky Sidebar ── */}
                    <div className="lg:w-[360px] shrink-0 lg:sticky lg:top-32 self-start space-y-10 h-fit">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-[#2EFFA1]/10 border border-[#2EFFA1]/20"
                        >
                            <span className="text-[#2EFFA1] text-sm font-semibold uppercase tracking-wider">How We Work</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="font-cabinet font-bold text-[48px] leading-[1.1] tracking-tight"
                        >
                            Speed is the{' '}
                            <span className="text-accent-green">difference</span>{' '}
                            between a lead and a lost opportunity.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-inter text-lg text-white/50 leading-relaxed"
                        >
                            Ready to see how more leads could turn into revenue?
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.04, backgroundColor: "#2EFFA1" }}
                            whileTap={{ scale: 0.97 }}
                            className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300"
                        >
                            Book a Demo
                            <div className="w-9 h-9 rounded-full bg-black/8 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Rocket className="w-4 h-4" />
                            </div>
                        </motion.button>

                        {/* Step counter */}
                        <div className="hidden lg:flex flex-col gap-4 pt-8">
                            {steps.map((s, index) => {
                                const isActive = activeStep === index;
                                return (
                                    <div key={s.number} className={`flex items-center gap-4 transition-all duration-500 cursor-default ${isActive ? 'opacity-100 translate-x-2' : 'opacity-40 translate-x-0'}`}>
                                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-accent-green/20 border-accent-green/50 scale-110 shadow-[0_0_15px_rgba(46,255,161,0.2)]' : 'bg-white/5 border-white/10 scale-100'}`}>
                                            <span className={`text-[12px] font-bold transition-colors duration-500 ${isActive ? 'text-accent-green' : 'text-white/40'}`}>{s.number}</span>
                                        </div>
                                        <span className={`text-[15px] font-inter font-medium transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/40'}`}>{s.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── RIGHT: Timeline ─ per-step dot+connector approach ── */}
                    <div className="flex-1 mt-12 lg:mt-0">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-row gap-8 relative">
                                {/* Scroll Tracker */}
                                <motion.div
                                    onViewportEnter={() => setActiveStep(index)}
                                    viewport={{ margin: "-50% 0px -30% 0px" }}
                                    className="absolute inset-0 pointer-events-none z-[-1]"
                                />

                                {/* Left column: dot + line below (no line for last step) */}
                                <div className="flex flex-col items-center shrink-0">
                                    {/* Dot */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.05 * index + 0.15, type: "spring", stiffness: 260, damping: 14 }}
                                        className="relative z-10 mt-[10px] shrink-0"
                                    >
                                        <div className="w-[14px] h-[14px] rounded-full bg-[#2EFFA1] border-[2px] border-black shadow-[0_0_16px_rgba(54,215,142,0.8)]" />
                                        {/* pulse */}
                                        <motion.div
                                            animate={{ scale: [1, 2.8, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: index * 0.4 }}
                                            className="absolute inset-0 rounded-full bg-[#2EFFA1]/40"
                                        />
                                    </motion.div>

                                    {/* Connector line — only between steps, not after the last one */}
                                    {index < steps.length - 1 && (
                                        <motion.div
                                            initial={{ scaleY: 0 }}
                                            whileInView={{ scaleY: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.05 * index + 0.4, ease: [0.23, 1, 0.32, 1] }}
                                            style={{ originY: 0 }}
                                            className="w-px flex-1 my-2 bg-gradient-to-b from-[#2EFFA1]/60 to-white/10"
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1], delay: 0.05 * index }}
                                    className={`flex-1 space-y-8 ${index < steps.length - 1 ? 'pb-20' : 'pb-4'}`}
                                >
                                    <div className="space-y-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/8 border border-white/10 text-white/50 font-inter font-bold text-sm tracking-widest">
                                            {step.number}
                                        </span>
                                        <h3 className="font-cabinet font-bold text-[42px] leading-tight tracking-tight text-white">
                                            {step.title}
                                        </h3>
                                        <div className="space-y-1">
                                            <p className="font-inter font-bold text-lg text-[#2EFFA1]">{step.subtitle}</p>
                                            <p className="font-inter text-white/50 text-base leading-relaxed max-w-lg">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Feature items */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {step.items.map((item, itemIndex) => (
                                            <motion.div
                                                key={itemIndex}
                                                initial={{ opacity: 0, y: 16 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: itemIndex * 0.08 }}
                                                className={`flex items-center gap-4 p-5 rounded-2xl border transition-colors duration-300
                                                    ${itemIndex === 0
                                                        ? 'bg-[#2EFFA1]/10 border-[#2EFFA1]/30 hover:bg-[#2EFFA1]/15'
                                                        : 'bg-white/[0.03] border-white/8 hover:border-white/15'
                                                    }`}
                                            >
                                                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                                                    ${itemIndex === 0
                                                        ? 'bg-[#2EFFA1] text-black shadow-[0_0_20px_rgba(54,215,142,0.3)]'
                                                        : 'bg-white/8 text-white/60'
                                                    }`}>
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <p className="font-inter font-medium text-[15px] text-white/80 leading-snug">
                                                    {item.text}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailedProcess;
