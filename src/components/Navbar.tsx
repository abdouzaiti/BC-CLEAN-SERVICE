import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#about' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Avis', href: '#avis' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4 md:py-8'
      }`}
    >
      <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-lg rounded-full' : ''
      }`}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img 
              src="/logo.png" 
              alt="BC Clean Logo" 
              className="w-full h-full object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="leading-none">
            <img 
              src="/logo2.png" 
              alt="BC Clean" 
              className={`h-8 md:h-12 object-contain transition-all ${isScrolled ? 'filter invert' : ''}`}
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all relative group ${
                isScrolled 
                  ? (i === 0 ? 'text-primary-blue' : 'text-dark-navy/70 hover:text-primary-blue')
                  : (i === 0 ? 'text-white' : 'text-white/70 hover:text-white')
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                i === 0 ? 'w-full bg-primary-blue' : 'w-0 group-hover:w-full bg-primary-blue'
              } ${!isScrolled && i === 0 ? 'bg-white' : ''}`}></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <a href="tel:+33618247245" className="btn-gold flex items-center gap-2 text-xs md:text-sm px-4 py-2.5 md:px-6 md:py-3">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">06 18 24 72 45</span>
            <span className="sm:hidden">Appeler</span>
          </a>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center active:scale-95 transition-all ${
              isScrolled ? 'text-dark-navy border border-dark-navy/5 bg-white/80' : 'text-white border border-white/20'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 mx-4 bg-white/95 backdrop-blur-xl border border-dark-navy/5 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-dark-navy/80 hover:text-primary-blue py-2 border-b border-dark-navy/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
