import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SocialProof = () => {
    const stories = [
        {
            id: 1,
            name: "Yash Kavi",
            role: "Professional", // Added placeholder role as " " looks broken
            image: "/assets/homepage-social/IMG_6483.PNG",
            loss: "-10 kg",
            quote: "Eating the wrong type of foods"
        },
        {
            id: 2,
            name: "Arushi Nudurupati",
            role: "Student",
            image: "/assets/homepage-social/IMG_6492.PNG",
            loss: "-5 kg",
            quote: "Trying Foods and Nutrition"
        },
        {
            id: 3,
            name: "Piyush Vji",
            role: "Business Owner",
            image: "/assets/homepage-social/IMG_6494.PNG",
            loss: "-12 kg",
            quote: "Consistency is the key"
        },
        {
            id: 4,
            name: "Vaishali Ahlawat",
            role: "Engineer",
            image: "/assets/homepage-social/IMG_6501.PNG",
            loss: "-7 kg",
            quote: "Sticking to the plan"
        },
        {
            id: 5,
            name: "Anjna Singh",
            role: "Pilot",
            image: "/assets/homepage-social/IMG_6509.PNG",
            loss: "-4.5 kg",
            quote: "Busy Schedule and Travel"
        }
    ];

    const duplicatedStories = [...stories, ...stories]; // Duplicate for infinite scroll

    return (
        <section id="results" className="py-20 bg-neutral-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Better Health. Real Impact.
                </h2>
                <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
                    Structured, patient-focused care designed to improve long-term well-being.
                </p>

                <div className="relative overflow-hidden mask-gradient-x">
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none"></div>

                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 50, // Adjusted speed for more items
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {duplicatedStories.map((story, index) => (
                            <div key={index} className="w-[350px] flex-shrink-0 bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700">
                                <div className="h-64 bg-neutral-700 relative group">
                                    <img
                                        src={story.image}
                                        alt={`Transformation of ${story.name}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'text-neutral-500');
                                            e.target.parentElement.innerHTML = 'Image Not Found';
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 w-1/2 bg-black/50 text-center py-1 text-xs">Before</div>
                                    <div className="absolute bottom-0 right-0 w-1/2 bg-brand-600/80 text-center py-1 text-xs">After</div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <h4 className="font-bold text-lg">{story.name}</h4>
                                            <p className="text-sm text-neutral-400">{story.role}</p>
                                        </div>
                                        <div className="text-brand-400 font-bold text-xl">{story.loss}</div>
                                    </div>
                                    <p className="text-neutral-300 text-sm italic line-clamp-2">
                                        "{story.quote}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="text-center mt-12">
                    <Link to="/success-stories" className="text-brand-400 hover:text-brand-300 font-medium underline underline-offset-4 cursor-pointer">
                        View More Success Stories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
