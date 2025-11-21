import React from 'react';
import { Users, MessageCircle, Globe } from 'lucide-react';

const Community = () => {
    return (
        <div className="container py-20">
            <h1 className="text-4xl font-bold mb-8">Community Hub</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="glass-panel p-6 hover:bg-white/5 transition cursor-pointer">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                            <div>
                                <h3 className="font-bold">TruthSeeker_{i}99</h3>
                                <p className="text-xs text-gray-400">Online now</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-4">
                            Just deployed a new decentralized chat node. Check it out in the /deploy section! #web3 #truth
                        </p>
                        <div className="flex gap-4 text-gray-500 text-sm">
                            <span className="flex items-center gap-1 hover:text-white"><MessageCircle size={14} /> 24</span>
                            <span className="flex items-center gap-1 hover:text-white"><Globe size={14} /> Share</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
