import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, HardDrive } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-brand-white dark:bg-brand-black px-6 transition-colors duration-300">
            <div className="text-center max-w-2xl">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }}
                    className="relative inline-block mb-12"
                >
                    <div className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-brand-gray-50 dark:text-brand-gray-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                        404
                    </div>
                    <HardDrive className="w-24 h-24 md:w-32 md:h-32 text-brand-black dark:text-brand-white mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Coordinate Mismatch</h1>
                    <p className="text-lg text-brand-gray-500 dark:text-brand-gray-400 font-light mb-12 max-w-md mx-auto leading-relaxed">
                        The resource you requested has been relocated or never existed in this architectural framework.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center space-x-4 px-10 py-5 bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Reorient to Home</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
