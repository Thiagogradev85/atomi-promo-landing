import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheckCircle, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';
import { MdStorefront } from 'react-icons/md';
import { brazilianStates, getSellerByState } from '../data/salespeople';
import SellerModal from './SellerModal';

export default function ContactForm({ variant = 'orange' }) {
  const [selectedState, setSelectedState] = useState('');
  const [modalSeller, setModalSeller] = useState(null);
  const [modalStateName, setModalStateName] = useState('');
  const [highlight, setHighlight] = useState(false);
  const selectRef = useRef(null);

  // Quando o usuário chega pelo botão (#contato), destaca e foca o dropdown
  useEffect(() => {
    function onHashChange() {
      if (window.location.hash === '#contato') {
        setHighlight(true);
        setTimeout(() => {
          selectRef.current?.focus();
          setHighlight(false);
        }, 1200);
      }
    }
    window.addEventListener('hashchange', onHashChange);
    // Checa no mount também (caso o hash já esteja lá)
    if (window.location.hash === '#contato') {
      setTimeout(() => {
        setHighlight(true);
        setTimeout(() => {
          selectRef.current?.focus();
          setHighlight(false);
        }, 1200);
      }, 600);
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isOrange = variant === 'orange';
  const accentColor = isOrange ? 'text-atomi-orange' : 'text-atomi-gold';
  const accentBg = isOrange
    ? 'bg-atomi-orange hover:bg-atomi-orange-dark'
    : 'bg-atomi-gold hover:bg-atomi-gold-light text-black';
  const accentBorder = isOrange ? 'border-atomi-orange' : 'border-atomi-gold';
  const focusBorder = isOrange
    ? 'focus:border-atomi-orange focus:ring-atomi-orange/20'
    : 'focus:border-atomi-gold focus:ring-atomi-gold/20';

  const selectClass = `w-full bg-black/50 border border-gray-700 ${focusBorder} focus:ring-2 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer`;

  function handleStateChange(e) {
    const code = e.target.value;
    setSelectedState(code);
    if (!code) return;

    const stateObj = brazilianStates.find((s) => s.code === code);
    const seller = getSellerByState(code);

    if (seller) {
      setModalSeller(seller);
      setModalStateName(stateObj?.name ?? code);
    }
  }

  function closeModal() {
    setModalSeller(null);
    setModalStateName('');
  }

  const selectedStateObj = brazilianStates.find((s) => s.code === selectedState);
  const sellerForSelected = selectedState ? getSellerByState(selectedState) : null;

  return (
    <>
      <section id="contato" className="py-20 md:py-28 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ── Coluna esquerda: Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className={`text-xs uppercase tracking-widest font-bold ${accentColor} block mb-4`}>
                Garanta sua Oferta
              </span>
              <h2 className="font-display text-4xl md:text-5xl tracking-wider text-white mb-2">
                FALE CONOSCO
              </h2>
              <div className={`h-1 w-16 rounded bg-gradient-to-r ${isOrange ? 'from-atomi-orange' : 'from-atomi-gold'} to-transparent mb-6`} />

              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Selecione seu estado e conecte-se diretamente com o consultor ATOMI responsável pela sua região.
                Atendimento personalizado via WhatsApp, sem burocracia.
              </p>

              {/* Benefícios */}
              <div className="space-y-4">
                {[
                  'Atendimento personalizado para distribuidores',
                  'Mix de modelos disponível no pack de 4 unidades',
                  'Prazo de entrega e logística flexível',
                  'Suporte técnico e pós-venda garantido',
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <FaCheckCircle className={`${accentColor} mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-400 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Coluna direita: Seletor de estado ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-atomi-card border border-gray-800 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <MdStorefront className={`${accentColor} text-2xl`} />
                <h3 className="text-white font-bold text-lg">
                  Encontre seu Consultor
                </h3>
              </div>

              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Cada estado tem um consultor dedicado. Selecione seu estado para ver o consultor responsável pela sua região e falar diretamente com ele no WhatsApp.
              </p>

              {/* Dropdown de estado */}
              <motion.div
                className="relative mb-6"
                animate={highlight ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.4, repeat: highlight ? 2 : 0 }}
              >
                <label className={`text-xs mb-1.5 flex items-center gap-1.5 font-medium transition-colors duration-300 ${highlight ? accentColor : 'text-gray-500'}`}>
                  <FaMapMarkerAlt size={11} />
                  Selecione seu estado
                </label>
                <div className={`relative rounded-xl transition-all duration-300 ${highlight ? `ring-2 ${isOrange ? 'ring-atomi-orange' : 'ring-atomi-gold'} ring-offset-2 ring-offset-atomi-card` : ''}`}>
                  <select
                    ref={selectRef}
                    value={selectedState}
                    onChange={handleStateChange}
                    className={selectClass}
                  >
                    <option value="">— Escolha seu estado —</option>
                    {brazilianStates.map((s) => (
                      <option key={s.code} value={s.code}>
                        {s.name} ({s.code})
                      </option>
                    ))}
                  </select>
                  <FaChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={13}
                  />
                </div>
              </motion.div>

              {/* Feedback após seleção */}
              {selectedState && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {sellerForSelected ? (
                    /* Estado com consultor → botão para abrir modal */
                    <div className={`border ${accentBorder} rounded-xl p-4 text-center`}>
                      <p className="text-gray-400 text-sm mb-3">
                        Consultor disponível para{' '}
                        <span className={`${accentColor} font-semibold`}>
                          {selectedStateObj?.name}
                        </span>
                        !
                      </p>
                      <button
                        onClick={() => {
                          setModalSeller(sellerForSelected);
                          setModalStateName(selectedStateObj?.name ?? selectedState);
                        }}
                        className={`w-full ${accentBg} font-black py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 text-sm`}
                      >
                        <FaWhatsapp size={18} />
                        Ver consultor e falar no WhatsApp
                      </button>
                    </div>
                  ) : (
                    /* Estado sem consultor cadastrado */
                    <div className="border border-gray-700 rounded-xl p-4 text-center">
                      <p className="text-gray-400 text-sm mb-3">
                        Ainda não temos um consultor cadastrado para{' '}
                        <span className="text-white font-semibold">
                          {selectedStateObj?.name}
                        </span>
                        . Entre em contato pelo canal geral:
                      </p>
                      <a
                        href={`https://wa.me/5500000000000?text=${encodeURIComponent(`🏍️ Olá! Tenho interesse na promoção Pack Shoroow ATOMI. Sou do estado de ${selectedStateObj?.name}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-700 hover:bg-green-600 text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 text-sm"
                      >
                        <FaWhatsapp size={18} />
                        Falar pelo WhatsApp Geral
                      </a>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Estado inicial (sem seleção) */}
              {!selectedState && (
                <p className="text-gray-700 text-xs text-center mt-2">
                  Selecione um estado para ver o consultor disponível
                </p>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Modal do vendedor */}
      {modalSeller && (
        <SellerModal
          seller={modalSeller}
          stateName={modalStateName}
          onClose={closeModal}
          variant={variant}
        />
      )}
    </>
  );
}
