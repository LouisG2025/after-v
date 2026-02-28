import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGlowTrigger } from '../hooks/useGlowTrigger';

const SecondaryCTA = () => {
    const glowRef = useGlowTrigger('secondary-cta');
    return (
        <motion.section
            ref={glowRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
            <div className="bg-[#051109] rounded-3xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row min-h-[400px]">

                {/* Background Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Left Content Area */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
                    >
                        Want to Work With<br />Us?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed"
                    >
                        Just <span className="text-white font-semibold">Test It Out</span> and <span className="text-white font-semibold">See How It Performs</span>. If you think it could work in your business, then you can book a discovery call.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                    >
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#3f4c44" }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#2f3b34] text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-colors duration-200 border border-white/5 shadow-sm"
                            >
                                Book a call with Louis here
                            </motion.button>
                        </Link>
                        <Link to="/demo">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-[#051109] px-6 py-3.5 rounded-full font-semibold text-sm group flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Test It Out First
                                <div className="ml-3 bg-[#1e7a4b] p-1 rounded-full group-hover:bg-[#155a36] transition-colors">
                                    <ArrowRight size={14} className="text-white stroke-3 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Image Area */}
                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden flex items-center justify-center p-6 md:p-10 z-0">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.6, scale: 1.1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/assets/secondary-cta-graphic.svg"
                        alt="Abstract Graphic"
                        className="w-full h-auto max-h-full object-contain mix-blend-screen"
                        style={{
                            filter: 'contrast(2) brightness(0.5) grayscale(1)',
                            maskImage: 'radial-gradient(circle, black 40%, transparent 85%)',
                            WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 85%)'
                        }}
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default SecondaryCTA;
