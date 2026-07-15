import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, role, content, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass-card p-10 relative group hover:bg-dark-navy/5 transition-all duration-500"
  >
    <div className="absolute top-10 right-10 text-primary-blue/10 group-hover:text-primary-blue/20 transition-colors">
      <Quote className="w-12 h-12" />
    </div>
    
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-gold-accent fill-gold-accent" />
      ))}
    </div>

    <p className="text-lg text-dark-navy/80 mb-8 italic leading-relaxed">
      "{content}"
    </p>

    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-light-blue flex items-center justify-center font-black text-xl text-white">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-black text-dark-navy">{name}</h4>
        <p className="text-xs font-bold text-dark-navy/40 uppercase tracking-widest">{role}</p>
      </div>
    </div>
  </motion.div>
);

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Thomas Dubois',
      role: 'Directeur Cabinet Avocats',
      content: 'Un service irréprochable. Nos bureaux sont impeccables chaque matin. La discrétion et le professionnalisme de l\'équipe sont remarquables.',
      delay: 0.1
    },
    {
      name: 'Sophie Martin',
      role: 'Propriétaire Immobilier',
      content: 'BC Clean Service a effectué un nettoyage de fin de chantier sur un de mes appartements. Le résultat était parfait, prêt pour la remise des clés.',
      delay: 0.2
    },
    {
      name: 'Jean-Luc Girard',
      role: 'Particulier',
      content: 'Excellent travail pour le nettoyage de mes vitres et de ma véranda. Rapide, efficace et tarif très correct. Je recommande vivement !',
      delay: 0.3
    }
  ];

  return (
    <section id="avis" className="py-20 md:py-32 relative bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-gold-accent"></div>
            <span className="text-gold-accent font-black uppercase tracking-[0.3em] text-xs">AVIS CLIENTS</span>
            <div className="w-12 h-[1px] bg-gold-accent"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-dark-navy"
          >
            Ils nous font confiance
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <TestimonialCard key={i} {...test} />
          ))}
        </div>
      </div>
    </section>
  );
};
