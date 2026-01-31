import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

// Contexte pour les toasts
const ToastContext = createContext(null);

// Types de toast avec leurs styles
const toastTypes = {
    success: {
        icon: CheckCircle,
        bgColor: 'bg-green-500',
        borderColor: 'border-green-600',
        textColor: 'text-white'
    },
    error: {
        icon: XCircle,
        bgColor: 'bg-red-500',
        borderColor: 'border-red-600',
        textColor: 'text-white'
    },
    warning: {
        icon: AlertCircle,
        bgColor: 'bg-gold',
        borderColor: 'border-gold-dark',
        textColor: 'text-violine-dark'
    },
    info: {
        icon: Info,
        bgColor: 'bg-heliotrope',
        borderColor: 'border-violine',
        textColor: 'text-white'
    }
};

// Composant Toast individuel
const Toast = ({ id, message, type = 'info', onClose }) => {
    const config = toastTypes[type] || toastTypes.info;
    const Icon = config.icon;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`
                flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border-l-4
                ${config.bgColor} ${config.borderColor} ${config.textColor}
                min-w-[280px] max-w-[400px]
            `}
        >
            <Icon size={20} className="shrink-0" />
            <p className="flex-1 text-sm font-medium">{message}</p>
            <button
                onClick={() => onClose(id)}
                className="shrink-0 hover:opacity-70 transition-opacity"
            >
                <X size={18} />
            </button>
        </motion.div>
    );
};

// Provider pour les toasts
export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'info', duration = 4000) => {
        const id = Date.now() + Math.random();

        setToasts(prev => [...prev, { id, message, type }]);

        // Auto-dismiss
        if (duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }

        return id;
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    // Raccourcis
    const toast = {
        success: (msg, duration) => addToast(msg, 'success', duration),
        error: (msg, duration) => addToast(msg, 'error', duration),
        warning: (msg, duration) => addToast(msg, 'warning', duration),
        info: (msg, duration) => addToast(msg, 'info', duration),
    };

    return (
        <ToastContext.Provider value={toast}>
            {children}

            {/* Container des toasts */}
            <div className="fixed top-4 right-4 z-[10000] flex flex-col gap-3">
                <AnimatePresence mode="popLayout">
                    {toasts.map(t => (
                        <Toast
                            key={t.id}
                            id={t.id}
                            message={t.message}
                            type={t.type}
                            onClose={removeToast}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

// Hook pour utiliser les toasts
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

export default ToastProvider;
