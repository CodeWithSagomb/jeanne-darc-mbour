import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant qui gère le smooth scroll et le retour en haut de page
 */
const SmoothScroll = () => {
    const { pathname, hash } = useLocation();

    // Scroll en haut lors du changement de page
    useEffect(() => {
        if (!hash) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [pathname, hash]);

    // Scroll vers l'ancre si présente
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        }
    }, [hash]);

    // Configurer le smooth scroll global
    useEffect(() => {
        // Ajouter smooth scroll pour tous les liens d'ancrage
        const handleClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const id = target.getAttribute('href').slice(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return null;
};

export default SmoothScroll;
