import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGlowTrigger } from "../hooks/useGlowTrigger";

const Hero = () => {
  const glowRef = useGlowTrigger("hero");
  return (
    <section className="relative pt-44 lg:pt-56 pb-0 overflow-hidden bg-background">
      {/* Background grid using SVG pattern for clean, non-overlapping lines */}
      <div
        className="absolute inset-x-0 top-0 h-[1000px] z-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Crect width='90' height='90' fill='rgba(0,0,0,0.05)'/%3E%3Crect x='90' y='90' width='90' height='90' fill='rgba(0,0,0,0.05)'/%3E%3Cpath d='M90 0v180M0 90h180' stroke='rgba(0,0,0,0.2)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70% , transparent 100%)',
        }}
      />

      {/* Soft white radial center glow to highlight the text */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-white/80 blur-[130px] opacity-80 pointer-events-none z-0" />

      <div className="max-w-[1411px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="font-cabinet font-bold text-[44px] min-[400px]:text-[52px] leading-none md:text-8xl tracking-tighter text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)] md:drop-shadow-none">
              <span className="block md:inline">
                <span className="font-medium opacity-80">We Turn</span>{" "}
                <span className="uppercase text-primary font-bold">LEADS</span>{" "}
                <span className="font-medium opacity-80">Into</span>
              </span>
              <span className="hidden md:inline"> </span>
              <span className="uppercase text-primary block md:inline text-[52px] min-[400px]:text-[64px] md:text-8xl mt-1 md:mt-2 tracking-[-1px] md:tracking-tighter">
                REVENUE
              </span>
              <span className="font-cabinet font-normal text-[28px] min-[400px]:text-[32px] md:text-7xl mt-4 md:mt-6 block tracking-normal drop-shadow-none">
                With 24/7 AI Sales Reps
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-inter text-[17px] md:text-xl text-primary/80 max-w-2xl leading-relaxed px-4 md:px-0 mt-[-10px] md:mt-0"
          >
            We build{" "}
            <span className="font-bold text-primary">
              bespoke AI Sales Agents
            </span>{" "}
            to catch, qualify, follow up and book your leads across{" "}
            <span className="font-bold text-primary">WhatsApp</span>,{" "}
            <span className="font-bold text-primary">email</span> or{" "}
            <span className="font-bold text-primary">sms</span>. 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center mt-2 md:mt-0"
          >
            <Link to="/demo" className="inline-block">
              <button className="bg-primary text-white font-inter font-bold px-[24px] md:px-[32px] h-[64px] md:h-[72.661px] rounded-[99.55px] flex items-center justify-center gap-[12px] hover:scale-105 transition-all text-[16px] md:text-[19.463px] group whitespace-nowrap shadow-xl">
                Try a Demo Here
                <div className="w-[36px] h-[36px] md:w-[40px] md:h-[41px] bg-accent-green rounded-full flex items-center justify-center group-hover:bg-accent-green/90 transition-colors shrink-0">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 18 20"
                    fill="none"
                    className="ml-1 md:w-[18px] md:h-[20px]"
                  >
                    <path d="M18 10L0 20V0L18 10Z" fill="#000000" />
                  </svg>
                </div>
              </button>
            </Link>
          </motion.div>

          {/* Dashboard Preview - exactly half crop, responsive */}
          <div className="w-full px-2 min-[400px]:px-4 md:px-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="w-full mt-10 rounded-t-[16px] md:rounded-t-[30px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-b-0 border-black/10 overflow-hidden relative h-[180px] sm:h-auto sm:max-h-[380px] md:max-h-[600px]"
            >
              <img
                src="/assets/dashboard.svg"
                alt="After5 Dashboard"
                className="w-full h-full sm:h-auto block object-cover sm:object-contain object-top"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* CRM Logos Header — Static and Centered */}
      <motion.div
        ref={glowRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 flex flex-col items-center bg-background md:pt-16 pt-8 pb-4"
      >
        <p className="font-inter font-semibold text-primary/60 text-[13px] tracking-[0.3em] uppercase text-center">
          20+ CRM’S WE INTEGRATE WITH
        </p>
      </motion.div>

      {/* CRM Logos Bar — infinite marquee scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full bg-background mt-0 pb-12 overflow-hidden"
      >
        {/* Marquee track: three copies side-by-side for seamless loop */}
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          <img
            src="/assets/crm-integrations.svg"
            alt="CRM Integrations"
            style={{
              width: "1708px",
              height: "auto",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="/assets/crm-integrations.svg"
            alt=""
            aria-hidden="true"
            style={{
              width: "1708px",
              height: "auto",
              display: "block",
              flexShrink: 0,
            }}
          />
          <img
            src="/assets/crm-integrations.svg"
            alt=""
            aria-hidden="true"
            style={{
              width: "1708px",
              height: "auto",
              display: "block",
              flexShrink: 0,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
