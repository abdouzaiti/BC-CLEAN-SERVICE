import { Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

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
                <img 
                  src="/logo2.png" 
                  alt="BC Clean" 
                  className="h-8 md:h-10 object-contain"
                />
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 md:mb-8 max-w-sm">
              L'excellence du nettoyage professionnel pour particuliers et entreprises. 
              Qualité, discrétion et efficacité garanties.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/bc_clean38/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/33618247245" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://www.snapchat.com/add/bc-clean?share_id=VClyI-yBsto&locale=fr-FR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all overflow-hidden p-1.5">
                <img src="/snapchat_logo.jpg" alt="Snapchat" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'Services', 'À propos', 'Réalisations', 'Avis', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item === 'Contact' ? 'contact' : item.toLowerCase()}`} className="text-white/40 hover:text-primary-blue transition-colors text-sm">
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

          {/* Contact */}
          <div id="contact">
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-blue" />
                <a href="mailto:bccleaning38@gmail.com" className="text-white/40 hover:text-white transition-colors text-sm">bccleaning38@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-blue" />
                <a href="tel:+33618247245" className="text-white/40 hover:text-white transition-colors text-sm">06 18 24 72 45</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-blue" />
                <span className="text-white/40 text-sm">Grenoble et alentours, France</span>
              </li>
            </ul>
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
