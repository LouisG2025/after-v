import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGlowTrigger } from "../hooks/useGlowTrigger";

const steps = [
    {
        number: "one",
        title: "ENQUIRY COMES IN",
        description: "From your website, ads, email, or referrals. No matter where, we'll catch it.",
        tag: "Step 01",
    },
    {
        number: "two",
        title: "INSTANT RESPONSE",
        description: "The lead is acknowledged immediately, day or night.",
        tag: "Step 02",
    },
    {
        number: "three",
        title: "REAL QUALIFICATION",
        description: "A natural but funnel based conversation identifies context, intent, fit, and urgency.",
        tag: "Step 03",
    },
    {
        number: "four",
        title: "INTELLIGENT STATUS TRACKING AND FOLLOW-UPS",
        description: "Follow-up adapts based on memory recall, events or signals, not guesswork.",
        tag: "Step 04",
    },
    {
        number: "five",
        title: "CLEAN HANDOVER",
        description: "Qualified leads are passed to your team with full context or booked directly into your calendar.",
        tag: "Step 05",
    },
];

const HowItWorks = () => {
    const glowRef = useGlowTrigger("how-it-works");
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const headingInView = useInView(headingRef, { once: true, amount: 0.5 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={glowRef} id="how-it-works" className="py-32 bg-background overflow-clip">
            <div className="max-w-[1411px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 relative">

                    {/* ── Left: Sticky Content ── */}
                    <div className="lg:w-[45%] lg:sticky lg:top-[160px] self-start space-y-8 h-fit">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            className="inline-flex px-[11px] py-[9px] bg-[rgba(46,255,161,0.11)] text-primary rounded-[100px] font-inter font-medium text-[16px] tracking-[-0.4px] capitalize"
                        >
                            The After5 Flow
                        </motion.div>

                        {/* Heading — letter stagger */}
                        <h2
                            ref={headingRef}
                            className="font-cabinet font-bold text-[42px] md:text-[64px] text-primary leading-[1.1] md:leading-[1] tracking-tight md:tracking-[-3px] max-w-[644px]"
                        >
                            {["How our process would", "look for you in practice."].map((line, li) => (
                                <span key={li} className="block overflow-hidden">
                                    <motion.span
                                        className="block"
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={headingInView ? { y: 0, opacity: 1 } : {}}
                                        transition={{
                                            duration: 0.75,
                                            ease: [0.23, 1, 0.32, 1],
                                            delay: li * 0.12,
                                        }}
                                    >
                                        {line}
                                    </motion.span>
                                </span>
                            ))}
                        </h2>

                        {/* CTA Button */}
                        <Link to="/contact">
                            <motion.button
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#2EFFA1",
                                    boxShadow: "0 0 24px rgba(46,255,161,0.35)",
                                }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-white text-primary border border-black/5 font-inter font-bold px-8 py-5 rounded-[82px] transition-colors text-[15px] capitalize shadow-sm w-full md:w-auto"
                            >
                                Book a call now
                            </motion.button>
                        </Link>
                    </div>

                    {/* ── Right: Vertical Timeline ── */}
                    <div ref={containerRef} className="lg:w-[55%] relative pl-12 md:pl-20 pb-[20vh]">
                        {/* Static grey line */}
                        <div className="absolute left-[24px] md:left-[40px] top-[40px] bottom-[calc(20vh+60px)] w-[2px] -translate-x-1/2 bg-black/5 z-0" />

                        {/* Scroll-driven green fill */}
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute left-[24px] md:left-[40px] top-[40px] bottom-[calc(20vh+60px)] w-[2px] -translate-x-1/2 bg-accent-green z-10 shadow-[0_0_15px_rgba(46,255,161,0.5)]"
                        />

                        <div className="space-y-[48px]">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 0.85,
                                        delay: i * 0.08,
                                        ease: [0.23, 1, 0.32, 1],
                                    }}
                                    className="relative z-10 group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[24px] md:-left-[40px] top-[40px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                                        {/* Inner dot */}
                                        <div className="w-[18px] h-[18px] rounded-full bg-white border-[3px] border-primary" />

                                        {/* Green dot scales in */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: i * 0.08 + 0.3,
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 14,
                                            }}
                                            className="absolute w-[18px] h-[18px] rounded-full bg-accent-green shadow-[0_0_12px_rgba(46,255,161,0.8)]"
                                        />

                                        {/* Continuous pulse ring */}
                                        <motion.div
                                            animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                                            transition={{
                                                duration: 2.4,
                                                repeat: Infinity,
                                                ease: "easeOut",
                                                delay: i * 0.3,
                                            }}
                                            className="absolute w-[18px] h-[18px] rounded-full bg-accent-green/40"
                                        />
                                    </div>


                                    {/* Step Card */}
                                    <motion.div
                                        whileInView={{
                                            scale: 1.02,
                                            borderColor: "rgba(46, 255, 161, 0.3)",
                                            boxShadow: "0 20px 48px rgba(0,0,0,0.06)"
                                        }}
                                        viewport={{ margin: "-20% 0% -60% 0%" }}
                                        whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.07)" }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-white p-10 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.03] space-y-8 transition-all duration-500"
                                    >
                                        <div className="space-y-4">
                                            <motion.span
                                                initial={{ opacity: 0, x: -12 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.08 + 0.2 }}
                                                className="inline-block font-inter font-bold text-[13px] text-accent-green uppercase tracking-[0.2em]"
                                            >
                                                {step.tag}
                                            </motion.span>
                                            <h3 className="font-cabinet font-bold text-[32px] text-primary leading-none tracking-tight">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="font-inter text-[19px] text-primary/60 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
