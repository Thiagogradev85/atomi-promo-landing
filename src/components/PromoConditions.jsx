import { motion } from 'framer-motion';
import { FaBoxOpen, FaCalendarAlt, FaStore, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { MdElectricBike } from 'react-icons/md';

const conditions = [
  {
    icon: <FaBoxOpen size={28} />,
    title: 'Pack Mínimo',
    desc: 'O cliente pode escolher até 4 unidades, conforme disponibilidade em estoque.',
  },
  {
    icon: <FaCalendarAlt size={28} />,
    title: 'Período Válido',
    desc: 'Promoção válida durante os meses de Fevereiro a Abril de 2026.',
  },
  {
    icon: <FaStore size={28} />,
    title: 'Exclusivo Pack Showroom',
    desc: 'Oferta exclusiva e disponível apenas através da Pack Showroom.',
  },
  {
    icon: <MdElectricBike size={28} />,
    title: 'Mix de Modelos',
    desc: 'Você pode combinar modelos diferentes para compor seu pack de 4 unidades.',
  },
];

export default function PromoConditions({ variant = 'orange' }) {
  const isOrange = variant === 'orange';
  const accentColor = isOrange ? 'text-atomi-orange' : 'text-atomi-gold';
  const borderColor = isOrange ? 'border-atomi-orange/20' : 'border-atomi-gold/20';
  const bgCard = isOrange ? 'bg-atomi-orange/5' : 'bg-atomi-gold/5';
  const dividerColor = isOrange ? 'from-transparent via-atomi-orange/30 to-transparent' : 'from-transparent via-atomi-gold/30 to-transparent';

  return (
    <section id="promocao" className="py-20 border-y border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className={`text-xs uppercase tracking-widest font-bold ${accentColor} block mb-3`}>
            Condições da Promoção
          </span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-white mb-4">
            COMO FUNCIONA
          </h2>
          <div className={`h-px w-40 mx-auto bg-gradient-to-r ${dividerColor}`} />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {conditions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${bgCard} border ${borderColor} rounded-2xl p-6 text-center hover:border-opacity-60 transition-all`}
            >
              <div className={`${accentColor} mb-4 flex justify-center`}>{item.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Garantia Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-10 rounded-2xl overflow-hidden border ${isOrange ? 'border-atomi-orange/30' : 'border-atomi-gold/30'}`}
        >
          <div className={`flex flex-col sm:flex-row items-center gap-6 px-8 py-7 bg-gradient-to-r ${
            isOrange
              ? 'from-atomi-orange/15 via-atomi-orange/5 to-transparent'
              : 'from-atomi-gold/15 via-atomi-gold/5 to-transparent'
          }`}>
            {/* Ícone + destaque */}
            <div className="flex-shrink-0 flex flex-col items-center sm:items-start gap-1">
              <FaShieldAlt className={`${accentColor} text-5xl`} />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <p className={`${accentColor} text-xs font-bold uppercase tracking-widest mb-1`}>
                Diferencial exclusivo ATOMI
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-black mb-1">
                1 ANO DE GARANTIA
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                Todos os produtos ATOMI Pack Showroom vêm com <span className="text-white font-semibold">12 meses de garantia</span> —
                o dobro do que a maioria dos concorrentes oferece. Qualidade e segurança que você pode contar.
              </p>
            </div>

            {/* Comparativo */}
            <div className="flex-shrink-0 flex flex-col gap-2 text-sm min-w-[160px]">
              <div className={`flex items-center gap-2 ${isOrange ? 'bg-atomi-orange/10 border border-atomi-orange/20' : 'bg-atomi-gold/10 border border-atomi-gold/20'} rounded-xl px-4 py-2.5`}>
                <FaShieldAlt className={`${accentColor} flex-shrink-0`} />
                <span className={`${accentColor} font-black`}>ATOMI — 12 meses</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-2.5 opacity-60">
                <FaShieldAlt className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-500 font-medium line-through">Concorrentes — 6 meses</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Price Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-gray-800"
        >
          <div className={`px-6 py-4 bg-gradient-to-r ${isOrange ? 'from-atomi-orange/10 to-transparent' : 'from-atomi-gold/10 to-transparent'} border-b border-gray-800`}>
            <h3 className="text-white font-bold text-lg">📋 Resumo de Preços — Pack Showroom</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-black/40 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="text-left px-6 py-3">Modelo</th>
                  <th className="text-left px-6 py-3">Categoria</th>
                  <th className="text-right px-6 py-3">Preço Normal</th>
                  <th className="text-right px-6 py-3">Preço Promo</th>
                  <th className="text-right px-6 py-3">Desconto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: 'M201', cat: 'E-Bike Chopper', from: 5180, to: 5049 },
                  { model: 'L10', cat: 'Patinete', from: 3480, to: 3349 },
                  { model: 'ZX202', cat: 'E-Bike Fat', from: 4980, to: 4749 },
                  { model: 'ZX201', cat: 'E-Bike Dobrável', from: 4980, to: 4749 },
                  { model: 'ZX161', cat: 'E-Bike Dobrável', from: 2980, to: 2579 },
                  { model: 'C1', cat: 'Patinete c/ Banco', from: 1980, to: 1849 },
                ].map((row, i) => (
                  <tr key={row.model} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-black/20' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className={`${accentColor} text-xs`} />
                        <span className="text-white font-bold">{row.model}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{row.cat}</td>
                    <td className="px-6 py-4 text-right text-gray-500 line-through text-sm">
                      R$ {row.from.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                    <td className={`px-6 py-4 text-right font-black text-base ${accentColor}`}>
                      R$ {row.to.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`text-xs font-black px-2 py-1 rounded-full ${isOrange ? 'bg-atomi-orange/10 text-atomi-orange' : 'bg-atomi-gold/10 text-atomi-gold'}`}>
                        -{Math.round(((row.from - row.to) / row.from) * 100)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
