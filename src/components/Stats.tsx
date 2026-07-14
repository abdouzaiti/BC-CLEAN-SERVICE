import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Users, Star, Shield, Clock } from 'lucide-react';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Stats = () => {
  const stats = [
    { label: 'Clients satisfaits', value: 500, suffix: '+', icon: Users },
    { label: 'Avis Google', value: 4.9, suffix: '/5', icon: Star, isDecimal: true },
    { label: 'Professionnel', value: 100, suffix: '%', icon: Shield },
    { label: 'Intervention rapide', value: 24, suffix: 'h', icon: Clock },
  ];

  return (
    <section className="py-8 md:py-12 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 text-center transition-all duration-500 hover:bg-white/10 ${
                i === 2 ? 'shadow-[0_0_40px_rgba(13,110,253,0.1)]' : ''
              }`}
            >
              <div className="text-3xl font-black text-white mb-2 flex items-baseline justify-center gap-1">
                {stat.isDecimal ? (
                  <>
                    <span>4.9</span>
                    <span className="text-lg text-white/40">{stat.suffix}</span>
                  </>
                ) : (
                  <>
                    <Counter value={stat.value} />
                    <span className="text-lg text-white/40">{stat.suffix}</span>
                  </>
                )}
              </div>
              <div className="text-[10px] text-gold-accent uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
