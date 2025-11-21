import React from 'react';

const Manifesto = () => {
    return (
        <div className="container py-20 max-w-3xl">
            <h1 className="text-5xl font-black mb-8 glitch" data-text="THE MANIFESTO">THE MANIFESTO</h1>
            <div className="glass-panel p-8 space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                    <strong className="text-white">Truth is not a destination. It is a process.</strong>
                </p>
                <p>
                    In a world of curated feeds and algorithmic biases, we choose the raw, the unfiltered, and the real.
                    We believe that technology should empower the individual, not constrain them.
                </p>
                <p>
                    <strong>1. Maximize Truth:</strong> We prioritize accuracy and reality over comfort and consensus.
                </p>
                <p>
                    <strong>2. Authentic Self-Expression:</strong> Your code, your art, your voice—unshackled by censorship.
                </p>
                <p>
                    <strong>3. Build for the Future:</strong> We provide the tools; you build the new world.
                </p>
                <div className="pt-8 border-t border-white/10">
                    <p className="font-mono text-blue-400"> // END_TRANSMISSION</p>
                </div>
            </div>
        </div>
    );
};

export default Manifesto;
