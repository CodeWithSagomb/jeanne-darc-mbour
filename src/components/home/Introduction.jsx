import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Introduction = () => {
    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            {/* Fallback color/placeholder if image fails, but using Unsplash for demo */}
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1544531696-2822a0996a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Élèves en classe"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 opacity-50 blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full -z-10 opacity-50 blur-2xl"></div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <SectionTitle title="Une Institution tournée vers l'Avenir" subtitle="Présentation" align="left" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Fondée en 2019 par le Pasteur HERVE Martis, l'<strong>École Académique Bilingue Jeanne d'Arc de Mbour</strong> s'est donné pour mission de former les élites de demain.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Nous offrons un cadre éducatif structuré, de la maternelle au collège, où chaque élève est accompagné pour développer son plein potentiel académique, moral et citoyen.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="border-l-4 border-accent pl-4">
                                <span className="block text-3xl font-bold text-primary">2019</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Année de fondation</span>
                            </div>
                            <div className="border-l-4 border-accent pl-4">
                                <span className="block text-3xl font-bold text-primary">Bi-lingue</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Français / Anglais</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button to="/institution" variant="primary">En savoir plus</Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Introduction;
