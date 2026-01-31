import { motion } from 'framer-motion';
import { Award, Users, GraduationCap, BookOpen } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
    {
        value: 1000,
        suffix: '+',
        label: "Élèves formés",
        description: "Depuis notre création",
        icon: Users
    },
    {
        value: 95,
        suffix: '%',
        label: "Taux de réussite",
        description: "Aux examens officiels",
        icon: GraduationCap
    },
    {
        value: 6,
        suffix: '',
        label: "Années d'expérience",
        description: "Depuis notre création en 2019",
        icon: Award
    },
    {
        value: 4,
        suffix: '',
        label: "Cycles d'enseignement",
        description: "Du préscolaire au collège",
        icon: BookOpen
    },
];

const StatsSection = () => {
    return (
        <section className="py-20 gradient-uniform relative overflow-hidden">
            {/* Particules décoratives */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gold/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                        Notre impact
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                        Jeanne d'Arc en chiffres
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="text-center group"
                        >
                            <motion.div
                                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <stat.icon className="text-gold" size={28} />
                            </motion.div>
                            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                                <AnimatedCounter
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    duration={2}
                                />
                            </div>
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
