import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "L'Institution", path: '/institution' },
    { name: 'Pédagogie', path: '/pedagogie' },
    { name: 'Actualités', path: '/actualites' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-violine text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo Jeanne d'Arc"
            className="h-14 w-auto object-contain bg-white/10 rounded-lg p-1"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl leading-tight text-white group-hover:text-gold transition-colors">
              Jeanne d'Arc de Mbour
            </span>
            <span className="text-gold text-xs md:text-sm uppercase tracking-wider font-medium">
              École Académique Bilingue
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="bg-gold hover:bg-gold-dark text-violine-dark font-bold py-2.5 px-6 rounded shadow-md transition-all hover:scale-105 uppercase text-sm tracking-wide"
          >
            Pré-inscription
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-violine-dark border-t border-heliotrope/20 absolute w-full shadow-lg overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium py-2 border-b border-heliotrope/10 text-white/90 hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/admissions"
                className="mt-2 bg-gold text-violine-dark font-bold py-3 px-6 rounded text-center uppercase text-sm"
                onClick={() => setIsOpen(false)}
              >
                Inscriptions 2025/2026
              </Link>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-heliotrope/20">
                <div className="flex items-center gap-2 text-sm text-heliotrope-light">
                  <Phone size={16} /> <span>+221 76 755 09 09</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-heliotrope-light">
                  <Mail size={16} /> <span>ecolejeannedarc.adm@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
