import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-gray-900">
            {/* Background Image with Parallax feel */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="School Campus"
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Modern Gradient Overlay: Blue text-protection gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-transparent"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-8 flex flex-col justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="h-px w-12 bg-accent"></span>
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Établissement d'Excellence</span>
                    </motion.div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                        Cultiver l'Excellence,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
                            Bâtir l'Avenir
                        </span>
                    </h1>

                    <p className="font-sans text-xl md:text-2xl text-gray-100 mb-10 font-light border-l-4 border-accent pl-6 bg-black/10 backdrop-blur-sm py-4 rounded-r-lg max-w-2xl">
                        "Ouvrir une école, c’est fermer une prison."<br />
                        <span className="text-sm text-gray-300 not-italic mt-2 block">— Une pédagogie bilingue au service de la réussite.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Button to="/admissions" variant="accent" className="text-lg px-8 py-4 shadow-xl shadow-accent/20">
                            Inscriptions Ouvertes 2025
                        </Button>
                        <Button to="/institution" variant="outline" className="text-lg px-8 py-4 backdrop-blur-sm hover:bg-white/20">
                            Découvrir l'École
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Modern abstract shape at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] fill-gray-50">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="opacity-50"></path>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
