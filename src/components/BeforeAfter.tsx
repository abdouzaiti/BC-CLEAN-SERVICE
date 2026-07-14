import { motion } from 'motion/react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { ArrowRight, Sparkles } from 'lucide-react';

import beforeImg from '../assets/images/office_dirty_before_1783995550407.jpg';
import afterImg from '../assets/images/office_clean_after_1783995563830.jpg';

export const BeforeAfter = () => {
  return (
    <section id="realisations" className="py-24 md:py-32 bg-deep-black/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Slider Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            <div className="absolute inset-0 bg-primary-blue/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage 
                  src={beforeImg} 
                  alt="Avant le nettoyage" 
                  referrerPolicy="no-referrer"
                  className="brightness-90 grayscale-[0.2]"
                />
              }
              itemTwo={
                <ReactCompareSliderImage 
                  src={afterImg} 
                  alt="Après le nettoyage" 
                  referrerPolicy="no-referrer"
                  className="brightness-110"
                />
              }
              style={{ width: '100%', height: '100%', aspectRatio: '4/3' }}
              className="h-full"
            />
            
            {/* Labels */}
            <div className="absolute top-8 left-8 z-20">
              <div className="glass px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white/90 backdrop-blur-md border-white/20">
                AVANT
              </div>
            </div>
            <div className="absolute top-8 right-8 z-20">
              <div className="glass px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary-blue backdrop-blur-md border-primary-blue/30 shadow-[0_0_15px_rgba(0,180,216,0.3)]">
                APRÈS
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-[10px] font-black text-gold-accent tracking-widest uppercase mb-8 border-gold-accent/20">
              <Sparkles className="w-3 h-3" />
              TRANSFORMATION RADICALE
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              La différence <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                est flagrante.
              </span>
            </h2>
            
            <p className="text-xl text-white/50 mb-12 leading-relaxed max-w-xl">
              Nous ne nous contentons pas de nettoyer, nous restaurons l'éclat de vos espaces. 
              Découvrez comment notre expertise transforme des lieux négligés en environnements sains et inspirants.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                {[
                  'Élimination des taches tenaces',
                  'Dépoussiérage microscopique',
                  'Désinfection certifiée'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-primary-blue group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(0,180,216,0.5)]"></div>
                    <span className="text-white/70 font-medium group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  'Brillance des surfaces vitrées',
                  'Traitement des odeurs',
                  'Finition haut de gamme'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-gold-accent group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(255,183,3,0.5)]"></div>
                    <span className="text-white/70 font-medium group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn-blue group h-14 px-10">
              <span className="relative z-10 flex items-center gap-3">
                NOTRE PORTFOLIO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
