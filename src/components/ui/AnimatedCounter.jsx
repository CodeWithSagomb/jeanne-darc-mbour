import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Compteur animé qui monte de 0 à la valeur cible
 * @param {number} end - Valeur finale
 * @param {string} suffix - Suffixe (ex: "+", "%", "k")
 * @param {number} duration - Durée de l'animation en secondes
 */
const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;

            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / (duration * 1000), 1);

                // Easing function (ease-out)
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentCount = Math.floor(easeOut * end);

                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {prefix}{count.toLocaleString()}{suffix}
        </motion.span>
    );
};

export default AnimatedCounter;
