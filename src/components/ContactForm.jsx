import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import { products } from '../data/products';

const WHATSAPP_NUMBER = '5500000000000'; // Substitua pelo número real

export default function ContactForm({ variant = 'orange' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    quantity: '4',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const isOrange = variant === 'orange';
  const accentColor = isOrange ? 'text-atomi-orange' : 'text-atomi-gold';
  const accentBg = isOrange ? 'bg-atomi-orange hover:bg-atomi-orange-dark' : 'bg-atomi-gold hover:bg-atomi-gold-light text-black';
  const focusBorder = isOrange ? 'focus:border-atomi-orange focus:ring-atomi-orange/20' : 'focus:border-atomi-gold focus:ring-atomi-gold/20';
  const dividerColor = isOrange ? 'from-transparent via-atomi-orange/30 to-transparent' : 'from-transparent via-atomi-gold/30 to-transparent';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `🏍️ *Interesse Pack Shoroow ATOMI*\n\n👤 Nome: ${form.name}\n📧 Email: ${form.email}\n📱 Telefone: ${form.phone}\n🛵 Modelo: ${form.model || 'A definir'}\n📦 Quantidade: ${form.quantity} unidades\n💬 Mensagem: ${form.message || 'Tenho interesse na promoção Pack Shoroow!'}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const inputClass = `w-full bg-black/50 border border-gray-700 ${focusBorder} focus:ring-2 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200`;

  return (
    <section id="contato" className="py-20 md:py-28 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
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
              Preencha o formulário ou entre em contato direto pelo WhatsApp.
              Nossa equipe responderá rapidamente com todas as informações.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
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

            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('🏍️ Olá! Tenho interesse na promoção Pack Shoroow ATOMI!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors duration-200"
            >
              <FaWhatsapp size={20} />
              Falar pelo WhatsApp
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-atomi-card border border-gray-800 rounded-2xl p-6 md:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <FaCheckCircle className={`${accentColor} text-6xl mb-4`} />
                </motion.div>
                <h3 className="text-white text-2xl font-bold mb-2">Ótimo!</h3>
                <p className="text-gray-400 mb-6">
                  Você será redirecionado para o WhatsApp com todos os seus dados. Nossa equipe responderá em breve!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className={`${accentBg} text-white font-bold px-6 py-3 rounded-xl transition-all`}
                >
                  Enviar outro
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-5">
                  📋 Formulário de Interesse
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-xs mb-1.5 block font-medium">Nome *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs mb-1.5 block font-medium">Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-xs mb-1.5 block font-medium">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-xs mb-1.5 block font-medium">Modelo de Interesse</label>
                    <select
                      name="model"
                      value={form.model}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Selecione um modelo</option>
                      {products.map(p => (
                        <option key={p.id} value={p.name}>ATOMI {p.name}</option>
                      ))}
                      <option value="Mix">Mix de modelos</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs mb-1.5 block font-medium">Quantidade (mín. 4)</label>
                    <select
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {['4', '5', '6', '8', '10', '12', '15', '20', '20+'].map(q => (
                        <option key={q} value={q}>{q} unidades</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-xs mb-1.5 block font-medium">Mensagem</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Conte mais sobre sua necessidade..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full ${accentBg} font-black text-base py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3`}
                >
                  <MdSend size={20} />
                  Enviar pelo WhatsApp
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Ao enviar, você será redirecionado ao WhatsApp com seus dados preenchidos.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
