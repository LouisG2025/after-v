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

const Home = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <SpeedToLead />
      <MobileFrame />
      <HowItWorks />
      <LowerSection />
      <GapHighlight />
      <HowWeWorkSection />
      <FAQ />
      <CTA />
    </>
  );
}

function App() {
  return (
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
  );
}

export default App;
