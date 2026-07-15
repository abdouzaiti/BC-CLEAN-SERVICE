import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-[10px] font-bold uppercase tracking-widest mb-6">
              À Propos de BC Clean
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-dark-navy mb-6 leading-tight">
              L'excellence du nettoyage <br />
              <span className="text-primary-blue">au service de votre confort.</span>
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Depuis plus d'une décennie, BC Clean s'impose comme la référence du nettoyage premium. 
              Notre mission est simple : transformer vos espaces de vie et de travail en havres de propreté 
              grâce à des méthodes éprouvées et un engagement total envers la qualité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
