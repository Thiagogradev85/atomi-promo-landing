import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar({ variant = 'orange' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isV2 = location.pathname === '/v2';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? `bg-black/95 backdrop-blur-md border-b ${borderColor} shadow-lg`
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className={`font-display text-3xl tracking-widest ${accentColor}`}>
              ATOMI
            </span>
            <span className="text-gray-400 text-xs font-medium hidden sm:block">
              PACK SHOROOW
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

          {/* Version Switch */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/v1"
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                !isV2
                  ? 'bg-atomi-orange border-atomi-orange text-white'
                  : 'border-gray-600 text-gray-400 hover:border-atomi-orange hover:text-atomi-orange'
              }`}
            >
              Versão 1
            </Link>
            <Link
              to="/v2"
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                isV2
                  ? 'bg-atomi-purple border-atomi-purple text-white'
                  : 'border-gray-600 text-gray-400 hover:border-atomi-purple hover:text-atomi-purple-light'
              }`}
            >
              Versão 2
            </Link>

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
              <div className="flex gap-3 pt-2">
                <Link to="/v1" onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center text-xs px-3 py-2 rounded-full border border-atomi-orange text-atomi-orange">
                  Versão 1
                </Link>
                <Link to="/v2" onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center text-xs px-3 py-2 rounded-full border border-atomi-purple text-atomi-purple-light">
                  Versão 2
                </Link>
              </div>
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
