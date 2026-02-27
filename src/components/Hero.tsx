import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-0 overflow-hidden bg-[#FAFAFA]">
      {/* Background geometric shapes (hero-bg.png) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.12] mix-blend-multiply"
        style={{
          backgroundImage: "url(/assets/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Soft white radial center glow to highlight the text */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-white/90 blur-[130px] opacity-90 pointer-events-none z-0" />

      <div className="max-w-[1411px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-cabinet font-bold text-[38px] min-[400px]:text-[42px] leading-[1.1] md:text-7xl tracking-tighter text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)] md:drop-shadow-none">
              <span className="block md:inline">
                <span className="font-medium opacity-80">We Turn</span>{" "}
                <span className="uppercase text-primary font-bold">LEADS</span>{" "}
                <span className="font-medium opacity-80">Into</span>
              </span>
              <span className="hidden md:inline"> </span>
              <span className="uppercase text-primary block md:inline text-[48px] min-[400px]:text-[54px] md:text-7xl mt-1 md:mt-0 tracking-[-1px] md:tracking-tighter">
                REVENUE
              </span>
              <span className="font-cabinet font-normal text-[26px] min-[400px]:text-[28px] md:text-6xl mt-3 md:mt-4 block tracking-normal drop-shadow-none">
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
              className="w-full mt-10 rounded-t-[16px] md:rounded-t-[30px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-b-0 border-black/10 overflow-hidden relative"
              style={{ maxHeight: "65vh" }}
            >
              <img
                src="/assets/dashboard.svg"
                alt="After5 Dashboard"
                className="w-[150%] min-[400px]:w-[140%] sm:w-[120%] md:w-full max-w-none md:max-w-full h-auto block object-cover md:object-contain object-left-top md:object-top"
                style={{ transform: "translateX(-4%) md:translateX(0)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* CRM Logos Header — Static and Centered */}
      <div className="relative z-10 flex flex-col items-center bg-background pt-16 pb-4">
        <p className="font-inter font-semibold text-primary/60 text-[13px] tracking-[0.3em] uppercase text-center">
          20+ CRM’S WE INTEGRATE WITH
        </p>
      </div>

      {/* CRM Logos Bar — infinite marquee scroll */}
      <div className="relative z-10 w-full bg-background mt-0 pb-12 overflow-hidden">
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
      </div>
    </section>
  );
};

export default Hero;
