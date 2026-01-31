import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../components/ui/Toast';

const Contact = () => {
    const toast = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const validateForm = () => {
        if (!formData.name.trim()) {
            toast.error('Veuillez entrer votre nom');
            return false;
        }
        if (!formData.phone.trim()) {
            toast.error('Veuillez entrer votre numéro de téléphone');
            return false;
        }
        if (!formData.subject) {
            toast.error('Veuillez sélectionner un sujet');
            return false;
        }
        if (!formData.message.trim()) {
            toast.error('Veuillez entrer votre message');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        toast.info('Préparation de votre message...');

        // Simulation d'un délai pour montrer le loading
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const mailtoLink = `mailto:ecolejeannedarc.adm@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nTéléphone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
            window.location.href = mailtoLink;

            toast.success('Votre client email s\'ouvre avec le message pré-rempli !');

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            toast.error('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // WhatsApp Message
    const handleWhatsApp = () => {
        const message = formData.message
            ? `Bonjour, je suis ${formData.name || 'un parent'}. ${formData.message}`
            : 'Bonjour, je souhaite des informations sur l\'école Jeanne d\'Arc de Mbour.';

        window.open(`https://wa.me/221777010502?text=${encodeURIComponent(message)}`, '_blank');
        toast.success('Redirection vers WhatsApp...');
    };

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
                        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Contactez-nous</h1>
                        <p className="text-white text-lg max-w-2xl mx-auto">
                            Notre équipe est à votre écoute pour répondre à toutes vos questions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

                        {/* Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div>
                                <h2 className="font-serif text-3xl text-violine mb-6">Informations</h2>
                                <p className="text-gray-600 mb-8">
                                    N'hésitez pas à nous contacter par téléphone, WhatsApp ou email.
                                    Vous pouvez également nous rendre visite directement à l'école.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    className="flex gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-heliotrope/10 flex items-center justify-center shrink-0">
                                        <MapPin className="text-heliotrope" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-violine mb-1">Adresse</h3>
                                        <p className="text-gray-600 text-sm">
                                            Mbour Serere Souf / Tripano<br />
                                            Villa n° 62A/62C, Route de Joal<br />
                                            Mbour, Sénégal
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-heliotrope/10 flex items-center justify-center shrink-0">
                                        <Phone className="text-heliotrope" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-violine mb-1">Téléphone</h3>
                                        <p className="text-gray-600 text-sm">
                                            <a href="tel:+221767550909" className="hover:text-heliotrope">+221 76 755 09 09</a><br />
                                            <a href="https://wa.me/221777010502" className="text-green-600 hover:underline">
                                                WhatsApp: +221 77 701 05 02
                                            </a>
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-heliotrope/10 flex items-center justify-center shrink-0">
                                        <Mail className="text-heliotrope" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-violine mb-1">Email</h3>
                                        <p className="text-gray-600 text-sm">
                                            <a href="mailto:ecolejeannedarc.adm@gmail.com" className="hover:text-heliotrope">
                                                ecolejeannedarc.adm@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-heliotrope/10 flex items-center justify-center shrink-0">
                                        <Clock className="text-heliotrope" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-violine mb-1">Horaires du secrétariat</h3>
                                        <p className="text-gray-600 text-sm">
                                            Lundi - Vendredi : 08h00 - 16h00<br />
                                            Mercredi : Fin des cours à 13h00
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bouton WhatsApp */}
                            <motion.button
                                onClick={handleWhatsApp}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Écrire sur WhatsApp
                            </motion.button>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-cream p-8 md:p-10 rounded-lg">
                                <h3 className="font-serif text-2xl text-violine mb-6">Envoyez-nous un message</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Nom complet *
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.01 }}
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heliotrope focus:border-transparent outline-none transition-all"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Téléphone *
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.01 }}
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heliotrope focus:border-transparent outline-none transition-all"
                                                placeholder="+221 XX XXX XX XX"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <motion.input
                                            whileFocus={{ scale: 1.01 }}
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heliotrope focus:border-transparent outline-none transition-all"
                                            placeholder="votre@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Sujet *
                                        </label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heliotrope focus:border-transparent outline-none transition-all bg-white"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="Demande d'inscription">Demande d'inscription</option>
                                            <option value="Pré-inscription 2026/2027">Pré-inscription 2026/2027</option>
                                            <option value="Renseignements généraux">Renseignements généraux</option>
                                            <option value="Visite de l'école">Visite de l'école</option>
                                            <option value="Transport scolaire">Transport scolaire</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.01 }}
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heliotrope focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Votre message..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className={`w-full font-bold py-4 px-8 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 ${isSubmitting
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-heliotrope hover:bg-violine text-white'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Envoyer le message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-12 bg-cream">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="aspect-[21/9] bg-gradient-to-br from-violine/5 to-heliotrope/10 rounded-lg overflow-hidden relative border border-heliotrope/20"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <MapPin className="mx-auto text-heliotrope mb-4" size={48} />
                                    </motion.div>
                                    <p className="text-violine font-medium">
                                        Mbour Serere Souf / Tripano
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        Villa n° 62A/62C, Route de Joal
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
