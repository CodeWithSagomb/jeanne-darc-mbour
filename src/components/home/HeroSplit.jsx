import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSplit = () => {
    return (
        <section className="relative w-full h-[85vh] xl:h-[90vh] flex flex-col md:flex-row overflow-hidden bg-white">

            {/* LEFT SIDE - PRIMAIRE (Warm tones) */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                {/* Warm Overlay */}
                <div className="absolute inset-0 bg-terracotta/80 mix-blend-multiply opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-terracotta to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 md:pb-20 text-center md:text-left z-10 flex flex-col items-center md:items-start justify-end h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-white font-serif text-3xl font-bold mb-2">ESPACE PETITS PAS</h2>
                        <p className="text-white/90 text-sm md:text-base uppercase tracking-widest font-semibold mb-6">(Maternelle & Primaire)</p>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-terracotta">
                            Découvrir le Cycle
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* RIGHT SIDE - SECONDAIRE (Cool tones) */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                {/* Cool Overlay */}
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-90"></div>

                <div className="absolute bottom-0 right-0 w-full p-8 md:p-12 md:pb-20 text-center md:text-right z-10 flex flex-col items-center md:items-end justify-end h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-white font-serif text-3xl font-bold mb-2">ESPACE GRANDS HORIZONS</h2>
                        <p className="text-white/90 text-sm md:text-base uppercase tracking-widest font-semibold mb-6">(Collège & Lycée)</p>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                            Découvrir le Cycle
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* CENTER OVERLAY TEXT */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-20 pointer-events-none px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="drop-shadow-2xl"
                >
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-2 drop-shadow-md">
                        L'Excellence au Cœur de Mbour
                    </h1>
                    <div className="w-32 h-1.5 bg-accent mx-auto my-6 rounded-full"></div>
                    <h2 className="font-serif text-2xl md:text-4xl text-white font-medium italic drop-shadow-md">
                        "Des Racines pour Grandir,<br />Des Ailes pour Réussir."
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSplit;
