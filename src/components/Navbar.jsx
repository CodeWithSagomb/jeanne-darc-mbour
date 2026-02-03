import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Navbar change après 50px
      setIsScrolled(scrollTop > 50);

      // Progression de lecture
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "L'Institution", path: '/institution' },
    { name: 'Pédagogie', path: '/pedagogie' },
    { name: 'Actualités', path: '/actualites' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-violine/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-violine py-4'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Indicateur de progression de lecture */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gold"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />

        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src="/logo.png"
              alt="Logo Jeanne d'Arc"
              className={`object-contain bg-white/10 rounded-lg p-1 transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'
                }`}
              whileHover={{ scale: 1.05 }}
            />
            <div className="flex flex-col">
              <span className={`font-serif font-bold leading-tight text-white group-hover:text-gold transition-all duration-300 ${isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'
                }`}>
                Jeanne d'Arc de Mbour
              </span>
              <motion.span
                className="text-gold text-xs uppercase tracking-wider font-medium"
                initial={{ opacity: 1 }}
                animate={{ opacity: isScrolled ? 0 : 1, height: isScrolled ? 0 : 'auto' }}
                transition={{ duration: 0.2 }}
              >
                {!isScrolled && 'École Académique Bilingue'}
              </motion.span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-colors uppercase tracking-wide py-2 ${isActive(link.path)
                  ? 'text-gold'
                  : 'text-white/80 hover:text-gold'
                  }`}
              >
                {link.name}
                {/* Indicateur actif */}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/admissions"
                className={`bg-gold hover:bg-gold-dark text-violine-dark font-bold rounded shadow-md transition-all uppercase text-sm tracking-wide ${isScrolled ? 'py-2 px-4' : 'py-2.5 px-6'
                  }`}
              >
                Pré-inscription
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-violine-dark/95 backdrop-blur-md border-t border-heliotrope/20 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block text-lg font-medium py-3 border-b border-heliotrope/10 transition-colors ${isActive(link.path)
                        ? 'text-gold border-gold/30'
                        : 'text-white/90 hover:text-gold hover:pl-2'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/admissions"
                    className="mt-4 block bg-gold text-violine-dark font-bold py-4 px-6 rounded text-center uppercase text-sm shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Pré-inscription 2026/2027
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col gap-3 mt-6 pt-4 border-t border-heliotrope/20"
                >
                  <a href="tel:+221767550909" className="flex items-center gap-3 text-sm text-heliotrope-light hover:text-gold transition-colors">
                    <Phone size={16} /> +221 76 755 09 09
                  </a>
                  <a href="mailto:ecolejeannedarc.adm@gmail.com" className="flex items-center gap-3 text-sm text-heliotrope-light hover:text-gold transition-colors">
                    <Mail size={16} /> ecolejeannedarc.adm@gmail.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer pour compenser la navbar fixed */}
      <div className={`${isScrolled ? 'h-16' : 'h-20'} transition-all duration-300`} />
    </>
  );
};

export default Navbar;
