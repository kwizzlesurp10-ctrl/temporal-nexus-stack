import React, { useState } from 'react';
import { Bell, X, GitCommit, MessageCircle, Shield, AlertCircle } from 'lucide-react';
import { useNotifications } from '../contexts/NotificationContext';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationCenter = () => {
    const { notifications, removeNotification, markAsRead, markAllAsRead } = useNotifications();
    const [isOpen, setIsOpen] = useState(false);

    const unreadCount = notifications.filter(n => !n.read).length;

    const getIcon = (type) => {
        switch (type) {
            case 'commit': return <GitCommit size={16} className="text-blue-400" />;
            case 'message': return <MessageCircle size={16} className="text-green-400" />;
            case 'security': return <Shield size={16} className="text-yellow-400" />;
            default: return <AlertCircle size={16} className="text-purple-400" />;
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
                <Bell size={18} />
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
                        {unreadCount}
                    </span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-12 w-96 glass-panel border border-white/20 shadow-2xl z-50"
                    >
                        <div className="p-4 border-b border-white/10 flex justify-between items-center">
                            <h3 className="font-bold flex items-center gap-2">
                                <Bell size={18} />
                                Notifications
                            </h3>
                            {unreadCount > 0 && (
                                <button
                                    onClick={markAllAsRead}
                                    className="text-xs text-blue-400 hover:text-blue-300"
                                >
                                    Mark all read
                                </button>
                            )}
                        </div>

                        <div className="max-h-96 overflow-y-auto">
                            {notifications.length === 0 ? (
                                <div className="p-8 text-center text-gray-400">
                                    <Bell size={32} className="mx-auto mb-2 opacity-50" />
                                    <p>No notifications</p>
                                </div>
                            ) : (
                                <div className="divide-y divide-white/10">
                                    {notifications.map(notification => (
                                        <div
                                            key={notification.id}
                                            className={`p-4 hover:bg-white/5 transition cursor-pointer ${!notification.read ? 'bg-blue-900/10' : ''
                                                }`}
                                            onClick={() => markAsRead(notification.id)}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5">{getIcon(notification.type)}</div>
                                                <div className="flex-grow">
                                                    <div className="font-bold text-sm mb-1">{notification.title}</div>
                                                    <div className="text-xs text-gray-400">{notification.message}</div>
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        {new Date(notification.timestamp).toLocaleTimeString()}
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeNotification(notification.id);
                                                    }}
                                                    className="text-gray-500 hover:text-white"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotificationCenter;
