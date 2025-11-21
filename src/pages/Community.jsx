import React, { useState } from 'react';
import { Users, MessageCircle, Globe, Star, GitFork, Search, TrendingUp, Award, Lock } from 'lucide-react';

const Community = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            name: 'DecentralChat',
            author: 'TruthSeeker_99',
            description: 'End-to-end encrypted chat built on Web3 principles. No servers, no tracking.',
            tags: ['privacy', 'e2e-encryption', 'p2p'],
            stars: 142,
            forks: 28,
            truthScore: 98,
            language: 'JavaScript',
            isPrivate: false,
            whyCool: 'Revolutionary approach to private messaging without central servers'
        },
        {
            id: 2,
            name: 'FactLayer',
            author: 'DataVeritas',
            description: 'Annotate code with verifiable claims. Community-driven truth checking for open source.',
            tags: ['fact-checking', 'transparency', 'ai'],
            stars: 89,
            forks: 15,
            truthScore: 95,
            language: 'Python',
            isPrivate: false,
            whyCool: 'Brings scientific rigor to code documentation and claims'
        },
        {
            id: 3,
            name: 'LocalFirstDB',
            author: 'PrivacyFirst',
            description: 'Database that keeps your data on-device by default. Sync only when you choose.',
            tags: ['local-first', 'privacy', 'database'],
            stars: 256,
            forks: 42,
            truthScore: 100,
            language: 'Rust',
            isPrivate: false,
            whyCool: 'Perfect for privacy-conscious developers who want full control'
        },
        {
            id: 4,
            name: 'OpenAudit',
            author: 'Alice_42',
            description: 'Transparent audit trail system with immutable logs and cryptographic verification.',
            tags: ['security', 'audit', 'blockchain'],
            stars: 178,
            forks: 31,
            truthScore: 94,
            language: 'Go',
            isPrivate: false,
            whyCool: 'Makes organizational transparency enforceable by design'
        }
    ];

    const achievements = [
        { id: 1, name: 'Privacy Advocate', icon: '🛡️', description: 'Built 5 privacy-first projects', earned: true },
        { id: 2, name: 'Truth Maximizer', icon: '✨', description: '100% fact-check completion rate', earned: true },
        { id: 3, name: 'Open Contributor', icon: '🌟', description: 'Contributed to 10+ public projects', earned: false },
    ];

    const filteredProjects = projects.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="container py-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
                    <Users className="text-blue-500" />
                    Community Hub
                </h1>
                <p className="text-gray-400">Discover, fork, and contribute to privacy-first, truth-maximizing projects.</p>
            </div>

            {/* Search & Filter */}
            <div className="glass-panel p-4 mb-6">
                <div className="flex gap-4 flex-wrap">
                    <div className="flex-grow relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search projects, tags, or users..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 transition"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg transition ${filter === 'all' ? 'bg-blue-600' : 'bg-white/5 hover:bg-white/10'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('trending')}
                            className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${filter === 'trending' ? 'bg-blue-600' : 'bg-white/5 hover:bg-white/10'}`}
                        >
                            <TrendingUp size={16} />
                            Trending
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Projects Gallery */}
                <div className="lg:col-span-2 space-y-4">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="glass-panel p-6 hover:bg-white/5 transition cursor-pointer border border-white/10 hover:border-blue-500/50">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-xl font-bold">{project.name}</h3>
                                        {project.isPrivate && <Lock size={16} className="text-yellow-400" />}
                                    </div>
                                    <p className="text-sm text-gray-400">by {project.author}</p>
                                </div>
                                <div className="flex items-center gap-1 px-2 py-1 glass-panel border-green-500/30 text-sm">
                                    <Award className="text-green-400" size={14} />
                                    <span className="text-green-400 font-mono">{project.truthScore}</span>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-3">{project.description}</p>

                            {/* Why This is Cool */}
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3 mb-3">
                                <div className="text-xs text-blue-400 font-bold mb-1">💡 Why This is Cool</div>
                                <div className="text-sm text-gray-300">{project.whyCool}</div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-blue-400 border border-blue-500/20">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <span className="flex items-center gap-1">
                                    <Star size={14} className="text-yellow-400" /> {project.stars}
                                </span>
                                <span className="flex items-center gap-1">
                                    <GitFork size={14} /> {project.forks}
                                </span>
                                <span className="text-gray-500">•</span>
                                <span>{project.language}</span>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
                                <button className="flex-1 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition text-sm font-bold">
                                    Fork & Contribute
                                </button>
                                <button className="px-4 py-2 bg-white/5 rounded hover:bg-white/10 transition text-sm">
                                    <Star size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Your Achievements */}
                    <div className="glass-panel p-5">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Award className="text-yellow-400" size={18} />
                            Your Achievements
                        </h3>
                        <div className="space-y-3">
                            {achievements.map(achievement => (
                                <div
                                    key={achievement.id}
                                    className={`p-3 rounded-lg border ${achievement.earned
                                            ? 'bg-blue-900/20 border-blue-500/30'
                                            : 'bg-white/5 border-white/10 opacity-60'
                                        }`}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-2xl">{achievement.icon}</span>
                                        <span className="font-bold text-sm">{achievement.name}</span>
                                    </div>
                                    <p className="text-xs text-gray-400">{achievement.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="glass-panel p-5">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <MessageCircle size={18} />
                            Recent Activity
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <div className="font-bold text-pink-500">Alice_42</div>
                                <p className="text-gray-400 text-xs">Starred OpenAudit • 5m ago</p>
                            </div>
                            <div>
                                <div className="font-bold text-green-500">DevMaster</div>
                                <p className="text-gray-400 text-xs">Forked DecentralChat • 12m ago</p>
                            </div>
                            <div>
                                <div className="font-bold text-purple-500">DataVeritas</div>
                                <p className="text-gray-400 text-xs">Published FactLayer v2.0 • 1h ago</p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Metrics Info */}
                    <div className="glass-panel p-5 border-purple-500/30">
                        <h3 className="font-bold mb-2 flex items-center gap-2 text-purple-400">
                            <TrendingUp size={16} />
                            Truth Score System
                        </h3>
                        <p className="text-xs text-gray-400 mb-3">
                            Projects earn truth scores based on:
                        </p>
                        <ul className="text-xs text-gray-400 space-y-1">
                            <li>• Peer reviews & fact-checks</li>
                            <li>• Code transparency</li>
                            <li>• Community verification</li>
                            <li>• Privacy compliance</li>
                        </ul>
                    </div>

                    {/* Community Forum Link */}
                    <div className="glass-panel p-5 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30">
                        <h3 className="font-bold mb-2">Join Discussions</h3>
                        <p className="text-sm text-gray-300 mb-3">
                            Participate in Q&A, share knowledge, and connect with truth-seekers.
                        </p>
                        <button className="w-full btn-primary text-sm">
                            <MessageCircle size={16} className="inline mr-2" />
                            Open Forums
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
