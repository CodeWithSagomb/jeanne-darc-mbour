import { motion } from 'framer-motion';
import { GraduationCap, Users, Globe, Bus } from 'lucide-react';

const stats = [
    {
        icon: GraduationCap,
        value: "3",
        label: "Cycles",
        description: "Maternelle, Primaire, Collège"
    },
    {
        icon: Globe,
        value: "2",
        label: "Langues",
        description: "Programme Bilingue FR/EN"
    },
    {
        icon: Users,
        value: "2019",
        label: "Fondée",
        description: "Par Pasteur HERVE Martis"
    },
    {
        icon: Bus,
        value: "4",
        label: "Zones Transport",
        description: "Mbour, Saly, Nianing, Grand Mbour"
    }
];

const StatsSection = () => {
    return (
        <section className="py-20 gradient-uniform text-white">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">En Chiffres</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-white">L'École en un coup d'œil</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-heliotrope/30 mb-4 group-hover:bg-gold/30 transition-colors">
                                <stat.icon className="text-gold" size={28} />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                            <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                            <div className="text-sm text-white/80">{stat.description}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StatsSection;
