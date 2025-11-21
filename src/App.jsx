import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Coding from './pages/Coding';
import Entertainment from './pages/Entertainment';
import Manifesto from './pages/Manifesto';
import Deploy from './pages/Deploy';
import Community from './pages/Community';
import Privacy from './pages/Privacy';
import ChatWidget from './components/ChatWidget';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/deploy" element={<Deploy />} />
        <Route path="/community" element={<Community />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
      <ChatWidget />
    </Router>
  );
}

export default App;
