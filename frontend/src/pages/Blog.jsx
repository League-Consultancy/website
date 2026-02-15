import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

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

const Blog = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

    const featuredPost = blogPosts.find(p => p.featured);
    const regularPosts = blogPosts.filter(p => !p.featured && (filter === 'All' || p.category === filter));

    return (
        <div className="bg-brand-white dark:bg-brand-black min-h-screen transition-colors duration-300">
            {/* Header */}
            <section className="bg-brand-gray-50 dark:bg-brand-dark py-32 border-b border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300">
                <div className="section-container">
                    <div className="max-w-4xl text-center mx-auto">
                        <FadeIn>
                            <span className="text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Insights & Innovations</span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                                Engineering <br />Journal
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-brand-gray-500 dark:text-[#D1D5DB] max-w-2xl mx-auto font-light leading-relaxed">
                                Exploring the frontiers of AI, Robotics, and IoT. Stay updated with the latest trends and technical deep-dives.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && filter === 'All' && (
                <section className="py-24">
                    <div className="section-container">
                        <FadeIn>
                            <Link to={`/blog/${featuredPost.id}`} className="group relative block aspect-[21/9] rounded-[3rem] overflow-hidden border border-brand-gray-100 dark:border-brand-gray-800 shadow-2xl">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent flex flex-col justify-end p-10 lg:p-16">
                                    <div className="max-w-3xl">
                                        <span className="inline-block px-4 py-1 bg-brand-white text-brand-black text-[9px] font-black uppercase tracking-widest rounded-full mb-6">Featured Insight</span>
                                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight group-hover:text-brand-gray-200 transition-colors">{featuredPost.title}</h2>
                                        <div className="flex items-center space-x-6 text-brand-gray-400 text-[10px] font-black uppercase tracking-widest">
                                            <div className="flex items-center space-x-2"><Calendar className="w-4 h-4" /> <span>{featuredPost.date}</span></div>
                                            <div className="flex items-center space-x-2"><Clock className="w-4 h-4" /> <span>{featuredPost.readTime}</span></div>
                                            <div className="flex items-center space-x-2"><User className="w-4 h-4" /> <span>{featuredPost.author}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    </div>
                </section>
            )}

            {/* Filter Bar */}
            <section className="sticky top-20 z-40 bg-brand-white/80 dark:bg-brand-black/80 backdrop-blur-xl border-y border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300">
                <div className="section-container !py-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat
                                    ? 'bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black shadow-lg shadow-brand-black/20'
                                    : 'text-brand-gray-400 hover:text-brand-black dark:hover:text-brand-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-400" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full bg-brand-gray-50 dark:bg-[#1A1A1A] border border-brand-gray-100 dark:border-brand-gray-800 rounded-full py-2.5 pl-10 pr-6 text-[10px] uppercase font-black tracking-widest focus:outline-none focus:border-brand-black dark:focus:border-brand-white transition-all transition-colors duration-300 dark:text-brand-white"
                        />
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
                        {regularPosts.map((post, idx) => (
                            <FadeIn key={post.id} delay={idx * 0.1}>
                                <Link to={`/blog/${post.id}`} className="group block">
                                    <div className="aspect-[16/10] rounded-[2rem] overflow-hidden border border-brand-gray-50 dark:border-brand-gray-800 mb-8 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-4px]">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray-400">{post.category}</span>
                                            <span className="text-[9px] font-bold text-brand-gray-300 uppercase">{post.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight text-brand-black dark:text-[#F3F4F6] group-hover:text-brand-gray-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-brand-gray-500 dark:text-[#D1D5DB] leading-relaxed font-light line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="pt-4 flex items-center text-[10px] font-black uppercase tracking-widest text-brand-black dark:text-brand-white group-hover:translate-x-2 transition-transform">
                                            <span>Read Article</span>
                                            <ArrowRight className="ml-2 w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="pb-32">
                <div className="section-container">
                    <FadeIn>
                        <div className="p-12 md:p-20 bg-brand-black dark:bg-[#1E1E1E] rounded-[4rem] text-center text-brand-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-110 transition-transform duration-1000" />
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 relative z-10">Stay Informed</h2>
                            <p className="text-brand-gray-500 font-light max-w-xl mx-auto mb-12 leading-relaxed relative z-10">
                                Get monthly technical insights, project showcases, and innovation updates delivered to your inbox.
                            </p>
                            <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full md:flex-grow bg-white/10 border border-white/10 rounded-full px-8 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-brand-white transition-all text-white placeholder:text-brand-gray-600"
                                />
                                <button className="w-full md:w-auto px-10 py-4 bg-brand-white text-brand-black rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Blog;
