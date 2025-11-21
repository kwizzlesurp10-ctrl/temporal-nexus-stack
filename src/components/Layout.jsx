import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Music, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 rounded-none border-b border-white/10">
        <div className="container mx-auto h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
            <Zap className="text-blue-500" />
            GROK<span className="text-blue-500">APP</span>
          </Link>

          <div className="flex gap-8">
            <Link to="/" className={`nav-link ${isActive('/')}`}>TRUTH</Link>
            <Link to="/coding" className={`nav-link ${isActive('/coding')}`}>BUILD</Link>
            <Link to="/entertainment" className={`nav-link ${isActive('/entertainment')}`}>PLAY</Link>
          </div>

          <Link to="/community" className="btn-primary text-sm px-6 py-2 no-underline inline-block">
            Connect
          </Link>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="border-t border-white/10 py-12 mt-20 bg-black/50">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© 2025 GROK APP. MAXIMIZE TRUTH.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white cursor-pointer transition">Privacy</Link>
            <Link to="/privacy" className="hover:text-white cursor-pointer transition">Terms</Link>
            <Link to="/manifesto" className="hover:text-white cursor-pointer transition">Manifesto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
