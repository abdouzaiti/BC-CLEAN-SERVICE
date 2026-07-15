import { motion } from 'motion/react';
import { ArrowRight, Phone, Zap, ShieldCheck, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/back1.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-right"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col">
        {/* Top Content (Badge) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mt-4 md:mt-8"
        >
          <div className="h-[2px] w-8 md:w-12 bg-gold-accent"></div>
          <span className="text-gold-accent text-[9px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
            La propreté a un nouveau nom
          </span>
        </motion.div>

        {/* Bottom Content */}
        <div className="mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] text-white drop-shadow-lg"
            >
              VOTRE PARTENAIRE <br className="hidden sm:block" />
              <span className="text-white/40">DE CONFIANCE</span> <br />
              <span className="text-gradient-blue italic">NETTOYAGE PRO</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-white/90 max-w-xl mb-8 md:mb-10 leading-relaxed font-medium drop-shadow-sm"
            >
              L'excellence de la propreté haute-couture au service de vos espaces les plus précieux.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-10 md:mb-12"
            >
              <button className="btn-blue group text-sm md:text-lg px-8 md:px-10 py-4 md:py-5 justify-center">
                Demander un devis
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
