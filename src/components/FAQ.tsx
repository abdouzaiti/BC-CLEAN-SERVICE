import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary-blue' : 'text-white/80 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full glass flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary-blue text-white border-primary-blue' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/50 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      question: "Quelles zones couvrez-vous ?",
      answer: "Nous intervenons principalement dans toute la région de Grenoble et ses alentours. Pour des demandes spécifiques hors zone, n'hésitez pas à nous contacter."
    },
    {
      question: "Fournissez-vous le matériel de nettoyage ?",
      answer: "Oui, nous venons avec tout le matériel professionnel et les produits nécessaires à l'intervention, sauf demande particulière de votre part."
    },
    {
      question: "Quels sont vos délais d'intervention ?",
      answer: "Nous nous efforçons d'intervenir sous 24h à 48h pour les demandes urgentes. Pour les contrats réguliers, nous définissons ensemble le planning optimal."
    },
    {
      question: "Vos produits sont-ils respectueux de l'environnement ?",
      answer: "Absolument. Nous privilégions des produits certifiés éco-responsables qui garantissent une efficacité maximale tout en protégeant votre santé et l'environnement."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4"
          >
            Questions fréquentes
          </motion.h2>
          <p className="text-white/40">Tout ce que vous devez savoir sur nos services</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
