import { motion } from 'motion/react';
import { ArrowRight, Phone, Zap, ShieldCheck, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/back1.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark-navy/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start text-left">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[2px] w-12 bg-gold-accent"></div>
              <span className="text-gold-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                La propreté a un nouveau nom
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 leading-[1] md:leading-[0.9] text-white"
            >
              VOTRE PARTENAIRE <br className="hidden sm:block" />
              <span className="text-white/40">DE CONFIANCE</span> <br />
              <span className="text-gradient-blue italic">NETTOYAGE PRO</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-white/60 max-w-xl mb-10 leading-relaxed font-medium"
            >
              L'excellence de la propreté haute-couture au service de vos espaces les plus précieux.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-5 mb-12"
            >
              <button className="btn-blue group text-base md:text-lg px-10 py-5">
                Demander un devis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline flex items-center gap-2 group text-base md:text-lg px-10 py-5">
                Nous appeler
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <span className="text-primary-blue">⚡</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">Intervention Rapide</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <span className="text-primary-blue">🛡</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">Produits Pros</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <span className="text-primary-blue">⭐</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
