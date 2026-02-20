import React from 'react';
// import Header from '../components/layout/Header'; // Removed per request
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import FeaturedInSection from '../components/sections/FeaturedInSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import JourneyMapping from '../components/sections/JourneyMapping';
import SocialProof from '../components/sections/SocialProof';
import ForYouSection from '../components/sections/ForYouSection';
import CTASection from '../components/sections/CTASection';
import TypeformEmbed from '../components/sections/TypeformEmbed';
import FAQSection from '../components/sections/FAQSection';

const LandingPage = () => {
    return (
        <>
            {/* <Header /> Removed */}
            <main>
                <HeroSection />
                <FeaturedInSection />
                <ProblemSection />
                <SolutionSection />
                <JourneyMapping />
                <SocialProof />
                <ForYouSection />
                <CTASection />
                <TypeformEmbed />
                <FAQSection />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;
