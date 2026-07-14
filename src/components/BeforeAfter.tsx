import { motion } from 'motion/react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { ArrowRight } from 'lucide-react';

export const BeforeAfter = () => {
  return (
    <section id="realisations" className="py-16 md:py-24 bg-deep-black/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Slider Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl glow-blue"
          >
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src="/images/office_dirty_1783985042084.jpg" alt="Avant" referrerPolicy="no-referrer" />}
              itemTwo={<ReactCompareSliderImage src="/images/office_clean_1783985053811.jpg" alt="Après" referrerPolicy="no-referrer" />}
              style={{ width: '100%', height: '100%', aspectRatio: '16/9' }}
            />
            
            <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">AVANT</div>
            <div className="absolute top-6 right-6 glass px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">APRÈS</div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 glass rounded-full text-[10px] font-black text-gold-accent tracking-widest uppercase mb-6">
              RÉSULTAT IMPECCABLE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              La différence <br /> se voit
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed max-w-lg">
              Nous transformons vos espaces pour un résultat impeccable. 
              Chaque détail compte, de la poussière invisible aux finitions les plus exigeantes.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                <span className="text-white/80 font-medium">Nettoyage en profondeur des sols</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                <span className="text-white/80 font-medium">Désinfection totale des surfaces</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                <span className="text-white/80 font-medium">Clarté absolue des vitrages</span>
              </div>
            </div>

            <button className="btn-blue group">
              VOIR PLUS DE RÉALISATIONS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
