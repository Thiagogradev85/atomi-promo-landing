import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const WHATSAPP_NUMBER = '5500000000000'; // Substitua pelo número real

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '🏍️ Olá! Vi a promoção Pack Shoroow da ATOMI e tenho interesse nos produtos. Pode me passar mais informações?'
  )}`;

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
            <p className="text-xs text-gray-500 mt-0.5">Atendimento via WhatsApp</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-16 h-16 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-colors duration-200"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp size={32} className="text-white" />
        {/* Pulse ring */}
        <span className="absolute w-16 h-16 rounded-full bg-green-500 opacity-40 animate-ping" />
      </motion.a>
    </div>
  );
}
