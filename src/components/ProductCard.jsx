import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaRoad, FaWeight, FaTachometerAlt, FaShieldAlt, FaMedal } from 'react-icons/fa';
import { MdBattery90, MdTimer } from 'react-icons/md';
import { GiTireIronCross } from 'react-icons/gi';
import { formatPrice, getDiscount } from '../data/products';

// Gera todas as variantes de caminho para a imagem do produto pelo ID
// Ex: /images/m201.jpg, /images/m201.png, /images/m201.jpeg, /images/m201.webp
function getProductImageSources(productId, imageOverride) {
  if (imageOverride) return [imageOverride];
  const exts = ['jpg', 'jpeg', 'png', 'webp'];
  return exts.map((ext) => `/images/${productId}.${ext}`);
}

function ProductImage({ product }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const sources = getProductImageSources(product.id, product.image);
  const allFailed = srcIndex >= sources.length;

  const gradients = {
    'm202': 'from-gray-900 via-gray-800 to-black',
    'm201': 'from-gray-900 via-gray-800 to-black',
    'l10': 'from-gray-900 via-zinc-800 to-black',
    'zx202': 'from-gray-900 via-slate-800 to-black',
    'zx201': 'from-gray-900 via-neutral-800 to-black',
    'zx161': 'from-gray-900 via-stone-800 to-black',
    'c1': 'from-gray-900 via-gray-700 to-black',
  };

  if (!allFailed) {
    const isCropped = !!product.imageObjectPosition;
    const scale = product.imageScale || '1.35';
    return (
      <img
        src={sources[srcIndex]}
        alt={`ATOMI ${product.name}`}
        className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
          isCropped
            ? `object-cover`
            : 'object-contain pt-16'
        }`}
        style={isCropped ? { objectPosition: product.imageObjectPosition, transform: `scale(${scale})` } : undefined}
        onError={() => setSrcIndex((i) => i + 1)}
      />
    );
  }

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${gradients[product.id] || 'from-gray-900 to-black'} p-6`}>
      <div className="text-6xl mb-3">
        {product.category === 'patinete' ? '🛴' : '🏍️'}
      </div>
      <span className="text-white font-display text-2xl tracking-widest">{product.name}</span>
      <span className="text-gray-500 text-xs mt-1">{product.categoryLabel}</span>
    </div>
  );
}

export default function ProductCard({ product, variant = 'orange', index = 0 }) {
  const discount = getDiscount(product.originalPrice, product.promoPrice);
  const isOrange = variant === 'orange';

  const accentColor = isOrange ? 'text-atomi-orange' : 'text-atomi-gold';
  const accentBg = isOrange ? 'bg-atomi-orange' : 'bg-atomi-gold';
  const accentHover = isOrange ? 'hover:bg-atomi-orange-dark' : 'hover:bg-atomi-gold-light';
  const borderHover = isOrange ? 'hover:border-atomi-orange/50' : 'hover:border-atomi-gold/50';
  const badgeBg = isOrange ? 'bg-atomi-orange' : 'bg-gradient-to-r from-atomi-purple to-atomi-gold';

  const cardBg = isOrange
    ? 'bg-atomi-card border-atomi-border'
    : 'bg-gradient-to-br from-[#1a0030]/80 to-[#0d0015]/80 border-atomi-purple/20';

  const specs = [
    { icon: <MdBattery90 />, value: product.battery, label: 'Bateria' },
    { icon: <FaBolt />, value: product.motor, label: 'Motor' },
    { icon: <FaTachometerAlt />, value: product.speed, label: 'Velocidade' },
    { icon: <FaRoad />, value: product.range, label: 'Autonomia' },
    { icon: <GiTireIronCross />, value: product.tires, label: 'Pneus' },
    { icon: <FaShieldAlt />, value: product.waterproof, label: 'Proteção' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col border ${cardBg} ${borderHover} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        <span className={`${badgeBg} text-white text-xs font-black px-2.5 py-1 rounded-full`}>
          -{discount}% OFF
        </span>
        {product.badge && (
          <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-black px-2.5 py-1 rounded-full border border-white/30">
            {product.badge}
          </span>
        )}
      </div>

      {/* Category Label */}
      <div className="absolute top-3 right-3 z-10">
        <span className="bg-black/60 backdrop-blur-sm text-gray-300 text-xs px-2.5 py-1 rounded-full border border-white/10">
          {product.categoryLabel}
        </span>
      </div>

      {/* Product Image */}
      <div className="relative h-64 sm:h-80 overflow-hidden bg-[#f0efee]">
        <ProductImage product={product} />
        {product.highlight && (
          <div className={`absolute inset-0 border-2 ${isOrange ? 'border-atomi-orange/20' : 'border-atomi-gold/20'} pointer-events-none`} />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Name & Description */}
        <div className="mb-4">
          <h3 className={`font-display text-2xl tracking-wider ${accentColor} mb-1`}>
            ATOMI {product.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col items-center p-2 bg-black/40 rounded-lg border border-white/5"
            >
              <span className={`${accentColor} text-sm mb-0.5`}>{spec.icon}</span>
              <span className="text-white font-bold text-xs leading-tight text-center">{spec.value}</span>
              <span className="text-gray-500 text-[10px] mt-0.5">{spec.label}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-gray-500 text-xs mb-0.5">De</p>
              <p className="text-gray-500 line-through text-base">{formatPrice(product.originalPrice)}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-xs mb-0.5">Por apenas</p>
              <p className={`${accentColor} font-black text-2xl leading-none`}>
                {formatPrice(product.promoPrice)}
              </p>
              <p className="text-gray-500 text-xs mt-0.5">por unidade</p>
            </div>
          </div>

          {/* Garantia + Min. 4 */}
          <div className="flex gap-2 mb-3">
            <div className={`flex-1 flex items-center justify-center gap-1.5 text-xs py-1.5 rounded-lg border ${
              isOrange ? 'border-atomi-orange/20 text-atomi-orange/80 bg-atomi-orange/5' : 'border-atomi-gold/20 text-atomi-gold/80 bg-atomi-gold/5'
            }`}>
              <FaMedal size={11} />
              1 ano de garantia
            </div>
            <div className="flex-1 flex items-center justify-center gap-1 text-xs py-1.5 rounded-lg border border-gray-700/50 text-gray-500 bg-black/20">
              📦 Mín. 4 unidades
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#contato"
            className={`block w-full text-center ${accentBg} ${accentHover} text-white font-bold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] active:scale-[0.98] ${
              !isOrange ? 'text-black' : ''
            }`}
          >
            Garantir Oferta →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
