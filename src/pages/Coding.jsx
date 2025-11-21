import React, { useState, useEffect } from 'react';
import { Terminal, Play, Share2, Settings } from 'lucide-react';

const Coding = () => {
    const [terminalLines, setTerminalLines] = useState([
        "> Initializing environment...",
    ]);

    useEffect(() => {
        const sequence = [
            { text: "> Loading modules...", delay: 800 },
            { text: "> Verifying dependencies...", delay: 1600 },
            { text: "> [SUCCESS] React environment ready.", delay: 2400 },
            { text: "> Waiting for user input...", delay: 3200 },
        ];

        let timeouts = [];

        sequence.forEach(({ text, delay }) => {
            const timeout = setTimeout(() => {
                setTerminalLines(prev => [...prev, text]);
            }, delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className="container py-10 h-[calc(100vh-80px)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-3xl font-bold mb-2">DevEnvironment_v1</h2>
                    <p className="text-gray-400 font-mono text-sm">Session ID: 8f92-x99a-22b1</p>
                </div>
                <div className="flex gap-3">
                    <button className="p-2 hover:bg-white/10 rounded transition"><Share2 size={20} /></button>
                    <button className="p-2 hover:bg-white/10 rounded transition"><Settings size={20} /></button>
                    <button className="btn-primary flex items-center gap-2 py-2 px-4">
                        <Play size={16} /> Run
                    </button>
                </div>
            </div>

            <div className="flex-grow grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-2 glass-panel p-4 font-mono text-sm text-gray-400">
                    <div className="mb-4 text-white font-bold">EXPLORER</div>
                    <ul className="space-y-2">
                        <li className="text-blue-400 cursor-pointer hover:text-blue-300 transition">src/</li>
                        <li className="pl-4 cursor-pointer hover:text-white transition">App.jsx</li>
                        <li className="pl-4 cursor-pointer hover:text-white transition">index.css</li>
                        <li className="pl-4 cursor-pointer hover:text-white transition">utils.js</li>
                        <li className="cursor-pointer hover:text-white transition">package.json</li>
                        <li className="cursor-pointer hover:text-white transition">README.md</li>
                    </ul>
                </div>

                {/* Editor */}
                <div className="col-span-7 glass-panel p-0 overflow-hidden flex flex-col">
                    <div className="bg-black/40 p-2 flex gap-2 text-sm border-b border-white/10">
                        <span className="px-3 py-1 bg-white/10 rounded text-white border-t-2 border-blue-500">App.jsx</span>
                        <span className="px-3 py-1 text-gray-500 hover:text-gray-300 cursor-pointer transition">index.css</span>
                    </div>
                    <div className="p-4 font-mono text-sm text-gray-300 leading-relaxed relative">
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-black/20 border-r border-white/5 text-right pr-2 pt-4 text-gray-600 select-none">
                            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8
                        </div>
                        <div className="pl-12">
                            <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;<br />
                            <br />
                            <span className="text-purple-400">const</span> <span className="text-yellow-400">App</span> = () ={'>'} {'{'}<br />
                            &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-red-400">div</span> <span className="text-blue-400">className</span>=<span className="text-green-400">"app"</span>{'>'}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-red-400">h1</span>{'>'}Hello World{'</'}<span className="text-red-400">h1</span>{'>'}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className="text-red-400">div</span>{'>'}<br />
                            &nbsp;&nbsp;);<br />
                            {'}'};<span className="inline-block w-2 h-4 bg-blue-500 ml-1 cursor-blink"></span>
                        </div>
                    </div>
                </div>

                {/* Terminal/Output */}
                <div className="col-span-3 glass-panel flex flex-col">
                    <div className="bg-black/40 p-2 text-sm font-bold border-b border-white/10 flex gap-2">
                        <Terminal size={16} /> TERMINAL
                    </div>
                    <div className="p-4 font-mono text-xs text-green-400">
                        {terminalLines.map((line, index) => (
                            <div key={index} className="mb-1">{line}</div>
                        ))}
                        <div className="mt-2 animate-pulse">_</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coding;
