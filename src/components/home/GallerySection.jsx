import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import PhotoGallery from '../ui/PhotoGallery';

const schoolPhotos = [
    {
        src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
        alt: "Salle de classe",
        caption: "Nos salles de classe modernes"
    },
    {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
        alt: "Cour de récréation",
        caption: "Espace de jeux sécurisé"
    },
    {
        src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
        alt: "Bibliothèque",
        caption: "Notre bibliothèque"
    },
    {
        src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800",
        alt: "Élèves en classe",
        caption: "Apprentissage interactif"
    },
    {
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
        alt: "Activités sportives",
        caption: "Sport et bien-être"
    },
    {
        src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800",
        alt: "Événement scolaire",
        caption: "Fête de fin d'année"
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
