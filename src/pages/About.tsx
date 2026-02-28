import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutHero from '../components/AboutHero';
import CoreValues from '../components/CoreValues';
import WhyWeBuilt from '../components/WhyWeBuilt';
import WhatWeDo from '../components/WhatWeDo';
import SecondaryCTA from '../components/SecondaryCTA';
import { usePageMeta } from '../hooks/usePageMeta';

const About = () => {
    usePageMeta({
        title: "After5 Digital - About Us",
        description: "Learn about After5 Digital and our mission to revolutionize sales with AI agents."
    });

    return (
        <div className="bg-background">
            <AboutHero />

            {/* Why We Built Section */}
            <WhyWeBuilt />

            {/* Founder/Team Section */}
            <section className="py-24 max-w-[1411px] mx-auto px-6 lg:px-20 bg-background">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex justify-center items-center"
                >
                    <div className="relative w-full max-w-[1200px] group">
                        {/* Animated background glow */}
                        <motion.div
                            animate={{
                                opacity: [0.4, 0.7, 0.4],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -inset-1 bg-linear-to-r from-accent-green/30 via-white/10 to-accent-green/30 rounded-[28px] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />

                        <div className="relative overflow-hidden rounded-[24px]">
                            <img
                                src="/assets/louis.svg"
                                alt="Louis - Founder"
                                className="w-full h-auto shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
                            />

                            {/* Periodic shimmer sweep */}
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-y-0 w-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
                            />

                            {/* Hover-triggered sheen sweep */}
                            <motion.div
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '300%' }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-y-0 w-1/4 bg-white/20 blur-xl skew-x-[-30deg] pointer-events-none"
                            />
                        </div>

                        {/* Interactive LinkedIn Link Placed Over Image Text */}
                        <div className="absolute bottom-[3%] left-[3.5%] md:bottom-[9%] md:left-[4%] lg:bottom-[10.5%] lg:left-[4.5%] z-10 hidden sm:block">
                            <motion.a
                                href="https://www.linkedin.com/in/louis-grange0405/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover="hover"
                                whileTap={{ scale: 0.97 }}
                                initial="rest"
                                animate="rest"
                                variants={{
                                    rest: { scale: 1 },
                                    hover: { scale: 1.04 }
                                }}
                                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                className="relative overflow-hidden bg-accent-green border border-white/20 text-[#0d0d0d] font-inter font-bold h-[40px] md:h-[45px] lg:h-[50px] px-5 md:px-7 rounded-[52px] text-[14px] md:text-[16px] flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_8px_20px_rgba(46,255,161,0.25)]"
                                style={{
                                    backgroundImage: "linear-gradient(to top right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 100%)"
                                }}
                            >
                                {/* Continuous ambient glow ping */}
                                <motion.span
                                    animate={{ scale: [1, 1.6, 1], opacity: [0.15, 0, 0.15] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 rounded-[52px] bg-white pointer-events-none"
                                />

                                {/* White shimmer sweep on hover */}
                                <motion.span
                                    variants={{
                                        rest: { x: '-110%', skewX: -15 },
                                        hover: { x: '210%', skewX: -15 }
                                    }}
                                    transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute inset-0 w-1/2 bg-white/40 blur-sm pointer-events-none"
                                />

                                <span className="relative z-10 flex items-center gap-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 -ml-1">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    <span style={{ letterSpacing: "-0.01em" }}>Let's connect</span>
                                </span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* What We Do Heading Section */}
            <WhatWeDo />

            {/* ApexAI Section */}
            <section className="pt-32 pb-12 max-w-[1411px] mx-auto px-6 lg:px-20 bg-background text-primary">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center"
                >
                    <div className="max-w-[1100px] text-center flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#e5fcf1] border border-[#d1fae5] text-[#0f172a] px-4 py-1.5 rounded-full text-[14px] font-medium mb-8"
                        >
                            An AI Sales Partner
                        </motion.div>
                        <h2 className="font-cabinet font-bold text-[42px] md:text-[54px] leading-[1.1] tracking-[-1.5px] text-primary">
                            We are a small part of <span className="text-secondary">ApexAI</span>, an AI automation agency specialised in sales operations, based in the Dubai AI Campus
                        </h2>
                    </div>
                </motion.div>
            </section>

            {/* Split Apex AI Layout Section - High Fidelity Match */}
            <section className="pb-32 px-6 lg:px-20 bg-background">
                <Link to="/contact" className="block cursor-pointer">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.3 }
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-[1411px] mx-auto overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col md:flex-row min-h-[400px]"
                    >
                        {/* Left Column - Content Frame */}
                        <div className="w-full md:w-[42%] flex items-center justify-center p-6 md:p-10">
                            <img
                                src="/assets/apex-ai-left.svg"
                                alt="Apex AI Specialization"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Right Column - Nested Black Card Container */}
                        <div className="w-full md:w-[58%] p-3 md:p-4 flex">
                            <div className="w-full bg-black rounded-[24px] overflow-hidden flex items-center justify-center">
                                <img
                                    src="/assets/apex-ai-right.svg"
                                    alt="Apex AI Sales Journey"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </section>

            <CoreValues />

            <SecondaryCTA />
        </div>
    );
};

export default About;
