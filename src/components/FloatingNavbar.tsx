import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCtaGlow } from "../context/CtaGlowContext";

const FloatingNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isGlowActive } = useCtaGlow();

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "How We Work", href: "/how-we-work" },
        { name: "Demo", href: "/demo" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div
                className={`
                    relative flex items-center justify-between md:justify-start
                    w-full max-w-[1143px] h-[64.8px]
                    bg-white/80 backdrop-blur-xl
                    rounded-[66px] border border-white/20
                    transition-all duration-300 px-[26.5px] md:px-0
                    ${scrolled ? "shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] scale-[0.98]" : "shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)]"}
                `}
            >
                {/* Logo Section - Official SVG Logo */}
                <div className="md:absolute md:left-[26.5px] md:top-[17px] flex items-center">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <img
                            src="/assets/v-logo.svg"
                            alt="after5 logo"
                            className="h-[27px] w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Mobile CTA Button - Compact */}
                <div className="md:hidden flex items-center ml-auto mr-4">
                    <Link to="/contact">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-white font-inter font-bold pl-5 pr-4 h-[38px] rounded-full text-[13px] flex items-center justify-center gap-2 shadow-sm"
                        >
                            Book a Call
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="#2EFFA1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 bg-primary transition-transform duration-300 origin-center"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-6 h-0.5 bg-primary transition-opacity duration-300"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 bg-primary transition-transform duration-300 origin-center"
                    />
                </button>

                {/* Navigation Links - Desktop */}
                <div className="hidden md:flex absolute left-[149px] top-1/2 -translate-y-[calc(50%+0.4px)] items-center gap-[18px]">
                    {navLinks.map((link) => (
                        link.href.startsWith("/") ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="font-inter font-semibold text-[16px] text-primary/70 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-inter font-semibold text-primary/70 text-[16px] hover:text-primary/60 transition-colors"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                </div>

                {/* CTA Button - Desktop */}
                <div className="hidden md:flex items-center absolute right-[4px] top-1/2 -translate-y-1/2">
                    <Link to="/contact">
                        <motion.button
                            whileHover="hover"
                            whileTap={{ scale: 0.97 }}
                            initial="rest"
                            animate="rest"
                            variants={{
                                rest: { scale: 1 },
                                hover: { scale: 1.04 }
                            }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="relative overflow-hidden bg-primary text-white font-inter font-bold w-[182px] h-[56.8px] rounded-[52px] text-[15px] flex items-center justify-between pl-7 pr-1.5 transition-all"
                        >
                            {/* Green shimmer sweep on hover */}
                            <motion.span
                                variants={{
                                    rest: { x: '-110%', skewX: -15 },
                                    hover: { x: '210%', skewX: -15 }
                                }}
                                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                                className="absolute inset-0 w-1/2 bg-accent-green/50 blur-sm pointer-events-none"
                            />

                            {/* Context-Aware Pulsed Glow */}
                            {isGlowActive && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0.4, 0.8, 0.4],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 rounded-[52px] bg-accent-green blur-md z-0"
                                />
                            )}

                            <span className="relative z-10">Book a Call</span>

                            {/* Styled Green Circle Arrow */}
                            <div className="relative z-10 w-11 h-11 bg-accent-green rounded-full flex items-center justify-center shrink-0">
                                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-[calc(100%+10px)] left-4 right-4 bg-white rounded-[24px] shadow-2xl border border-black/5 overflow-hidden flex flex-col"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-cabinet font-bold text-2xl text-primary border-b border-black/5 pb-4 last:border-0"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Link
                                to="/contact?tab=message"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4"
                            >
                                <button className="w-full bg-primary text-white font-inter font-bold h-[66px] rounded-full text-[17px] flex items-center justify-between pl-8 pr-2">
                                    <span className="relative z-10">Drop a Message</span>
                                    <div className="relative z-10 w-[50px] h-[50px] bg-accent-green rounded-full flex items-center justify-center shrink-0">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M3 8h10M9 4l4 4-4 4" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default FloatingNavbar;

