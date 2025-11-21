import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Code, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 - distance / 1500})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none"
            />

            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center justify-center relative z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent-glow)_0%,_transparent_70%)] opacity-10"></div>

                <div className="container text-center">
                    <h1 className="mb-6 text-7xl font-black tracking-tighter animate-float glitch" data-text="UNFILTERED. UNAPOLOGETIC. REAL.">
                        UNFILTERED.<br />
                        UNAPOLOGETIC.<br />
                        <span className="text-blue-500">REAL.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 backdrop-blur-sm">
                        The platform for authentic self-expression and truth maximization.
                        Build, share, and explore without boundaries.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/coding" className="btn-primary flex items-center gap-2 no-underline">
                            Start Grokking <ArrowRight size={18} />
                        </Link>
                        <Link to="/manifesto" className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition font-mono font-bold backdrop-blur-md text-white no-underline">
                            Read Manifesto
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 container relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <Link to="/coding" className="no-underline text-white">
                        <FeatureCard
                            icon={<Code size={32} className="text-blue-500" />}
                            title="Collaborative Coding"
                            desc="Real-time, low-latency environments for builders who ship."
                        />
                    </Link>
                    <Link to="/deploy" className="no-underline text-white">
                        <FeatureCard
                            icon={<Shield size={32} className="text-purple-500" />}
                            title="Secure Hosting"
                            desc="Deploy with confidence. Your data, your rules, your truth."
                        />
                    </Link>
                    <Link to="/entertainment" className="no-underline text-white">
                        <FeatureCard
                            icon={<Music size={32} className="text-pink-500" />}
                            title="Findable Entertainment"
                            desc="Discover raw talent and underground events. No algorithms."
                        />
                    </Link>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="glass-panel p-8 hover:border-blue-500/50 transition duration-300 group">
        <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:scale-110 transition shadow-[0_0_15px_rgba(59,130,246,0.3)]">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </div>
);

export default Home;
