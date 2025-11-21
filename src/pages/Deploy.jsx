import React from 'react';
import { Shield, Upload, Server } from 'lucide-react';

const Deploy = () => {
    return (
        <div className="container py-20">
            <h1 className="text-4xl font-bold mb-8">Secure Hosting</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-panel p-8 flex flex-col items-center text-center justify-center h-96 border-dashed border-2 border-white/20 hover:border-blue-500/50 transition cursor-pointer group">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <Upload size={40} className="text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Deploy Project</h2>
                    <p className="text-gray-400 mb-6">Drag and drop your build folder here or connect via CLI.</p>
                    <button className="btn-primary">Select Files</button>
                </div>

                <div className="space-y-4">
                    <div className="glass-panel p-6 flex items-center gap-4">
                        <Server className="text-green-400" />
                        <div>
                            <h3 className="font-bold">US-East-1 (Active)</h3>
                            <p className="text-sm text-gray-400">Uptime: 99.99% • Latency: 24ms</p>
                        </div>
                    </div>
                    <div className="glass-panel p-6 flex items-center gap-4">
                        <Shield className="text-purple-400" />
                        <div>
                            <h3 className="font-bold">Security Status</h3>
                            <p className="text-sm text-gray-400">End-to-End Encryption: Enabled</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deploy;
