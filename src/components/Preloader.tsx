import { useEffect, useState } from "react";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 800);
                    return 100;
                }
                const diff = Math.random() * 15;
                return Math.min(oldProgress + diff, 100);
            });
        }, 120);

        return () => clearInterval(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0f1a] overflow-hidden">
            {/* Dynamic Grid Background */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Moving Light Streaks */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute h-[1px] w-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent top-1/4 -left-full animate-streak" />
                <div className="absolute h-[1px] w-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent top-3/4 -left-full animate-streak-slow" />
            </div>

            <div className="relative flex flex-col items-center scale-75 md:scale-100">
                {/* Animated Central Brand Core */}
                <div className="relative mb-12">
                    {/* Rotating Progress Ring */}
                    <svg className="h-48 w-48 -rotate-90 md:h-56 md:w-56" viewBox="0 0 100 100">
                        <circle
                            className="text-white/5"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="transparent"
                            r="45"
                            cx="50"
                            cy="50"
                        />
                        <circle
                            className="text-gold transition-all duration-300 ease-out"
                            strokeWidth="2"
                            strokeDasharray={2 * Math.PI * 45}
                            strokeDashoffset={2 * Math.PI * 45 * (1 - progress / 100)}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="45"
                            cx="50"
                            cy="50"
                        />
                    </svg>

                    {/* Logo Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-32 w-32 md:h-40 md:w-40 animate-pulse-gentle">
                            <img src="/logo.png" alt="KK Self Drive" className="w-full h-full object-contain relative z-10" />
                            <div className="absolute inset-0 scale-110 blur-xl bg-gold/20 rounded-full animate-glow" />
                        </div>
                    </div>
                </div>

                {/* Loading Text Description */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[1px] w-8 bg-gold/30" />
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-gold/80 animate-pulse">
                            Igniting Engines
                        </h2>
                        <div className="h-[1px] w-8 bg-gold/30" />
                    </div>

                    <div className="text-4xl font-black text-white md:text-5xl">
                        {Math.round(progress)}<span className="text-gold text-2xl">%</span>
                    </div>
                </div>
            </div>

            {/* Footer Branding */}
            <div className="absolute bottom-12 text-center">
                <p className="text-[10px] uppercase tracking-widest text-white/30">
                    Coimbatore's Premium Self Drive Network
                </p>
            </div>
        </div>
    );
};

export default Preloader;
