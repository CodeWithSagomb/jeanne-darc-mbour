import { motion } from 'framer-motion';
import { Heart, Globe, TabletSmartphone, Hands, BookOpen, Rss } from 'lucide-react';

const FeaturesGrid = () => {
    const cards = [
        {
            title: "Nos Valeurs : Rigueur, Foi & Téranga",
            description: "Nos Valeurs : Rigueur, Foi & Téranga portent notre engagement éducatif, formant des esprits ouverts et solidaires.",
            icon: <Hands size={48} className="text-white opacity-90" />,
            colorClass: "bg-terracotta", // Terracotta
            bgPattern: "bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]",
            delay: 0.1
        },
        {
            title: "Actualités du Campus",
            description: "Suivez la vie vibrante de l'école : événements, réussites des élèves, et projets communautaires au cœur de Mbour.",
            icon: <Rss size={48} className="text-white opacity-90" />,
            colorClass: "bg-primary-dark", // Dark Blue
            bgPattern: "bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]", // subtle noise
            delay: 0.2
        },
        {
            title: "Le Projet Éducatif Digital",
            description: "L'innovation au service de la réussite : Tablettes, ENT et ressources numériques pour un apprentissage du XXIe siècle.",
            icon: <TabletSmartphone size={48} className="text-white opacity-90" />,
            colorClass: "bg-[#8B8000]", // Dark Gold/Khaki
            bgPattern: "",
            delay: 0.3
        }
    ];

    return (
        <section className="relative -mt-16 z-30 pb-20 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: card.delay }}
                            className={`${card.colorClass} ${card.bgPattern} rounded-2xl p-8 text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-start h-full min-h-[300px] border-t-4 border-white/20`}
                        >
                            <div className="bg-white/10 p-4 rounded-xl mb-6 shadow-inner">
                                {card.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4 leading-tight">
                                {card.title}
                            </h3>
                            <p className="text-white/80 font-sans leading-relaxed text-sm md:text-base">
                                {card.description}
                            </p>

                            <div className="mt-auto pt-8 w-full flex justify-end">
                                <span className="w-12 h-1 bg-white/30 rounded-full"></span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
