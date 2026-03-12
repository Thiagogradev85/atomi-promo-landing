import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import ProductsSection from '../components/ProductsSection';
import PromoConditions from '../components/PromoConditions';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';

export default function LandingV1() {
  return (
    <div className="min-h-screen bg-atomi-black">
      {/* Top urgency bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="bg-atomi-orange text-white text-xs font-bold text-center py-2 px-4 flex items-center justify-center gap-2 z-[60] relative"
      >
        <FaFire className="animate-pulse" />
        <span>🚨 MEGA PROMOÇÃO PACK SHOROOW — FEVEREIRO A MARÇO 2026 — ESTOQUE LIMITADO!</span>
        <FaFire className="animate-pulse" />
      </motion.div>

      <Navbar variant="orange" />
      <HeroBanner variant="orange" />
      <ProductsSection variant="orange" />
      <PromoConditions variant="orange" />
      <AboutSection variant="orange" />
      <ContactForm variant="orange" />
      <Footer variant="orange" />
      <WhatsAppButton />
    </div>
  );
}
