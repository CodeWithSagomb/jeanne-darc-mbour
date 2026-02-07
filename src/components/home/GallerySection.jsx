import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import PhotoGallery from '../ui/PhotoGallery';

const schoolPhotos = [
    {
        src: "/images/backgrounds/ecole-facade.jpg",
        alt: "Façade de l'école Jeanne d'Arc",
        caption: "Notre école à Mbour"
    },
    {
        src: "/images/gallery/cantine.jpg",
        alt: "Cantine scolaire",
        caption: "Notre cantine"
    },
    {
        src: "/images/gallery/transport.jpg",
        alt: "Transport scolaire",
        caption: "Service de transport"
    },
    {
        src: "/images/gallery/elementaire.jpg",
        alt: "Classe élémentaire",
        caption: "Cours en élémentaire"
    },
    {
        src: "/images/gallery/recreation.jpg",
        alt: "Récréation",
        caption: "Moments de récréation"
    },
    {
        src: "/images/pasteur-herve.jpg",
        alt: "Pasteur HERVE Martis",
        caption: "Notre fondateur"
    },
];

const GallerySection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-heliotrope uppercase tracking-widest text-sm font-bold mb-4 flex items-center justify-center gap-2">
                        <Camera size={18} />
                        Galerie Photos
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-violine mb-4">
                        La vie à Jeanne d'Arc
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Découvrez notre environnement d'apprentissage à travers ces images de notre quotidien.
                    </p>
                </motion.div>

                <PhotoGallery images={schoolPhotos} columns={3} />
            </div>
        </section>
    );
};

export default GallerySection;
