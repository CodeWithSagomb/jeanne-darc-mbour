import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Bell, Clock, ArrowRight, Megaphone, BookOpen, Bus, Users, Info, Camera } from 'lucide-react';
import InteractiveCalendar from '../components/ui/InteractiveCalendar';
import PhotoGallery from '../components/ui/PhotoGallery';

// Données des actualités
const actualites = [
    {
        id: 1,
        type: 'info',
        date: '30 Janvier 2026',
        title: 'Pré-inscriptions 2026/2027 ouvertes',
        excerpt: 'Préparez la rentrée prochaine ! Les pré-inscriptions pour l\'année scolaire 2026/2027 sont désormais possibles. Renseignez-vous auprès du secrétariat.',
        icon: Info,
        important: true
    },
    {
        id: 2,
        type: 'evenement',
        date: '15 Février 2026',
        title: 'Journée Portes Ouvertes',
        excerpt: 'Venez découvrir notre école, rencontrer l\'équipe pédagogique et visiter nos installations. De 9h à 15h.',
        icon: Users,
        important: true
    },
    {
        id: 3,
        type: 'info',
        date: '20 Janvier 2026',
        title: 'Reprise des cours après les vacances',
        excerpt: 'Les cours reprennent normalement après les vacances de Noël. Tous les élèves sont attendus à 8h00.',
        icon: BookOpen,
        important: false
    },
    {
        id: 4,
        type: 'service',
        date: '10 Janvier 2026',
        title: 'Nouveaux itinéraires de transport',
        excerpt: 'Extension du service de transport scolaire vers le quartier Grand Mbour. Inscription auprès du secrétariat.',
        icon: Bus,
        important: false
    },
    {
        id: 5,
        type: 'resultat',
        date: '5 Janvier 2026',
        title: 'Résultats du 1er trimestre',
        excerpt: 'Les bulletins du premier trimestre sont disponibles. Les parents peuvent les récupérer au secrétariat.',
        icon: BookOpen,
        important: false
    }
];

// Événements pour le calendrier interactif
const calendarEvents = [
    // Vacances
    { date: '2025-12-21', title: 'Début vacances de Noël', type: 'vacances', important: true },
    { date: '2026-01-06', title: 'Fin vacances de Noël', type: 'vacances' },
    { date: '2026-02-15', title: 'Début vacances de Février', type: 'vacances', important: true },
    { date: '2026-02-23', title: 'Fin vacances de Février', type: 'vacances' },
    { date: '2026-04-05', title: 'Début vacances de Pâques', type: 'vacances', important: true },
    { date: '2026-04-20', title: 'Fin vacances de Pâques', type: 'vacances' },

    // Examens
    { date: '2026-01-15', title: 'Compositions 1er trimestre', type: 'examen', important: true },
    { date: '2026-03-20', title: 'Compositions 2ème trimestre', type: 'examen', important: true },
    { date: '2026-06-01', title: 'Début examens de fin d\'année', type: 'examen', important: true },
    { date: '2026-06-15', title: 'CFEE / Entrée en 6ème', type: 'examen', important: true },

    // Événements
    { date: '2026-02-15', title: 'Journée Portes Ouvertes', type: 'evenement', important: true, description: 'De 9h à 15h' },
    { date: '2026-03-08', title: 'Journée de la femme', type: 'evenement' },
    { date: '2026-04-04', title: 'Fête de l\'Indépendance', type: 'evenement' },
    { date: '2026-06-30', title: 'Fête de fin d\'année', type: 'evenement', important: true },

    // Inscriptions
    { date: '2026-07-01', title: 'Ouverture inscriptions 2026/2027', type: 'inscription', important: true },
    { date: '2026-09-15', title: 'Clôture inscriptions', type: 'inscription', important: true },
    { date: '2026-10-03', title: 'Rentrée scolaire 2026/2027', type: 'inscription', important: true },
];

// Photos de l'école
const schoolPhotos = [
    {
        src: "/images/backgrounds/hero-classroom.png",
        alt: "Salle de classe",
        caption: "Nos salles de classe modernes"
    },
    {
        src: "/images/backgrounds/campus.png",
        alt: "Campus de l'école",
        caption: "Notre campus accueillant"
    },
    {
        src: "/images/gallery/teacher.png",
        alt: "Cours de mathématiques",
        caption: "Apprentissage interactif"
    },
    {
        src: "/images/gallery/preschool.png",
        alt: "Préscolaire",
        caption: "Éveil et découverte"
    },
];

