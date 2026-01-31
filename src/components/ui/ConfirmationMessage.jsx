import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X, Mail, Phone, Send } from 'lucide-react';

/**
 * Message de confirmation animé avec différents types
 */
const ConfirmationMessage = ({
    isVisible,
    type = 'success', // success, error, warning, info
    title,
    message,
    onClose,
    autoClose = true,
    autoCloseDelay = 5000,
    showIcon = true,
    showCloseButton = true,
    action,
    actionLabel = 'Action'
}) => {
    const types = {
        success: {
            icon: CheckCircle,
            bg: 'bg-green-50',
            border: 'border-green-200',
            iconColor: 'text-green-500',
            titleColor: 'text-green-800',
            messageColor: 'text-green-700',
            progressColor: 'bg-green-500'
        },
        error: {
            icon: XCircle,
            bg: 'bg-red-50',
            border: 'border-red-200',
            iconColor: 'text-red-500',
            titleColor: 'text-red-800',
            messageColor: 'text-red-700',
            progressColor: 'bg-red-500'
        },
        warning: {
            icon: AlertTriangle,
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            iconColor: 'text-yellow-500',
            titleColor: 'text-yellow-800',
            messageColor: 'text-yellow-700',
            progressColor: 'bg-yellow-500'
        },
        info: {
            icon: Info,
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            iconColor: 'text-blue-500',
            titleColor: 'text-blue-800',
            messageColor: 'text-blue-700',
            progressColor: 'bg-blue-500'
        }
    };

    const config = types[type];
    const Icon = config.icon;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className={`
                        relative overflow-hidden rounded-lg border p-4
                        ${config.bg} ${config.border}
                    `}
                >
                    <div className="flex items-start gap-3">
                        {/* Icon */}
                        {showIcon && (
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.1, type: 'spring' }}
                                className={config.iconColor}
                            >
                                <Icon size={24} />
                            </motion.div>
                        )}

                        {/* Content */}
                        <div className="flex-1">
                            {title && (
                                <motion.h4
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 }}
                                    className={`font-bold ${config.titleColor}`}
                                >
                                    {title}
                                </motion.h4>
                            )}
                            {message && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className={`text-sm mt-1 ${config.messageColor}`}
                                >
                                    {message}
                                </motion.p>
                            )}

                            {/* Action button */}
                            {action && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={action}
                                    className={`mt-3 text-sm font-bold underline ${config.titleColor} hover:opacity-80`}
                                >
                                    {actionLabel}
                                </motion.button>
                            )}
                        </div>

                        {/* Close button */}
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className={`${config.iconColor} hover:opacity-70 transition-opacity`}
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>

                    {/* Auto-close progress bar */}
                    {autoClose && (
                        <motion.div
                            className={`absolute bottom-0 left-0 h-1 ${config.progressColor}`}
                            initial={{ width: '100%' }}
                            animate={{ width: '0%' }}
                            transition={{ duration: autoCloseDelay / 1000, ease: 'linear' }}
                            onAnimationComplete={onClose}
                        />
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

/**
 * Message de confirmation spécifique pour succès d'envoi de formulaire
 */
export const FormSuccessMessage = ({ isVisible, onClose, email, onNewMessage }) => (
    <ConfirmationMessage
        isVisible={isVisible}
        type="success"
        title="Message envoyé avec succès !"
        message="Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais."
        onClose={onClose}
        autoClose={false}
        action={onNewMessage}
        actionLabel="Envoyer un autre message"
    />
);

/**
 * Options de contact après succès
 */
export const ContactOptions = ({ isVisible }) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-6 bg-cream rounded-lg"
            >
                <h4 className="font-serif text-lg text-violine mb-4">
                    Autres moyens de nous contacter :
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                    <motion.a
                        href="tel:+221767550909"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <div className="w-10 h-10 bg-heliotrope/10 rounded-full flex items-center justify-center">
                            <Phone className="text-heliotrope" size={18} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Téléphone</p>
                            <p className="font-medium text-violine text-sm">+221 76 755 09 09</p>
                        </div>
                    </motion.a>

                    <motion.a
                        href="mailto:ecolejeannedarc.adm@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <div className="w-10 h-10 bg-heliotrope/10 rounded-full flex items-center justify-center">
                            <Mail className="text-heliotrope" size={18} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Email</p>
                            <p className="font-medium text-violine text-sm">Envoyer un email</p>
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://wa.me/221777010502"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <Send className="text-green-600" size={18} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">WhatsApp</p>
                            <p className="font-medium text-violine text-sm">Chat direct</p>
                        </div>
                    </motion.a>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default ConfirmationMessage;
