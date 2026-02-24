import React from 'react';
import { Mail, Clock, MapPin, Send, Globe, MessageSquare, ChevronRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactService } from '../services/api';
import { company, inquiryCategories, services } from '../data/companyData';

const FadeIn = ({ children, delay = 0, y = 20 }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: [0.21, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const ContactInfo = ({ icon: Icon, title, content, subtext }) => (
    <div className="flex items-start space-x-6 group">
        <div className="p-4 bg-brand-gray-50 dark:bg-brand-gray-900 border border-brand-gray-100 dark:border-brand-gray-800 rounded-2xl text-brand-black dark:text-brand-white group-hover:bg-brand-black dark:group-hover:bg-brand-white group-hover:text-brand-white dark:group-hover:text-brand-black transition-all duration-500">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gray-600 dark:text-brand-gray-400 mb-2">{title}</h4>
            <p className="text-xl font-bold mb-1 text-brand-black dark:text-brand-white"><strong>{content}</strong></p>
            {subtext && <p className="text-sm text-brand-gray-700 dark:text-brand-gray-500 font-light">{subtext}</p>}
        </div>
    </div>
);

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        category: inquiryCategories[0],
        service: '',
        message: ''
    });
    const [status, setStatus] = React.useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus({ type: 'error', message: 'Please fill in all required architectural parameters.' });
            return;
        }

        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const result = await contactService.submitForm(formData);
            setStatus({ type: 'success', message: result.message || 'Inquiry submitted successfully! Our team will respond within 24-48 business hours.' });
            setFormData({ name: '', email: '', category: inquiryCategories[0], service: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || 'Submission failed. Please try again or email us directly.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen transition-colors duration-300">
            {/* Header Section */}
            <section className="py-32 border-b border-brand-gray-200/50 dark:border-brand-gray-900 transition-colors duration-300">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="max-w-xl xl:max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                            <FadeIn>
                                <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Get In Touch</span>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[1.1]">
                                    Let's Build the <br />Future Together
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-xl text-brand-gray-600 dark:text-brand-gray-400 max-w-3xl leading-relaxed font-light">
                                    Have a project idea or need expert engineering consultation? Our team is ready to help you transform complex challenges into intelligent solutions.
                                </p>
                            </FadeIn>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 1, 0.36, 1] }}
                            className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative p-3 sm:p-6 md:p-8 lg:p-10 bg-white/40 dark:bg-brand-gray-900/30 backdrop-blur-3xl rounded-[2.5rem] sm:rounded-[3.5rem] border border-brand-gray-200 dark:border-brand-gray-800 shadow-2xl transition-all duration-700 w-full max-w-[400px] xl:max-w-[500px] group"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-brand-black shadow-inner aspect-square">
                                    <img
                                        src="/assets/contact_hero.png"
                                        alt="LEAGUE Consultancy Contact"
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 dark:opacity-60 dark:group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-[1.05] group-hover:scale-100"
                                        loading="eager"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/40 via-transparent to-white/10 pointer-events-none" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* Contact Information */}
                        <div className="lg:col-span-5 space-y-14">
                            <FadeIn>
                                <div className="space-y-10">
                                    <ContactInfo
                                        icon={Mail}
                                        title="Email Us"
                                        content={company.email}
                                        subtext={`Response time: ${company.responseTime}`}
                                    />
                                    <ContactInfo
                                        icon={Clock}
                                        title="Working Hours & Timezone"
                                        content={company.workingHours.split('|')[0].trim()}
                                        subtext={`${company.workingHours.split('|')[1]?.trim()} (IST / GMT+5:30)`}
                                    />
                                    <ContactInfo
                                        icon={MapPin}
                                        title="Location"
                                        content={company.location}
                                        subtext="Innovation-driven engineering hub"
                                    />
                                </div>
                            </FadeIn>

                            {/* LinkedIn Card */}
                            <FadeIn delay={0.2}>
                                <a
                                    href={company.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-4 p-6 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-2xl border border-brand-gray-100 dark:border-brand-gray-800 hover:border-brand-gray-300 dark:hover:border-brand-gray-700 transition-all duration-300 group"
                                >
                                    <div className="p-3 bg-brand-black dark:bg-brand-white rounded-xl text-brand-white dark:text-brand-black group-hover:scale-110 transition-transform">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-xs font-black uppercase tracking-widest text-brand-black dark:text-brand-white">Connect on LinkedIn</p>
                                        <p className="text-[10px] text-brand-gray-600 dark:text-brand-gray-400 font-light mt-0.5">Follow our latest projects and updates</p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-brand-black dark:text-brand-white group-hover:translate-x-1 transition-transform" />
                                </a>
                            </FadeIn>

                            {/* Inquiry Types Card */}
                            <FadeIn delay={0.3}>
                                <div className="p-8 bg-brand-black dark:bg-brand-dark rounded-[2rem] text-brand-white space-y-6 group hover:shadow-2xl transition-all duration-500 border border-brand-gray-800 hover:border-brand-gray-700">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-500 shadow-md">
                                            <Globe className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold uppercase tracking-tight">Inquiry Types</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {inquiryCategories.map((cat, idx) => (
                                            <div key={idx} className="flex items-center space-x-3 text-sm text-brand-gray-400 font-light group-hover:text-brand-white transition-colors">
                                                <div className="w-1.5 h-1.5 bg-brand-gray-700 group-hover:bg-brand-white rounded-full transition-colors" />
                                                <span>{cat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>


                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <FadeIn>
                                <div className="bg-brand-white dark:bg-brand-dark p-10 lg:p-14 rounded-[3rem] border border-brand-gray-100 dark:border-brand-gray-800 shadow-2xl overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />

                                    <div className="relative z-10">
                                        <div className="flex items-center space-x-4 mb-10">
                                            <MessageSquare className="w-6 h-6 text-brand-black dark:text-brand-white" />
                                            <h3 className="text-2xl font-black uppercase tracking-tighter">Send a Message</h3>
                                        </div>

                                        <form className="space-y-7" onSubmit={handleSubmit} id="contact-form">
                                            {status.message && (
                                                <div className={`p-5 rounded-2xl text-xs font-bold uppercase tracking-widest ${status.type === 'success'
                                                    ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                                    }`}>
                                                    {status.message}
                                                </div>
                                            )}

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                                <div className="space-y-2">
                                                    <label htmlFor="contact-name" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#374151] dark:text-[#9CA3AF] ml-4">Full Name</label>
                                                    <input
                                                        id="contact-name"
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your Full Name"
                                                        className="w-full bg-brand-gray-50/50 dark:bg-brand-black border-[1.5px] border-brand-gray-100 dark:border-brand-gray-700 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-black dark:focus:ring-brand-white focus:border-transparent transition-all duration-300 dark:text-brand-white placeholder:text-[#9CA3AF] dark:placeholder:text-brand-gray-600"
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="contact-email" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#374151] dark:text-[#9CA3AF] ml-4">Email Address</label>
                                                    <input
                                                        id="contact-email"
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="your@company.com"
                                                        className="w-full bg-brand-gray-50/50 dark:bg-brand-black border-[1.5px] border-brand-gray-100 dark:border-brand-gray-700 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-black dark:focus:ring-brand-white focus:border-transparent transition-all duration-300 dark:text-brand-white placeholder:text-[#9CA3AF] dark:placeholder:text-brand-gray-600"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                                <div className="space-y-2">
                                                    <label htmlFor="contact-category" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#374151] dark:text-[#9CA3AF] ml-4">Inquiry Type</label>
                                                    <select
                                                        id="contact-category"
                                                        name="category"
                                                        value={formData.category}
                                                        onChange={handleChange}
                                                        className="w-full bg-brand-gray-50/50 dark:bg-brand-black border-[1.5px] border-brand-gray-100 dark:border-brand-gray-700 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-black dark:focus:ring-brand-white focus:border-transparent transition-all duration-300 dark:text-brand-white appearance-none"
                                                    >
                                                        {inquiryCategories.map(cat => (
                                                            <option key={cat} value={cat}>{cat}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="contact-service" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#374151] dark:text-[#9CA3AF] ml-4">Service of Interest</label>
                                                    <select
                                                        id="contact-service"
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                        className="w-full bg-brand-gray-50/50 dark:bg-brand-black border-[1.5px] border-brand-gray-100 dark:border-brand-gray-700 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-black dark:focus:ring-brand-white focus:border-transparent transition-all duration-300 dark:text-brand-white appearance-none"
                                                    >
                                                        <option value="">General / Not Sure</option>
                                                        {services.map(s => (
                                                            <option key={s.id} value={s.title}>{s.title}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="contact-message" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#374151] dark:text-[#9CA3AF] ml-4">Your Message</label>
                                                <textarea
                                                    id="contact-message"
                                                    rows="5"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us about your project, requirements, or any questions..."
                                                    className="w-full bg-brand-gray-50/50 dark:bg-[#1A1A1A] border-[1.5px] border-brand-gray-100 dark:border-brand-gray-800 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-black dark:focus:ring-brand-white focus:border-transparent transition-all duration-300 dark:text-brand-white resize-none placeholder:text-[#9CA3AF] dark:placeholder:text-brand-gray-600"
                                                    required
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                id="contact-submit"
                                                disabled={isLoading}
                                                className={`w-full py-5 bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-3 shadow-xl shadow-brand-black/10 dark:shadow-none ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95'}`}
                                            >
                                                <span>{isLoading ? 'Sending...' : 'Send Inquiry'}</span>
                                                <Send className="w-4 h-4" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
