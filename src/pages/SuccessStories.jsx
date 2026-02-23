import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessStories = () => {
    // Data structure updated with specific fields requested by user
    const stories = [
        {
            id: 1,
            name: "Parth Gupta",
            role: "Student",
            image: "/assets/transformations/IMG_6523.PNG",
            duration: "90 Days",
            startWeight: "73 kg",
            currentWeight: "75 kg",
            loss: "+2 kg",
            struggle: "Busy Timings"
        },
        {
            id: 2,
            name: "Gokul",
            role: "Working Professional",
            image: "/assets/transformations/IMG_6529.PNG",
            duration: "90 Days",
            startWeight: "82 kg",
            currentWeight: "74 kg",
            loss: "-8 kg",
            struggle: "Late night cravings and stress"
        },
        {
            id: 3,
            name: "Jaideep Singh",
            role: "Working Professional",
            image: "/assets/transformations/IMG_6535.PNG",
            duration: "90 Days",
            startWeight: "103 kg",
            currentWeight: "93 kg",
            loss: "-10 kg",
            struggle: "Busy schedule"
        },
        {
            id: 4,
            name: "Antriskh Bhalla",
            role: "Builder",
            image: "/assets/transformations/IMG_6549.PNG",
            duration: "6 Months",
            startWeight: "91 kg",
            currentWeight: "87 kg",
            loss: "-4 kg",
            struggle: "No proper nutrition"
        },
        {
            id: 5,
            name: "Nav Bhangu",
            role: "Nurse",
            image: "/assets/transformations/IMG_6553.PNG",
            duration: "3 Months",
            startWeight: "67.8 kg",
            currentWeight: "63.6 kg",
            loss: "-4.2 kg",
            struggle: "In their active lifestyle always struggle to lose fat."
        },
        {
            id: 6,
            name: "Dalbir Rehal",
            role: "Change Management",
            image: "/assets/transformations/IMG_6565.PNG",
            duration: "3 Months",
            startWeight: "67 kg",
            currentWeight: "61.7 kg",
            loss: "-5.3 kg",
            struggle: "Didn't know how to approach it; believed success meant strict diets."
        },
        {
            id: 7,
            name: "Krishnam Duggal",
            role: "Corporate Job",
            image: "/assets/transformations/IMG_6567.PNG",
            duration: "90 Days",
            startWeight: "94 kg",
            currentWeight: "88 kg",
            loss: "-6 kg",
            struggle: "Didn't understand nutrition."
        },
        {
            id: 8,
            name: "Navneet Kaur",
            role: "Professional",
            image: "/assets/transformations/IMG_6574.PNG",
            duration: "180 Days",
            startWeight: "108 kg",
            currentWeight: "102 kg",
            loss: "-6 kg",
            struggle: "No knowledge about nutrition, suffering from hypothyroidism and PCOD."
        },
        {
            id: 9,
            name: "Unknown",
            role: "Entrepreneur",
            image: "/assets/transformations/IMG_6576.PNG",
            duration: "90 Days",
            startWeight: "64 kg",
            currentWeight: "56 kg",
            loss: "-8 kg",
            struggle: "No knowledge about Nutrition, workouts."
        },
        {
            id: 10,
            name: "Suraj",
            role: "Businessman",
            image: "/assets/transformations/IMG_6578.PNG",
            duration: "90 Days +",
            startWeight: "92.5 kg",
            currentWeight: "81.65 kg",
            loss: "-10.85 kg",
            struggle: "No Structure"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-neutral-900">

            {/* Navigation */}
            <nav className="p-6 fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
                <div className="container mx-auto">
                    <Link to="/" className="inline-flex items-center text-neutral-500 hover:text-brand-600 font-bold transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
                    </Link>
                </div>
            </nav>

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            Real People. <span className="text-brand-600">Real Stats.</span>
                        </h1>
                        <p className="text-xl text-neutral-500 leading-relaxed">
                            Full transparency. See the exact numbers behind our client transformations.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                        {stories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                // Sticky stacking on desktop only – mobile scrolls normally to prevent content cutoff
                                className="static md:sticky"
                                style={{
                                    top: `calc(4rem + ${index * 8}px)`,
                                    zIndex: index + 1
                                }}
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 flex flex-col md:flex-row min-h-max md:h-[420px] lg:h-[450px] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-300">

                                    {/* Left Side: Image */}
                                    <div className="w-full md:w-1/2 bg-neutral-100 relative group h-[300px] md:h-full">
                                        <img
                                            src={story.image}
                                            alt={`Before and After of ${story.name}`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-neutral-800', 'text-white');
                                                e.target.parentElement.innerHTML = '<div class="text-center p-4"><p class="font-bold text-neutral-500">Add Photo</p></div>';
                                            }}
                                        />
                                        <div className="absolute bottom-0 left-0 w-1/2 bg-black/60 text-white text-center py-2 text-sm font-bold backdrop-blur-sm">Before</div>
                                        <div className="absolute bottom-0 right-0 w-1/2 bg-brand-600/90 text-white text-center py-2 text-sm font-bold backdrop-blur-sm">After</div>
                                    </div>

                                    {/* Right Side: content */}
                                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <h3 className="font-bold text-3xl text-neutral-900 mb-2">{story.name}</h3>
                                                <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">
                                                    {story.role}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex items-center text-brand-600 font-bold uppercase text-xs tracking-wider mb-1">
                                                    <CheckCircle className="w-4 h-4 mr-1" /> Verified
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-6 mb-8">
                                            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                                                <p className="text-neutral-400 text-xs uppercase tracking-wider font-semibold mb-1">Duration</p>
                                                <p className="font-bold text-xl text-neutral-800">{story.duration}</p>
                                            </div>
                                            <div className="p-4 bg-brand-50 rounded-xl border border-brand-100">
                                                <p className="text-brand-400 text-xs uppercase tracking-wider font-semibold mb-1">Total Loss</p>
                                                <p className="font-bold text-xl text-brand-700">{story.loss}</p>
                                            </div>
                                            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                                                <p className="text-neutral-400 text-xs uppercase tracking-wider font-semibold mb-1">Starting Weight</p>
                                                <p className="font-bold text-xl text-neutral-800">{story.startWeight}</p>
                                            </div>
                                            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                                                <p className="text-neutral-400 text-xs uppercase tracking-wider font-semibold mb-1">Current Weight</p>
                                                <p className="font-bold text-xl text-neutral-800">{story.currentWeight}</p>
                                            </div>
                                        </div>

                                        {/* Struggle Section */}
                                        <div className="mt-auto">
                                            <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Biggest Challenge Overcome</p>
                                            <p className="text-lg text-neutral-700 font-medium italic leading-relaxed border-l-4 border-brand-500 pl-4">
                                                "{story.struggle}"
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section at bottom - Spaced out so the last card has room to be scrolled past if needed or sit at bottom */}
                    <div className="mt-40 text-center bg-neutral-900 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-500 rounded-full blur-3xl opacity-20"></div>

                        <h2 className="text-3xl font-bold mb-6 relative z-10">You could be next.</h2>
                        <p className="text-neutral-400 max-w-xl mx-auto mb-8 relative z-10">
                            Apply now to join the next cohort of high-performing professionals transforming their health.
                        </p>
                        <Link
                            to="/"
                            onClick={() => {
                                setTimeout(() => {
                                    const element = document.getElementById('apply');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 100);
                            }}
                            className="inline-block px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-900/50 relative z-10"
                        >
                            Apply For Coaching
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SuccessStories;
