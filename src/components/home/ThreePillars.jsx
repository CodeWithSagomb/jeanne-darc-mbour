import { motion } from 'framer-motion';
import { BookOpen, Scale, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
    {
        icon: BookOpen,
        title: "Travail",
        subtitle: "L'effort quotidien",
        description: "Un enseignement bilingue exigeant qui prépare nos élèves aux défis de demain.",
        color: "terracotta"
    },
    {
        icon: Scale,
        title: "Discipline",
        subtitle: "Le cadre qui libère",
        description: "Des règles claires et bienveillantes pour développer le sens des responsabilités.",
        color: "baobab"
    },
    {
        icon: Star,
        title: "Réussite",
        subtitle: "Le fruit de l'excellence",
        description: "Chaque élève est accompagné vers son plein potentiel académique et humain.",
        color: "gold"
    }
];

const ThreePillars = () => {
    return (
        <section className="py-24 bg-sand relative overflow-hidden">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 pattern-african opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-terracotta uppercase tracking-widest text-xs font-semibold mb-4 block">
                        Nos Fondements
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night mb-6">
                        Les 3 Piliers
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Notre approche pédagogique repose sur trois valeurs fondamentales qui guident chaque jour notre action éducative.
                    </p>
                </motion.div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="bg-white rounded-sm shadow-xl p-8 lg:p-10 h-full border-t-4 border-transparent hover:border-gold transition-all duration-300 hover:-translate-y-2">

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-full bg-${pillar.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <pillar.icon className={`text-${pillar.color}`} size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-3xl text-night mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-gold font-hand text-xl mb-4">
                                    {pillar.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {pillar.description}
                                </p>

                                {/* Decorative Line */}
                                <div className={`w-12 h-1 bg-${pillar.color}/30 group-hover:w-20 transition-all duration-300`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        to="/institution"
                        className="inline-flex items-center text-terracotta hover:text-night transition-colors font-semibold uppercase tracking-wider text-sm"
                    >
                        <span className="border-b-2 border-current pb-1">
                            En savoir plus sur notre pédagogie
                        </span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default ThreePillars;
