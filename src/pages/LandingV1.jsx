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

function EasterBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring' }}
      className="fixed top-32 right-4 z-40 hidden lg:block"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="easter-badge-orange text-white text-xs font-black px-3 py-2 rounded-full text-center shadow-xl"
      >
        <div className="text-lg">🐰</div>
        <div>PÁSCOA</div>
        <div>2026</div>
      </motion.div>
    </motion.div>
  );
}

export default function LandingV1() {
  return (
    <div className="min-h-screen bg-atomi-black">
      {/* Top urgency bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 h-8 bg-atomi-orange text-white text-xs font-bold text-center flex items-center justify-center gap-2 z-[60]"
      >
        <FaFire className="animate-pulse" />
        <span>🐰 PROMOÇÃO DE PÁSCOA PACK SHOROOW — FEV/ABR 2026 — ESTOQUE LIMITADO! 🥚</span>
        <FaFire className="animate-pulse" />
      </motion.div>

      <EasterBadge />
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
