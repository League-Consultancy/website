import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Rocket, Cpu, Briefcase, Info, Phone, Sun, Moon, Linkedin, Mail, MapPin, DollarSign, Newspaper, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { company, services as serviceData } from '../data/companyData';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', path: '/', icon: <Rocket className="w-4 h-4" /> },
        { name: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
        { name: 'Services', path: '/services', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Projects', path: '/projects', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-brand-black/80 backdrop-blur-xl border-b border-brand-gray-200/80 dark:border-brand-gray-900 transition-all duration-500 shadow-soft dark:shadow-none" role="navigation" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between h-20 items-center gap-8">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2 lg:space-x-4 text-2xl font-bold group" aria-label="LEAGUE Consultancy Home">
                            <img
                                src="/assets/logo.png"
                                alt="LEAGUE Consultancy Logo"
                                className="h-10 lg:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300 dark:brightness-100 brightness-0 opacity-90 group-hover:opacity-100"
                            />
                            <span className="tracking-tighter font-display hidden xl:inline-block text-brand-black dark:text-brand-white text-xl lg:text-2xl">LEAGUE Consultancy</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
                        <div className="flex space-x-5 lg:space-x-8 border-r border-brand-gray-100/60 dark:border-brand-gray-900 pr-6 lg:pr-10">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:text-brand-black dark:hover:text-brand-white border-b-2 pb-1 ${isActive
                                            ? 'text-brand-black dark:text-brand-white border-brand-black dark:border-brand-white'
                                            : 'text-brand-gray-600 dark:text-brand-gray-400 border-transparent hover:border-brand-gray-200 dark:hover:border-brand-gray-700'
                                        }`
                                    }
                                >
                                    <span>{link.name}</span>
                                </NavLink>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 lg:space-x-6">
                            <Link to="/contact" id="nav-cta-started" className="hidden lg:block px-6 py-2.5 bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black rounded-lg font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-premium hover:shadow-card-hover dark:shadow-none">
                                Get Started
                            </Link>
                            <button
                                onClick={toggleTheme}
                                className="p-2.5 rounded-full bg-brand-gray-100 dark:bg-brand-gray-900 text-brand-gray-600 dark:text-brand-gray-400 hover:scale-110 transition-all duration-300"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-brand-gray-100 dark:bg-brand-gray-900 text-brand-gray-600 dark:text-brand-gray-400"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-black dark:text-brand-white hover:opacity-70 transition-opacity"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.21, 1, 0.36, 1] }}
                        className="md:hidden bg-brand-white dark:bg-brand-black border-b border-brand-gray-100 dark:border-brand-gray-900 overflow-hidden"
                    >
                        <div className="py-8 px-6 space-y-6 shadow-2xl">
                            <div className="space-y-2">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <NavLink
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-center space-x-4 p-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${isActive
                                                    ? 'bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black'
                                                    : 'text-brand-gray-600 dark:text-brand-gray-400 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-900'
                                                }`
                                            }
                                        >
                                            {link.icon}
                                            <span>{link.name}</span>
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="pt-8 border-t border-brand-gray-100 dark:border-brand-gray-900 pb-4"
                            >
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full p-4 rounded-xl text-xs font-black uppercase tracking-widest bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black active:scale-95 transition-transform shadow-lg shadow-brand-black/5"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-brand-gray-100 dark:bg-brand-dark py-20 border-t border-brand-gray-200 dark:border-brand-gray-900" role="contentinfo">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link to="/" className="text-2xl font-bold text-brand-black dark:text-brand-white block tracking-tighter">
                            LEAGUE Consultancy
                        </Link>
                        <p className="text-brand-gray-700 dark:text-brand-gray-400 max-w-md leading-relaxed font-light text-sm text-justify">
                            {company.shortDescription}
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-brand-gray-700 dark:text-brand-gray-500 text-sm">
                                <Mail className="w-4 h-4" />
                                <a href={`mailto:${company.email}`} className="hover:text-brand-black dark:hover:text-brand-white transition-colors">{company.email}</a>
                            </div>
                            <div className="flex items-center space-x-3 text-brand-gray-700 dark:text-brand-gray-500 text-sm">
                                <MapPin className="w-4 h-4" />
                                <span>{company.location}</span>
                            </div>
                        </div>
                        {/* Social */}
                        <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-brand-gray-600 dark:text-brand-gray-400 hover:text-brand-black dark:hover:text-brand-white transition-colors group" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-brand-black dark:text-brand-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Navigation</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/about" className="text-brand-gray-700 dark:text-brand-gray-500 hover:text-brand-black dark:hover:text-brand-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-brand-gray-700 dark:text-brand-gray-500 hover:text-brand-black dark:hover:text-brand-white transition-colors">Services</Link></li>
                            <li><Link to="/projects" className="text-brand-gray-700 dark:text-brand-gray-500 hover:text-brand-black dark:hover:text-brand-white transition-colors">Case Studies</Link></li>
                            <li><Link to="/faq" className="text-brand-gray-700 dark:text-brand-gray-500 hover:text-brand-black dark:hover:text-brand-white transition-colors">FAQ</Link></li>
                            <li><Link to="/contact" className="text-brand-gray-700 dark:text-brand-gray-500 hover:text-brand-black dark:hover:text-brand-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-brand-black dark:text-brand-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Services</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            {serviceData.slice(0, 5).map(s => (
                                <li key={s.id}>
                                    <Link to="/services" className="text-brand-gray-700 dark:text-brand-gray-500 hover:text-brand-black dark:hover:text-brand-white transition-colors">
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-brand-gray-200 dark:border-brand-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-brand-gray-600 dark:text-brand-gray-400 uppercase tracking-widest font-bold gap-4">
                    <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <Link to="/privacy" className="hover:text-brand-black dark:hover:text-brand-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-brand-black dark:hover:text-brand-white transition-colors">Terms of Service</Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3" />
                        <span>{company.location}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};