const Actualites = () => {
    return (
        <div className="bg-cream min-h-screen">

            {/* Hero */}
            <section className="relative py-32 gradient-uniform overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-gold uppercase tracking-widest text-base md:text-lg font-bold mb-4 block">
                            École Académique Bilingue
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Actualités & Annonces</h1>
                        <p className="text-white text-lg max-w-2xl mx-auto">
                            Restez informés des dernières nouvelles et événements de l'école Jeanne d'Arc de Mbour.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Info Inscriptions */}
            <section className="py-4 bg-violine">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 justify-center flex-wrap">
                        <Info className="text-gold" size={20} />
                        <p className="text-white text-sm text-center">
                            <strong className="text-gold">Note :</strong> Les inscriptions officielles se font en début d'année scolaire (Juillet-Septembre).
                            Les pré-inscriptions pour 2026/2027 sont ouvertes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contenu Principal */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Actualités - 2 colonnes */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-8">
                                <Megaphone className="text-heliotrope" size={28} />
                                <h2 className="font-serif text-3xl text-violine">Dernières Actualités</h2>
                            </div>

                            <div className="space-y-6">
                                {actualites.map((item, index) => (
                                    <motion.article
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className={`p-6 rounded-lg border-l-4 transition-all cursor-pointer hover:shadow-lg ${item.important
                                            ? 'bg-gold/10 border-gold'
                                            : 'bg-cream border-heliotrope'
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.important ? 'bg-gold/20' : 'bg-heliotrope/10'
                                                    }`}
                                            >
                                                <item.icon className={item.important ? 'text-gold' : 'text-heliotrope'} size={24} />
                                            </motion.div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                                        <Clock size={12} />
                                                        {item.date}
                                                    </span>
                                                    {item.important && (
                                                        <motion.span
                                                            initial={{ scale: 0.8 }}
                                                            animate={{ scale: [1, 1.05, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                            className="text-xs bg-gold text-violine-dark px-2 py-0.5 rounded-full font-bold"
                                                        >
                                                            Important
                                                        </motion.span>
                                                    )}
                                                </div>
                                                <h3 className="font-serif text-xl text-violine mb-2">{item.title}</h3>
                                                <p className="text-gray-600 text-sm">{item.excerpt}</p>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar - Calendrier Interactif */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Calendar className="text-heliotrope" size={24} />
                                        <h3 className="font-serif text-xl text-violine">Calendrier Scolaire</h3>
                                    </div>
                                    <InteractiveCalendar events={calendarEvents} />
                                </div>

                                {/* Info Pré-inscription */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gold/10 border border-gold rounded-lg p-6"
                                >
                                    <h3 className="font-serif text-lg text-violine mb-3 flex items-center gap-2">
                                        <Bell className="text-gold" size={18} />
                                        Pré-inscription
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Vous souhaitez inscrire votre enfant pour la rentrée 2026 ?
                                        Déposez une demande de pré-inscription dès maintenant.
                                    </p>
                                    <Link
                                        to="/admissions"
                                        className="inline-flex items-center gap-2 text-violine font-bold text-sm hover:text-heliotrope transition-colors"
                                    >
                                        En savoir plus <ArrowRight size={14} />
                                    </Link>
                                </motion.div>

                                {/* Contact rapide */}
                                <div className="bg-cream rounded-lg p-6">
                                    <h3 className="font-serif text-xl text-violine mb-4">Une question ?</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Contactez le secrétariat pour plus d'informations.
                                    </p>
                                    <a
                                        href="https://wa.me/221777010502"
                                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-sm transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galerie Photos */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-heliotrope uppercase tracking-widest text-sm font-bold mb-4 flex items-center justify-center gap-2">
                            <Camera size={18} />
                            Galerie Photos
                        </span>
                        <h2 className="font-serif text-4xl text-violine mb-4">La vie à l'école</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Découvrez notre environnement d'apprentissage à travers ces images de notre quotidien.
                        </p>
                    </motion.div>

                    <PhotoGallery images={schoolPhotos} columns={4} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 gradient-uniform">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl text-white mb-4">
                        Préparez la rentrée 2026
                    </h2>
                    <p className="text-white/90 mb-8 max-w-xl mx-auto">
                        Les pré-inscriptions sont ouvertes. Réservez une place pour votre enfant dès maintenant.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/admissions"
                            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-violine-dark font-bold py-3 px-8 rounded shadow-lg transition-colors"
                        >
                            Pré-inscription 2026/2027
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Actualites;
