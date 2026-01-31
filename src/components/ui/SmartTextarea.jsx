import { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

/**
 * Textarea intelligent avec validation temps réel et compteur de caractères
 */
const SmartTextarea = forwardRef(({
    label,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    success,
    helperText,
    required = false,
    disabled = false,
    maxLength,
    minLength,
    rows = 4,
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

    const charCount = value?.length || 0;
    const hasError = error && isTouched;
    const isValid = success || (isTouched && value && !hasError && (!minLength || charCount >= minLength));

    const getBorderColor = () => {
        if (hasError) return 'border-red-500 focus:border-red-500';
        if (isValid) return 'border-green-500 focus:border-green-500';
        if (isFocused) return 'border-heliotrope focus:border-heliotrope';
        return 'border-gray-300 focus:border-heliotrope';
    };

    const getCharCountColor = () => {
        if (!maxLength) return 'text-gray-400';
        const ratio = charCount / maxLength;
        if (ratio >= 1) return 'text-red-500';
        if (ratio >= 0.9) return 'text-orange-500';
        if (ratio >= 0.75) return 'text-yellow-600';
        return 'text-gray-400';
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

            {/* Textarea Container */}
            <div className="relative">
                <textarea
                    ref={ref}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    disabled={disabled}
                    rows={rows}
                    maxLength={maxLength}
                    className={`
                        w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
                        outline-none bg-white resize-none
                        disabled:bg-gray-100 disabled:cursor-not-allowed
                        ${getBorderColor()}
                    `}
                    {...props}
                />

                {/* Status icon */}
                <div className="absolute right-3 top-3">
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

            {/* Footer: Error/Helper + Char count */}
            <div className="flex justify-between items-center mt-1.5">
                <AnimatePresence mode="wait">
                    {(hasError || helperText) && (
                        <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className={`text-xs flex items-center gap-1 ${hasError ? 'text-red-600' : 'text-gray-500'
                                }`}
                        >
                            {hasError && <AlertCircle size={12} />}
                            {hasError ? error : helperText}
                        </motion.p>
                    )}
                </AnimatePresence>

                {/* Character counter */}
                {maxLength && (
                    <motion.span
                        className={`text-xs ml-auto ${getCharCountColor()}`}
                        animate={{ scale: charCount >= maxLength * 0.9 ? [1, 1.1, 1] : 1 }}
                    >
                        {charCount}/{maxLength}
                    </motion.span>
                )}
            </div>
        </div>
    );
});

SmartTextarea.displayName = 'SmartTextarea';

export default SmartTextarea;
