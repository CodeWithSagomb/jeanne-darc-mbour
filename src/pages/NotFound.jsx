import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-cream flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">

                {/* Animated 404 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="mb-8"
                >
                    <h1 className="text-[150px] md:text-[200px] font-serif font-bold leading-none gradient-uniform bg-clip-text text-transparent select-none">
                        404
                    </h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-violine mb-4">
                        Page introuvable
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
                        Pas d'inquiétude, nous allons vous aider à retrouver votre chemin.
                    </p>
                </motion.div>

                {/* Decorative Quote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-heliotrope italic text-lg mb-10"
                >
                    "Ouvrir une école, c'est fermer une prison."
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-violine text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-violine-dark transition-all hover:scale-105"
                    >
                        <Home size={18} />
                        Retour à l'accueil
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 border-2 border-heliotrope text-heliotrope font-bold py-3 px-8 rounded-lg hover:bg-heliotrope hover:text-white transition-all"
                    >
                        <Phone size={18} />
                        Nous contacter
                    </Link>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white rounded-xl p-6 shadow-md"
                >
                    <h3 className="font-serif text-lg text-violine mb-4 flex items-center justify-center gap-2">
                        <Search size={18} className="text-heliotrope" />
                        Pages populaires
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: "L'Institution", path: "/institution" },
                            { name: "Pédagogie", path: "/pedagogie" },
                            { name: "Admissions", path: "/admissions" },
                            { name: "Actualités", path: "/actualites" },
                            { name: "Contact", path: "/contact" }
                        ].map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="px-4 py-2 text-sm bg-cream text-violine rounded-full hover:bg-heliotrope hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Back Link */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => window.history.back()}
                    className="mt-8 inline-flex items-center gap-2 text-gray-500 hover:text-violine transition-colors"
                >
                    <ArrowLeft size={16} />
                    Revenir à la page précédente
                </motion.button>
            </div>
        </div>
    );
};

export default NotFound;
