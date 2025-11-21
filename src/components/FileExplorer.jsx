import React, { useState } from 'react';
import {
    ChevronRight,
    ChevronDown,
    File,
    Folder,
    FolderOpen,
    Plus,
    Search,
    FileCode,
    FilePlus
} from 'lucide-react';
import { useWorkspace } from '../contexts/WorkspaceContext';

const FileExplorer = () => {
    const { openFile } = useWorkspace();
    const [expandedFolders, setExpandedFolders] = useState(['src']);
    const [searchQuery, setSearchQuery] = useState('');

    const fileStructure = {
        name: 'grokapp',
        type: 'folder',
        children: [
            {
                name: 'src',
                type: 'folder',
                children: [
                    { name: 'App.jsx', type: 'file', path: 'src/App.jsx' },
                    { name: 'main.jsx', type: 'file', path: 'src/main.jsx' },
                    {
                        name: 'components',
                        type: 'folder',
                        children: [
                            { name: 'Layout.jsx', type: 'file', path: 'src/components/Layout.jsx' },
                            { name: 'ChatWidget.jsx', type: 'file', path: 'src/components/ChatWidget.jsx' },
                            { name: 'ThemeToggle.jsx', type: 'file', path: 'src/components/ThemeToggle.jsx' },
                        ]
                    },
                    {
                        name: 'pages',
                        type: 'folder',
                        children: [
                            { name: 'Home.jsx', type: 'file', path: 'src/pages/Home.jsx' },
                            { name: 'Coding.jsx', type: 'file', path: 'src/pages/Coding.jsx' },
                            { name: 'Community.jsx', type: 'file', path: 'src/pages/Community.jsx' },
                        ]
                    },
                    { name: 'index.css', type: 'file', path: 'src/index.css' }
                ]
            },
            { name: 'package.json', type: 'file', path: 'package.json' },
            { name: 'vite.config.js', type: 'file', path: 'vite.config.js' },
        ]
    };

    const toggleFolder = (folderPath) => {
        setExpandedFolders(prev =>
            prev.includes(folderPath)
                ? prev.filter(p => p !== folderPath)
                : [...prev, folderPath]
        );
    };

    const renderItem = (item, path = '') => {
        const fullPath = path ? `${path}/${item.name}` : item.name;
        const isExpanded = expandedFolders.includes(fullPath);

        if (item.type === 'folder') {
            return (
                <div key={fullPath}>
                    <div
                        className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 cursor-pointer rounded text-sm group"
                        onClick={() => toggleFolder(fullPath)}
                    >
                        {isExpanded ? (
                            <ChevronDown size={14} className="text-gray-400" />
                        ) : (
                            <ChevronRight size={14} className="text-gray-400" />
                        )}
                        {isExpanded ? (
                            <FolderOpen size={14} className="text-yellow-400" />
                        ) : (
                            <Folder size={14} className="text-yellow-400" />
                        )}
                        <span className="flex-grow">{item.name}</span>
                        <Plus size={12} className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white" />
                    </div>
                    {isExpanded && item.children && (
                        <div className="ml-4 border-l border-white/5">
                            {item.children.map(child => renderItem(child, fullPath))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div
                key={fullPath}
                className="flex items-center gap-2 px-2 py-1.5 pl-6 hover:bg-white/5 cursor-pointer rounded text-sm"
                onClick={() => openFile({ name: item.name, path: item.path })}
            >
                <FileCode size={14} className="text-blue-400" />
                <span className="flex-grow">{item.name}</span>
            </div>
        );
    };

    return (
        <div className="h-full flex flex-col bg-black/20">
            {/* Header */}
            <div className="p-3 border-b border-white/10 flex items-center justify-between">
                <span className="font-bold text-sm">EXPLORER</span>
                <div className="flex gap-1">
                    <button className="p-1 hover:bg-white/10 rounded" title="New File">
                        <FilePlus size={14} />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded" title="New Folder">
                        <Plus size={14} />
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="p-2 border-b border-white/10">
                <div className="relative">
                    <Search size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search files..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded pl-8 pr-2 py-1.5 text-xs focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>

            {/* File Tree */}
            <div className="flex-grow overflow-y-auto p-2 font-mono text-sm">
                {renderItem(fileStructure)}
            </div>
        </div>
    );
};

export default FileExplorer;
