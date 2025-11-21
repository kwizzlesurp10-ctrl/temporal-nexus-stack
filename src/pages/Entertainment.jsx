import React from 'react';
import { Play, Calendar, Mic2, Heart } from 'lucide-react';

const Entertainment = () => {
    return (
        <div className="container py-10">
            <h1 className="text-4xl font-bold mb-8">Findable Entertainment</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Music Section */}
                <section>
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Mic2 className="text-pink-500" /> Trending Music
                        </h2>
                        <span className="text-sm text-blue-400 cursor-pointer hover:underline">View All</span>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="glass-panel p-4 flex items-center gap-4 hover:bg-white/5 transition group cursor-pointer">
                                <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center group-hover:bg-pink-500/20 transition relative overflow-hidden">
                                    <Play className="text-white group-hover:text-pink-500 z-10" />
                                    {/* Visualizer Overlay on Hover */}
                                    <div className="absolute inset-0 flex items-end justify-center gap-[2px] opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                                        {[...Array(5)].map((_, idx) => (
                                            <div
                                                key={idx}
                                                className="visualizer-bar bg-pink-500 w-1"
                                                style={{ animationDelay: `${idx * 0.1}s` }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold group-hover:text-pink-400 transition">Neon Nights Vol. {i}</h3>
                                    <p className="text-sm text-gray-400">CyberSynth Collective</p>
                                </div>
                                <div className="flex items-center gap-4 text-gray-500">
                                    {/* Mini Visualizer */}
                                    <div className="flex items-end h-4 gap-[2px]">
                                        {[...Array(4)].map((_, idx) => (
                                            <div
                                                key={idx}
                                                className="visualizer-bar bg-blue-500 w-[2px]"
                                                style={{ animationDelay: `${idx * 0.15}s`, height: '50%' }}
                                            ></div>
                                        ))}
                                    </div>
                                    <span className="text-xs">3:45</span>
                                    <Heart size={18} className="hover:text-red-500 cursor-pointer transition" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Events Section */}
                <section>
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Calendar className="text-purple-500" /> Upcoming Events
                        </h2>
                        <span className="text-sm text-blue-400 cursor-pointer hover:underline">Filter</span>
                    </div>

                    <div className="grid gap-4">
                        {[1, 2].map((i) => (
                            <div key={i} className="glass-panel p-0 overflow-hidden group hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition duration-500">
                                <div className="h-32 bg-gradient-to-r from-purple-900 to-blue-900 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                                        <span className="bg-blue-500 text-xs font-bold px-2 py-1 rounded uppercase animate-pulse">Live</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg group-hover:text-purple-400 transition">Underground Code Jam {2024 + i}</h3>
                                        <div className="text-center bg-white/10 rounded p-1 px-2 border border-white/5">
                                            <div className="text-xs text-gray-400">NOV</div>
                                            <div className="font-bold">{10 + i}</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-4">
                                        Join 500+ developers for a night of hacking, music, and pure creation.
                                    </p>
                                    <button className="w-full py-2 border border-white/10 rounded hover:bg-white/5 transition text-sm font-bold uppercase tracking-widest hover:text-purple-400 hover:border-purple-500/50">
                                        Get Tickets
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Entertainment;
