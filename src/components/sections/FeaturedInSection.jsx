import React from 'react';
import { motion } from 'framer-motion';

const FeaturedInSection = () => {
    // Using text placeholders as logos were not provided, styled to look like logos.
    const logos = [
        { name: "FINANCIAL EXPRESS", style: "font-serif font-bold tracking-tighter" },
        { name: "YOURSTORY", style: "font-sans font-black tracking-tighter border-2 border-neutral-500 p-1" },
        { name: "TECHCIRCLE", style: "font-mono font-bold tracking-widest" },
        { name: "CNBC TV18", style: "font-sans font-extrabold tracking-tight" }, // Color hint
    ];

    return (
        <section className="bg-neutral-950 py-10 overflow-hidden border-t border-neutral-900">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h3 className="text-neutral-400 font-bold text-xl">Featured In</h3>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                <motion.div
                    className="flex flex-nowrap gap-16 md:gap-32 items-center"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the list to create seamless loop */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                        <div key={idx} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                            <span className={`text-2xl md:text-3xl text-neutral-300 ${logo.style}`}>
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedInSection;
