import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MotionConfig } from 'framer-motion';
import { CheckCircle, Download, ArrowRight, FileText, Utensils, Activity, BookOpen, PlayCircle, Calendar, Award, TrendingUp, Zap, Heart, Smile, Star, Moon, Plane, ClipboardCheck, Users, Leaf, Sun, Footprints } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const ThankYou = () => {
    const [showAllFreebies, setShowAllFreebies] = useState(false);

    const resources = [
        {
            icon: <Moon className="w-8 h-8" />,
            title: "Better Sleep Protocol",
            desc: "3-step protocol that actually works.",
            downloadUrl: "/assets/3-Step Protocol for Better Sleep  (That Actually Works).pdf"
        },
        {
            icon: <Plane className="w-8 h-8" />,
            title: "4 Airport Meals",
            desc: "Healthy options when you're traveling.",
            downloadUrl: "/assets/4 Airport Meals .pdf"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Stuck at a Plateau?",
            desc: "Try these 5 levers to break through.",
            downloadUrl: "/assets/Stuck at a Plateau Try These 5 Levers.pdf"
        },
        {
            icon: <ClipboardCheck className="w-8 h-8" />,
            title: "5-Point Fitness Audit",
            desc: "Be brutally honest with your progress.",
            downloadUrl: "/assets/The 5-Point Fitness Audit  (Be Brutally Honest) (1).pdf"
        },
        {
            icon: <Plane className="w-8 h-8" />,
            title: "Frequent Flyer Protocol",
            desc: "5-point fitness protocol for travelers.",
            downloadUrl: "/assets/The 5-Point Frequent Flyer Fitness Protocol.pdf"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Social Eating Guide",
            desc: "How to enjoy events without guilt.",
            downloadUrl: "/assets/The Peak-Train Social Eating Guide.pdf"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Stop Stress-Eating",
            desc: "3 ways to break the loop.",
            downloadUrl: "/assets/3 Ways to Break the Stress-Eating Loop.pdf"
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Vegetarian Diet Guide",
            desc: "Learnings from 30 days of eating green.",
            downloadUrl: "/assets/30-Day Vegetarian Diet Learnings (2).pdf"
        },
        {
            icon: <Sun className="w-8 h-8" />,
            title: "The Weekend Guide",
            desc: "Stay on track during the weekend.",
            downloadUrl: "/assets/Weekend guide.pdf"
        },
        {
            icon: <Footprints className="w-8 h-8" />,
            title: "5k & 10k Plans",
            desc: "Running plans for your cardio goals.",
            downloadUrl: "/assets/5k_10k plans.pdf"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Stress Eating SOS",
            desc: "Quick fixes for high-stress moments.",
            downloadUrl: "/assets/Stress eating.pdf"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Plateau Breaker",
            desc: "Advanced strategies for stalling progress.",
            downloadUrl: "/assets/Plateau.pdf"
        }
    ];

    const displayedResources = showAllFreebies ? resources : resources.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-neutral-900">

            {/* 1. Hero Section */}
            <section className="bg-transparent pt-20 pb-16 border-b border-neutral-100/50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="mb-8"
                    >
                        <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                            <CheckCircle className="w-12 h-12 text-brand-600" />
                        </div>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-neutral-900">
                        Application Received
                    </h1>

                    <div className="max-w-2xl mx-auto space-y-4">
                        <p className="text-xl text-neutral-600 leading-relaxed">
                            Thank you for taking the first step toward a structured transformation.
                        </p>
                        <div className="bg-white/50 border border-brand-100 p-6 rounded-xl mt-8 shadow-sm">
                            <p className="font-semibold text-brand-900 text-lg">
                                What happens next?
                            </p>
                            <p className="text-brand-700 mt-2">
                                If you qualify, our team will personally reach out within <strong>24–48 hours</strong> via phone or WhatsApp. Please keep your phone available.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Freebies Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">While You Wait</h2>
                        <h3 className="text-3xl font-bold text-neutral-900">Start Here with Free Resources</h3>
                    </div>

                    <div className={showAllFreebies
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12"
                        : "flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-12"
                    }>
                        {/* 
                           INSTRUCTIONS FOR USER:
                           1. Locate the 'downloadUrl' field above.
                           2. Replace the '#' with your actual PDF link.
                        */}
                        {displayedResources.map((item, idx) => (
                            <FreebieCard
                                key={idx}
                                icon={item.icon}
                                title={item.title}
                                desc={item.desc}
                                href={item.downloadUrl}
                                className={!showAllFreebies ? "w-full md:w-[320px] lg:w-[350px]" : ""}
                            />
                        ))}
                    </div>

                    {!showAllFreebies && (
                        <div className="text-center">
                            <button
                                onClick={() => setShowAllFreebies(true)}
                                className="inline-flex items-center text-brand-600 font-bold hover:underline text-lg group"
                            >
                                View More Free Resources <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* 3. Next Step CTA */}
            <section className="py-16 bg-white border-t border-neutral-100 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4">Want to see what's possible?</h3>
                    <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
                        See how others achieved sustainable results through our structured system.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                            Go To Homepage
                        </Link>
                        <Link
                            to="/success-stories"
                            className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
                        >
                            View Real Transformations <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};

const FreebieCard = ({ icon, title, desc, href, className = "" }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all text-center flex flex-col items-center h-full ${className}`}
    >
        <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-6 text-brand-500">
            {icon}
        </div>
        <h4 className="font-bold text-lg mb-2 text-neutral-900">{title}</h4>
        <p className="text-sm text-neutral-500 mb-6 flex-grow">{desc}</p>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-brand-600 font-bold text-sm flex items-center hover:underline cursor-pointer"
        >
            <Download className="w-4 h-4 mr-2" /> Download Now
        </a>
    </motion.div>
);

export default ThankYou;
