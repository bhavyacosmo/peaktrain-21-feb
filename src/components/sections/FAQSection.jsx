import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "Do I need a gym membership?",
            a: "While a gym membership is recommended for optimal results (access to varied weights), we can design effective home workout plans if you have basic equipment (dumbbells/bands)."
        },
        {
            q: "How much time do I need to commit?",
            a: "Our plans are designed for busy professionals. You'll need about 45-60 minutes for workouts, 3-4 times a week."
        },
        {
            q: "Is this a strict diet plan?",
            a: "No. We focus on flexible dieting and macronutrient management. You can eat foods you enjoy as long as they fit your daily targets."
        },
        {
            q: "What keeps me accountable?",
            a: "You will have a dedicated coach, weekly check-ins, and direct access for questions. We monitor your progress and adjust the plan as needed."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-4 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left"
                            >
                                <span className="font-semibold text-neutral-800">{faq.q}</span>
                                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-brand-600" /> : <ChevronDown className="w-5 h-5 text-neutral-400" />}
                            </button>

                            {openIndex === idx && (
                                <div className="p-4 bg-white text-neutral-600 border-t border-neutral-100 text-sm leading-relaxed">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
