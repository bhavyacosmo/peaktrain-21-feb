import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "Is this program safe for someone with PCOS or Thyroid issues?",
            a: "Absolutely. Our coaches are trained to work with clients managing hormonal conditions. Every nutrition and workout plan is designed with your specific condition in mind — no extreme calorie cuts, no foods that spike your hormones."
        },
        {
            q: "I have tried every diet but my weight doesn't move. Will this work for me?",
            a: "Yes. Weight resistance due to PCOS, Thyroid, or Diabetes is a metabolic issue, not a willpower issue. Our protocol focuses on healing your metabolism through structured nutrition and progressive exercise — not starvation."
        },
        {
            q: "Do I need to stop my medication to join?",
            a: "No. We work alongside your medication, not against it. We always recommend you coordinate with your doctor, and we will design a plan fully compatible with your treatment."
        },
        {
            q: "How long will it take to see results with a hormonal condition?",
            a: "Results depend on your specific condition and consistency, but most clients with hormonal conditions begin to see noticeable changes within 4-6 weeks. Our 90-day program is specifically designed to give your body enough time for real, sustainable change."
        },
        {
            q: "What keeps me accountable throughout the program?",
            a: "You will have a dedicated coach, weekly check-ins, and direct support access at all times. We monitor your progress closely and adjust your plan weekly based on your body's response."
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
