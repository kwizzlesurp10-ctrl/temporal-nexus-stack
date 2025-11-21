import React, { createContext, useContext, useState, useEffect } from 'react';

const CollaborationContext = createContext();

export const useCollaboration = () => {
    const context = useContext(CollaborationContext);
    if (!context) {
        throw new Error('useCollaboration must be used within CollaborationProvider');
    }
    return context;
};

export const CollaborationProvider = ({ children }) => {
    const [activeUsers, setActiveUsers] = useState([
        { id: 1, name: 'You', color: '#3B82F6', cursor: { line: 5, col: 12 }, status: 'active' },
        { id: 2, name: 'Alice_42', color: '#EC4899', cursor: { line: 12, col: 8 }, status: 'active' },
        { id: 3, name: 'DevMaster', color: '#10B981', cursor: { line: 8, col: 15 }, status: 'idle' }
    ]);

    const [messages, setMessages] = useState([
        { id: 1, userId: 2, text: "Working on the optimization you mentioned.", timestamp: Date.now() - 300000 },
        { id: 2, userId: 3, text: "Nice! Let me review when you're done.", timestamp: Date.now() - 240000 }
    ]);

    const [activities, setActivities] = useState([
        { id: 1, userId: 2, action: 'Editing App.jsx', timestamp: Date.now() - 120000 },
        { id: 2, userId: 3, action: 'Committed changes', timestamp: Date.now() - 300000 }
    ]);

    const addMessage = (message) => {
        setMessages(prev => [...prev, { ...message, id: Date.now(), timestamp: Date.now() }]);
    };

    const addActivity = (activity) => {
        setActivities(prev => [{ ...activity, id: Date.now(), timestamp: Date.now() }, ...prev].slice(0, 10));
    };

    const updateUserCursor = (userId, cursor) => {
        setActiveUsers(prev => prev.map(user =>
            user.id === userId ? { ...user, cursor } : user
        ));
    };

    return (
        <CollaborationContext.Provider value={{
            activeUsers,
            messages,
            activities,
            addMessage,
            addActivity,
            updateUserCursor
        }}>
            {children}
        </CollaborationContext.Provider>
    );
};
