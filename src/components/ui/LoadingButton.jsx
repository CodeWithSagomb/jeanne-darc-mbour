import { motion } from 'framer-motion';

/**
 * Bouton avec états de chargement et animations
 */
const LoadingButton = ({
    children,
    isLoading = false,
    isSuccess = false,
    isError = false,
    disabled = false,
    type = 'button',
    variant = 'primary', // primary, secondary, outline
    size = 'md', // sm, md, lg
    fullWidth = false,
    loadingText = 'Chargement...',
    successText = 'Succès !',
    errorText = 'Erreur',
    onClick,
    className = '',
    icon: Icon,
    ...props
}) => {
    const isDisabled = disabled || isLoading;

    const baseStyles = `
        relative inline-flex items-center justify-center gap-2 font-bold
        rounded-lg transition-all duration-200 overflow-hidden
        disabled:cursor-not-allowed
    `;

    const variants = {
        primary: `
            bg-violine text-white
            hover:bg-heliotrope
            disabled:bg-violine/50
        `,
        secondary: `
            bg-gold text-violine-dark
            hover:bg-gold-dark
            disabled:bg-gold/50
        `,
        outline: `
            border-2 border-violine text-violine bg-transparent
            hover:bg-violine hover:text-white
            disabled:border-violine/50 disabled:text-violine/50
        `,
        success: `
            bg-green-500 text-white
        `,
        error: `
            bg-red-500 text-white
        `
    };

    const sizes = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-base',
        lg: 'py-4 px-8 text-lg'
    };

    const getVariant = () => {
        if (isSuccess) return variants.success;
        if (isError) return variants.error;
        return variants[variant];
    };

    const getText = () => {
        if (isLoading) return loadingText;
        if (isSuccess) return successText;
        if (isError) return errorText;
        return children;
    };

    return (
        <motion.button
            type={type}
            disabled={isDisabled}
            onClick={onClick}
            className={`
                ${baseStyles}
                ${getVariant()}
                ${sizes[size]}
                ${fullWidth ? 'w-full' : ''}
                ${className}
            `}
            whileHover={!isDisabled ? { scale: 1.02 } : {}}
            whileTap={!isDisabled ? { scale: 0.98 } : {}}
            {...props}
        >
            {/* Spinner */}
            {isLoading && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-inherit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </motion.div>
            )}

            {/* Success checkmark */}
            {isSuccess && (
                <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.svg>
            )}

            {/* Error X */}
            {isError && (
                <motion.svg
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </motion.svg>
            )}

            {/* Icon */}
            {Icon && !isLoading && !isSuccess && !isError && (
                <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
            )}

            {/* Text */}
            <span className={isLoading ? 'opacity-0' : ''}>
                {getText()}
            </span>
        </motion.button>
    );
};

export default LoadingButton;
