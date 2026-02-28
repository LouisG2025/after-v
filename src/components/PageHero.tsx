import { motion } from 'framer-motion';

interface PageHeroProps {
    /** The plain part of the heading e.g. "How We" */
    title: string;
    /** The green-accent part of the heading e.g. "Work" */
    accent: string;
    /** Optional subtitle displayed below the heading */
    subtitle?: string;
}

/**
 * Shared hero banner used on every inner page.
 * Black background · white grid · green glow · large cabinet heading.
 * Content is never changed — only styling lives here.
 */
const PageHero = ({ title, accent, subtitle }: PageHeroProps) => {
    return (
        <div className="bg-background pt-[80px]">
            <section className="relative h-[589px] mx-4 bg-black rounded-[20px] overflow-hidden flex items-center justify-center">
                {/* White line grid */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '88px 88px',
                    }}
                />

                {/* Ambient green glow */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-accent-green/10 blur-[150px] rounded-full opacity-50" />
                </div>

                {/* Heading */}
                <div className="relative z-10 text-center px-6 uppercase tracking-[-3px]">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                        className="font-cabinet font-bold text-[36px] min-[400px]:text-[48px] md:text-[80px] text-white leading-[1.1] md:leading-none"
                    >
                        {title}{' '}
                        <span className="text-accent-green">{accent}</span>
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                            className="mt-6 font-inter text-[17px] md:text-[18px] text-white/60 leading-relaxed max-w-2xl mx-auto normal-case tracking-normal"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PageHero;
