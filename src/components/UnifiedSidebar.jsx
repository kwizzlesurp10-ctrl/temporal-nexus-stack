import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Code, Music, Users, Settings } from 'lucide-react';

const UnifiedSidebar = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: Home, label: 'HOME' },
        { path: '/coding', icon: Code, label: 'BUILD' },
        { path: '/entertainment', icon: Music, label: 'PLAY' },
        { path: '/community', icon: Users, label: 'CONNECT' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="w-16 h-full glass-panel border-r border-white/10 flex flex-col items-center py-4">
            {/* Logo */}
            <Link to="/" className="mb-8 text-2xl font-black text-blue-500">
                G
            </Link>

            {/* Nav Items */}
            <div className="flex-grow flex flex-col gap-2">
                {navItems.map(item => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`
              w-12 h-12 rounded-lg flex items-center justify-center transition
              ${isActive(item.path)
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }
            `}
                        title={item.label}
                    >
                        <item.icon size={20} />
                    </Link>
                ))}
            </div>

            {/* Settings at bottom */}
            <Link
                to="/privacy"
                className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition"
                title="Settings"
            >
                <Settings size={20} />
            </Link>
        </div>
    );
};

export default UnifiedSidebar;
