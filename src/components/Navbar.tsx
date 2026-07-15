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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'
      }`}
    >
      <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-500 rounded-full ${
        isScrolled ? 'glass py-2 shadow-2xl backdrop-blur-xl bg-white/10' : ''
      }`}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img 
              src="/logo.png" 
              alt="BC Clean Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="leading-none">
            <span className="block font-bold text-sm md:text-lg tracking-tight text-white uppercase">BC CLEAN</span>
            <span className="text-[7px] md:text-[9px] text-gold-accent uppercase tracking-[0.2em] font-semibold">Excellence Française</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all relative group ${
                i === 0 ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-blue transition-all duration-300 ${
                i === 0 ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <a href="tel:+33618247245" className="btn-gold flex items-center gap-2 text-xs md:text-sm px-4 py-2.5 md:px-6 md:py-3 text-white">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">06 18 24 72 45</span>
            <span className="sm:hidden">Appeler</span>
          </a>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-11 h-11 glass rounded-xl flex items-center justify-center text-white active:scale-95 transition-transform"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-2 mx-4 glass rounded-3xl overflow-hidden backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-white/80 hover:text-primary-blue py-2 border-b border-white/5 transition-colors"
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
