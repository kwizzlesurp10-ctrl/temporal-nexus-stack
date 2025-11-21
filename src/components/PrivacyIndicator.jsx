import React, { useState } from 'react';
import { Shield, Lock, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyIndicator = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [privacyMode, setPrivacyMode] = useState({
        localOnly: true,
        encrypted: true,
        telemetry: false,
        anonymous: false
    });

    return (
        <div className="fixed bottom-8 left-8 z-50">
            <motion.div
                initial={false}
                animate={{ width: isExpanded ? 300 : 50 }}
                className="glass-panel border-green-500/50"
            >
                <AnimatePresence>
                    {isExpanded ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-4"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-sm flex items-center gap-2">
                                    <Shield className="text-green-400" size={16} />
                                    Privacy Status
                                </h3>
                                <button onClick={() => setIsExpanded(false)} className="text-gray-400 hover:text-white">
                                    ×
                                </button>
                            </div>

                            <div className="space-y-3 text-xs">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        <Lock size={14} className="text-green-400" />
                                        Local-Only Mode
                                    </span>
                                    <input
                                        type="checkbox"
                                        checked={privacyMode.localOnly}
                                        onChange={(e) => setPrivacyMode({ ...privacyMode, localOnly: e.target.checked })}
                                        className="w-4 h-4"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        <Shield size={14} className="text-blue-400" />
                                        End-to-End Encrypted
                                    </span>
                                    <input
                                        type="checkbox"
                                        checked={privacyMode.encrypted}
                                        onChange={(e) => setPrivacyMode({ ...privacyMode, encrypted: e.target.checked })}
                                        className="w-4 h-4"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        {privacyMode.telemetry ? <Eye size={14} className="text-yellow-400" /> : <EyeOff size={14} className="text-gray-400" />}
                                        Telemetry
                                    </span>
                                    <input
                                        type="checkbox"
                                        checked={privacyMode.telemetry}
                                        onChange={(e) => setPrivacyMode({ ...privacyMode, telemetry: e.target.checked })}
                                        className="w-4 h-4"
                                    />
                                </div>

                                <div className="pt-3 border-t border-white/10 text-green-400">
                                    ✓ No data sent to cloud
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="w-full h-full flex items-center justify-center p-3 hover:bg-white/5 transition"
                        >
                            <Shield className="text-green-400" size={20} />
                        </button>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default PrivacyIndicator;
