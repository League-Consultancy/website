import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, Input } from '../components/common/UI';

import { authService } from '../services/api';

const SignUp = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [status, setStatus] = React.useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return setStatus({ type: 'error', message: 'Encryption mismatch. Passwords do not correlate.' });
        }

        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await authService.signup(formData);
            setStatus({ type: 'success', message: response.message || 'Master account initialization request received. Verification pending.' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || 'Account initialization failed. System parameters rejected the request.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-24 bg-brand-white dark:bg-brand-black transition-colors duration-300">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -right-1/4 w-1/2 h-full bg-brand-gray-50 dark:bg-brand-gray-900/40 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-full bg-brand-gray-100 dark:bg-brand-dark/40 blur-[120px] rounded-full opacity-30"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }}
                className="relative w-full max-w-2xl group px-2 sm:px-0"
            >
                <div className="absolute -inset-4 bg-brand-gray-100/50 dark:bg-brand-gray-900/50 blur-2xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="bg-brand-white dark:bg-brand-gray-900/80 backdrop-blur-2xl border border-brand-gray-200 dark:border-brand-gray-800 rounded-[2.5rem] sm:rounded-[3rem] p-8 md:p-16 shadow-2xl transition-all duration-700">
                    <div className="text-center mb-10 sm:mb-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                            className="inline-flex p-3 sm:p-4 bg-brand-gray-100 dark:bg-brand-gray-800 rounded-2xl mb-6 sm:mb-8"
                        >
                            <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 text-brand-black dark:text-brand-white" />
                        </motion.div>
                        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4">Initialize Partnership</h1>
                        <p className="text-brand-gray-500 dark:text-brand-gray-400 font-light max-w-sm mx-auto text-sm leading-relaxed">
                            Join our network of elite industrial partners and access high-precision consultancy.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {status.message && (
                            <div className={`p-6 rounded-2xl text-xs font-bold uppercase tracking-widest ${status.type === 'success'
                                ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                }`}>
                                {status.message}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Input
                                label="Full Legal Name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Alexander Pierce"
                                required
                            />
                            <Input
                                label="Organization Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="alex@spacex.com"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Input
                                label="Generate Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                            />
                            <Input
                                label="Verify Password"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-4 px-4 py-6 bg-brand-gray-50 dark:bg-brand-dark/50 rounded-2xl border border-brand-gray-100 dark:border-brand-gray-800">
                            <ShieldCheck className="w-6 h-6 text-brand-gray-400 shrink-0" />
                            <p className="text-[10px] text-brand-gray-500 leading-relaxed font-medium uppercase tracking-widest">
                                By continuing, you agree to our <span className="text-brand-black dark:text-brand-white font-black underline underline-offset-2">Technical Standards</span> and <span className="text-brand-black dark:text-brand-white font-black underline underline-offset-2">Privacy Protocols</span>.
                            </p>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-5 text-sm"
                        >
                            {isLoading ? 'Initialising...' : 'Create Master Account'}
                            {!isLoading && <ArrowRight className="ml-3 w-5 h-5" />}
                        </Button>
                    </form>

                    <div className="mt-12 pt-10 border-t border-brand-gray-100 dark:border-brand-gray-800 text-center">
                        <p className="text-brand-gray-400 text-[10px] font-black uppercase tracking-widest">
                            Already verified? {' '}
                            <Link to="/signin" className="text-brand-black dark:text-brand-white hover:underline underline-offset-4 decoration-2">
                                Access Portal
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Architectural Deco */}
                <motion.div
                    initial={{ opacity: 0, x: 20, y: -20 }}
                    whileInView={{ opacity: 0.3, x: 0, y: 0 }}
                    className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-gray-100 dark:border-brand-gray-800 rounded-tr-[3rem]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20, y: 20 }}
                    whileInView={{ opacity: 0.3, x: 0, y: 0 }}
                    className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-gray-100 dark:border-brand-gray-800 rounded-bl-[3rem]"
                ></motion.div>
            </motion.div>
        </div>
    );
};

export default SignUp;
