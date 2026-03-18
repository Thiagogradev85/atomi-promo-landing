import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ variant = 'orange' }) {
  const { toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const accentColor = variant === 'gold' ? 'text-atomi-gold' : 'text-atomi-orange';
  const accentBg = variant === 'gold' ? 'bg-atomi-gold' : 'bg-atomi-orange';
  const borderColor = variant === 'gold' ? 'border-atomi-gold/30' : 'border-atomi-orange/30';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Produtos', href: '#produtos' },
    { label: 'Promoção', href: '#promocao' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? `bg-black/95 backdrop-blur-md border-b ${borderColor} shadow-lg`
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/atomi-logo.png"
              alt="Atomi"
              className="h-8 md:h-10 w-auto"
            />
            <span className="text-gray-400 text-xs font-medium hidden sm:block">
              PACK SHOWROOM
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-gray-300 hover:${accentColor} transition-colors duration-200 text-sm font-medium`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.92 }}
              title={variant === 'orange' ? 'Mudar para tema Dourado' : 'Mudar para tema Laranja'}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-300"
              style={
                variant === 'gold'
                  ? { borderColor: '#D4AF37', color: '#D4AF37', background: 'rgba(212,175,55,0.1)' }
                  : { borderColor: '#F97316', color: '#F97316', background: 'rgba(249,115,22,0.1)' }
              }
            >
              <span style={{ fontSize: 13 }}>{variant === 'gold' ? '🟠' : '🟣'}</span>
              <span>V{variant === 'gold' ? '2' : '1'}</span>
            </motion.button>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contato"
              className={`${accentBg} text-white text-sm font-bold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2`}
            >
              <span className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-50 animate-ping" />
                <FaWhatsapp size={16} className="relative" />
              </span>
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-gray-300 hover:${accentColor} transition-colors py-2 border-b border-gray-800 text-sm font-medium`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { toggle(); setMobileOpen(false); }}
                className="text-sm font-bold py-2 rounded-lg border flex items-center justify-center gap-2"
                style={
                  variant === 'gold'
                    ? { borderColor: '#D4AF37', color: '#D4AF37', background: 'rgba(212,175,55,0.1)' }
                    : { borderColor: '#F97316', color: '#F97316', background: 'rgba(249,115,22,0.1)' }
                }
              >
                <span>{variant === 'gold' ? '🟠' : '🟣'}</span>
                Trocar tema (V{variant === 'gold' ? '1' : '2'})
              </button>

              <a href="#contato" onClick={() => setMobileOpen(false)}
                className={`${accentBg} text-white text-center font-bold py-3 rounded-lg flex items-center justify-center gap-2`}>
                <span className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-50 animate-ping" />
                  <FaWhatsapp size={16} className="relative" />
                </span>
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
