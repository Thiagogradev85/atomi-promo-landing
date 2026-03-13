import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('2026-04-30T23:59:59');

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function TimeBlock({ value, label, variant }) {
  const borderColor = variant === 'gold' ? 'border-atomi-gold/40' : 'border-atomi-orange/40';
  const bgGradient = variant === 'gold'
    ? 'from-atomi-gold/10 to-transparent'
    : 'from-atomi-orange/10 to-transparent';
  const textColor = variant === 'gold' ? 'text-atomi-gold' : 'text-atomi-orange';

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`flex flex-col items-center bg-gradient-to-b ${bgGradient} border ${borderColor} rounded-xl p-3 sm:p-4 min-w-[64px] sm:min-w-[80px]`}
    >
      <motion.span
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl ${textColor} leading-none`}
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="text-gray-400 text-xs mt-1 font-medium uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}

export default function CountdownTimer({ variant = 'orange' }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const dividerColor = variant === 'gold' ? 'text-atomi-gold' : 'text-atomi-orange';

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <TimeBlock value={timeLeft.days} label="Dias" variant={variant} />
      <span className={`font-display text-2xl ${dividerColor} mt-[-12px]`}>:</span>
      <TimeBlock value={timeLeft.hours} label="Horas" variant={variant} />
      <span className={`font-display text-2xl ${dividerColor} mt-[-12px]`}>:</span>
      <TimeBlock value={timeLeft.minutes} label="Min" variant={variant} />
      <span className={`font-display text-2xl ${dividerColor} mt-[-12px]`}>:</span>
      <TimeBlock value={timeLeft.seconds} label="Seg" variant={variant} />
    </div>
  );
}
