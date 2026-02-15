import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Key, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, Input } from '../components/common/UI';

const ForgotPassword = () => {
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        // Simulate API call
        setTimeout(() => {
            setStatus({
                type: 'success',
                message: 'If an account exists for ' + email + ', you will receive a password reset link shortly.'
            });
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-brand-white dark:bg-brand-black transition-colors duration-300">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-full bg-brand-gray-50 dark:bg-brand-gray-900/40 blur-[120px] rounded-full opacity-50"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }}
                className="relative w-full max-w-xl group px-2 sm:px-0"
            >
                <div className="bg-brand-white dark:bg-brand-gray-900/80 backdrop-blur-2xl border border-brand-gray-200 dark:border-brand-gray-800 rounded-[3rem] p-8 md:p-16 shadow-2xl transition-all duration-700">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex p-4 bg-brand-gray-100 dark:bg-brand-gray-800 rounded-2xl mb-8"
                        >
                            <Key className="w-8 h-8 text-brand-black dark:text-brand-white" />
                        </motion.div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Recover Access</h1>
                        <p className="text-brand-gray-500 dark:text-brand-gray-400 font-light max-w-xs mx-auto text-sm leading-relaxed">
                            Enter your registered email to receive authentication recovery instructions.
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

                        <Input
                            label="Verification Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            required
                        />

                        <Button
                            type="submit"
                            disabled={isLoading || status.type === 'success'}
                            className="w-full py-5 text-sm"
                        >
                            {isLoading ? 'Processing...' : 'Send Recovery Link'}
                            {!isLoading && <ArrowRight className="ml-3 w-5 h-5" />}
                        </Button>
                    </form>

                    <div className="mt-12 pt-10 border-t border-brand-gray-100 dark:border-brand-gray-800 text-center">
                        <Link to="/signin" className="text-brand-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-brand-black dark:hover:text-brand-white transition-colors">
                            Return to Secure Login
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPassword;
