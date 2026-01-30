import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroDawn = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">

            {/* Background with Dawn Gradient */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 z-0"
            >
                {/* Dawn Gradient Overlay */}
                <div className="absolute inset-0 z-20 gradient-dawn opacity-90"></div>

                {/* African Pattern Overlay */}
                <div className="absolute inset-0 z-30 pattern-african opacity-30"></div>

                {/* Grain Texture */}
                <div className="absolute inset-0 z-40 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* Background Image - Silhouettes */}
                <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Éducation"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
            </motion.div>

            {/* Decorative Golden Lines */}
            <div className="absolute left-8 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-gold to-transparent opacity-30 hidden lg:block"></div>
            <div className="absolute right-8 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-gold to-transparent opacity-30 hidden lg:block"></div>

            {/* Main Content */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-50 text-center px-6 max-w-5xl mx-auto"
            >
                {/* Top Accent */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-8"
                >
                    <span className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm font-semibold">
                        École Académique Bilingue
                    </span>
                </motion.div>

                {/* Main Title with Golden Frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="golden-frame inline-block mb-8"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-[0.95]">
                        <span className="block">Jeanne d'Arc</span>
                        <span className="block text-gold text-3xl md:text-5xl lg:text-6xl mt-2 font-normal tracking-wide">
                            de Mbour
                        </span>
                    </h1>
                </motion.div>

                {/* Slogan - THE PROMISE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="mb-10"
                >
                    <p className="font-hand text-2xl md:text-3xl lg:text-4xl text-white/90 italic">
                        "Ouvrir une école, c'est fermer une prison"
                    </p>
                </motion.div>

                {/* Values - Golden Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex justify-center gap-3 md:gap-6 mb-12 flex-wrap"
                >
                    {['Travail', 'Discipline', 'Réussite'].map((value, i) => (
                        <span
                            key={value}
                            className="px-4 py-2 border border-gold/50 text-gold text-xs md:text-sm uppercase tracking-widest font-medium rounded-full backdrop-blur-sm"
                        >
                            {value}
                        </span>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                >
                    <Link
                        to="/institution"
                        className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-night font-bold py-4 px-10 rounded-sm shadow-lg shadow-gold/20 transition-all hover:scale-105 uppercase text-sm tracking-wider"
                    >
                        Découvrir l'École
                    </Link>
                </motion.div>
            </motion.div>

            {/* Bottom Elements */}
            <div className="absolute bottom-0 left-0 right-0 z-40">
                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="flex flex-col items-center pb-8 scroll-indicator"
                >
                    <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Défiler</span>
                    <ChevronDown className="text-gold" size={24} />
                </motion.div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-20 left-8 z-50 hidden md:block">
                <span className="text-white/30 font-mono text-xs rotate-[-90deg] inline-block origin-bottom-left tracking-widest">
                    EST. 2019
                </span>
            </div>
            <div className="absolute top-20 right-8 z-50 hidden md:block text-right">
                <span className="text-white/30 font-mono text-xs tracking-widest">
                    MBOUR — SÉNÉGAL
                </span>
            </div>

        </section>
    );
};

export default HeroDawn;
