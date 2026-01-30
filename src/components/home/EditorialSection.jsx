import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const EditorialSection = () => {
    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-64 h-64 border border-violine rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 border border-heliotrope rounded-full"></div>
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-heliotrope uppercase tracking-widest text-xs font-bold mb-6 block">
                            Notre Engagement
                        </span>

                        <div className="relative mb-8">
                            <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold/30" size={48} />
                            <blockquote className="font-serif text-2xl md:text-4xl text-violine leading-relaxed">
                                Notre mission est de former des élèves disciplinés, compétents et responsables,
                                capables de contribuer activement au développement du Sénégal.
                            </blockquote>
                        </div>

                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-12 h-px bg-gold"></div>
                            <span className="text-violine font-serif text-lg">Pasteur HERVE Martis</span>
                            <div className="w-12 h-px bg-gold"></div>
                        </div>

                        <p className="text-gray-600 text-sm uppercase tracking-wider">
                            Fondateur & Promoteur
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EditorialSection;
