import React, { useState, useEffect } from 'react';
import { Code, Terminal, Users, Sparkles, FileCode, GitBranch, MessageSquare, Clock, AlertCircle } from 'lucide-react';

const Coding = () => {
    const [terminalLines, setTerminalLines] = useState([
        "> Initializing environment...",
    ]);
    const [activeUsers, setActiveUsers] = useState([
        { id: 1, name: 'You', color: '#3B82F6', cursor: { line: 5, col: 12 } },
        { id: 2, name: 'Alice_42', color: '#EC4899', cursor: { line: 12, col: 8 } },
        { id: 3, name: 'DevMaster', color: '#10B981', cursor: { line: 8, col: 15 } }
    ]);
    const [aiSuggestion, setAiSuggestion] = useState(null);
    const [showFactCheck, setShowFactCheck] = useState(false);

    useEffect(() => {
        const sequence = [
            { text: "> Loading modules...", delay: 800 },
            { text: "> Verifying dependencies...", delay: 1600 },
            { text: "> [SUCCESS] React environment ready.", delay: 2400 },
            { text: "> Collaborative session active. 3 users connected.", delay: 3200 },
        ];

        let timeouts = [];
        sequence.forEach(({ text, delay }) => {
            const timeout = setTimeout(() => {
                setTerminalLines(prev => [...prev, text]);
            }, delay);
            timeouts.push(timeout);
        });

        // Simulate AI suggestion
        setTimeout(() => {
            setAiSuggestion({
                type: 'optimization',
                message: 'Consider using useMemo for this calculation to improve performance.',
                line: 12
            });
        }, 5000);

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className="container py-6 h-[calc(100vh-80px)]">
            {/* Header with Privacy & Collaboration Status */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <Code size={28} className="text-blue-500" />
                        Collaborative Workspace
                    </h1>
                    <div className="flex items-center gap-2 glass-panel px-3 py-1 text-sm border-green-500/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400">E2E Encrypted</span>
                    </div>
                </div>

                {/* Active Users */}
                <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-400" />
                    <div className="flex -space-x-2">
                        {activeUsers.map(user => (
                            <div
                                key={user.id}
                                className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center text-xs font-bold"
                                style={{ backgroundColor: user.color }}
                                title={user.name}
                            >
                                {user.name[0]}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Editor Layout */}
            <div className="grid grid-cols-12 gap-4 h-[calc(100%-60px)]">
                {/* Left: File Explorer */}
                <div className="col-span-2 glass-panel flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-white/10 font-mono text-xs flex items-center gap-2">
                        <FileCode size={14} />
                        <span>FILES</span>
                    </div>
                    <div className="flex-grow overflow-y-auto p-2 text-sm font-mono">
                        <div className="space-y-1">
                            <div className="p-2 hover:bg-white/5 rounded cursor-pointer flex items-center gap-2">
                                <span className="text-blue-400">📁</span> src
                            </div>
                            <div className="ml-4 space-y-1">
                                <div className="p-2 hover:bg-white/5 rounded cursor-pointer flex items-center gap-2 bg-white/10">
                                    <span className="text-yellow-400">📄</span> App.jsx
                                    <span className="ml-auto text-pink-400 text-xs" title="Alice_42 is here">●</span>
                                </div>
                                <div className="p-2 hover:bg-white/5 rounded cursor-pointer flex items-center gap-2">
                                    <span className="text-yellow-400">📄</span> Home.jsx
                                </div>
                                <div className="p-2 hover:bg-white/5 rounded cursor-pointer flex items-center gap-2">
                                    <span className="text-yellow-400">📄</span> Coding.jsx
                                    <span className="ml-auto text-green-400 text-xs" title="DevMaster is here">●</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center: Code Editor */}
                <div className="col-span-7 flex flex-col gap-4">
                    {/* Editor */}
                    <div className="glass-panel flex flex-col flex-grow overflow-hidden">
                        <div className="p-2 border-b border-white/10 flex justify-between items-center">
                            <span className="font-mono text-xs">src/App.jsx</span>
                            <div className="flex gap-2 text-xs text-gray-400">
                                <button className="hover:text-white px-2 py-1 rounded hover:bg-white/5">Format</button>
                                <button className="hover:text-white px-2 py-1 rounded hover:bg-white/5">Review</button>
                                <button
                                    onClick={() => setShowFactCheck(true)}
                                    className="hover:text-white px-2 py-1 rounded hover:bg-white/5 flex items-center gap-1"
                                >
                                    <AlertCircle size={12} />
                                    Fact-Check
                                </button>
                            </div>
                        </div>
                        <div className="flex-grow p-4 font-mono text-sm overflow-y-auto relative">
                            <div className="space-y-1">
                                {[
                                    "import React from 'react';",
                                    "import { BrowserRouter as Router } from 'react-router-dom';",
                                    "",
                                    "function App() {",
                                    "  const [count, setCount] = React.useState(0);",
                                    "  ",
                                    "  // Alice_42 is editing here...",
                                    "  const handleClick = () => {",
                                    "    setCount(count + 1);",
                                    "  };",
                                    "  ",
                                    "  // AI Suggestion: Consider useMemo",
                                    "  const expensiveCalculation = () => {",
                                    "    return count * 2;",
                                    "  };",
                                    "  ",
                                    "  return (",
                                    "    <div>",
                                    "      <button onClick={handleClick}>Count: {count}</button>",
                                    "    </div>",
                                    "  );",
                                    "}",
                                ].map((line, i) => (
                                    <div key={i} className="flex group relative">
                                        <span className="w-10 text-gray-600 select-none">{i + 1}</span>
                                        <span className="flex-grow">
                                            {line}
                                            {i === 6 && (
                                                <span className="ml-2 inline-flex items-center" style={{ color: activeUsers[1].color }}>
                                                    <span className="w-0.5 h-4 bg-current animate-pulse"></span>
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* AI Suggestion Overlay */}
                            {aiSuggestion && (
                                <div className="absolute top-64 left-12 glass-panel p-3 max-w-md border-yellow-500/50 text-sm">
                                    <div className="flex items-start gap-2">
                                        <Sparkles size={16} className="text-yellow-400 mt-0.5" />
                                        <div>
                                            <div className="font-bold text-yellow-400 mb-1">AI Suggestion</div>
                                            <p className="text-gray-300">{aiSuggestion.message}</p>
                                            <div className="flex gap-2 mt-2">
                                                <button className="text-xs px-2 py-1 bg-yellow-600 rounded hover:bg-yellow-500">Accept</button>
                                                <button className="text-xs px-2 py-1 bg-white/5 rounded hover:bg-white/10" onClick={() => setAiSuggestion(null)}>Dismiss</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Terminal */}
                    <div className="glass-panel flex flex-col h-40">
                        <div className="p-2 border-b border-white/10 flex items-center gap-2">
                            <Terminal size={14} />
                            <span className="font-mono text-xs">TERMINAL</span>
                        </div>
                        <div className="p-4 font-mono text-xs text-green-400 overflow-y-auto flex-grow">
                            {terminalLines.map((line, index) => (
                                <div key={index} className="mb-1">{line}</div>
                            ))}
                            <div className="mt-2 animate-pulse">_</div>
                        </div>
                    </div>
                </div>

                {/* Right: Activity & Chat */}
                <div className="col-span-3 flex flex-col gap-4">
                    {/* Activity Feed */}
                    <div className="glass-panel flex flex-col h-64 overflow-hidden">
                        <div className="p-3 border-b border-white/10 font-mono text-xs flex items-center gap-2">
                            <Clock size={14} />
                            <span>ACTIVITY</span>
                        </div>
                        <div className="flex-grow overflow-y-auto p-3 text-xs space-y-2">
                            <div className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: activeUsers[1].color }}></div>
                                <div>
                                    <div className="font-bold" style={{ color: activeUsers[1].color }}>Alice_42</div>
                                    <div className="text-gray-400 text-xs">Editing App.jsx • 2m ago</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: activeUsers[2].color }}></div>
                                <div>
                                    <div className="font-bold" style={{ color: activeUsers[2].color }}>DevMaster</div>
                                    <div className="text-gray-400 text-xs">Committed changes • 5m ago</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Collaboration Chat */}
                    <div className="glass-panel flex flex-col flex-grow overflow-hidden">
                        <div className="p-3 border-b border-white/10 font-mono text-xs flex items-center gap-2">
                            <MessageSquare size={14} />
                            <span>TEAM CHAT</span>
                        </div>
                        <div className="flex-grow overflow-y-auto p-3 text-sm space-y-3">
                            <div>
                                <div className="font-bold text-pink-400 text-xs">Alice_42</div>
                                <div className="text-gray-300 text-xs mt-1">Working on the optimization you mentioned.</div>
                            </div>
                            <div>
                                <div className="font-bold text-green-400 text-xs">DevMaster</div>
                                <div className="text-gray-300 text-xs mt-1">Nice! Let me review when you're done.</div>
                            </div>
                        </div>
                        <div className="p-3 border-t border-white/10">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
                            />
                        </div>
                    </div>

                    {/* Version History */}
                    <div className="glass-panel p-3">
                        <div className="font-mono text-xs flex items-center gap-2 mb-2">
                            <GitBranch size={14} />
                            <span>VERSION HISTORY</span>
                        </div>
                        <div className="text-xs space-y-1">
                            <div className="p-2 bg-white/5 rounded cursor-pointer hover:bg-white/10">
                                <div className="font-bold">feat: add user presence</div>
                                <div className="text-gray-400 text-xs">5 minutes ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fact-Check Modal */}
            {showFactCheck && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setShowFactCheck(false)}>
                    <div className="glass-panel p-6 max-w-2xl w-full border-blue-500/50" onClick={e => e.stopPropagation()}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <AlertCircle className="text-blue-400" />
                            Truth-Maximizing Review
                        </h3>
                        <div className="space-y-4 text-sm">
                            <div>
                                <label className="block text-gray-400 mb-2">Rationale for this change:</label>
                                <textarea
                                    className="w-full bg-white/5 border border-white/10 rounded p-3 focus:outline-none focus:border-blue-500"
                                    rows="3"
                                    placeholder="Explain why this change is necessary..."
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Sources / References (optional):</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="flex gap-3">
                                <button className="btn-primary flex-1">Submit for Review</button>
                                <button className="px-4 py-2 border border-white/20 rounded hover:bg-white/5" onClick={() => setShowFactCheck(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Coding;
