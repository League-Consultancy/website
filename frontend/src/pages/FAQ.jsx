import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqData } from '../data/faqData';

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

const AccordionItem = ({ question, answer, isOpen, onClick }) => {


    return (
        <div className={`border-b border-brand-gray-100 dark:border-brand-gray-800 transition-all ${isOpen ? 'pb-8 pt-8' : 'py-8'}`}>
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-brand-black dark:text-brand-white' : 'text-brand-gray-700 dark:text-brand-gray-400 group-hover:text-brand-black dark:group-hover:text-brand-white'}`}>
                    {question}
                </span>
                <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-brand-black text-brand-white' : 'bg-brand-gray-50 dark:bg-brand-gray-900 text-brand-gray-600 dark:text-brand-gray-400 group-hover:bg-brand-black group-hover:text-brand-white'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: [0.21, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="text-lg text-brand-gray-700 dark:text-[#D1D5DB] leading-relaxed font-light">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState(faqData[0].category);

    const filteredFaqs = faqData.map(category => ({
        ...category,
        questions: category.questions.filter(q =>
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.questions.length > 0);

    return (
        <div className="bg-brand-white dark:bg-brand-black min-h-screen transition-colors duration-300">
            {/* Header */}
            <section className="bg-brand-gray-50 dark:bg-brand-dark pt-32 pb-16 border-b border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300">
                <div className="section-container">
                    <div className="max-w-4xl">
                        <FadeIn>
                            <span className="text-brand-gray-600 dark:text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Support Center</span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                                Frequently <br />Asked Questions
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="relative max-w-2xl mt-12">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray-600 dark:text-brand-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for answers..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white dark:bg-brand-dark border border-brand-gray-100 dark:border-brand-gray-800 rounded-full py-5 pl-14 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-black dark:focus:ring-brand-white focus:border-transparent transition-all shadow-sm dark:text-brand-white placeholder:text-brand-gray-500 dark:placeholder:text-brand-gray-400"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Questions Section */}
            <section className="py-16">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-4 space-y-8">
                            <FadeIn>
                                <div className="space-y-4 sticky top-32">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gray-600 dark:text-brand-gray-400 mb-8 ml-2">Categories</h3>
                                    {faqData.map(cat => (
                                        <button
                                            key={cat.category}
                                            onClick={() => {
                                                setActiveCategory(cat.category);
                                                const el = document.getElementById(`category-${cat.category.toLowerCase()}`);
                                                el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            }}
                                            className={`w-full text-left px-6 py-4 rounded-2xl border transition-all group ${activeCategory === cat.category ? 'bg-brand-gray-100 dark:bg-brand-gray-800 border-brand-gray-200 dark:border-brand-gray-700' : 'border-transparent hover:border-brand-gray-100 dark:hover:border-brand-gray-800 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-900'}`}
                                        >
                                            <span className={`text-xs font-black uppercase tracking-widest group-hover:text-brand-black dark:group-hover:text-brand-white transition-colors ${activeCategory === cat.category ? 'text-brand-black dark:text-brand-white' : 'text-brand-gray-700 dark:text-brand-gray-500'}`}>{cat.category}</span>
                                        </button>
                                    ))}

                                    <div className="dark mt-12 p-8 bg-brand-black dark:bg-brand-dark rounded-[2rem] text-brand-white group hover:shadow-2xl transition-all duration-500 border border-brand-gray-900">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-500 shadow-md">
                                            <HelpCircle className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-lg font-bold uppercase tracking-tight mb-4 text-brand-white">Still have questions?</h4>
                                        <p className="text-sm text-brand-gray-700 dark:text-brand-gray-500 font-light leading-relaxed mb-6">Our <strong>solutions engineers</strong> are available for <strong>technical consultations</strong>.</p>
                                        <Link to="/contact" className="inline-flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest group">
                                            <span>Get in touch</span>
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Accordion Column */}
                        <div className="lg:col-span-8">
                            {filteredFaqs.map((category, catIdx) => (
                                <div key={category.category} id={`category-${category.category.toLowerCase()}`} className="mb-20 last:mb-0">
                                    <FadeIn delay={catIdx * 0.1}>
                                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-black dark:text-brand-white mb-10 border-l-4 border-brand-black dark:border-brand-white pl-6 leading-none">
                                            {category.category}
                                        </h2>
                                        <div className="space-y-0">
                                            {category.questions.map((item, qIdx) => {
                                                const globalIdx = `${catIdx}-${qIdx}`;
                                                return (
                                                    <AccordionItem
                                                        key={globalIdx}
                                                        question={item.q}
                                                        answer={item.a}
                                                        isOpen={openIndex === globalIdx}
                                                        onClick={() => setOpenIndex(openIndex === globalIdx ? null : globalIdx)}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </FadeIn>
                                </div>
                            ))}

                            {filteredFaqs.length === 0 && (
                                <div className="text-center py-20 px-10 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-[3rem]">
                                    <p className="text-brand-gray-600 dark:text-brand-gray-400 font-bold uppercase tracking-widest text-xs">No matching questions found.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;

