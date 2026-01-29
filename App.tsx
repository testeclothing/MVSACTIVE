import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DigitalStaging from './components/DigitalStaging';
import ROICalculator from './components/ROICalculator';
import ListingDemo from './components/ListingDemo';
import AccuracyGuarantee from './components/AccuracyGuarantee';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import FreeAudit from './components/FreeAudit';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LogisticsComparison from './components/LogisticsComparison';
import MobileBottomNav from './components/MobileBottomNav';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0C10] text-dark dark:text-white font-sans selection:bg-neon selection:text-white overflow-x-hidden relative transition-colors duration-500 pb-24 md:pb-0">
      
      {/* Global Ambient Lighting & Texture (Updated for Light Mode Luxury) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white dark:bg-[#0B0C10] transition-colors duration-500">
        
        {/* Light Mode: Base Silver/White Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#0B0C10] dark:via-[#0f1115] dark:to-[#0B0C10] opacity-100"></div>

        {/* Light Mode: Subtle Paper Texture for richness */}
        <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay" style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/concrete-seamless.png")`,
        }}></div>

        {/* Subtle Tech Grid - Dark on Light, Light on Dark */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#CCF381 1px, transparent 1px), linear-gradient(90deg, #CCF381 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        {/* Ambient Glows - Adjusted for Light Mode (Blue/Grey tones instead of Neon) */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-50 dark:bg-neon/5 rounded-full blur-[150px] opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[12000ms]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gray-100 dark:bg-blue-500/5 rounded-full blur-[150px] opacity-80 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[15000ms]"></div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <Chatbot />
        <MobileBottomNav />
        <main className="flex-grow">
          <Hero />
          <DigitalStaging />
          <ListingDemo />
          <LogisticsComparison />
          <Pricing />
          <div id="pilot">
              <FreeAudit />
          </div>
          <ROICalculator />
          <AccuracyGuarantee />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;