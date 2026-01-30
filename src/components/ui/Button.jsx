import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
    children,
    to = null,
    variant = 'primary',
    className = '',
    onClick = null,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95 shadow-sm";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-light hover:shadow-md",
        secondary: "bg-white text-primary border border-primary hover:bg-gray-50",
        accent: "bg-accent text-primary-dark hover:bg-accent-hover hover:shadow-md font-bold",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10",
        ghost: "bg-transparent text-primary hover:bg-primary/5"
    };

    const Component = to ? Link : motion.button;
    const motionProps = to ? {} : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

    return (
        <Component
            to={to}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...motionProps}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
