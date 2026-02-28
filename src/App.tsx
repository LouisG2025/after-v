import { Routes, Route } from "react-router-dom";
import FloatingNavbar from "./components/FloatingNavbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import GapHighlight from "./components/GapHighlight";
import SpeedToLead from "./components/SpeedToLead";
import MobileFrame from "./components/MobileFrame";
import HowItWorks from "./components/HowItWorks";
import HowWeWorkSection from "./components/HowWeWork";
import LowerSection from "./components/LowerSection";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import HowWeWork from "./pages/HowWeWork";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import { usePageMeta } from "./hooks/usePageMeta";
import { CtaGlowProvider } from "./context/CtaGlowContext";

const Home = () => {
  usePageMeta({
    title: "After5 Digital - AI Sales Agents for 24/7 Lead Conversion",
    description:
      "After5 builds bespoke AI sales agents to catch, qualify, and follow up with your leads across WhatsApp, email, and SMS, 24/7.",
  });

  return (
    <>
      <Hero />
      <Problem />
      <Solution />

      <div className="w-full bg-[#FAFAFA] px-4 py-20 lg:p-24">
        <div className="bg-primary relative overflow-hidden rounded-[30px] lg:rounded-[48px] max-w-[1411px] mx-auto shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)]">
          <SpeedToLead />
          <MobileFrame />
        </div>
      </div>

      <HowItWorks />
      <LowerSection />
      <GapHighlight />
      <HowWeWorkSection />
      <FAQ />
      <CTA />
    </>
  );
};

function App() {
  return (
    <CtaGlowProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollToTop />
        <FloatingNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CtaGlowProvider>
  );
}

export default App;
