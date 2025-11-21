import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import WorkspaceLayout from './components/WorkspaceLayout';
import Home from './pages/Home';
import WorkspaceCoding from './pages/WorkspaceCoding';
import Entertainment from './pages/Entertainment';
import Manifesto from './pages/Manifesto';
import Deploy from './pages/Deploy';
import Community from './pages/Community';
import Privacy from './pages/Privacy';
import ChatWidget from './components/ChatWidget';
import PrivacyIndicator from './components/PrivacyIndicator';
import ManifestoPopup from './components/ManifestoPopup';
import { WorkspaceProvider } from './contexts/WorkspaceContext';
import { CollaborationProvider } from './contexts/CollaborationContext';
import { NotificationProvider } from './contexts/NotificationContext';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/coding" element={<WorkspaceCoding />} />
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
      <NotificationProvider>
        <WorkspaceProvider>
          <CollaborationProvider>
            <WorkspaceLayout>
              <AnimatedRoutes />
            </WorkspaceLayout>
            <ChatWidget />
            <PrivacyIndicator />
            <ManifestoPopup />
          </CollaborationProvider>
        </WorkspaceProvider>
      </NotificationProvider>
    </Router>
  );
}

export default App;
