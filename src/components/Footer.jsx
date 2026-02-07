import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// WhatsApp Icon SVG
const WhatsAppIcon = ({ size = 18, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-violine-dark text-white pt-16 pb-8">
            {/* Top Accent Line */}
            <div className="h-1 bg-gradient-to-r from-heliotrope via-gold to-heliotrope"></div>

            <div className="container mx-auto px-4 md:px-8 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand & Slogan */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2 text-white">
                            Jeanne d'Arc de Mbour
                        </h3>
                        <p className="text-gold text-sm uppercase tracking-wider font-medium mb-4">
                            École Académique Bilingue
                        </p>
                        <p className="text-heliotrope-light mb-6 italic text-lg">
                            "Ouvrir une école, c'est fermer une prison."
                        </p>
                        <p className="text-gray-300 text-sm max-w-md mb-6">
                            L'École Académique Bilingue Jeanne d'Arc de Mbour s'engage à former des élèves disciplinés, compétents et responsables.
                        </p>

                        {/* Values */}
                        <div className="flex gap-2">
                            {['Travail', 'Discipline', 'Réussite'].map((v) => (
                                <span
                                    key={v}
                                    className="px-3 py-1 text-xs uppercase tracking-wide border border-gold/40 text-gold rounded-full"
                                >
                                    {v}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-gold">Navigation</h4>
                        <ul className="space-y-2">
                            <li><Link to="/institution" className="text-gray-300 hover:text-heliotrope-light transition-colors">Notre Institution</Link></li>
                            <li><Link to="/pedagogie" className="text-gray-300 hover:text-heliotrope-light transition-colors">Pédagogie</Link></li>
                            <li><Link to="/admissions" className="text-gray-300 hover:text-heliotrope-light transition-colors">Admissions</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-heliotrope-light transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-gold">Nous Contacter</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-heliotrope shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">
                                    Mbour Serere Souf / Tripano<br />
                                    Villa n° 62A/62C, Route de Joal
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-heliotrope shrink-0" size={18} />
                                <a href="tel:+221767550909" className="text-gray-300 text-sm hover:text-white">
                                    +221 76 755 09 09
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <WhatsAppIcon size={18} className="text-green-400 shrink-0" />
                                <a href="https://wa.me/221777010502" className="text-green-400 hover:text-green-300 text-sm">
                                    +221 77 701 05 02
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-heliotrope shrink-0" size={18} />
                                <a href="mailto:ecolejeannedarc.adm@gmail.com" className="text-gray-300 text-sm hover:text-white">
                                    ecolejeannedarc.adm@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Horaires d'ouverture */}
                        <div className="mt-6 p-4 bg-violine/50 rounded-lg border border-heliotrope/20">
                            <h5 className="font-bold text-gold text-sm mb-2">🕐 Horaires d'ouverture</h5>
                            <div className="text-gray-300 text-sm space-y-1">
                                <p className="flex justify-between">
                                    <span>Lundi - Vendredi</span>
                                    <span className="text-white font-medium">7h - 17h</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Samedi - Dimanche</span>
                                    <span className="text-red-400 font-medium">Fermé</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-heliotrope/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} École Académique Bilingue Jeanne d'Arc de Mbour. Tous droits réservés.</p>
                    <p className="mt-2 md:mt-0 text-xs text-gray-500">
                        Conçu avec 💜 par <span className="text-heliotrope-light font-medium">cSagombaye</span>
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="mt-4 md:mt-0 flex items-center gap-2 text-heliotrope-light hover:text-gold transition-colors"
                    >
                        <ArrowUp size={16} />
                        Haut de page
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
