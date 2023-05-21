import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import Contact from './pages/ContactPage';
import WhyInvestInMexico from './pages/WhyInvest';
import WhatInvestorsConcern from './pages/InvestorConcerns';
import WhatWeCanDoForYou from './pages/WhatWeCanDo';
import OurTeam from './pages/OurTeam';
import SuggestFromCerrig from './pages/SuggestFromCerrig';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Header />
        <main className="container mx-auto mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/why-invest-in-mexico" element={<WhyInvestInMexico />} />
            <Route path="/what-investors-concern" element={<WhatInvestorsConcern />} />
            <Route path="/what-we-can-do-for-you" element={<WhatWeCanDoForYou />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/suggest-from-cerrig" element={<SuggestFromCerrig />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
