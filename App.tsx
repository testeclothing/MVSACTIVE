import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PartnerDeck from './components/PartnerDeck';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota 1: Homepage Normal (marinevisualstudio.com) */}
        <Route path="/" element={<Home />} />
        
        {/* Rota 2: Apresentação de Parceiros (marinevisualstudio.com/partner/soproyachts) */}
        <Route path="/partner/:partnerId" element={<PartnerDeck />} />
      </Routes>
    </Router>
  );
};

export default App;
