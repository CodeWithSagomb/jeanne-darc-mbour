import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import TestimonialsCarousel from '../ui/TestimonialsCarousel';

const testimonials = [
    {
        name: "Mme Fatou Diop",
        role: "Parent d'élève - CE2",
        content: "Mon fils a fait des progrès remarquables depuis qu'il est à Jeanne d'Arc. L'encadrement est excellent et les enseignants sont vraiment dévoués. Je recommande cette école à tous les parents.",
    },
    {
        name: "M. Amadou Ndiaye",
        role: "Parent d'élève - 6ème",
        content: "L'école combine parfaitement rigueur académique et valeurs morales. Ma fille est épanouie et ses résultats aux examens sont excellents. Le bilinguisme est un vrai atout.",
    },
    {
        name: "Mme Aïssatou Sall",
        role: "Parent d'élève - Préscolaire",
        content: "L'attention portée aux tout-petits est exceptionnelle. Ma fille adore aller à l'école et apprend déjà à lire et compter. L'équipe pédagogique est formidable.",
    },
    {
        name: "M. Ibrahima Fall",
        role: "Parent d'élève - CM2",
        content: "Après le CFEE, mon fils a été admis dans un excellent collège. Merci à toute l'équipe de Jeanne d'Arc pour ce parcours réussi. Le taux de réussite n'est pas un hasard !",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-cream overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-heliotrope uppercase tracking-widest text-sm font-bold mb-4 block">
                        Témoignages
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-violine mb-4">
                        Ce que disent les parents
                    </h2>
                    <div className="flex justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-gold fill-gold" size={24} />
                        ))}
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        La satisfaction des familles est notre plus belle récompense.
                    </p>
                </motion.div>

                <TestimonialsCarousel
                    testimonials={testimonials}
                    autoPlayInterval={6000}
                />
            </div>
        </section>
    );
};

export default TestimonialsSection;
