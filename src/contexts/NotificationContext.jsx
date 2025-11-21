import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within NotificationProvider');
    }
    return context;
};

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (notification) => {
        const id = Date.now();
        setNotifications(prev => [...prev, { ...notification, id, timestamp: Date.now(), read: false }]);

        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            removeNotification(id);
        }, 5000);
    };

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const markAsRead = (id) => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, read: true } : n
        ));
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    return (
        <NotificationContext.Provider value={{
            notifications,
            addNotification,
            removeNotification,
            markAsRead,
            markAllAsRead
        }}>
            {children}
        </NotificationContext.Provider>
    );
};
