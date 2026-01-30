import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToActionNew = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-dawn"></div>
            <div className="absolute inset-0 pattern-african opacity-20"></div>

            {/* Decorative Circles */}
            <div className="absolute top-10 left-10 w-64 h-64 border border-gold/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 border border-gold/10 rounded-full"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-6 block">
                            Année Scolaire 2025/2026
                        </span>

                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            Prêts à écrire <br />
                            <span className="text-gradient-gold">l'avenir ensemble ?</span>
                        </h2>

                        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                            Les inscriptions sont ouvertes. Rejoignez une communauté d'excellence
                            où chaque enfant est accompagné vers sa réussite.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/admissions"
                                className="group inline-flex items-center gap-3 bg-gold hover:bg-white text-night font-bold py-4 px-10 rounded-sm shadow-lg shadow-gold/30 transition-all hover:scale-105"
                            >
                                Candidater maintenant
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="https://wa.me/221777010502"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 border-2 border-white/30 text-white hover:bg-white hover:text-night font-semibold py-4 px-8 rounded-sm transition-all"
                            >
                                <Phone size={18} />
                                Contacter par WhatsApp
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-white/50 text-sm">
                                Secrétariat ouvert du Lundi au Vendredi, 08h00 - 16h00
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CallToActionNew;
