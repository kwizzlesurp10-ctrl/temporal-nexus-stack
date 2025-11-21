import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import NotificationCenter from './NotificationCenter';
import UnifiedSidebar from './UnifiedSidebar';

const WorkspaceLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e]">
            {/* Top Bar */}
            <nav className="h-14 glass-panel border-b border-white/10 flex items-center px-4 justify-between z-50">
                <Link to="/" className="flex items-center gap-2 text-xl font-black">
                    <Zap className="text-blue-500" size={24} />
                    GROK
                </Link>

                <div className="flex items-center gap-4">
                    {/* Privacy Badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 glass-panel border-green-500/30 text-xs">
                        <Shield size={14} className="text-green-400" />
                        <span className="text-green-400">Privacy-First</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">Local-Only</span>
                    </div>

                    <ThemeToggle />
                    <NotificationCenter />
                </div>
            </nav>

            {/* Main Layout with Sidebar */}
            <div className="flex flex-grow overflow-hidden">
                <UnifiedSidebar />
                <main className="flex-grow overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default WorkspaceLayout;
