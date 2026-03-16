/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar, Footer } from './components/Layout';
import { VideoIntro } from './components/VideoIntro';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Team } from './pages/Team';
import { HowItWorks } from './pages/HowItWorks';
import { Gallery } from './pages/Gallery';
import { Reviews } from './pages/Reviews';
import { WhyChoose } from './pages/WhyChoose';
import { Enquiry } from './pages/Enquiry';
import { IsMyDogAFit } from './pages/IsMyDogAFit';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <AnimatePresence>
        {showIntro && (
          <VideoIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col flex-grow"
        >
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/why-choose" element={<WhyChoose />} />
              <Route path="/enquire" element={<Enquiry />} />
              <Route path="/is-my-dog-a-fit" element={<IsMyDogAFit />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
