import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-neutral-900">
            <div className="flex-grow pt-20 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link to="/" className="inline-flex items-center text-brand-600 font-bold mb-8 hover:underline">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Privacy Policy</h1>

                    <div className="prose prose-slate max-w-none">
                        <p className="lead text-xl text-neutral-600 mb-8">
                            This Privacy Policy describes how PeakTrain (“we,” “our,” or “us”) collects, uses, and shares information about you when you use our website, mobile application, and other online products and services (collectively, the “Services”).
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
                        <p className="mb-4">We collect information about you when you use our Services, including:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact information.</li>
                            <li><strong>Fitness Information:</strong> Workout history, progress photos, goals, and other fitness-related data.</li>
                            <li><strong>Payment Information:</strong> Credit card details, billing address, and other payment information.</li>
                            <li><strong>Device Information:</strong> IP address, browser type, operating system, and other technical information.</li>
                            <li><strong>Usage Information:</strong> Information about how you use our Services, such as the pages you visit and the features you use.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
                        <p className="mb-4">We use your information to:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Provide, personalize, and improve our Services.</li>
                            <li>Communicate with you, including responding to your inquiries and sending you updates and promotional messages.</li>
                            <li>Process payments and manage your account.</li>
                            <li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
                        <p className="mb-4">We may share your information with:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Service Providers:</strong> Third-party service providers who help us provide, maintain, and improve our Services.</li>
                            <li><strong>Legal Compliance:</strong> When we believe in good faith that disclosure is necessary to comply with applicable laws, regulations, or legal processes.</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, sale of assets, or other business transfer.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Your Choices</h2>
                        <p className="mb-4">
                            You can choose not to provide certain information, but this may limit your ability to use certain features of our Services. You can also opt-out of receiving promotional messages from us.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
                        <p className="mb-4">
                            We take reasonable measures to protect your information from unauthorized access or disclosure.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to this Privacy Policy</h2>
                        <p className="mb-4">
                            We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by posting the new Privacy Policy on this page.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:peak.trainn@gmail.com" className="text-brand-600 hover:underline">peak.trainn@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
