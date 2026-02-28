import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import HowWeWorkSection from '../components/HowWeWork';
import DetailedProcess from '../components/DetailedProcess';
import { Rocket } from 'lucide-react';
import PageHero from '../components/PageHero';

const HowWeWorkAudit = () => {
    return (
        <section className="py-32 bg-background">
            <div className="max-w-[1411px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row gap-20 items-start">
                {/* LEFT: Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="lg:w-[45%] shrink-0"
                >
                    <h2 className="font-cabinet font-bold text-[36px] md:text-[54px] text-primary leading-[1.1] tracking-tight md:tracking-[-1.5px]">
                        We prioritise the audit.<br className="hidden md:block" />
                        Is it a fit for your business?
                    </h2>
                </motion.div>

                {/* RIGHT: Text content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="flex flex-col gap-8 lg:flex-1"
                >
                    <p className="font-inter text-[28px] text-primary/80 leading-snug">
                        Some agencies will flog anything to anyone. Not us.
                        We audit first, making sure to understand if our systems
                        are the right solution and how quickly there's going to be ROI.
                    </p>
                    <p className="font-inter text-[18px] text-primary/60 leading-relaxed max-w-xl">
                        We're <span className="font-bold text-primary">consultancy-first</span>.
                        That means we start with your <span className="font-bold text-primary">business</span>,
                        not our toolkit.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const WhereAfter5Fits = () => {
    return (
        <section className="py-32 bg-background border-t border-primary/5">
            <div className="max-w-[1411px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="relative z-10 lg:w-[52%] shrink-0 w-full"
                >
                    <div className="relative group rounded-3xl overflow-hidden aspect-[838/887] border border-primary/10 shadow-2xl">
                        <img
                            src="/assets/where-after5-fits.svg"
                            alt="Where After5 Fits Representation"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                <div className="flex flex-col gap-10 items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#2EFFA1]/10 px-4 py-2 rounded-full border border-[#2EFFA1]/20"
                    >
                        <span className="text-primary text-sm font-medium tracking-tight uppercase">Where After5 Fits</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="font-cabinet font-bold text-[54px] md:text-[64px] text-primary leading-[1.1] tracking-[-3px]"
                    >
                        Marketing generates the leads. Sales closes them.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="space-y-4 font-inter text-xl text-primary/80"
                    >
                        <p className="leading-relaxed">
                            <span className="font-bold text-primary italic">We sit in the middle</span> and make sure <span className="font-bold text-primary italic">nothing gets missed.</span>
                        </p>
                        <p className="leading-relaxed">
                            Instant response <span className="font-bold text-primary italic">24/7.</span>
                        </p>
                        <p className="leading-relaxed">
                            <span className="font-bold text-primary italic">Natural</span> qualification.
                        </p>
                        <p className="leading-relaxed">
                            <span className="font-bold text-primary italic">Consistent</span> and intelligent <span className="font-bold text-primary italic">follow-ups.</span>
                        </p>
                        <p className="leading-relaxed">
                            Clean handover to your team with full context.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="pt-10 space-y-8"
                    >
                        <p className="font-inter text-3xl text-primary">Ready to get started?</p>
                        <Link to="/contact">
                            <button className="group flex items-center gap-6 bg-[#111827] text-white px-10 py-6 rounded-full font-bold text-xl hover:bg-black transition-all duration-300">
                                Book a Discovery Call
                                <div className="w-12 h-12 rounded-full bg-[#2EFFA1] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Rocket className="w-6 h-6 text-black" />
                                    </motion.div>
                                </div>
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const HowWeWork = () => {
    return (
        <div className="bg-[#efefef]">
            <PageHero title="How We" accent="Work" />
            <HowWeWorkAudit />
            <DetailedProcess />
            <WhereAfter5Fits />
            {/* <div className="py-20">
                <HowWeWorkSection />
            </div> */}
        </div>
    );
};

export default HowWeWork;
