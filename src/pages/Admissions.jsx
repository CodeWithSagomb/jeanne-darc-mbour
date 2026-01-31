import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Calendar, CreditCard, AlertCircle, CheckCircle, Phone, Info, Clock, HelpCircle, Users, Bus, Book, Utensils } from 'lucide-react';
import FAQAccordion from '../components/ui/FAQAccordion';

const admissionData = [
    {
        cycle: 'Préscolaire',
        ages: '3 - 5 ans',
        documents: [
            '1 extrait de naissance',
            '2 photos d\'identité'
        ],
        test: false
    },
    {
        cycle: 'Élémentaire',
        ages: '6 - 11 ans',
        documents: [
            '1 extrait de naissance',
            '2 photos d\'identité',
            '1 certificat de scolarité'
        ],
        test: true
    },
    {
        cycle: 'Collège (6ème - 5ème)',
        ages: '12 - 14 ans',
        documents: [
            '3 extraits de naissance',
            '2 photos d\'identité',
            '1 certificat de scolarité',
            '1 livret scolaire'
        ],
        test: true
    }
];

const faqItems = [
    {
        question: "Quand puis-je inscrire mon enfant ?",
        answer: "Les inscriptions officielles ont lieu de Juillet à Septembre. Cependant, vous pouvez déposer une pré-inscription à tout moment de l'année pour réserver une place.",
        icon: Calendar
    },
    {
        question: "Y a-t-il un test d'entrée ?",
        answer: "Oui, un test d'admission est obligatoire pour l'Élémentaire et le Collège. Il permet d'évaluer le niveau de l'élève et de l'orienter vers la classe appropriée. Pour le Préscolaire, il n'y a pas de test.",
        icon: Book
    },
    {
        question: "Proposez-vous un service de transport ?",
        answer: "Oui, nous disposons d'un service de transport scolaire couvrant plusieurs quartiers de Mbour. Les frais de transport sont en supplément de la scolarité. Contactez le secrétariat pour connaître les itinéraires.",
        icon: Bus
    },
    {
        question: "Y a-t-il une cantine ?",
        answer: "Oui, l'école propose un service de cantine avec des repas équilibrés. Les frais de cantine sont optionnels et facturés mensuellement.",
        icon: Utensils
    },
    {
        question: "Quelle est la taille des classes ?",
        answer: "Nous maintenons des effectifs raisonnables pour garantir un suivi personnalisé. Les classes comptent en moyenne 25 à 30 élèves avec un encadrement adapté.",
        icon: Users
    },
    {
        question: "L'école est-elle vraiment bilingue ?",
        answer: "Oui ! L'anglais est enseigné dès le Préscolaire et renforcé tout au long du cursus. Nos élèves développent des compétences solides dans les deux langues.",
        icon: Book
    }
];

