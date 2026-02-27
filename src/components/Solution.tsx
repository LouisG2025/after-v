import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, MessageSquare, Repeat, Users, ArrowRight } from "lucide-react";

const FlipCard = ({ card, index }: { card: any, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-[410px] w-full [perspective:1000px] group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ rotateY: isHovered ? 180 : 0 }}
                viewport={{ once: true }}
                transition={{
                    rotateY: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
                    default: { delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }
                }}
                className="relative h-full w-full [transform-style:preserve-3d] shadow-sm rounded-[20px]"
                style={{ willChange: "transform" }}
            >
                {/* Front Side */}
                <div className={`absolute inset-0 h-full w-full rounded-[20px] p-[36px] [backface-visibility:hidden] flex flex-col items-center justify-center text-center space-y-6 ${card.variant === 'highlight' ? 'bg-[#f0f9f6]' : 'bg-white border border-black/5'}`}>
                    <div className="relative group/icon">
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-accent-green/20 blur-[30px] rounded-full scale-125 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`} />

                        <div className="relative w-[80px] h-[80px] rounded-[24px] bg-accent-green text-primary flex items-center justify-center shadow-[0_15px_30px_-10px_rgba(46,255,161,0.3)] border border-white/20 z-10">
                            <card.icon size={40} strokeWidth={1.5} />
                        </div>
                    </div>

                    <div className="space-y-[12px]">
                        <h3 className="font-cabinet font-bold text-[26px] text-primary leading-tight lowercase first-letter:uppercase">
                            {card.title}
                        </h3>
                        <p className="text-primary/40 text-[13px] font-inter font-medium uppercase tracking-[0.2em]">
                            Hover to explore
                        </p>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-[20px] p-[40px] bg-primary text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center text-center">
                    <div className="space-y-6">
                        <div className="w-[48px] h-[48px] rounded-full bg-accent-green flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(46,255,161,0.4)]">
                            <card.icon size={22} strokeWidth={2} className="text-primary" />
                        </div>
                        <p className="font-inter text-[17px] text-white/90 leading-relaxed font-medium">
                            {card.description}
                        </p>
                        <div className="pt-6 border-t border-white/10">
                            <span className="text-[12px] font-bold text-accent-green uppercase tracking-widest">
                                Enterprise Ready
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Solution = () => {
    const cards = [
        {
            icon: Zap,
            title: "Instant responses, 24/7",
            description: "Every enquiry is acknowledged immediately, ensuring no lead falls through the cracks even at 2am.",
            variant: "white"
        },
        {
            icon: MessageSquare,
            title: "Conversation based qualification",
            description: "Leads are qualified through natural conversations that uncover intent, urgency, and fit.",
            variant: "highlight"
        },
        {
            icon: Repeat,
            title: "Strategic follow-ups",
            description: "No dropped leads. Follow-ups continue tracking status until the lead converts or disqualifies itself.",
            variant: "white"
        },
        {
            icon: Users,
            title: "Clean handover to sales",
            description: "Your team only receives leads that are ready for closing, with full context attached.",
            variant: "white"
        }
    ];

    return (
        <section id="solution" className="py-24 bg-background overflow-hidden flex flex-col items-center">
            <div className="max-w-[1411px] mx-auto px-6 w-full space-y-[77px] text-center flex flex-col items-center">
                {/* Header Section */}
                <div className="flex flex-col gap-[28px] items-center text-center max-w-[1137px]">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[rgba(46,255,161,0.11)] px-[11px] py-[9px] rounded-[100px] inline-flex items-center justify-center font-inter font-medium text-[16px] text-primary tracking-[-0.4px]"
                    >
                        What After5 Does
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-cabinet font-bold text-[40px] md:text-[54px] text-primary leading-[1.1] tracking-tight md:tracking-[-3px] max-w-[884px]"
                    >
                        Our systems operate between your leads and your sales team.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-inter text-[18px] text-primary/80 leading-[1.4] max-w-[700px]"
                    >
                        We build bespoke <span className="font-bold text-primary">WhatsApp, SMS or email</span> handling systems to <span className="font-bold text-primary">capture</span> new leads instantly, <span className="font-bold text-primary">qualify</span> intent through consistent human sounding conversations, and track status <span className="font-bold text-primary">following up until the leads are booked</span>.
                    </motion.p>

                    <Link to="/how-we-work">
                        <motion.button
                            initial={{ opacity: 0, scale: 1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#2EFFA1", borderColor: "#2EFFA1" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white px-[24px] py-[16px] rounded-[62px] shadow-sm flex items-center gap-2 group transition-all duration-300 border border-black/5"
                        >
                            <span className="font-inter font-bold text-[15px] text-primary">See How It Works</span>
                            <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[28px] w-full">
                    {cards.map((card, i) => (
                        <FlipCard key={i} card={card} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
