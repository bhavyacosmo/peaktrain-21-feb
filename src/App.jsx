import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SuccessStories from './pages/SuccessStories';

import ScrollToTop from './components/utils/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen font-sans bg-white text-neutral-900">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="/success-stories" element={<SuccessStories />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
