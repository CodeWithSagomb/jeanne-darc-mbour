import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
    const alignment = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end'
    };

    return (
        <div className={`flex flex-col mb-12 ${alignment[align]} ${className}`}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-semibold tracking-wider uppercase text-sm mb-2"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-serif font-bold text-gray-900 relative pb-4"
            >
                {title}
                <span className={`absolute bottom-0 w-24 h-1 bg-accent rounded-full ${align === 'center' ? 'left-1/2 -translate-x-1/2' : ''} ${align === 'left' ? 'left-0' : ''} ${align === 'right' ? 'right-0' : ''}`} />
            </motion.h2>
        </div>
    );
};

export default SectionTitle;
