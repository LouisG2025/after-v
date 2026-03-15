import { motion } from "framer-motion";

const LowerSection = () => {
    return (
        <section id="lower-section" className="py-12 lg:py-24 bg-primary overflow-hidden flex flex-col items-center">
            <div className="max-w-[1411px] mx-auto px-6 w-full">
                {/* Desktop View - Existing SVG */}
                <div className="hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="relative w-full rounded-[40px] overflow-hidden"
                    >
                        <img
                            src="/assets/lower-section-new.svg"
                            alt="Process Overview"
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </div>

                {/* Mobile/Tablet View - New Design */}
                <div className="block lg:hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#0A0A0A] rounded-[32px] p-8 md:p-16 flex flex-col items-center text-center border border-white/5 shadow-2xl"
                    >
                        {/* Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#36d78e]/10 px-6 py-2 rounded-full border border-[#36d78e]/20 mb-8"
                        >
                            <span className="text-[#36d78e] font-inter font-semibold text-[12px] tracking-[0.05em] uppercase">
                                WHY SPEED WINS
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-white font-cabinet font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight max-w-[280px] md:max-w-none"
                        >
                            Speed is the difference between a lead and a lost opportunity.
                        </motion.h2>

                        {/* Stage One Design Section */}
                        <div className="mt-16 w-full flex flex-col items-center">
                            {/* Stage One Label & Arrow Container */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="self-start ml-4 mb-4 flex flex-col items-start gap-2"
                            >
                                <span className="text-[#36d78e] font-caveat font-bold text-[26px] md:text-[32px] tracking-tight transform -rotate-3">
                                    Stage One
                                </span>
                                <div className="ml-8 transform">
                                    <img 
                                        src="/assets/arrow-squiggle.svg" 
                                        alt="Green arrow squiggle" 
                                        className="w-[60px] h-auto opacity-95"
                                    />
                                </div>
                            </motion.div>

                            {/* Leads Box */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="w-full bg-[#1A1A1A] rounded-[32px] p-6 md:p-10 border border-white/5 shadow-inner"
                            >
                                <div className="flex flex-col gap-4">
                                    {/* Lead 1 */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        className="bg-[#2A2A2A] rounded-2xl p-4 flex items-center justify-between border border-white/5"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <img 
                                                    src="/assets/alistair-avatar.png" 
                                                    alt="Alistair G." 
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <div className="absolute top-0 right-0 w-3 h-3 bg-[#36d78e] rounded-full border-2 border-[#2A2A2A]"></div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-white font-inter font-bold text-[16px]">Alistair G.</span>
                                                <span className="text-[#9CA3AF] font-inter text-[12px]">8+ messages</span>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-[#36d78e]/10 flex items-center justify-center border border-[#36d78e]/20">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#36d78e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M22 6L12 13L2 6" stroke="#36d78e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </motion.div>

                                    {/* Lead 2 */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 1.0 }}
                                        className="bg-[#2A2A2A] rounded-2xl p-4 flex items-center justify-between border border-white/5 opacity-80"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img 
                                                src="/assets/thomas-avatar.png" 
                                                alt="Thomas A." 
                                                className="w-12 h-12 rounded-full object-cover filter grayscale-[0.5]"
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-white font-inter font-bold text-[16px]">Thomas A.</span>
                                                <span className="text-[#9CA3AF] font-inter text-[12px]">3+ messages</span>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-[#36d78e]/10 flex items-center justify-center border border-[#36d78e]/20 opacity-50">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#36d78e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M22 6L12 13L2 6" stroke="#36d78e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Box Footer Text */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                    className="mt-8 flex flex-col items-center gap-3"
                                >
                                    <span className="text-white font-inter font-bold text-[18px] md:text-[22px] tracking-tight uppercase">
                                        A LEAD COMES IN
                                    </span>
                                    <p className="text-[#9CA3AF] font-inter text-[14px] md:text-[16px] leading-[1.6]">
                                        From your website, campaigns, or other messaging channels, and then the <span className="text-white font-bold italic">magic begins.</span>
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* Spacer */}
                            <div className="h-12"></div>

                            {/* AI Takes Over Section */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="w-full bg-[#1A1A1A] rounded-[32px] p-6 md:p-10 border border-white/5 shadow-inner"
                            >
                                <div className="bg-[#2A2A2A] rounded-2xl p-6 border border-white/5 relative overflow-hidden">
                                    {/* Chat Interface Mockup */}
                                    <div className="flex flex-col gap-6">
                                        {/* AI Bubble */}
                                        <motion.div 
                                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center overflow-hidden shrink-0 border border-white/10">
                                                <img src="/assets/after5-logic-logo.png" alt="After5 AI" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="bg-[#36d78e] text-primary p-4 rounded-2xl rounded-tl-none max-w-[85%] text-left shadow-lg shadow-[#36d78e]/10">
                                                <p className="font-inter font-medium text-[14px] leading-tight text-primary">
                                                    Haha I totally agree! So, was the speed-to-lead issue mostly after 5pm, or during the day as well?
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* User Typing indicator */}
                                        <motion.div 
                                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                                            className="flex items-center justify-end gap-3 self-end"
                                        >
                                            <div className="bg-white p-4 rounded-2xl rounded-tr-none flex items-center gap-1.5 shadow-xl shadow-white/5">
                                                <div className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                                <div className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                                <div className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border-2 border-white/10 p-0.5 shadow-lg">
                                                <img src="/assets/chat-user.png" alt="User" className="w-full h-full rounded-full object-cover" />
                                            </div>
                                        </motion.div>

                                        {/* Message Input Mockup */}
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 1.4 }}
                                            className="mt-4 flex items-center gap-3"
                                        >
                                            <div className="flex-1 bg-white/5 rounded-2xl px-5 py-4 text-left border border-white/10">
                                                <span className="text-[#9CA3AF] text-[15px]">Send message</span>
                                            </div>
                                            <motion.div 
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-12 h-12 rounded-full bg-[#36d78e] flex items-center justify-center shadow-[0_0_20px_rgba(54,215,142,0.3)] cursor-pointer"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-12">
                                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                                </svg>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Section Footer Text */}
                                <div className="mt-8 flex flex-col items-center gap-3">
                                    <span className="text-white font-inter font-bold text-[18px] md:text-[22px] tracking-tight uppercase">
                                        AI TAKES OVER
                                    </span>
                                    <p className="text-[#9CA3AF] font-inter text-[14px] md:text-[16px] leading-[1.6] max-w-[400px]">
                                        It replies instantly, adapts to responses, and <span className="text-white font-bold">gathers the information</span> team needs.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Stage Two & Three Transition Area */}
                            <div className="w-full flex flex-wrap justify-between items-center px-4 gap-y-6 mt-6 mb-6">
                                {/* Stage Two (Left) */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="flex flex-col items-start gap-1 -translate-y-4"
                                >
                                    <div className="ml-2 mb-2">
                                        <img 
                                            src="/assets/stage-two-arrow.svg" 
                                            alt="Transition up-right" 
                                            className="w-[60px] md:w-[70px] h-auto opacity-95"
                                        />
                                    </div>
                                    <span className="text-[#36d78e] font-caveat font-bold text-[24px] md:text-[32px] tracking-tight transform -rotate-3">
                                        Stage Two
                                    </span>
                                </motion.div>

                                {/* Stage Three (Right) */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex flex-col items-end gap-1"
                                >
                                    <span className="text-[#36d78e] font-caveat font-bold text-[24px] md:text-[32px] tracking-tight transform rotate-3">
                                        Stage Three
                                    </span>
                                    <div className="mr-6 transform rotate-165 scale-y-[-1]">
                                        <img 
                                            src="/assets/arrow-squiggle.svg" 
                                            alt="Transition down" 
                                            className="w-[50px] md:w-[60px] h-auto opacity-95"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sales Steps In Section */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="w-full bg-[#1A1A1A] rounded-[32px] p-4 sm:p-6 md:p-10 border border-white/5 shadow-inner"
                            >
                                <div className="flex flex-col gap-4">
                                    {/* Lead 1: Gwen */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        className="bg-[#2A2A2A] rounded-2xl p-3 sm:p-4 flex flex-col min-[420px]:flex-row items-start min-[420px]:items-center justify-between gap-4 border border-white/5 shadow-lg shadow-black/20"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src="/assets/gwen-avatar.png" alt="Gwen S." className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md" />
                                            <div className="flex flex-col items-start text-left">
                                                <span className="text-white font-inter font-bold text-[15px] sm:text-[16px]">Gwen S.</span>
                                                <span className="bg-[#36d78e]/10 text-[#36d78e] px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold mt-1">Qualified</span>
                                            </div>
                                        </div>
                                        <button className="w-full min-[420px]:w-auto bg-white/5 text-white/70 px-4 py-2 rounded-xl text-[12px] font-bold border border-white/10 flex items-center justify-center min-[420px]:justify-start gap-2 transition-colors hover:bg-white/10">
                                            View Profile <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </button>
                                    </motion.div>

                                    {/* Lead 2: Robert */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 1 }}
                                        className="bg-[#2A2A2A] rounded-2xl p-3 sm:p-4 flex flex-col min-[420px]:flex-row items-start min-[420px]:items-center justify-between gap-4 border border-white/5"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src="/assets/robert-avatar.png" alt="Robert M." className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover opacity-80" />
                                            <div className="flex flex-col items-start text-left">
                                                <span className="text-white font-inter font-bold text-[15px] sm:text-[16px]">Robert M.</span>
                                                <span className="bg-[#FF9500]/10 text-[#FF9500] px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold mt-1 whitespace-normal min-[420px]:whitespace-nowrap">Pending 70% complete</span>
                                            </div>
                                        </div>
                                        <button className="w-full min-[420px]:w-auto bg-white/5 text-white/70 px-4 py-2 rounded-xl text-[12px] font-bold border border-white/10 flex items-center justify-center min-[420px]:justify-start gap-2">
                                            View Profile <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </button>
                                    </motion.div>

                                    {/* Lead 3: Norman */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 1.2 }}
                                        className="bg-[#2A2A2A] rounded-2xl p-3 sm:p-4 flex flex-col min-[420px]:flex-row items-start min-[420px]:items-center justify-between gap-4 border border-white/5"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src="/assets/norman-avatar.png" alt="Norman C." className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover opacity-80" />
                                            <div className="flex flex-col items-start text-left">
                                                <span className="text-white font-inter font-bold text-[15px] sm:text-[16px]">Norman C.</span>
                                                <span className="bg-[#FF9500]/10 text-[#FF9500] px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold mt-1 whitespace-normal min-[420px]:whitespace-nowrap">Pending 35% complete</span>
                                            </div>
                                        </div>
                                        <button className="w-full min-[420px]:w-auto bg-white/5 text-white/70 px-4 py-2 rounded-xl text-[12px] font-bold border border-white/10 flex items-center justify-center min-[420px]:justify-start gap-2">
                                            View Profile <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Section Footer Text */}
                                <div className="mt-10 flex flex-col items-center gap-3">
                                    <span className="text-white font-inter font-bold text-[20px] md:text-[24px] tracking-tight uppercase">
                                        SALES STEPS IN
                                    </span>
                                    <p className="text-[#9CA3AF] font-inter text-[14px] md:text-[16px] leading-[1.6] max-w-[400px]">
                                        Only once the lead is <span className="text-white font-bold">qualified</span> and ready for next steps.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LowerSection;
