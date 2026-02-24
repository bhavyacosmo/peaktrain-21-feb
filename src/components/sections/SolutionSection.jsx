import React from 'react';
import { CheckCircle2, TrendingUp, Activity, Zap } from 'lucide-react';

const SolutionSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-1/2">
                        <span className="text-accent-600 font-bold uppercase tracking-wider text-sm mb-2 block">The Solution</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                            A System Built Around Your Body, Not Against It.
                        </h2>
                        <p className="text-lg text-neutral-600 mb-6">
                            Peak Train isn't a crash diet. It's a medically aware, sustainable fat loss protocol specifically designed for people managing PCOS, Thyroid disorders, and Diabetes.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Medically aware nutrition — no foods that spike your hormones or blood sugar.",
                                "Zero guesswork: We tell you exactly what to eat and when.",
                                "Structured programming that works with your metabolism, not against it."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-neutral-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <a href="#apply" className="text-brand-600 font-bold hover:text-brand-700 underline underline-offset-4">
                                Learn about our methodology &rarr;
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        {/* Replaced Video with a Feature Grid/Card */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-xl border border-brand-100">
                                <TrendingUp className="w-10 h-10 text-brand-600 mb-4" />
                                <h3 className="font-bold text-neutral-900 mb-2">Hormone-Aware</h3>
                                <p className="text-sm text-neutral-600">Every meal plan accounts for your hormonal profile and medical condition.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-orange-100">
                                <Activity className="w-10 h-10 text-accent-600 mb-4" />
                                <h3 className="font-bold text-neutral-900 mb-2">Metabolic Healing</h3>
                                <p className="text-sm text-neutral-600">Repair your metabolism sustainably — no starvation, no crash diets.</p>
                            </div>
                            <div className="sm:col-span-2 bg-white p-6 rounded-xl border border-neutral-100 flex items-center gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm border border-neutral-100">
                                    <Zap className="w-6 h-6 text-brand-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-900">Energy & Clarity</h3>
                                    <p className="text-sm text-neutral-600">Eliminate fatigue, brain fog, and the constant energy crashes caused by hormonal imbalance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
