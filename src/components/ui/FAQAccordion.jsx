import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

/**
 * FAQ Accordéon
 * @param {Array} items - [{question, answer, icon?}]
 * @param {boolean} allowMultiple - Permettre plusieurs items ouverts
 */
const FAQAccordion = ({ items = [], allowMultiple = false }) => {
    const [openItems, setOpenItems] = useState([]);

    const toggleItem = (index) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenItems((prev) =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    const isOpen = (index) => openItems.includes(index);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`border rounded-lg overflow-hidden transition-colors ${isOpen(index)
                            ? 'border-heliotrope bg-white shadow-md'
                            : 'border-gray-200 bg-white hover:border-heliotrope/50'
                        }`}
                >
                    {/* Header */}
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between p-5 text-left gap-4"
                    >
                        <div className="flex items-center gap-3 flex-1">
                            {item.icon && (
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isOpen(index) ? 'bg-heliotrope/20' : 'bg-gray-100'
                                    }`}>
                                    <item.icon className={`${isOpen(index) ? 'text-heliotrope' : 'text-gray-500'}`} size={20} />
                                </div>
                            )}
                            <h3 className={`font-medium transition-colors ${isOpen(index) ? 'text-violine' : 'text-gray-800'
                                }`}>
                                {item.question}
                            </h3>
                        </div>

                        <motion.div
                            animate={{ rotate: isOpen(index) ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`shrink-0 ${isOpen(index) ? 'text-heliotrope' : 'text-gray-400'}`}
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </button>

                    {/* Content */}
                    <AnimatePresence>
                        {isOpen(index) && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-5 pb-5 pt-0">
                                    <div className={`border-t border-gray-100 pt-4 ${item.icon ? 'ml-13' : ''}`}>
                                        {typeof item.answer === 'string' ? (
                                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                        ) : (
                                            item.answer
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
};

export default FAQAccordion;
