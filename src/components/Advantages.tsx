import { motion } from 'motion/react';
import { UserCheck, Sparkles, Settings, Zap, Heart } from 'lucide-react';

const AdvantageCard = ({ title, desc, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl hover:bg-dark-navy/5 transition-colors group cursor-default"
  >
    <div className="w-12 h-12 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center text-primary-blue group-hover:bg-gold-accent group-hover:text-white transition-all duration-500 group-hover:rotate-12 shrink-0">
      <Icon className="w-6 h-6 md:w-8 md:h-8" />
    </div>
    <div>
      <h4 className="text-lg md:text-xl font-black mb-1 group-hover:text-gold-accent transition-colors text-dark-navy">{title}</h4>
      <p className="text-xs md:text-sm text-dark-navy/50 leading-relaxed max-w-[200px]">{desc}</p>
    </div>
  </motion.div>
);

export const Advantages = () => {
  const advantages = [
    {
      title: 'Équipe qualifiée',
      desc: 'Des professionnels formés et expérimentés.',
      icon: UserCheck,
      delay: 0.1
    },
    {
      title: 'Produits premium',
      desc: 'Des produits efficaces, écologiques et certifiés.',
      icon: Sparkles,
      delay: 0.2
    },
    {
      title: 'Matériel performant',
      desc: 'Des équipements haute performance.',
      icon: Settings,
      delay: 0.3
    },
    {
      title: 'Intervention rapide',
      desc: 'Nous intervenons quand vous en avez besoin.',
      icon: Zap,
      delay: 0.4
    },
    {
      title: 'Satisfaction garantie',
      desc: 'Votre satisfaction est notre priorité.',
      icon: Heart,
      delay: 0.5
    }
  ];

  return (
    <section className="py-12 md:py-20 border-y border-dark-navy/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-6 lg:gap-12">
          {advantages.map((adv, i) => (
            <AdvantageCard key={i} {...adv} />
          ))}
        </div>
      </div>
    </section>
  );
};
