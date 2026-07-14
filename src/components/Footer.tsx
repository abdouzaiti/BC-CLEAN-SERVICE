import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 md:pt-20 pb-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/back4.png" 
          alt="Footer Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-deep-black/95"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="BC Clean Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg tracking-tighter leading-none uppercase">BC CLEAN</span>
                <span className="font-display text-[8px] text-gold-accent tracking-widest font-bold">SERVICE</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 md:mb-8 max-w-sm">
              L'excellence du nettoyage professionnel pour particuliers et entreprises. 
              Qualité, discrétion et efficacité garanties.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'Services', 'À propos', 'Réalisations', 'Avis', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-primary-blue transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Nos Services</h4>
            <ul className="space-y-4">
              {['Lavage Auto', 'Nettoyage Chantier', 'Nettoyage Vitres', 'Bureaux', 'Industriel'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/40 hover:text-primary-blue transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">
              Inscrivez-vous pour recevoir nos actualités et offres spéciales.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary-blue"
              />
              <button className="absolute right-2 top-1.5 bg-primary-blue text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-primary-blue/80 transition-all">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} BC CLEAN SERVICE. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest">Mentions Légales</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest">Confidentialité</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary-blue transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
