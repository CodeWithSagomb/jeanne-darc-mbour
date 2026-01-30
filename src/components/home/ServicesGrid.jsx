import { motion } from 'framer-motion';
import { GraduationCap, Bus, Utensils, Monitor, Languages, Users } from 'lucide-react';

const services = [
    {
        icon: GraduationCap,
        title: "3 Cycles Complets",
        description: "Préscolaire, Élémentaire et Collège (6ème à 5ème)"
    },
    {
        icon: Languages,
        title: "Programme Bilingue",
        description: "Curriculum Sénégalais et International, Français & Anglais"
    },
    {
        icon: Bus,
        title: "Transport Scolaire",
        description: "Desserte de Mbour, Saly, Nianing et Grand Mbour"
    },
    {
        icon: Utensils,
        title: "Cantine Saine",
        description: "Repas équilibrés préparés sur place chaque jour"
    },
    {
        icon: Monitor,
        title: "Informatique",
        description: "Initiation aux outils numériques dès le plus jeune âge"
    },
    {
        icon: Users,
        title: "Activités Périscolaires",
        description: "Sport, langues modernes et projets collectifs"
    }
];

const ServicesGrid = () => {
    return (
        <section className="py-24 bg-white relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-baobab uppercase tracking-widest text-xs font-semibold mb-4 block">
                        L'École au Quotidien
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-night mb-6">
                        Nos Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Un cadre de vie complet pour faciliter le quotidien des familles et favoriser l'épanouissement de chaque élève.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 rounded-sm border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 bg-white"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                                    <service.icon className="text-night group-hover:text-gold transition-colors" size={22} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-night mb-2 group-hover:text-gold transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesGrid;