const Admissions = () => {
    return (
        <div className="bg-cream min-h-screen">

            {/* Hero */}
            <section className="relative py-32 gradient-uniform overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Inscription"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-gold uppercase tracking-widest text-base md:text-lg font-bold mb-4 block">
                            École Académique Bilingue
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Admissions</h1>
                        <p className="text-white text-lg max-w-2xl mx-auto">
                            Préparez l'avenir de votre enfant en rejoignant notre communauté éducative.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bannière Info Période */}
            <section className="py-6 bg-violine">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 justify-center flex-wrap text-center">
                        <Clock className="text-gold" size={24} />
                        <div className="text-white">
                            <p className="font-bold">
                                <span className="text-gold">Période d'inscription :</span> Juillet - Septembre (début d'année scolaire)
                            </p>
                            <p className="text-sm text-heliotrope-light mt-1">
                                En dehors de cette période, vous pouvez déposer une demande de pré-inscription.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pré-inscription Box */}
            <section className="py-8 bg-gold">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-2xl text-violine-dark mb-3 flex items-center justify-center gap-2">
                            <Info size={24} />
                            Pré-inscription 2026/2027
                        </h2>
                        <p className="text-violine/80 mb-4">
                            Les inscriptions officielles auront lieu à la rentrée. En attendant, vous pouvez
                            <strong> déposer une demande de pré-inscription</strong> pour réserver une place.
                        </p>
                        <a
                            href="https://wa.me/221777010502?text=Bonjour, je souhaite faire une pré-inscription pour mon enfant pour l'année 2026/2027."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-violine text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-violine-dark transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Demander une pré-inscription via WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Conditions par cycle */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-serif text-4xl text-violine mb-4">Conditions d'Admission</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Documents requis selon le niveau d'inscription souhaité.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {admissionData.map((item, index) => (
                            <motion.div
                                key={item.cycle}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-cream p-8 rounded-lg border-t-4 border-heliotrope shadow-lg hover:shadow-xl transition-all"
                            >
                                <h3 className="font-serif text-2xl text-violine mb-2">{item.cycle}</h3>
                                <p className="text-gold font-medium mb-6">{item.ages}</p>

                                <div className="mb-6">
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                                        <FileText size={16} className="text-heliotrope" />
                                        Documents requis
                                    </h4>
                                    <ul className="space-y-2">
                                        {item.documents.map((doc, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                                <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                                                {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {item.test && (
                                    <div className="flex items-center gap-2 text-sm text-violine bg-violine/10 p-3 rounded">
                                        <AlertCircle size={16} />
                                        Test d'admission obligatoire
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-heliotrope uppercase tracking-widest text-sm font-bold mb-4 flex items-center justify-center gap-2">
                            <HelpCircle size={18} />
                            FAQ
                        </span>
                        <h2 className="font-serif text-4xl text-violine mb-4">Questions Fréquentes</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Trouvez rapidement les réponses à vos questions sur les admissions.
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <FAQAccordion items={faqItems} />
                    </div>
                </div>
            </section>

            {/* Informations financières */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-violine to-heliotrope p-8 md:p-12 rounded-lg shadow-xl text-white"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <CreditCard className="text-gold" size={32} />
                                <h2 className="font-serif text-3xl">Informations Financières</h2>
                            </div>

                            <div className="space-y-4 mb-8">
                                <p className="text-white/90">
                                    Les frais de scolarité varient selon le cycle et les options choisies
                                    (cantine et transport). Ils incluent :
                                </p>
                                <ul className="grid grid-cols-2 gap-3">
                                    {['Frais d\'inscription', 'Uniforme scolaire', 'Supports pédagogiques', 'Mois de juin inclus'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-white/90">
                                            <CheckCircle size={16} className="text-gold" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="text-gold shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h4 className="font-bold text-gold mb-1">Note importante</h4>
                                        <p className="text-white/90 text-sm">
                                            La scolarité doit être réglée au plus tard le <strong>05 de chaque mois</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Étapes */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-serif text-3xl text-violine mb-4">Comment s'inscrire ?</h2>
                        <p className="text-gray-600 text-sm max-w-lg mx-auto">
                            Les inscriptions officielles ont lieu en <strong>Juillet-Septembre</strong>.
                            Vous pouvez toutefois nous contacter dès maintenant pour une pré-inscription.
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            {[
                                { step: 1, title: 'Pré-inscription (toute l\'année)', desc: 'Contactez-nous par WhatsApp ou téléphone pour manifester votre intérêt.' },
                                { step: 2, title: 'Visite de l\'école', desc: 'Découvrez nos locaux et rencontrez l\'équipe pédagogique.' },
                                { step: 3, title: 'Inscription officielle (Juil-Sept)', desc: 'Déposez les documents requis selon le cycle choisi.' },
                                { step: 4, title: 'Test d\'admission', desc: 'Pour l\'Élémentaire et le Collège uniquement.' },
                                { step: 5, title: 'Confirmation', desc: 'Règlement des frais et finalisation de l\'inscription.' }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6 items-start group"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg ${item.step === 1 ? 'bg-gold' : 'bg-heliotrope'
                                            }`}
                                    >
                                        {item.step}
                                    </motion.div>
                                    <div className="group-hover:translate-x-2 transition-transform">
                                        <h3 className="font-serif text-xl text-violine mb-1">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Contact */}
            <section className="py-16 bg-gold">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl text-violine-dark mb-4">
                        Prêt à rejoindre Jeanne d'Arc ?
                    </h2>
                    <p className="text-violine/80 mb-8">
                        Contactez-nous pour une pré-inscription ou pour toute question.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/221777010502?text=Bonjour, je souhaite des informations sur les inscriptions."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-violine text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-violine-dark transition-colors"
                        >
                            <Phone size={18} />
                            WhatsApp: +221 77 701 05 02
                        </motion.a>
                        <Link
                            to="/contact"
                            className="border-2 border-violine text-violine font-bold py-3 px-8 rounded hover:bg-violine hover:text-white transition-colors"
                        >
                            Page Contact
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Admissions;
