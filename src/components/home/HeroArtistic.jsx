import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '../ui/Button';

const HeroArtistic = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">

            {/* Background Gradient Violine → Héliotrope */}
            <div className="absolute inset-0 z-0 gradient-uniform-soft"></div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 z-10 opacity-10">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-heliotrope blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold blur-[120px]"></div>
            </div>

            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-5">
                <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="École"
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                />
            </div>

            {/* Golden vertical lines */}
            <div className="absolute left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block"></div>
            <div className="absolute right-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block"></div>

            {/* Main Content */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-20 text-center px-6 max-w-5xl mx-auto"
            >
                {/* École Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="text-gold uppercase tracking-[0.3em] text-base md:text-lg lg:text-xl font-bold drop-shadow-md">
                        École Académique Bilingue
                    </span>
                </motion.div>

                {/* Main Title */}
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 drop-shadow-xl">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="block text-white"
                    >
                        Jeanne d'Arc
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="block text-gold text-4xl md:text-5xl lg:text-6xl mt-2"
                    >
                        de Mbour
                    </motion.span>
                </h1>

                {/* Slogan */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="text-xl md:text-2xl text-white/90 font-light italic max-w-2xl mx-auto mb-8"
                >
                    "Ouvrir une école, c'est fermer une prison."
                </motion.p>

                {/* Values Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="flex justify-center gap-4 md:gap-6 mb-10 flex-wrap"
                >
                    {['Travail', 'Discipline', 'Réussite'].map((value) => (
                        <span
                            key={value}
                            className="px-5 py-2 border border-gold/50 text-gold text-xs md:text-sm uppercase tracking-widest font-medium rounded-full backdrop-blur-sm bg-white/5"
                        >
                            {value}
                        </span>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button to="/admissions" variant="accent" className="px-10 py-4 text-lg shadow-lg shadow-gold/30 hover:scale-105 transition-transform">
                        Inscriptions 2025/2026
                    </Button>
                    <Button to="/institution" variant="outline" className="px-8 py-4 border-white/30 text-white hover:bg-white/10">
                        Découvrir l'école
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-gold rounded-full"
                    />
                </div>
            </motion.div>

        </section>
    );
};

export default HeroArtistic;
