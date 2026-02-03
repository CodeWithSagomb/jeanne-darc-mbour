import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Target, Eye, Heart, Users, Award } from 'lucide-react';

const Institution = () => {
    return (
        <div className="bg-cream min-h-screen">

            {/* Hero Section */}
            <section className="relative py-32 gradient-uniform overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/images/backgrounds/campus.png"
                        alt="Campus"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold uppercase tracking-widest text-base md:text-lg font-bold mb-4 block">École Académique Bilingue</span>
                        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Notre Institution</h1>
                        <p className="text-white text-lg max-w-2xl mx-auto">
                            Une école fondée sur des valeurs fortes, au service de l'excellence éducative au Sénégal.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-12 items-center">

                            {/* Photo du Fondateur */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-2"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-4 border-2 border-heliotrope/30 rounded-lg"></div>
                                    <div className="aspect-[4/5] rounded-lg overflow-hidden relative shadow-xl">
                                        <img
                                            src="/images/pasteur-herve.jpg"
                                            alt="Pasteur HERVE Martis et son épouse"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Founder Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-3"
                            >
                                <span className="text-heliotrope uppercase tracking-widest text-xs font-bold mb-4 block">
                                    Le Fondateur
                                </span>
                                <h2 className="font-serif text-3xl md:text-4xl text-violine mb-6">
                                    Pasteur HERVE Martis
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Fondateur et Promoteur de l'École Académique Bilingue Jeanne d'Arc de Mbour,
                                    le Pasteur HERVE Martis a créé cet établissement en <strong>2019</strong> avec une vision claire :
                                    offrir une éducation de qualité, accessible et ancrée dans des valeurs morales fortes.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Convaincu que <em>"Ouvrir une école, c'est fermer une prison"</em>, il a bâti une institution
                                    qui forme des élèves disciplinés, compétents et responsables, capables de contribuer
                                    activement au développement du Sénégal.
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <Calendar size={18} className="text-gold" />
                                    <span>Fondée en 2019 à Mbour</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-lg shadow-lg border-l-4 border-gold"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-heliotrope/10 flex items-center justify-center">
                                    <Target className="text-heliotrope" size={24} />
                                </div>
                                <h3 className="font-serif text-2xl text-violine">Notre Mission</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Offrir une <strong>éducation de qualité, bilingue et accessible</strong>,
                                qui encadre les élèves sur les plans académique, moral et citoyen afin de bâtir
                                une <strong>jeunesse responsable et engagée</strong> pour l'avenir du Sénégal.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 md:p-10 rounded-lg shadow-lg border-l-4 border-violine"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-violine/10 flex items-center justify-center">
                                    <Eye className="text-violine" size={24} />
                                </div>
                                <h3 className="font-serif text-2xl text-violine">Notre Vision</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Devenir une <strong>institution de référence</strong> dans la formation des élites de demain,
                                en favorisant l'<strong>excellence académique</strong>, l'<strong>ouverture internationale</strong>
                                et l'insertion professionnelle des jeunes.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 gradient-uniform text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                            Ce qui nous guide
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Nos Valeurs</h2>
                        <p className="text-white/90 max-w-2xl mx-auto">
                            Trois piliers fondamentaux qui guident notre action éducative au quotidien.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: "Travail", desc: "L'effort quotidien comme fondement de la réussite", icon: Award },
                            { title: "Discipline", desc: "Le cadre structurant qui permet l'épanouissement", icon: Users },
                            { title: "Réussite", desc: "L'excellence comme objectif pour chaque élève", icon: Heart }
                        ].map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-8 border border-gold/30 rounded-lg hover:border-gold/60 transition-colors bg-white/5"
                            >
                                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="text-gold" size={28} />
                                </div>
                                <h3 className="font-serif text-2xl text-white mb-3">{value.title}</h3>
                                <p className="text-white/80">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gold">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-violine-dark mb-6">
                        Rejoignez notre communauté
                    </h2>
                    <p className="text-violine/80 mb-8 max-w-xl mx-auto">
                        Les pré-inscriptions pour l'année scolaire 2026/2027 sont ouvertes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/admissions"
                            className="bg-violine text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-violine-dark transition-colors"
                        >
                            Voir les Admissions
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-violine text-violine font-bold py-3 px-8 rounded hover:bg-violine hover:text-white transition-colors"
                        >
                            Nous Contacter
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Institution;
