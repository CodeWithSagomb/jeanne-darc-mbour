import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Monitor, Dumbbell, Languages, Bus, Utensils } from 'lucide-react';

const cycles = [
    {
        id: 'prescolaire',
        title: 'Préscolaire / Maternelle',
        subtitle: 'Cycle complet',
        description: 'Un environnement bienveillant pour les premières découvertes. Éveil, socialisation et préparation aux apprentissages fondamentaux.',
        ages: '3 - 5 ans',
        icon: Users,
        features: ['Éveil corporel et artistique', 'Initiation à la lecture', 'Découverte des langues']
    },
    {
        id: 'elementaire',
        title: 'Élémentaire / Primaire',
        subtitle: 'Cycle complet',
        description: 'Acquisition des savoirs fondamentaux dans un cadre structuré et stimulant. Programme bilingue français-anglais.',
        ages: '6 - 11 ans',
        icon: BookOpen,
        features: ['Programme sénégalais', 'Immersion anglaise', 'Activités périscolaires']
    },
    {
        id: 'college',
        title: 'Collège / Moyen',
        subtitle: '6ème à 5ème',
        description: 'Approfondissement des connaissances et préparation aux études supérieures. Excellence académique et ouverture internationale.',
        ages: '12 - 14 ans',
        icon: GraduationCap,
        features: ['Curriculum international', 'Préparation au BFEM', 'Orientation professionnelle']
    }
];

const activities = [
    { name: 'Informatique', icon: Monitor, desc: 'Initiation aux outils numériques' },
    { name: 'Sport', icon: Dumbbell, desc: 'Éducation physique et sportive' },
    { name: 'Langues', icon: Languages, desc: 'Anglais et langues modernes' }
];

const Pedagogie = () => {
    return (
        <div className="bg-cream min-h-screen">

            {/* Hero */}
            <section className="relative py-32 gradient-uniform overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/images/gallery/teacher.png"
                        alt="Salle de classe"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-gold uppercase tracking-widest text-base md:text-lg font-bold mb-4 block">École Académique Bilingue</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Projet Pédagogique</h1>
                        <p className="text-white text-lg max-w-2xl mx-auto">
                            Un enseignement bilingue de qualité, du Préscolaire au Collège,
                            alliant le programme sénégalais et une ouverture internationale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cycles */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-heliotrope uppercase tracking-widest text-xs font-bold mb-4 block">
                            De 3 à 14 ans
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-violine mb-4">Nos Cycles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Un parcours complet pour accompagner chaque élève dans son développement.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {cycles.map((cycle, index) => (
                            <motion.div
                                key={cycle.id}
                                id={cycle.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Image */}
                                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <div className="aspect-video gradient-uniform rounded-lg overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <cycle.icon className="text-white/30" size={80} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <span className="text-heliotrope uppercase tracking-widest text-xs font-bold mb-2 block">
                                        {cycle.subtitle}
                                    </span>
                                    <h3 className="font-serif text-3xl text-violine mb-2">{cycle.title}</h3>
                                    <p className="text-gold font-medium mb-4">{cycle.ages}</p>
                                    <p className="text-gray-600 mb-6">{cycle.description}</p>

                                    <ul className="space-y-2">
                                        {cycle.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600">
                                                <span className="w-2 h-2 rounded-full bg-heliotrope"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activités Périscolaires */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-serif text-3xl md:text-4xl text-violine mb-4">
                            Activités Périscolaires
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Des activités complémentaires pour développer toutes les compétences.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {activities.map((activity, i) => (
                            <motion.div
                                key={activity.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-heliotrope"
                            >
                                <div className="w-14 h-14 rounded-full bg-heliotrope/10 flex items-center justify-center mx-auto mb-4">
                                    <activity.icon className="text-heliotrope" size={24} />
                                </div>
                                <h3 className="font-serif text-xl text-violine mb-2">{activity.name}</h3>
                                <p className="text-gray-500 text-sm">{activity.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="font-serif text-3xl md:text-4xl text-violine mb-4">
                                Services Annexes
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex gap-4 p-6 bg-cream rounded-lg"
                            >
                                <Bus className="text-heliotrope shrink-0" size={32} />
                                <div>
                                    <h3 className="font-serif text-xl text-violine mb-2">Transport Scolaire</h3>
                                    <p className="text-gray-600 text-sm">
                                        Desserte quotidienne de <strong>Mbour, Saly, Nianing et Grand Mbour</strong>.
                                        Service sécurisé et ponctuel.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex gap-4 p-6 bg-cream rounded-lg"
                            >
                                <Utensils className="text-heliotrope shrink-0" size={32} />
                                <div>
                                    <h3 className="font-serif text-xl text-violine mb-2">Cantine Scolaire</h3>
                                    <p className="text-gray-600 text-sm">
                                        Repas équilibrés préparés sur place.
                                        <strong>Disponible sur inscription</strong> auprès de l'administration.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-violine">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl text-white mb-6">
                        Prêt à inscrire votre enfant ?
                    </h2>
                    <Link
                        to="/admissions"
                        className="inline-block bg-gold hover:bg-gold-dark text-violine-dark font-bold py-3 px-8 rounded shadow-lg transition-colors"
                    >
                        Voir les conditions d'admission
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Pedagogie;
