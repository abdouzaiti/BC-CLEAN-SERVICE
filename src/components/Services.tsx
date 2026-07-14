import { motion } from 'motion/react';
import { CheckCircle2, Car, HardHat, Layout, Building2 } from 'lucide-react';

const ServiceCard = ({ title, subtitle, list, price, image, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
    className="glass-card group overflow-hidden flex flex-col h-full border-white/5 hover:border-primary-blue/30 transition-all duration-500"
  >
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-navy to-transparent opacity-60"></div>
      
      {/* Icon Badge */}
      <div className="absolute top-6 left-6 w-12 h-12 glass rounded-xl flex items-center justify-center text-primary-blue shadow-xl">
        <Icon className="w-6 h-6" />
      </div>
    </div>

    {/* Content */}
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-black mb-1 group-hover:text-primary-blue transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-sm font-bold text-white/40 mb-6 uppercase tracking-wider">
        {subtitle}
      </p>

      <ul className="space-y-3 mb-8 flex-grow">
        {list.map((item: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-sm text-white/70">
            <CheckCircle2 className="w-4 h-4 text-primary-blue flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-end justify-between mt-auto">
        <div>
          <div className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">À PARTIR DE</div>
          <div className="text-3xl font-black text-primary-blue group-hover:text-light-blue transition-colors">
            {price}
          </div>
        </div>
        <button className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
          <CheckCircle2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  </motion.div>
);

export const Services = () => {
  const services = [
    {
      title: 'Lavage Auto',
      subtitle: 'Intérieur & Extérieur',
      list: ['Aspiration complète', 'Nettoyage des vitres', 'Dépoussiérage rapide', 'Lavage extérieur', 'Finition parfumée'],
      price: '29,90€',
      image: '/images/service_car_wash_1783984898306.jpg',
      icon: Car,
      delay: 0.1
    },
    {
      title: 'Nettoyage Fin de Chantier',
      subtitle: 'Prêt à habiter',
      list: ['Dépoussiérage complet', 'Nettoyage sols & surfaces', 'Retrait traces de peinture', 'Nettoyage sanitaires', 'Évacuation déchets'],
      price: '120€',
      image: '/images/service_post_construction_1783984909551.jpg',
      icon: HardHat,
      delay: 0.2
    },
    {
      title: 'Nettoyage de Vitres',
      subtitle: 'Clarté Maximale',
      list: ['Intérieur / Extérieur', 'Finitions sans traces', 'Encadrements nettoyés', 'Particuliers & Pro', 'Toutes surfaces vitrées'],
      price: '5€ / M²',
      image: '/images/service_windows_1783984919454.jpg',
      icon: Layout,
      delay: 0.3
    },
    {
      title: 'Bureaux & Nettoyage industriel',
      subtitle: 'Entreprises & Pro',
      list: ['Entretien bureaux', 'Nettoyage industriel', 'Nettoyage machines', 'Décapage sols', 'Désinfection'],
      price: 'SUR DEVIS',
      image: '/images/service_office_1783984933497.jpg',
      icon: Building2,
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-gold-accent"></div>
            <span className="text-gold-accent font-black uppercase tracking-[0.3em] text-xs">NOS SERVICES</span>
            <div className="w-12 h-[1px] bg-gold-accent"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Des solutions de nettoyage <br className="hidden md:block" /> pour chaque besoin
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
