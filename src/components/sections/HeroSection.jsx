import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="top" className="relative pt-12 pb-12 md:pb-20 overflow-hidden bg-white"> {/* High contrast white */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-stretch gap-12">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 z-10 pb-12 md:pb-24 text-left flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="/assets/Peak-Train-1.png" alt="Peak Train" className="h-12 md:h-16 mb-8" />

                            <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight mb-6 leading-[1.1]">
                                Lose 5-7kgs in 90 days <br />
                                <span className="text-brand-600">SUSTAINABLY</span>
                            </h1>

                            {/* Mobile Only Image */}
                            <div className="block md:hidden w-full relative h-[45vh] mb-6">
                                <img
                                    src="/assets/model-hero.png"
                                    alt="Fitness Model"
                                    className="w-full h-full object-contain object-bottom"
                                />
                            </div>

                            {/* Stats Row */}
                            <div className="flex gap-8 my-8 border-y border-brand-200 py-6">
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900">500+</h3>
                                    <p className="text-xs text-neutral-600 uppercase tracking-wider">Busy Pros</p>
                                </div>
                                <div className="w-px bg-brand-200"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900">50+</h3>
                                    <p className="text-xs text-neutral-600 uppercase tracking-wider">Coaches</p>
                                </div>
                                <div className="w-px bg-brand-200"></div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900">100%</h3>
                                    <p className="text-xs text-neutral-600 uppercase tracking-wider">Result Rate</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#apply"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-8 py-4 bg-brand-600 text-white rounded-md font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-200 flex items-center justify-center gap-2 uppercase tracking-wide"
                                >
                                    Get Started Now <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>

                            <p className="mt-4 text-sm text-neutral-500 flex items-center gap-2">
                                <Star className="w-4 h-4 text-accent-400 fill-current" />
                                Rated 4.9/5 by High-Performance Professionals
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Image (Model) - Desktop Only */}
                    <div className="hidden md:flex w-full md:w-1/2 relative justify-center md:justify-end items-end md:h-[90vh]">
                        <motion.img
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            src="/assets/model-hero.png"
                            alt="Fitness Model"
                            className="max-h-[85vh] w-auto object-contain object-bottom relative z-10"
                        />
                    </div>

                </div>
            </div >
        </section >
    );
};

export default HeroSection;
