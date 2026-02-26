import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 400); // Wait a bit after 100% before firing onComplete
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 150);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-[100] bg-brand-light dark:bg-brand-black flex flex-col items-center justify-center overflow-hidden"
            >
                <div className="relative flex flex-col items-center">
                    {/* Glowing background effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-gray-300/30 dark:bg-brand-gray-800/50 rounded-full blur-3xl" />

                    {/* Logo mark */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-20 h-20 mb-8 flex items-center justify-center bg-white dark:bg-brand-gray-900 rounded-2xl shadow-premium border border-brand-gray-100 dark:border-brand-gray-800 overflow-hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                            className="w-12 h-12"
                        >
                            <img src="/assets/logo.png" alt="LEAGUE Consultancy Logo" className="w-full h-full object-contain dark:brightness-100 brightness-0" />
                        </motion.div>

                        {/* Shimmer effect over logo */}
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent w-1/2 skew-x-[-20deg]"
                        />
                    </motion.div>

                    {/* Progress Bar Container */}
                    <div className="w-48 h-1 bg-brand-gray-200 dark:bg-brand-gray-800 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-brand-black dark:bg-brand-white rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "easeOut" }}
                        />
                    </div>

                    {/* Percentage text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 text-[10px] font-bold uppercase tracking-widest text-brand-gray-500"
                    >
                        {progress}% - INITIALIZING
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
