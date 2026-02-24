import React from 'react';
import { XCircle } from 'lucide-react';

const ProblemSection = () => {
    const painPoints = [
        "You've tried multiple diets but your weight simply doesn't move.",
        "Your energy levels fluctuate and you feel exhausted all the time.",
        "You're confused about what's actually safe to eat with your condition.",
        "Every diet online seems to contradict the last — you don't know who to trust.",
        "You want structured, medically aware guidance — not a generic plan.",
        "You start and stop and want to finally break the cycle for good!"
    ];

    return (
        <section id="problem" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-4">
                        Does This Sound Like You?
                    </h2>
                    <p className="text-center text-neutral-500 mb-12">
                        The traditional fitness advice fails busy professionals because it ignores your reality.
                    </p>

                    <div className="grid gap-4">
                        {painPoints.map((point, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-neutral-200 hover:shadow-md transition-shadow">
                                <XCircle className="w-6 h-6 text-brand-600 flex-shrink-0" />
                                <p className="text-lg text-neutral-700 font-medium">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
