import React, { createContext, useContext, useState, useEffect } from 'react';

const WorkspaceContext = createContext();

export const useWorkspace = () => {
    const context = useContext(WorkspaceContext);
    if (!context) {
        throw new Error('useWorkspace must be used within WorkspaceProvider');
    }
    return context;
};

export const WorkspaceProvider = ({ children }) => {
    const [openFiles, setOpenFiles] = useState([
        { id: 1, name: 'App.jsx', path: 'src/App.jsx', content: '', active: true },
    ]);

    const [activeFileId, setActiveFileId] = useState(1);

    const [panelSizes, setPanelSizes] = useState(() => {
        const saved = localStorage.getItem('panelSizes');
        return saved ? JSON.parse(saved) : {
            sidebar: 250,
            editor: 60,
            rightPanel: 350
        };
    });

    const [panelVisibility, setPanelVisibility] = useState({
        sidebar: true,
        terminal: true,
        chat: true,
        activity: true
    });

    useEffect(() => {
        localStorage.setItem('panelSizes', JSON.stringify(panelSizes));
    }, [panelSizes]);

    const openFile = (file) => {
        const existing = openFiles.find(f => f.path === file.path);
        if (existing) {
            setActiveFileId(existing.id);
        } else {
            const newFile = { ...file, id: Date.now(), active: true };
            setOpenFiles(prev => [...prev, newFile]);
            setActiveFileId(newFile.id);
        }
    };

    const closeFile = (fileId) => {
        setOpenFiles(prev => prev.filter(f => f.id !== fileId));
        if (activeFileId === fileId && openFiles.length > 1) {
            setActiveFileId(openFiles[0].id);
        }
    };

    const updatePanelSize = (panel, size) => {
        setPanelSizes(prev => ({ ...prev, [panel]: size }));
    };

    const togglePanel = (panel) => {
        setPanelVisibility(prev => ({ ...prev, [panel]: !prev[panel] }));
    };

    return (
        <WorkspaceContext.Provider value={{
            openFiles,
            activeFileId,
            panelSizes,
            panelVisibility,
            openFile,
            closeFile,
            setActiveFileId,
            updatePanelSize,
            togglePanel
        }}>
            {children}
        </WorkspaceContext.Provider>
    );
};
