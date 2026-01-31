import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Curseur personnalisé aux couleurs de l'école
 * Suit la souris avec un effet de traînée élégant
 */
const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Détection si on est sur mobile/tablette
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(isClickable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Curseur principal */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - (isHovering ? 24 : 8),
                    y: mousePosition.y - (isHovering ? 24 : 8),
                    scale: isClicking ? 0.8 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            >
                <motion.div
                    className="rounded-full bg-gold"
                    animate={{
                        width: isHovering ? 48 : 16,
                        height: isHovering ? 48 : 16,
                        opacity: isHovering ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>

            {/* Anneau de traînée */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            >
                <motion.div
                    className="w-10 h-10 rounded-full border-2 border-heliotrope/50"
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                        opacity: isHovering ? 0.5 : 0.3,
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>

            {/* Style global pour cacher le curseur par défaut */}
            <style>{`
                * {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
