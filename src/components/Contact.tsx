import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-green-500/20 border border-green-500/50 rounded-2xl text-center text-green-400 font-bold"
          >
            Merci ! Votre message a été envoyé avec succès. Nous vous recontacterons bientôt.
          </motion.div>
        )}
        <div className="glass-card overflow-hidden glow-blue">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info Side */}
            <div className="bg-primary-blue p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
              {/* Background abstract circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 blur-2xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8">Contactez-nous</h2>
                <p className="text-white/80 mb-8 md:mb-12 text-base md:text-lg leading-relaxed">
                  Une question ? Un projet ? Notre équipe est à votre écoute pour vous conseiller et établir un devis gratuit.
                </p>

                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Téléphone</div>
                      <div className="text-lg md:text-xl font-black">06 18 24 72 45</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Email</div>
                      <div className="text-lg md:text-xl font-black truncate max-w-[200px] sm:max-w-none">contact@bcclean.fr</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Adresse</div>
                      <div className="text-lg md:text-xl font-black">75008 Paris, France</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 md:mt-16 flex gap-4">
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white transition-all hover:text-primary-blue">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white transition-all hover:text-primary-blue">
                    <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8 md:p-12 lg:p-16 bg-white/5">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Nom complet</label>
                    <input 
                      {...register("name", { required: true })}
                      placeholder="Jean Dupont"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 md:px-6 md:py-4 focus:border-primary-blue focus:outline-none transition-colors text-sm md:text-base"
                    />
                    {errors.name && <span className="text-red-500 text-[10px] font-bold uppercase">Ce champ est requis</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Email</label>
                    <input 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      placeholder="jean@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 md:px-6 md:py-4 focus:border-primary-blue focus:outline-none transition-colors text-sm md:text-base"
                    />
                    {errors.email && <span className="text-red-500 text-[10px] font-bold uppercase">Email invalide</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Sujet</label>
                  <div className="relative">
                    <select 
                      {...register("subject")}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 md:px-6 md:py-4 focus:border-primary-blue focus:outline-none transition-colors appearance-none text-sm md:text-base cursor-pointer"
                    >
                      <option value="devis" className="bg-dark-navy">Demande de devis</option>
                      <option value="infos" className="bg-dark-navy">Informations générales</option>
                      <option value="reclamation" className="bg-dark-navy">Réclamation</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <Send className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Message</label>
                  <textarea 
                    {...register("message", { required: true })}
                    rows={4}
                    placeholder="Dites-nous en plus sur votre projet..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 md:px-6 md:py-4 focus:border-primary-blue focus:outline-none transition-colors resize-none text-sm md:text-base"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-[10px] font-bold uppercase">Ce champ est requis</span>}
                </div>

                <button 
                  type="submit"
                  className="btn-blue w-full flex items-center justify-center gap-3 py-4 md:py-5 text-base md:text-lg shadow-xl shadow-primary-blue/20"
                >
                  ENVOYER LE MESSAGE
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
