import { motion } from 'framer-motion';
import WhatsAppIcon from './icons/WhatsAppIcon';

/**
 * Floating WhatsApp button for mobile quick contact
 * Shows on all pages, fixed at bottom-right
 */
const FloatingWhatsApp = () => {
    const phoneNumber = '221777010502';
    const message = encodeURIComponent("Bonjour, je souhaite des informations sur l'école Jeanne d'Arc de Mbour.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-colors"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Nous contacter sur WhatsApp"
        >
            <WhatsAppIcon size={28} />

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>
        </motion.a>
    );
};

export default FloatingWhatsApp;
