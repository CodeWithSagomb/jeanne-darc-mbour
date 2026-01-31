import { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle, ChevronDown } from 'lucide-react';

/**
 * Select intelligent avec validation
 */
const SmartSelect = forwardRef(({
    label,
    name,
    options = [],
    value,
    onChange,
    onBlur,
    error,
    success,
    placeholder = 'Sélectionner...',
    required = false,
    disabled = false,
    icon: Icon,
    className = '',
    ...props
}, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const handleBlur = (e) => {
        setIsFocused(false);
        setIsTouched(true);
        onBlur?.(e);
    };

    const hasError = error && isTouched;
    const isValid = success || (isTouched && value && !hasError);

    const getBorderColor = () => {
        if (hasError) return 'border-red-500 focus:border-red-500';
        if (isValid) return 'border-green-500 focus:border-green-500';
        if (isFocused) return 'border-heliotrope focus:border-heliotrope';
        return 'border-gray-300 focus:border-heliotrope';
    };

    return (
        <div className={`relative ${className}`}>
            {/* Label */}
            {label && (
                <label
                    htmlFor={name}
                    className={`block text-sm font-medium mb-1.5 transition-colors ${hasError ? 'text-red-600' : 'text-gray-700'
                        }`}
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            {/* Select Container */}
            <div className="relative">
                {/* Icon gauche */}
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
                        <Icon size={18} />
                    </div>
                )}

                {/* Select */}
                <select
                    ref={ref}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    disabled={disabled}
                    className={`
                        w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
                        outline-none bg-white appearance-none cursor-pointer
                        disabled:bg-gray-100 disabled:cursor-not-allowed
                        ${Icon ? 'pl-10' : ''}
                        pr-12
                        ${getBorderColor()}
                        ${!value ? 'text-gray-400' : 'text-gray-800'}
                    `}
                    {...props}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                {/* Icônes à droite */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                    {/* Status icon */}
                    <AnimatePresence mode="wait">
                        {hasError && (
                            <motion.div
                                key="error"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="text-red-500"
                            >
                                <X size={18} />
                            </motion.div>
                        )}
                        {isValid && (
                            <motion.div
                                key="success"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="text-green-500"
                            >
                                <Check size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Chevron */}
                    <motion.div
                        animate={{ rotate: isFocused ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-400"
                    >
                        <ChevronDown size={18} />
                    </motion.div>
                </div>
            </div>

            {/* Message d'erreur */}
            <AnimatePresence mode="wait">
                {hasError && (
                    <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-xs mt-1.5 text-red-600 flex items-center gap-1"
                    >
                        <AlertCircle size={12} />
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
});

SmartSelect.displayName = 'SmartSelect';

export default SmartSelect;
