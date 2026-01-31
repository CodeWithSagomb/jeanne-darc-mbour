import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="relative py-24 bg-violine overflow-hidden text-center">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-heliotrope rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[180px] translate-x-1/3 translate-y-1/3"></div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                    Année Scolaire 2026/2027
                </span>

                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                    Préparez l'avenir de votre enfant
                </h2>

                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 font-light">
                    Les pré-inscriptions pour la rentrée prochaine sont ouvertes.
                    Réservez dès maintenant une place pour votre enfant.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/admissions"
                        className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-violine-dark font-bold py-4 px-10 rounded shadow-lg shadow-gold/20 transition-all hover:scale-105"
                    >
                        Pré-inscription 2026/2027
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>

                    <a
                        href="https://wa.me/221777010502"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 border-2 border-heliotrope/50 text-white hover:bg-heliotrope hover:border-heliotrope font-semibold py-4 px-8 rounded transition-all"
                    >
                        <Phone size={18} />
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
