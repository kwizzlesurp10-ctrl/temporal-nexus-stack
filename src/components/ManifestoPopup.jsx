import React, { useState, useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ManifestoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenManifesto = localStorage.getItem('hasSeenManifesto');
        if (!hasSeenManifesto) {
            setTimeout(() => setIsVisible(true), 3000);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenManifesto', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        onClick={handleClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl glass-panel border-blue-500/50 z-50 p-8"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="text-blue-400" size={32} />
                            <h2 className="text-3xl font-bold">Welcome to Grok</h2>
                        </div>

                        <div className="space-y-4 text-gray-300 mb-6">
                            <p className="text-lg">
                                This platform is built on three core principles:
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <div>
                                        <strong className="text-white">Truth Maximization:</strong> We prioritize accuracy and reality over comfort.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">•</span>
                                    <div>
                                        <strong className="text-white">Privacy-First:</strong> Your data is yours. Local-first, encrypted, transparent.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-pink-400 mt-1">•</span>
                                    <div>
                                        <strong className="text-white">Authentic Expression:</strong> Build and share without censorship or algorithmic bias.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <Link
                                to="/manifesto"
                                onClick={handleClose}
                                className="btn-primary flex-1 text-center no-underline"
                            >
                                Read Full Manifesto
                            </Link>
                            <button
                                onClick={handleClose}
                                className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition font-mono"
                            >
                                I Understand
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ManifestoPopup;
