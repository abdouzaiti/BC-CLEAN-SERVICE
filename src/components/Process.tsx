import { motion } from 'motion/react';
import { Phone, FileText, UserCheck, Sparkles } from 'lucide-react';

const Step = ({ number, title, desc, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col items-center text-center relative z-10 group"
  >
    <div className="relative mb-8">
      {/* Step Number Badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-sm font-black z-20 shadow-lg text-white">
        {number}
      </div>
      
      {/* Icon Hexagon/Circle Container */}
      <div className="w-24 h-24 glass rounded-[2rem] flex items-center justify-center text-dark-navy/30 group-hover:text-gold-accent transition-all duration-500 group-hover:rotate-[30deg] border-dark-navy/5 group-hover:border-gold-accent/50 group-hover:bg-gold-accent/5">
        <Icon className="w-10 h-10 group-hover:rotate-[-30deg] transition-transform duration-500" />
      </div>
    </div>
    
    <h4 className="text-xl font-black mb-3 group-hover:text-gold-accent transition-colors text-dark-navy">{title}</h4>
    <p className="text-sm text-dark-navy/40 leading-relaxed max-w-[200px]">{desc}</p>
  </motion.div>
);

export const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Contact',
      desc: 'Appelez-nous ou envoyez-nous votre demande.',
      icon: Phone,
      delay: 0.1
    },
    {
      number: 2,
      title: 'Devis gratuit',
      desc: 'Nous analysons vos besoins et vous envoyons un devis.',
      icon: FileText,
      delay: 0.2
    },
    {
      number: 3,
      title: 'Intervention',
      desc: 'Notre équipe intervient avec professionnalisme et efficacité.',
      icon: UserCheck,
      delay: 0.3
    },
    {
      number: 4,
      title: 'Résultat impeccable',
      desc: 'Profitez d\'un espace propre, sain et agréable.',
      icon: Sparkles,
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Connecting Line (Desktop) */}
      <div className="hidden lg:block absolute top-[52%] left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-dark-navy/5 to-transparent z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent w-full h-full animate-[shimmer_3s_infinite] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-gold-accent"></div>
            <span className="text-gold-accent font-black uppercase tracking-[0.3em] text-xs">NOTRE PROCESSUS</span>
            <div className="w-12 h-[1px] bg-gold-accent"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-dark-navy"
          >
            Simple, rapide et efficace
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <Step key={i} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};
