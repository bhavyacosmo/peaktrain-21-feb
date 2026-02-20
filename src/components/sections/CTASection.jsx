import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-20 bg-brand-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <span className="text-accent-400 font-bold uppercase tracking-widest text-sm mb-4 block">Limited Intake</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Ready to Build Your <br className="hidden md:block" />
                        <span className="text-accent-500">Peak Physique?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        We are currently accepting applications for the next cohort.
                        If you are ready to commit to a 90-day transformation, apply below.
                    </p>

                    <div className="flex justify-center">
                        <ArrowDown className="w-8 h-8 text-accent-500 animate-bounce" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
