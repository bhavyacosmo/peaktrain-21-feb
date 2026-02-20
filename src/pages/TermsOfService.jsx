import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/layout/Footer';

const TermsOfService = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-neutral-900">
            <div className="flex-grow pt-20 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link to="/" className="inline-flex items-center text-brand-600 font-bold mb-8 hover:underline">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Terms and Conditions</h1>

                    <div className="prose prose-neutral max-w-none">
                        <p className="lead text-xl text-neutral-600 mb-8">
                            These Terms and Conditions (“Terms”) govern your access to and use of the PeakTrain website, mobile application, and other online products and services (collectively, the “Services”). By accessing or using the Services, you agree to be bound by these Terms.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Use of Services</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>You must be at least 18 years old to use the Services.</li>
                            <li>You agree to provide accurate, current, and complete information about yourself as prompted by the registration form.</li>
                            <li>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Payment and Subscription</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Payment is required to access certain features of the Services. Prices are subject to change.</li>
                            <li>Subscription fees are non-refundable.</li>
                            <li>You may cancel your subscription at any time, but no refunds will be provided for the remaining subscription period.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">User Content</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>You retain ownership of any content you upload or share through the Services.</li>
                            <li>By uploading or sharing content, you grant us a non-exclusive, royalty-free, worldwide, perpetual, and irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Prohibited Conduct</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>You may not use the Services for any illegal or unauthorized purpose.</li>
                            <li>You may not interfere with or disrupt the Services or servers or networks connected to the Services.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer of Warranties</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>The Services are provided “as is” and “as available” without any warranties of any kind, whether express or implied.</li>
                            <li>We do not warrant that the Services will be uninterrupted, secure, or error-free.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
                        <p className="mb-4">
                            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, arising out of or in connection with your use of the Services.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
                        <p className="mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of India.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
                        <p className="mb-4">
                            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days’ notice prior to any new terms taking effect.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms, please contact us at <a href="mailto:contact@PeakTrain.in" className="text-brand-600 hover:underline">contact@PeakTrain.in</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfService;
