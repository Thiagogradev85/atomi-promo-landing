import { motion } from 'framer-motion';
import { FaFire, FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { MdElectricScooter } from 'react-icons/md';
import CountdownTimer from './CountdownTimer';

export default function HeroBanner({ variant = 'orange' }) {
  const isOrange = variant === 'orange';

  const accentColor = isOrange ? 'text-atomi-orange' : 'text-atomi-gold';
  const btnBg = isOrange
    ? 'bg-atomi-orange hover:bg-atomi-orange-dark shadow-atomi-orange/30'
    : 'bg-atomi-gold hover:bg-atomi-gold-light shadow-atomi-gold/30 text-black';
  const btnOutline = isOrange
    ? 'border-atomi-orange text-atomi-orange hover:bg-atomi-orange hover:text-white'
    : 'border-atomi-gold text-atomi-gold hover:bg-atomi-gold hover:text-black';

  return (
    <section
      id="inicio"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-28 ${
        isOrange ? 'bg-hero-dark' : 'bg-hero-purple'
      } bg-hero-pattern`}
    >
      {/* Ambient glow */}
      <div className={`absolute inset-0 pointer-events-none`}>
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full filter blur-[120px] opacity-10 ${
          isOrange ? 'bg-atomi-orange' : 'bg-atomi-purple'
        }`} />
        {!isOrange && (
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] rounded-full filter blur-[100px] opacity-10 bg-atomi-gold" />
        )}
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Promo Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 mb-8"
      >
        <div className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-bold ${
          isOrange
            ? 'border-atomi-orange/40 text-atomi-orange bg-atomi-orange/10'
            : 'border-atomi-gold/40 text-atomi-gold bg-atomi-gold/10'
        }`}>
          <FaFire className="animate-pulse" />
          <span>PACK SHOROOW — FEV/ABR 2026</span>
          <FaFire className="animate-pulse" />
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-white leading-none mb-2">
          MEGA
        </h1>
        <h1 className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider ${accentColor} leading-none mb-2`}>
          PROMOÇÃO
        </h1>
        <h2 className="text-gray-300 text-xl sm:text-2xl md:text-3xl font-light tracking-widest mb-6">
          BIKES & PATINETES ELÉTRICOS ATOMI
        </h2>

        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Preços especiais por tempo limitado! Pack mínimo de{' '}
          <span className={`${accentColor} font-bold`}>4 unidades</span>. Exclusivo
          Pack Shoroow — enquanto durar o estoque.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <motion.a
            href="#produtos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${btnBg} text-white font-black text-lg px-10 py-4 rounded-xl shadow-xl transition-all duration-300 flex items-center gap-2 justify-center`}
          >
            <MdElectricScooter size={24} />
            Ver Produtos
          </motion.a>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`border-2 ${btnOutline} font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 justify-center relative overflow-hidden`}
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping" />
              <FaWhatsapp size={22} className="relative text-green-400" />
            </span>
            Fale Conosco
          </motion.a>
        </div>
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 text-center mb-24 sm:mb-28"
      >
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-medium">
          ⏰ Promoção encerra em
        </p>
        <CountdownTimer variant={variant === 'orange' ? 'orange' : 'gold'} />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600"
      >
        <FaChevronDown size={20} />
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/40 backdrop-blur-sm"
      >
        <div className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-3 gap-4">
          {[
            { value: '20+', label: 'Países Atendidos' },
            { value: '2000', label: 'Fundada em' },
            { value: 'ISO 9001', label: 'Certificação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`font-display text-xl sm:text-2xl ${accentColor}`}>{stat.value}</p>
              <p className="text-gray-600 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
