import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

/**
 * Carousel de témoignages
 * @param {Array} testimonials - [{name, role, content, avatar}]
 * @param {number} autoPlayInterval - Intervalle en ms (0 pour désactiver)
 */
const TestimonialsCarousel = ({
    testimonials = [],
    autoPlayInterval = 5000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    const navigate = useCallback((newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            const next = prev + newDirection;
            if (next < 0) return testimonials.length - 1;
            if (next >= testimonials.length) return 0;
            return next;
        });
    }, [testimonials.length]);

    // Auto-play
    useEffect(() => {
        if (autoPlayInterval <= 0 || isPaused || testimonials.length <= 1) return;

        const timer = setInterval(() => {
            navigate(1);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [autoPlayInterval, isPaused, navigate, testimonials.length]);

    if (testimonials.length === 0) return null;

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.9
        })
    };

    const current = testimonials[currentIndex];

    return (
        <div
            className="relative w-full max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Contenu du témoignage */}
            <div className="relative overflow-hidden min-h-[280px] flex items-center">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full px-4"
                    >
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative">
                            {/* Quote icon */}
                            <Quote className="absolute top-6 left-6 text-heliotrope/20" size={48} />

                            {/* Content */}
                            <div className="relative z-10">
                                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                                    "{current.content}"
                                </p>

                                <div className="flex items-center gap-4">
                                    {current.avatar ? (
                                        <img
                                            src={current.avatar}
                                            alt={current.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                                        />
                                    ) : (
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-heliotrope to-violine flex items-center justify-center text-white font-bold text-xl">
                                            {current.name.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-bold text-violine">{current.name}</h4>
                                        <p className="text-gray-500 text-sm">{current.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            {testimonials.length > 1 && (
                <>
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 bg-violine text-white rounded-full flex items-center justify-center shadow-lg hover:bg-heliotrope transition-colors z-10"
                        aria-label="Précédent"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => navigate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 bg-violine text-white rounded-full flex items-center justify-center shadow-lg hover:bg-heliotrope transition-colors z-10"
                        aria-label="Suivant"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                        className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex
                                ? 'bg-gold w-8'
                                : 'bg-gray-300 hover:bg-heliotrope/50 w-2'
                            }`}
                        aria-label={`Aller au témoignage ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
