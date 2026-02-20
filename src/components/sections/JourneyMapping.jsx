import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Activity, Trophy, ArrowDown } from 'lucide-react';

const JourneyMapping = () => {
    const phases = [
        {
            icon: Flag,
            title: "Phase 1: Foundation (Weeks 1-4)",
            desc: "We build your metabolic base and correct lifestyle habits.",
            items: ["Metabolic Assessment", "Lifestyle Audit", "Foundational Nutrition"],
            color: "bg-white text-neutral-800",
            border: "border-neutral-200"
        },
        {
            icon: Activity,
            title: "Phase 2: Acceleration (Weeks 5-8)",
            desc: "Intensity increases as your body adapts. Fat loss acceleration.",
            items: ["Progressive Overload", "Fat Loss Acceleration", "Habit Correction"],
            color: "bg-white text-brand-600",
            border: "border-brand-200"
        },
        {
            icon: Trophy,
            title: "Phase 3: Optimization (Weeks 9-12)",
            desc: " cementing results and automating the new lifestyle.",
            items: ["Lifestyle Sustainability", "Habit Automation", "Final Composition Shift"],
            color: "bg-white text-orange-600",
            border: "border-orange-200"
        }
    ];

    return (
        <section id="process" className="py-20 bg-neutral-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-2 block">The Roadmap</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                        Your 90-Day Transformation Journey
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="space-y-8 md:space-y-12 relative">
                        {/* Central Line - Desktop Only */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 transform -translate-x-1/2 hidden md:block"></div>

                        {phases.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Icon Marker - Desktop Only */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-neutral-50 shadow-lg hidden md:flex items-center justify-center z-10">
                                    <phase.icon className={`w-6 h-6 ${phase.color.split(' ')[1]}`} />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 md:px-12">
                                    <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border ${phase.border} hover:shadow-md transition-shadow relative group`}>
                                        {/* Connection Line - Desktop Only */}
                                        <div className={`absolute top-8 ${idx % 2 === 0 ? 'right-full' : 'left-full'} w-12 h-px bg-neutral-200 hidden md:block`}></div>

                                        {/* Mobile Icon & Step Header */}
                                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                                            <div className={`p-3 rounded-full bg-neutral-50 border border-neutral-100 md:hidden`}>
                                                <phase.icon className={`w-6 h-6 ${phase.color.split(' ')[1]}`} />
                                            </div>
                                            <div className={`inline-block p-2 rounded-lg ${phase.color}`}>
                                                <span className="font-bold text-xs uppercase tracking-wider">Step {idx + 1}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                            {phase.title}
                                        </h3>
                                        <p className="text-neutral-500 text-sm mb-6">
                                            {phase.desc}
                                        </p>

                                        <ul className="space-y-2">
                                            {phase.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-neutral-700 text-sm font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty space for the other side - Desktop Only */}
                                <div className="w-full md:w-1/2 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12 relative z-10"
                    >
                        <div className="px-6 py-2 bg-neutral-900 text-white rounded-full text-sm font-bold flex items-center gap-2 shadow-xl">
                            Goal Achieved <Trophy className="w-4 h-4 text-brand-400" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default JourneyMapping;
