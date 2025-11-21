import React from 'react';

const Privacy = () => {
    return (
        <div className="container py-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy & Terms</h1>
            <div className="glass-panel p-8 space-y-6 text-gray-300">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Data Ownership</h2>
                    <p>You own your data. Period. We do not sell, trade, or analyze your personal information for profit.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Freedom of Speech</h2>
                    <p>The platform is designed to be censorship-resistant. Content is moderated only for illegal activity, not for opinion.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Transparency</h2>
                    <p>Our algorithms are open-source. You can verify exactly how content is surfaced to you.</p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;
