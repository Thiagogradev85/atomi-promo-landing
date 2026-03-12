import { motion } from 'framer-motion';
import { FaGlobe, FaAward, FaFlask, FaUsers } from 'react-icons/fa';

const stats = [
  { icon: <FaGlobe />, value: '20+', label: 'Países Atendidos' },
  { icon: <FaAward />, value: '5+', label: 'Certificações' },
  { icon: <FaFlask />, value: '100%', label: 'Testado em Lab' },
  { icon: <FaUsers />, value: '2000', label: 'Fundada em' },
];

const certs = ['RoHS', 'CE', 'BSCI', 'UL 2272', 'ISO 9001'];

export default function AboutSection({ variant = 'orange' }) {
  const isOrange = variant === 'orange';
  const accentColor = isOrange ? 'text-atomi-orange' : 'text-atomi-gold';
  const borderColor = isOrange ? 'border-atomi-orange/20' : 'border-atomi-gold/20';
  const bgCard = isOrange ? 'bg-atomi-orange/5 border-atomi-orange/10' : 'bg-atomi-gold/5 border-atomi-gold/10';
  const dividerColor = isOrange
    ? 'from-transparent via-atomi-orange/30 to-transparent'
    : 'from-transparent via-atomi-gold/30 to-transparent';

  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`text-xs uppercase tracking-widest font-bold ${accentColor} block mb-4`}>
              Nossa História
            </span>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-white mb-2">
              ATOMI
            </h2>
            <div className={`h-1 w-16 rounded bg-gradient-to-r ${isOrange ? 'from-atomi-orange' : 'from-atomi-gold'} to-transparent mb-6`} />

            <p className="text-gray-400 leading-relaxed mb-5">
              Com uma rica história em projetar e fabricar o que há de melhor em scooters elétricas
              e tradicionais em todo o mundo. Os produtos ATOMI estão longe de ser novos.
              Fundada no ano <span className={`${accentColor} font-bold`}>2000</span>, iniciamos
              nossa jornada como fabricante projetando, melhorando e produzindo algumas das melhores
              scooters disponíveis no mercado.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Hoje nossas inovações elétnicas abrangem mais de{' '}
              <span className={`${accentColor} font-bold`}>15 países</span> e colaborações com os
              maiores players do setor. Decidimos trazer nossos produtos diretamente para você, o
              consumidor — com todas as nossas patentes da indústria e as mais recentes tecnologias.
            </p>

            {/* Certifications */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Certificações</p>
              <div className="flex flex-wrap gap-2">
                {certs.map((cert) => (
                  <span
                    key={cert}
                    className={`px-3 py-1.5 rounded-lg border ${borderColor} text-gray-300 text-xs font-bold`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${bgCard} border rounded-2xl p-6 text-center`}
                >
                  <div className={`${accentColor} text-3xl mb-3 flex justify-center`}>{stat.icon}</div>
                  <p className={`font-display text-4xl ${accentColor} mb-1`}>{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Countries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`mt-5 ${bgCard} border rounded-2xl p-5`}
            >
              <p className="text-gray-400 text-sm mb-3 font-medium">🌍 Presença Global</p>
              <div className="flex flex-wrap gap-1.5">
                {['Brasil', 'EUA', 'Canadá', 'Alemanha', 'França', 'Espanha', 'Japão', 'China',
                  'Austrália', 'Rússia', 'Polônia', 'Holanda', 'Chile', 'Paraguai', '+mais'].map((c) => (
                  <span key={c} className="text-gray-500 text-xs bg-black/30 px-2 py-1 rounded">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
