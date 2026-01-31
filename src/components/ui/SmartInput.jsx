import { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle, Eye, EyeOff } from 'lucide-react';

/**
 * Input intelligent avec validation temps réel
 */
const SmartInput = forwardRef(({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    success,
    helperText,
    required = false,
    disabled = false,
    icon: Icon,
    validate,
    className = '',
    ...props
}, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [localError, setLocalError] = useState('');

    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    const handleBlur = (e) => {
        setIsFocused(false);
        setIsTouched(true);

        // Validation locale si fournie
        if (validate && value) {
            const validationError = validate(value);
            setLocalError(validationError || '');
        }

        onBlur?.(e);
    };

    const handleChange = (e) => {
        onChange?.(e);

        // Clear error on change
        if (localError && validate) {
            const validationError = validate(e.target.value);
            setLocalError(validationError || '');
        }
    };

    const hasError = error || (isTouched && localError);
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

            {/* Input Container */}
            <div className="relative">
                {/* Icon gauche */}
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Icon size={18} />
                    </div>
                )}

                {/* Input */}
                <input
                    ref={ref}
                    id={name}
                    name={name}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    disabled={disabled}
                    className={`
                        w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
                        outline-none bg-white
                        disabled:bg-gray-100 disabled:cursor-not-allowed
                        ${Icon ? 'pl-10' : ''}
                        ${isPassword ? 'pr-20' : 'pr-10'}
                        ${getBorderColor()}
                    `}
                    {...props}
                />

                {/* Indicateurs de statut à droite */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    {/* Toggle password visibility */}
                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    )}

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
                </div>
            </div>

            {/* Messages d'aide/erreur */}
            <AnimatePresence mode="wait">
                {(hasError || helperText) && (
                    <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className={`text-xs mt-1.5 flex items-center gap-1 ${hasError ? 'text-red-600' : 'text-gray-500'
                            }`}
                    >
                        {hasError && <AlertCircle size={12} />}
                        {hasError ? (error || localError) : helperText}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
});

SmartInput.displayName = 'SmartInput';

export default SmartInput;
