import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <img
                        src="/assets/Peak-Train-1.png"
                        alt="Peak Train Logo"
                        className="h-12 w-auto object-contain"
                    />
                </div>

                {/* Navigation Removed per request */}

                <a
                    href="#apply"
                    className="bg-brand-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
                >
                    Apply Now
                </a>
            </div>
        </header>
    );
};

export default Header;
