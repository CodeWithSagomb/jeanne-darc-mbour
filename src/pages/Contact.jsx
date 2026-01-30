import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:ecolejeannedarc.adm@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nTéléphone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
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
                                <div className="flex gap-4">
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
                                </div>

                                <div className="flex gap-4">
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
                                </div>

                                <div className="flex gap-4">
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
                                </div>

                                <div className="flex gap-4">
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
                                </div>
                            </div>
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
                                            <input
                                                type="text"
                                                required
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
                                            <input
                                                type="tel"
                                                required
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
                                        <input
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
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heliotrope focus:border-transparent outline-none transition-all bg-white"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="Demande d'inscription">Demande d'inscription</option>
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
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heliotrope focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Votre message..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-heliotrope hover:bg-violine text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Send size={18} />
                                        Envoyer le message
                                    </button>
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
                        <div className="aspect-[21/9] bg-gradient-to-br from-violine/5 to-heliotrope/10 rounded-lg overflow-hidden relative border border-heliotrope/20">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="mx-auto text-heliotrope mb-4" size={48} />
                                    <p className="text-violine font-medium">
                                        Mbour Serere Souf / Tripano
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        Villa n° 62A/62C, Route de Joal
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
