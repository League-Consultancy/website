import React, { useState } from 'react';
import { Check, ArrowRight, Star, Zap, Shield, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: "Innovation Starter",
            price: billingCycle === 'monthly' ? "4,999" : "3,999",
            description: "Perfect for startups and small-scale automation projects.",
            features: [
                "Basic AI Model Integration",
                "Single Robotic Control System",
                "Initial IoT Hub Setup",
                "Standard Technical Support",
                "Weekly Progress Reports"
            ],
            icon: Zap,
            highlight: false
        },
        {
            name: "Engineering Pro",
            price: billingCycle === 'monthly' ? "9,999" : "7,999",
            description: "Advanced solutions for growing industrial operations.",
            features: [
                "Advanced Neural Networks",
                "Multi-Robot Orchestration",
                "Enterprise IoT Dashboard",
                "Priority 24/7 Support",
                "Dedicated Solutions Engineer",
                "On-site Calibration (Monthly)"
            ],
            icon: Crown,
            highlight: true,
            badge: "Most Popular"
        },
        {
            name: "Enterprise Custom",
            price: "Custom",
            description: "Tailored engineering ecosystems for large-scale enterprises.",
            features: [
                "Full-stack Custom AI Pipeline",
                "Proprietary Robotics Hardware",
                "Global IoT Network Deployment",
                "Dedicated On-site Support Team",
                "Unlimited R&D Consultation",
                "White-label Dashboard"
            ],
            icon: Shield,
            highlight: false
        }
    ];

    return (
        <div className="bg-brand-white dark:bg-brand-black transition-colors duration-300">
            {/* Header Section */}
            <section className="bg-brand-gray-50 dark:bg-brand-dark py-32 border-b border-brand-gray-100 dark:border-brand-gray-900 transition-colors duration-300">
                <div className="section-container text-center">
                    <FadeIn>
                        <span className="text-brand-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Investment Tiers</span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                            Transparent <br />Pricing
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="flex items-center justify-center space-x-4 mt-12 bg-white dark:bg-[#1E1E1E] p-1.5 rounded-full border border-brand-gray-100 dark:border-brand-gray-800 w-fit mx-auto shadow-sm">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${billingCycle === 'monthly' ? 'bg-brand-black text-brand-white' : 'text-brand-gray-400 hover:text-brand-black dark:hover:text-brand-white'}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${billingCycle === 'yearly' ? 'bg-brand-black text-brand-white' : 'text-brand-gray-400 hover:text-brand-black dark:hover:text-brand-white'}`}
                            >
                                Yearly <span className="text-[8px] opacity-60 ml-1">(Save 20%)</span>
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="py-32">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {plans.map((plan, idx) => {
                            const Icon = plan.icon;
                            return (
                                <FadeIn key={plan.name} delay={idx * 0.1}>
                                    <div className={`relative p-10 lg:p-14 rounded-[3rem] border transition-all duration-700 group flex flex-col h-full bg-white dark:bg-[#1A1A1A] ${plan.highlight ? 'border-brand-black dark:border-brand-white scale-105 z-10 shadow-2xl dark:shadow-none' : 'border-brand-gray-100 dark:border-brand-gray-800 hover:border-brand-black/20 dark:hover:border-brand-white/10'}`}>
                                        {plan.badge && (
                                            <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-black dark:bg-[#F3F4F6] text-brand-white dark:text-brand-black text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                                {plan.badge}
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between mb-8">
                                            <div className={`p-4 rounded-2xl transition-all duration-500 ${plan.highlight ? 'bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black' : 'bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-black dark:text-brand-white group-hover:bg-brand-black group-hover:text-brand-white dark:group-hover:bg-brand-white dark:group-hover:text-brand-black'}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-xl font-black tracking-tighter uppercase">{plan.name.split(' ')[0]}</span>
                                        </div>

                                        <div className="mb-8">
                                            <div className="flex items-baseline space-x-1">
                                                <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-brand-black dark:text-[#F3F4F6]">
                                                    {plan.price !== 'Custom' && (
                                                        <span className="text-lg vertical-top mr-1">$</span>
                                                    )}
                                                    {plan.price}
                                                </span>
                                                {plan.price !== 'Custom' && (
                                                    <span className="text-brand-gray-400 text-xs font-bold uppercase tracking-widest">/mo</span>
                                                )}
                                            </div>
                                            <p className="text-sm text-brand-gray-500 dark:text-[#D1D5DB] mt-4 font-light leading-relaxed">{plan.description}</p>
                                        </div>

                                        <div className="space-y-4 mb-10 flex-grow">
                                            {plan.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-start space-x-3 group/item">
                                                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-transform ${plan.highlight ? 'text-brand-black dark:text-brand-white' : 'text-brand-gray-300 dark:text-brand-gray-700'}`} />
                                                    <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gray-600 dark:text-[#9CA3AF] group-hover/item:text-brand-black dark:group-hover/item:text-brand-white transition-colors">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            to="/contact"
                                            className={`w-full py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all text-center flex items-center justify-center space-x-2 ${plan.highlight
                                                ? 'bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black hover:scale-[1.02]'
                                                : 'bg-brand-gray-50 dark:bg-brand-gray-800 text-brand-black dark:text-brand-white hover:bg-brand-black hover:text-brand-white dark:hover:bg-white dark:hover:text-brand-black'}`}
                                        >
                                            <span>Get Started</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Enterprise Banner */}
            <section className="pb-32">
                <div className="section-container">
                    <FadeIn>
                        <div className="p-12 lg:p-16 bg-brand-gray-50 dark:bg-[#1E1E1E] rounded-[3rem] border border-brand-gray-100 dark:border-brand-gray-800 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                            <div className="lg:max-w-xl mb-10 lg:mb-0">
                                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-brand-black dark:text-[#F3F4F6]">Need a Custom Solution?</h2>
                                <p className="text-brand-gray-500 dark:text-[#D1D5DB] font-light leading-relaxed">
                                    Our engineers can design a bespoke tech ecosystem for your specific industrial challenges. From R&D to deployment.
                                </p>
                            </div>
                            <Link to="/contact" className="px-10 py-5 bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-black/5 dark:shadow-none">
                                Request Enterprise Evaluation
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
