import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  function handleClick() {
    const section = document.getElementById('contato');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Dispara o hashchange manualmente para acionar o highlight do dropdown
      history.pushState(null, '', '#contato');
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-xl shadow-2xl max-w-[220px] text-right"
          >
            <p className="font-bold text-green-700">Fale conosco!</p>
            <p className="text-xs text-gray-500 mt-0.5">Selecione seu estado e fale com o consultor</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-16 h-16 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-colors duration-200"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <FaWhatsapp size={32} className="text-white relative z-10" />
        <span className="absolute w-16 h-16 rounded-full bg-green-500 opacity-40 animate-ping" />
      </motion.button>
    </div>
  );
}
