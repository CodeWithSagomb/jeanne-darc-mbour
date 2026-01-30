import { motion } from 'framer-motion';
import { BookOpen, Star, Shield, Bus } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const features = [
    {
        icon: <BookOpen className="w-8 h-8 text-white" />,
        title: "Enseignement Bilingue",
        description: "Un programme mixte Sénégalais & International pour former des esprits ouverts sur le monde."
    },
    {
        icon: <Star className="w-8 h-8 text-white" />,
        title: "Excellence Académique",
        description: "Une exigence de travail et de réussite pour bâtir l'élite de demain."
    },
    {
        icon: <Shield className="w-8 h-8 text-white" />,
        title: "Cadre Discipliné",
        description: "Un environnement sûr et structuré favorisant l'apprentissage et le respect."
    },
    {
        icon: <Bus className="w-8 h-8 text-white" />,
        title: "Services Complets",
        description: "Transport scolaire (Mbour, Saly, Nianing) et cantine pour faciliter la vie des familles."
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <SectionTitle title="Pourquoi choisir Jeanne d'Arc ?" subtitle="Nos Atouts" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-b-4 border-transparent hover:border-accent group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>

                            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary-light to-primary text-white flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-primary-dark group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
