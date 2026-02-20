import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-neutral-400 py-16 border-t border-neutral-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="lg:col-span-1">
                        <img src="/assets/Peak-Train-1.png" alt="Peak Train" className="h-12 mb-6 object-contain" />
                        <p className="text-sm leading-relaxed mb-6">
                            Transform your fitness with expert online coaching tailored to your lifestyle and goals.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-accent-500 font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-accent-500 font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Online Coaching</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">App</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Locations */}
                    <div>
                        <h4 className="text-accent-500 font-bold mb-6">Locations</h4>
                        <ul className="space-y-3 text-sm">
                            <li>Canada</li>
                            <li>India</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>Pune</li>
                            <li>Bangalore</li>
                        </ul>
                    </div>

                    {/* Column 5: Connect */}
                    <div>
                        <h4 className="text-accent-500 font-bold mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-neutral-500" />
                                <a href="mailto:peak.trainn@gmail.com" className="hover:text-white transition-colors">peak.trainn@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-neutral-500" />
                                <a href="tel:+919056242601" className="hover:text-white transition-colors">+91 90562 42601</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/peak.trainn?igsh=MTRvdjVmemphaXU1cw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-block p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
                                    <Instagram className="w-5 h-5 text-white" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
                    <p>&copy; 2026 Peak Train. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-neutral-400">Privacy policy</Link>
                        <Link to="/terms-of-service" className="hover:text-neutral-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
