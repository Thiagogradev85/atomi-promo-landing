import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import ProductsSection from '../components/ProductsSection';
import PromoConditions from '../components/PromoConditions';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

// Floating particles component for V2
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 4,
    color: i % 2 === 0 ? '#7C3AED' : '#D4AF37',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            delay: p.delay,
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Easter badge floating element
function EasterBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring' }}
      className="fixed top-24 right-4 z-40 hidden lg:block"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="easter-badge text-white text-xs font-black px-3 py-2 rounded-full text-center shadow-xl"
      >
        <div className="text-lg">🐰</div>
        <div>PÁSCOA</div>
        <div>2026</div>
      </motion.div>
    </motion.div>
  );
}

export default function LandingV2() {
  return (
    <div className="min-h-screen bg-hero-purple relative">
      <Particles />

      {/* Top urgency bar — Purple/Gold version */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="relative z-[60] text-xs font-bold text-center py-2 px-4 flex items-center justify-center gap-2"
        style={{
          background: 'linear-gradient(90deg, #5B21B6, #7C3AED, #D4AF37, #7C3AED, #5B21B6)',
          backgroundSize: '200% auto',
          animation: 'shimmer 4s linear infinite',
        }}
      >
        <span className="text-white">
          🐰 PROMOÇÃO DE PÁSCOA PACK SHOROOW — FEV/MAR 2026 — BIKES & PATINETES ELÉTRICOS ATOMI 🥚
        </span>
      </motion.div>

      <EasterBadge />
      <Navbar variant="gold" />
      <HeroBanner variant="gold" />

      {/* Products with alternate layout highlight */}
      <div className="relative z-10">
        <ProductsSection variant="gold" />
      </div>

      <div className="relative z-10">
        <PromoConditions variant="gold" />
      </div>

      <div className="relative z-10">
        <AboutSection variant="gold" />
      </div>

      <div className="relative z-10">
        <ContactForm variant="gold" />
      </div>

      <div className="relative z-10">
        <Footer variant="gold" />
      </div>

      <WhatsAppButton />
    </div>
  );
}
