import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';

// Avatar com iniciais caso a foto não carregue
function AvatarFallback({ name, accentColor }) {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  return (
    <div
      className={`w-28 h-28 rounded-full flex items-center justify-center text-4xl font-black text-white border-4 ${accentColor}`}
      style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' }}
    >
      {initial}
    </div>
  );
}

// Gera caminhos alternativos: tenta .jpg primeiro, depois .png
function getPhotoSources(photo) {
  const base = photo.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  return [photo, `${base}.png`, `${base}.jpg`, `${base}.jpeg`, `${base}.webp`];
}

export default function SellerModal({ seller, stateName, onClose, variant = 'orange' }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const sources = getPhotoSources(seller.photo);
  const imgError = srcIndex >= sources.length;

  const isOrange = variant === 'orange';
  const accentBorderClass = isOrange ? 'border-atomi-orange' : 'border-atomi-gold';
  const accentTextClass = isOrange ? 'text-atomi-orange' : 'text-atomi-gold';
  const waBtnClass = 'bg-green-600 hover:bg-green-500 active:scale-95';

  const waMessage = `🏍️ Olá ${seller.name}! Vi a promoção na página Pack Showroom ATOMI e tenho interesse nos produtos. Sou do estado de ${stateName}. Pode me passar mais informações?`;
  const waUrl = `https://wa.me/${seller.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        {/* Modal */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-atomi-card border border-gray-800 rounded-2xl p-8 max-w-sm w-full relative text-center shadow-2xl"
        >
          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <FaTimes size={18} />
          </button>

          {/* Label estado */}
          <div className={`inline-flex items-center gap-1.5 ${accentTextClass} text-xs font-bold uppercase tracking-widest mb-5`}>
            <FaMapMarkerAlt size={12} />
            <span>{stateName}</span>
          </div>

          {/* Foto do vendedor */}
          <div className="flex justify-center mb-4">
            {imgError ? (
              <AvatarFallback name={seller.name} accentColor={accentBorderClass} />
            ) : (
              <img
                src={sources[srcIndex]}
                alt={`Vendedor ${seller.name}`}
                onError={() => setSrcIndex((i) => i + 1)}
                className={`w-28 h-28 rounded-full object-cover border-4 ${accentBorderClass} shadow-lg`}
              />
            )}
          </div>

          {/* Nome */}
          <h3 className="text-white text-2xl font-black mb-1">{seller.name}</h3>
          <p className="text-gray-500 text-sm mb-1">Consultor de Vendas ATOMI</p>

          {/* Estados atendidos */}
          <p className={`${accentTextClass} text-xs font-semibold mb-6`}>
            Atende: {seller.stateNames.join(' · ')}
          </p>

          {/* Linha divisória */}
          <div className="h-px bg-gray-800 mb-6" />

          {/* Botão WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full ${waBtnClass} text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 text-base`}
          >
            <FaWhatsapp size={22} className="shrink-0" />
            Falar com {seller.name} no WhatsApp
          </a>

          <p className="text-gray-600 text-xs mt-3">
            Você será redirecionado ao WhatsApp com uma mensagem pronta.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
