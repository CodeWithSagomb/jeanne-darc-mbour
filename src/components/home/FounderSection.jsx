import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const FounderSection = () => {
    return (
        <section className="relative py-24 bg-night overflow-hidden">
            {/* African Pattern */}
            <div className="absolute inset-0 pattern-african opacity-20"></div>

            {/* Golden accent line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gold hidden lg:block"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">

                    <div className="grid md:grid-cols-5 gap-12 items-center">

                        {/* Photo Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-2"
                        >
                            <div className="relative">
                                {/* Golden Frame */}
                                <div className="absolute -inset-3 border-2 border-gold/30 rounded-sm"></div>
                                <div className="absolute -inset-6 border border-gold/10 rounded-sm"></div>

                                {/* Photo Placeholder */}
                                <div className="aspect-[3/4] bg-gradient-to-br from-night-light to-night rounded-sm overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center text-white/30">
                                            <div className="w-24 h-24 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
                                                <span className="text-4xl font-serif text-gold">HM</span>
                                            </div>
                                            <p className="text-sm">Photo à venir</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quote & Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="md:col-span-3"
                        >
                            <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-4 block">
                                Le Mot du Fondateur
                            </span>

                            <div className="relative mb-8">
                                <Quote className="absolute -top-4 -left-4 text-gold/20" size={48} />
                                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed pl-8">
                                    Notre mission est de former des élèves disciplinés, compétents et responsables, capables de contribuer activement au développement du Sénégal.
                                </blockquote>
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <p className="font-hand text-2xl text-gold mb-2">
                                    Pasteur HERVE Martis
                                </p>
                                <p className="text-white/60 text-sm uppercase tracking-wider">
                                    Fondateur & Promoteur
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
