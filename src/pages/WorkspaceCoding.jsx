import React, { useState } from 'react';
import { Code, Terminal as TerminalIcon, Users, Sparkles, MessageSquare, Clock, Shield, X } from 'lucide-react';
import { useCollaboration } from '../contexts/CollaborationContext';
import { useWorkspace } from '../contexts/WorkspaceContext';
import { useNotifications } from '../contexts/NotificationContext';
import FileExplorer from '../components/FileExplorer';
import ResizablePanel from '../components/ResizablePanel';

const WorkspaceCoding = () => {
    const { activeUsers, messages, activities, addMessage } = useCollaboration();
    const { openFiles, activeFileId, panelVisibility, togglePanel } = useWorkspace();
    const { addNotification } = useNotifications();
    const [chatInput, setChatInput] = useState('');
    const [terminalLines] = useState([
        "> Initializing environment...",
        "> Loading modules...",
        "> [SUCCESS] React environment ready.",
        "> Collaborative session active. 3 users connected.",
    ]);

    const handleSendMessage = () => {
        if (!chatInput.trim()) return;
        addMessage({ userId: 1, text: chatInput });
        setChatInput('');
        addNotification({
            type: 'message',
            title: 'Message Sent',
            message: chatInput
        });
    };

    const activeFile = openFiles.find(f => f.id === activeFileId);

    return (
        <div className="h-[calc(100vh-60px)] flex">
            {/* Left: File Explorer */}
            {panelVisibility.sidebar && (
                <ResizablePanel
                    direction="horizontal"
                    initialSize={250}
                    minSize={200}
                    maxSize={400}
                    className="border-r border-white/10"
                >
                    <FileExplorer />
                </ResizablePanel>
            )}

            {/* Center: Editor + Terminal */}
            <div className="flex-grow flex flex-col">
                {/* Top Bar with File Tabs */}
                <div className="h-10 bg-black/40 border-b border-white/10 flex items-center px-2 gap-2">
                    {openFiles.map(file => (
                        <div
                            key={file.id}
                            className={`
                px-3 py-1.5 rounded-t flex items-center gap-2 text-sm cursor-pointer
                ${file.id === activeFileId ? 'bg-black/60 border-t border-x border-white/10' : 'hover:bg-white/5'}
              `}
                        >
                            <Code size={14} />
                            {file.name}
                        </div>
                    ))}
                </div>

                {/* Editor */}
                <div className="flex-grow flex flex-col">
                    <ResizablePanel
                        direction="vertical"
                        initialSize={400}
                        minSize={250}
                        maxSize={700}
                        className="flex-grow"
                    >
                        <div className="h-full glass-panel flex flex-col">
                            <div className="p-2 border-b border-white/10 flex justify-between items-center bg-black/20">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs">{activeFile?.name || 'No file open'}</span>
                                    <div className="flex items-center gap-2 px-2 py-0.5 glass-panel border-green-500/30 text-xs">
                                        <Shield size={12} className="text-green-400" />
                                        <span className="text-green-400">E2E Encrypted</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {activeUsers.slice(0, 3).map(user => (
                                        <div
                                            key={user.id}
                                            className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-xs font-bold"
                                            style={{ backgroundColor: user.color }}
                                            title={user.name}
                                        >
                                            {user.name[0]}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Code Editor Mockup */}
                            <div className="flex-grow p-4 font-mono text-sm overflow-y-auto bg-black/20">
                                <div className="space-y-1">
                                    {[
                                        "import React from 'react';",
                                        "import { BrowserRouter as Router } from 'react-router-dom';",
                                        "",
                                        "function App() {",
                                        "  const [count, setCount] = React.useState(0);",
                                        "  ",
                                        "  // Collaborative editing - Alice_42 is here",
                                        "  const handleClick = () => {",
                                        "    setCount(count + 1);",
                                        "  };",
                                        "  ",
                                        "  return (",
                                        "    <div>",
                                        "      <button onClick={handleClick}>Count: {count}</button>",
                                        "    </div>",
                                        "  );",
                                        "}",
                                    ].map((line, i) => (
                                        <div key={i} className="flex">
                                            <span className="w-10 text-gray-600 select-none text-right pr-4">{i + 1}</span>
                                            <span>{line}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ResizablePanel>

                    {/* Terminal */}
                    {panelVisibility.terminal && (
                        <div className="h-48 glass-panel border-t border-white/10 flex flex-col bg-black/40">
                            <div className="p-2 border-b border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <TerminalIcon size={14} />
                                    <span className="font-mono text-xs">TERMINAL</span>
                                </div>
                                <button onClick={() => togglePanel('terminal')} className="text-gray-400 hover:text-white">
                                    <X size={14} />
                                </button>
                            </div>
                            <div className="p-4 font-mono text-xs text-green-400 overflow-y-auto flex-grow">
                                {terminalLines.map((line, index) => (
                                    <div key={index} className="mb-1">{line}</div>
                                ))}
                                <div className="mt-2 animate-pulse">_</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Right: Activity + Chat Panel */}
            <ResizablePanel
                direction="horizontal"
                initialSize={350}
                minSize={300}
                maxSize={500}
                className="border-l border-white/10"
            >
                <div className="h-full flex flex-col bg-black/20">
                    {/* Tabs */}
                    <div className="flex border-b border-white/10">
                        <button className="flex-1 px-4 py-2 text-sm font-bold border-b-2 border-blue-500 bg-white/5">
                            <MessageSquare size={14} className="inline mr-2" />
                            Chat
                        </button>
                        <button className="flex-1 px-4 py-2 text-sm text-gray-400 hover:bg-white/5">
                            <Clock size={14} className="inline mr-2" />
                            Activity
                        </button>
                        <button className="flex-1 px-4 py-2 text-sm text-gray-400 hover:bg-white/5">
                            <Sparkles size={14} className="inline mr-2" />
                            AI
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-grow overflow-y-auto p-4 space-y-3">
                        {messages.map(msg => {
                            const user = activeUsers.find(u => u.id === msg.userId);
                            return (
                                <div key={msg.id}>
                                    <div className="font-bold text-xs mb-1" style={{ color: user?.color }}>
                                        {user?.name}
                                    </div>
                                    <div className="text-sm text-gray-300">{msg.text}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                        {new Date(msg.timestamp).toLocaleTimeString()}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Chat Input */}
                    <div className="p-3 border-t border-white/10">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Type a message..."
                                className="flex-grow bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 text-sm font-bold"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </ResizablePanel>
        </div>
    );
};

export default WorkspaceCoding;
