import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * Bouton de retour en haut animé
 * Apparaît après avoir scrollé et propose un retour fluide
 */
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;

            setScrollProgress(progress);
            setIsVisible(scrollTop > 400);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 group"
                    aria-label="Retour en haut"
                >
                    {/* Cercle de progression */}
                    <svg
                        className="w-14 h-14 -rotate-90"
                        viewBox="0 0 100 100"
                    >
                        {/* Fond du cercle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="text-violine/20"
                        />
                        {/* Progression */}
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            className="text-gold"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: scrollProgress / 100 }}
                            transition={{ duration: 0.1 }}
                            style={{
                                strokeDasharray: "283",
                                strokeDashoffset: `calc(283 - (283 * ${scrollProgress / 100}))`
                            }}
                        />
                    </svg>

                    {/* Bouton central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-violine rounded-full flex items-center justify-center shadow-lg group-hover:bg-heliotrope transition-colors">
                            <motion.div
                                animate={{ y: [0, -3, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <ArrowUp className="text-white" size={20} />
                            </motion.div>
                        </div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
