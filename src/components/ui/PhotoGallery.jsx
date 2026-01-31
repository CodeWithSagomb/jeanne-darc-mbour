import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

/**
 * Galerie photos avec lightbox
 * @param {Array} images - [{src, alt, caption}]
 */
const PhotoGallery = ({ images = [], columns = 3 }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const openLightbox = (index) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = '';
    };

    const navigate = (direction) => {
        if (selectedIndex === null) return;
        const newIndex = selectedIndex + direction;
        if (newIndex >= 0 && newIndex < images.length) {
            setSelectedIndex(newIndex);
        }
    };

    const handleKeyDown = (e) => {
        if (selectedIndex === null) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
    };

    return (
        <>
            {/* Grid de photos */}
            <div
                className={`grid gap-4 ${columns === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                        columns === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                    }`}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || `Photo ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-violine/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className="flex items-center justify-between">
                                    <p className="text-white text-sm font-medium truncate">
                                        {image.caption || image.alt}
                                    </p>
                                    <ZoomIn className="text-gold" size={20} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                        onClick={closeLightbox}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        {/* Bouton fermer */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation */}
                        {selectedIndex > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-sm z-10"
                            >
                                <ChevronLeft size={32} />
                            </button>
                        )}
                        {selectedIndex < images.length - 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-sm z-10"
                            >
                                <ChevronRight size={32} />
                            </button>
                        )}

                        {/* Image */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="max-w-[90vw] max-h-[85vh] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[selectedIndex].src}
                                alt={images[selectedIndex].alt}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                            {images[selectedIndex].caption && (
                                <p className="text-white text-center mt-4 text-lg">
                                    {images[selectedIndex].caption}
                                </p>
                            )}
                        </motion.div>

                        {/* Indicateur */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                                    className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? 'bg-gold w-6' : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PhotoGallery;
