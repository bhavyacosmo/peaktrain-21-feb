import React from 'react';
import { Check, X } from 'lucide-react';

const ForYouSection = () => {
    return (
        <section id="foryou" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* This Is For You */}
                    <div className="bg-white rounded-2xl p-8 border border-brand-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-brand-900 mb-6 text-center">
                            This Is For You If:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "You value structure and efficiency.",
                                "You are willing to invest in high-level accountability.",
                                "You want sustainable results, not a quick fix.",
                                "You are ready to commit to a 90-day process."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="bg-brand-500 rounded-full p-1 text-white mt-1">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-neutral-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* This Is NOT For You */}
                    <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 shadow-sm opacity-90">
                        <h3 className="text-2xl font-bold text-neutral-400 mb-6 text-center">
                            This Is <span className="underline decoration-brand-500 decoration-4 text-white">NOT</span> For You If:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "You are looking for a quick crash diet.",
                                "You aren't ready to commit to the process.",
                                "You represent 'fitness' as just a hobby.",
                                "You are looking for the cheapest option available."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="bg-neutral-800 rounded-full p-1 text-neutral-500 mt-1">
                                        <X className="w-4 h-4" />
                                    </div>
                                    <span className="text-neutral-400 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ForYouSection;
