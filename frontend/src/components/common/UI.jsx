import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Button = ({
    children,
    to,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-10 py-4 h-[52px] rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-brand-black text-brand-white hover:bg-brand-gray-800 dark:bg-brand-white dark:text-brand-black dark:hover:bg-brand-secondary shadow-xl shadow-brand-black/10 dark:shadow-none",
        outline: "bg-transparent border-[1.5px] border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white dark:border-brand-white dark:text-brand-white dark:hover:bg-brand-white dark:hover:text-brand-black",
        ghost: "bg-transparent text-brand-gray-400 hover:text-brand-black dark:hover:text-brand-white",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
            >
                <Link to={to} className={combinedClassName} {...props}>
                    {children}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={combinedClassName}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export const Input = ({ label, error, ...props }) => {
    return (
        <div className="space-y-2">
            {label && (
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#374151] dark:text-[#9CA3AF] ml-4">
                    {label}
                </label>
            )}
            <motion.input
                whileFocus={{ y: -1 }}
                className="w-full bg-brand-gray-50/50 dark:bg-[#1A1A1A] border-[1.5px] border-brand-gray-100 dark:border-brand-gray-800 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-black dark:focus:ring-brand-white focus:border-transparent transition-all duration-300 dark:text-brand-white placeholder:text-[#9CA3AF] dark:placeholder:text-brand-gray-600"
                {...props}
            />
            {error && <p className="text-[10px] font-bold text-red-500 ml-4 mt-1 uppercase tracking-widest">{error}</p>}
        </div>
    );
};
