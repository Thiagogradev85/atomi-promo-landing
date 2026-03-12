import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const FILTERS = [
  { key: 'all', label: 'Todos' },
  { key: 'e-bike', label: 'E-Bikes' },
  { key: 'patinete', label: 'Patinetes' },
];

export default function ProductsSection({ variant = 'orange' }) {
  const [filter, setFilter] = useState('all');
  const isOrange = variant === 'orange';

  const accentColor = isOrange ? 'text-atomi-orange' : 'text-atomi-gold';
  const activeBg = isOrange ? 'bg-atomi-orange' : 'bg-atomi-gold';
  const activeBorder = isOrange ? 'border-atomi-orange' : 'border-atomi-gold';
  const hoverBorder = isOrange ? 'hover:border-atomi-orange' : 'hover:border-atomi-gold';
  const hoverText = isOrange ? 'hover:text-atomi-orange' : 'hover:text-atomi-gold';

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <section id="produtos" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className={`text-xs uppercase tracking-widest font-bold ${accentColor} mb-3 block`}>
            🔥 Ofertas Pack Shoroow
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white mb-4">
            NOSSO CATÁLOGO
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha seu modelo favorito. Pack mínimo de{' '}
            <span className={`${accentColor} font-bold`}>4 unidades</span> por pedido.
            Confira disponibilidade em estoque.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all duration-200 ${
                filter === f.key
                  ? `${activeBg} ${activeBorder} text-white`
                  : `border-gray-700 text-gray-400 ${hoverBorder} ${hoverText}`
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              variant={variant}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600 text-sm">
            💥 Promoção válida de <span className="text-gray-400 font-medium">Fevereiro a Março 2026</span> •
            Exclusivo <span className="text-gray-400 font-medium">Pack Shoroow</span> •
            Estoque limitado
          </p>
        </motion.div>
      </div>
    </section>
  );
}
