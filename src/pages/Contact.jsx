import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, User, AtSign, MessageSquare, Send } from 'lucide-react';
import SmartInput from '../components/ui/SmartInput';
import SmartSelect from '../components/ui/SmartSelect';
import SmartTextarea from '../components/ui/SmartTextarea';
import LoadingButton from '../components/ui/LoadingButton';
import ConfirmationMessage, { ContactOptions } from '../components/ui/ConfirmationMessage';

// Validation helpers
const validators = {
    required: (value) => !value?.trim() ? 'Ce champ est obligatoire' : '',
    email: (value) => {
        if (!value) return '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Email invalide' : '';
    },
    phone: (value) => {
        if (!value) return '';
        const phoneRegex = /^[\d\s+()-]{8,}$/;
        return !phoneRegex.test(value) ? 'Numéro de téléphone invalide' : '';
    },
    minLength: (min) => (value) => {
        if (!value) return '';
        return value.length < min ? `Minimum ${min} caractères` : '';
    }
};

const subjectOptions = [
    { value: 'inscription', label: 'Inscription / Pré-inscription' },
    { value: 'preinscription_2026', label: 'Pré-inscription 2026/2027' },
    { value: 'info', label: 'Demande d\'informations' },
    { value: 'rdv', label: 'Prise de rendez-vous' },
    { value: 'autre', label: 'Autre' }
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [showContactOptions, setShowContactOptions] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Le nom est obligatoire';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est obligatoire';
        } else if (validators.email(formData.email)) {
            newErrors.email = validators.email(formData.email);
        }

        if (formData.phone && validators.phone(formData.phone)) {
            newErrors.phone = validators.phone(formData.phone);
        }

        if (!formData.subject) {
            newErrors.subject = 'Veuillez sélectionner un sujet';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Le message est obligatoire';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Le message doit contenir au moins 10 caractères';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulation d'envoi (à remplacer par votre API)
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Créer le lien mailto
            const subjectText = subjectOptions.find(s => s.value === formData.subject)?.label || formData.subject;
            const mailtoBody = `
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone || 'Non renseigné'}
Sujet: ${subjectText}

Message:
${formData.message}
            `.trim();

            const mailtoLink = `mailto:ecolejeannedarc.adm@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(mailtoBody)}`;

            setSubmitStatus('success');
            setShowContactOptions(true);

            // Ouvrir le client mail après un délai
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 1500);

        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
        setSubmitStatus(null);
        setShowContactOptions(false);
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
                        <span className="text-gold uppercase tracking-widest text-base font-bold mb-4 block">
                            École Académique Bilingue
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Contactez-nous</h1>
                        <p className="text-white text-lg max-w-2xl mx-auto">
                            Une question ? Besoin d'informations ? Notre équipe est à votre écoute.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contenu */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

                        {/* Formulaire - 3 colonnes */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                                <h2 className="font-serif text-2xl text-violine mb-2">
                                    Envoyez-nous un message
                                </h2>
                                <p className="text-gray-500 text-sm mb-8">
                                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                                </p>

                                {/* Message de confirmation */}
                                <ConfirmationMessage
                                    isVisible={submitStatus === 'success'}
                                    type="success"
                                    title="Message prêt à être envoyé !"
                                    message="Votre client mail va s'ouvrir. Si ce n'est pas le cas, cliquez sur l'une des options ci-dessous."
                                    onClose={() => setSubmitStatus(null)}
                                    autoClose={false}
                                />

                                <ConfirmationMessage
                                    isVisible={submitStatus === 'error'}
                                    type="error"
                                    title="Erreur d'envoi"
                                    message="Une erreur s'est produite. Veuillez réessayer ou nous contacter directement."
                                    onClose={() => setSubmitStatus(null)}
                                />

                                <ContactOptions isVisible={showContactOptions} />

                                {/* Formulaire */}
                                {!showContactOptions && (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <SmartInput
                                                label="Nom complet"
                                                name="name"
                                                placeholder="Votre nom"
                                                value={formData.name}
                                                onChange={handleChange}
                                                error={errors.name}
                                                required
                                                icon={User}
                                                validate={validators.required}
                                            />

                                            <SmartInput
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="votre@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                error={errors.email}
                                                required
                                                icon={AtSign}
                                                validate={validators.email}
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <SmartInput
                                                label="Téléphone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+221 77 XXX XX XX"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                error={errors.phone}
                                                icon={Phone}
                                                helperText="Facultatif"
                                                validate={validators.phone}
                                            />

                                            <SmartSelect
                                                label="Sujet"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                options={subjectOptions}
                                                error={errors.subject}
                                                required
                                                icon={MessageSquare}
                                                placeholder="Choisir un sujet..."
                                            />
                                        </div>

                                        <SmartTextarea
                                            label="Message"
                                            name="message"
                                            placeholder="Écrivez votre message ici..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            error={errors.message}
                                            required
                                            rows={5}
                                            maxLength={1000}
                                            minLength={10}
                                            helperText="Décrivez votre demande en détail"
                                        />

                                        <LoadingButton
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            fullWidth
                                            isLoading={isSubmitting}
                                            isSuccess={submitStatus === 'success'}
                                            isError={submitStatus === 'error'}
                                            loadingText="Envoi en cours..."
                                            successText="Envoyé !"
                                            errorText="Erreur - Réessayer"
                                            icon={Send}
                                        >
                                            Envoyer le message
                                        </LoadingButton>
                                    </form>
                                )}

                                {/* Bouton nouveau message */}
                                {showContactOptions && (
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        onClick={resetForm}
                                        className="mt-6 text-heliotrope font-medium hover:text-violine transition-colors"
                                    >
                                        ← Envoyer un autre message
                                    </motion.button>
                                )}
                            </div>
                        </motion.div>

                        {/* Infos contact - 2 colonnes */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="space-y-6">
                                {/* Carte info */}
                                <div className="bg-gradient-to-br from-violine to-heliotrope rounded-2xl p-8 text-white">
                                    <h3 className="font-serif text-xl mb-6">Informations de contact</h3>

                                    <div className="space-y-5">
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                                <MapPin size={18} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gold text-sm mb-1">Adresse</p>
                                                <p className="text-white/90 text-sm">
                                                    Grand Mbour 3, Face VDN<br />
                                                    Mbour, Sénégal
                                                </p>
                                            </div>
                                        </motion.div>

                                        <motion.a
                                            href="tel:+221767550909"
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                                                <Phone size={18} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gold text-sm mb-1">Téléphone</p>
                                                <p className="text-white/90 text-sm">+221 76 755 09 09</p>
                                                <p className="text-white/90 text-sm">+221 77 701 05 02</p>
                                            </div>
                                        </motion.a>

                                        <motion.a
                                            href="mailto:ecolejeannedarc.adm@gmail.com"
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                                                <Mail size={18} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gold text-sm mb-1">Email</p>
                                                <p className="text-white/90 text-sm break-all">ecolejeannedarc.adm@gmail.com</p>
                                            </div>
                                        </motion.a>

                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                                <Clock size={18} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gold text-sm mb-1">Horaires</p>
                                                <p className="text-white/90 text-sm">
                                                    Lundi - Vendredi: 8h - 17h<br />
                                                    Samedi: 8h - 12h
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* WhatsApp CTA */}
                                <motion.a
                                    href="https://wa.me/221777010502?text=Bonjour, je souhaite des informations sur l'école Jeanne d'Arc de Mbour."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-colors w-full"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Discuter sur WhatsApp
                                </motion.a>

                                {/* Pré-inscription badge */}
                                <div className="bg-gold/10 border border-gold rounded-xl p-6 text-center">
                                    <p className="text-violine font-medium mb-2">
                                        Pré-inscriptions 2026/2027 ouvertes !
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Réservez dès maintenant une place pour votre enfant.
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
