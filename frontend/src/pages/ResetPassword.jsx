import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, Input } from '../components/common/UI';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({ password: '', confirmPassword: '' });
    const [status, setStatus] = React.useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            return setStatus({ type: 'error', message: 'Values Mismatch: Passwords do not correlate.' });
        }

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setStatus({ type: 'success', message: 'Credentials updated. Key rotation successful. Redirecting...' });
            setTimeout(() => navigate('/signin'), 2000);
        }, 1500);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-brand-white dark:bg-brand-black transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full max-w-xl"
            >
                <div className="bg-brand-white dark:bg-brand-gray-900/80 backdrop-blur-2xl border border-brand-gray-200 dark:border-brand-gray-800 rounded-[3rem] p-8 md:p-16 shadow-2xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex p-4 bg-brand-gray-100 dark:bg-brand-gray-800 rounded-2xl mb-8">
                            <ShieldCheck className="w-8 h-8 text-brand-black dark:text-brand-white" />
                        </div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Set New Key</h1>
                        <p className="text-brand-gray-500 dark:text-brand-gray-400 font-light max-w-xs mx-auto text-sm leading-relaxed">
                            Establish a new secure access key for your consultancy account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {status.message && (
                            <div className={`p-6 rounded-2xl text-xs font-bold uppercase tracking-widest ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                {status.message}
                            </div>
                        )}

                        <Input
                            label="New Secure Key"
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="••••••••"
                            required
                        />

                        <Input
                            label="Confirm Key"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            placeholder="••••••••"
                            required
                        />

                        <Button
                            type="submit"
                            disabled={isLoading || status.type === 'success'}
                            className="w-full py-5 text-sm"
                        >
                            {isLoading ? 'Updating...' : 'Update Credentials'}
                            {!isLoading && <ArrowRight className="ml-3 w-5 h-5" />}
                        </Button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default ResetPassword;
