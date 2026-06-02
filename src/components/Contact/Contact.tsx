import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
// ✉️ Importamos la librería de envío real
import emailjs from '@emailjs/browser';

export function Contact(): React.JSX.Element {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const SERVICE_ID = 'service_out94he';
        const TEMPLATE_ID = 'template_eb3a6i8';
        const PUBLIC_KEY = 'VPJlJ-_ERnLKVvTv4';

        // Estructuramos los parámetros para que coincidan con las variables de tu plantilla de EmailJS
        const templateParams = {
            name: formState.name,
            email: formState.email,
            message: formState.message,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch((error) => {
                console.error('Error al enviar el correo:', error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            });
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-[#0c021a] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 font-mono">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('contact.title')}</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('contact.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('contact.infoTitle')}</h3>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm font-sans">{t('contact.infoSubtitle')}</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-[#1f093a]/50 border border-indigo-100 dark:border-[#381161]/60 text-accent flex items-center justify-center font-bold text-lg">📍</div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">{t('contact.location')}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">Andalucía, ES</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-[#1f093a]/50 border border-indigo-100 dark:border-[#381161]/60 text-accent flex items-center justify-center font-bold text-lg">✉️</div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">especuenca103@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-[#130526] p-8 rounded-2xl border border-slate-200/60 dark:border-[#381161]/60 shadow-sm">
                        {status === 'success' && (
                            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 text-center font-medium">
                                ✨ {t('contact.success')}
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-6 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-600 dark:text-rose-400 text-center font-medium">
                                ❌ Ocurrió un error. Inténtalo de nuevo.
                            </div>
                        )}

                        {(status === 'idle' || status === 'sending') && (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('contact.labelName')}</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        placeholder={t('contact.namePlaceholder')}
                                        className="w-full px-4 py-3 bg-white dark:bg-[#0c021a] border border-slate-200 dark:border-[#381161] rounded-xl focus:outline-none focus:border-accent text-slate-900 dark:text-white text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('contact.labelEmail')}</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder={t('contact.emailPlaceholder')}
                                        className="w-full px-4 py-3 bg-white dark:bg-[#0c021a] border border-slate-200 dark:border-[#381161] rounded-xl focus:outline-none focus:border-accent text-slate-900 dark:text-white text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('contact.labelMsg')}</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        placeholder={t('contact.msgPlaceholder')}
                                        className="w-full px-4 py-3 bg-white dark:bg-[#0c021a] border border-slate-200 dark:border-[#381161] rounded-xl focus:outline-none focus:border-accent text-slate-900 dark:text-white text-sm"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50 transition-colors"
                                >
                                    {status === 'sending' ? t('contact.btnSending') : t('contact.btnSend')}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}