import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGlowTrigger } from "../hooks/useGlowTrigger";

const CTA = () => {
    const glowRef = useGlowTrigger("cta-bottom");
    return (
        <div id="cta" ref={glowRef} className="w-full bg-background px-4 py-20 lg:p-24">
            <section className="bg-primary relative overflow-hidden rounded-[30px] lg:rounded-[48px] max-w-[1411px] mx-auto shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)]">

                {/* Background Grid Pattern - More visible as per screenshot */}
                <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                        backgroundSize: '64px 64px'
                    }}
                />

                {/* Ambient Green Glow - Focused on the left */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[10%] -left-[10%] w-[50%] h-[80%] bg-[#2EFFA1]/15 blur-[100px] rounded-full" />
                </div>

                <div className="relative z-10 px-8 py-20 lg:py-24 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
                        {/* Left: Content Area */}
                        <div className="flex flex-col gap-[30px] items-start lg:w-1/2">
                            {/* Title & Descriptions */}
                            <div className="space-y-[24px]">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="font-cabinet font-bold text-[52px] text-white tracking-[-1.56px] leading-[1.1] md:leading-[62px]"
                                >
                                    Ready To Turn More Leads Into Revenue?
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="font-inter text-[20px] text-white/80 tracking-[-0.4px] leading-[1.5] space-y-1"
                                >
                                    <p>Less leads missed. Less time spent chasing and follow ups always guaranteed!</p>
                                    <p>No brainer right?</p>
                                    <p>
                                        <span className="font-bold text-white">Test It Out</span> and <span className="font-bold text-white">See How It Performs</span>.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-center pt-4 w-full sm:w-auto"
                            >
                                <Link to="/demo" className="w-full sm:w-auto">
                                    <button
                                        className="w-full sm:w-auto h-[64px] md:h-[76px] px-[20px] md:px-[24px] py-[16px] md:py-[20px] rounded-[90px] flex items-center justify-center gap-[12px] transition-all hover:scale-105 active:scale-95"
                                        style={{
                                            backgroundImage: "linear-gradient(99.06deg, rgba(255, 255, 255, 0.1) 6%, rgba(255, 255, 255, 0.15) 90.8%)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            backdropFilter: "blur(10px)"
                                        }}
                                    >
                                        <span className="font-inter font-bold text-[16px] md:text-[19px] text-white leading-none whitespace-nowrap">
                                            Test The Demo
                                        </span>
                                        <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-accent-green rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-accent-green/20">
                                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 w-[14px] md:w-[18px]">
                                                <path d="M18 10L0 20V0L18 10Z" fill="#000000" />
                                            </svg>
                                        </div>
                                    </button>
                                </Link>

                                <Link to="/contact" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto bg-white h-[64px] md:h-[76px] px-[24px] md:px-[32px] rounded-[90px] font-inter font-bold text-[16px] md:text-[19px] text-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl whitespace-nowrap">
                                        Book A Call With Us
                                    </button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right: Mockups Area — natural flex layout, no clipping */}
                        <div className="lg:w-1/2 flex items-end justify-center lg:justify-end gap-2 pt-8 lg:pr-4">
                            {/* Mobile 1 (Main, Taller) */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                                className="w-[46%] max-w-[250px] shrink-0"
                            >
                                <img
                                    src="/assets/mobile-1.svg"
                                    alt="Dashboard View 1"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            </motion.div>

                            {/* Mobile 2 (Secondary, offset upward for stagger) */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                                className="w-[42%] max-w-[210px] shrink-0 opacity-90"
                            >
                                <img
                                    src="/assets/mobile-2.svg"
                                    alt="Dashboard View 2"
                                    className="w-full h-auto drop-shadow-xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CTA;
