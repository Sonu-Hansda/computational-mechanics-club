import { useEffect, useState } from 'react';

export default function Hero() {
    const images = [
        "https://images.unsplash.com/photo-1684687931478-76d7e7cd35b7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1604591259403-81d6c9cf87d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 bg-cover bg-center transition-all duration-[1000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 translate-x-0' :
                                index < currentImageIndex ? '-translate-x-full opacity-0' :
                                    'translate-x-full opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url(${src})`,
                            zIndex: index === currentImageIndex ? 10 : 1,
                        }}
                    />
                ))}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10"></div>
            </div>

            {/* Centered Content */}
            <div className="relative z-20 text-center px-4 animate-slideIn">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                    Computational Mechanics & Design Club
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto drop-shadow-md">
                    We build future-ready engineers through CAD, Simulation, AI/ML, and Product Design.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#domains" className="px-8 py-3 bg-gradient-to-r from-[#00ffe1] to-[#7d12ff] text-black font-medium rounded-md hover:from-[#7d12ff] hover:to-[#00ffe1] hover:text-white transition-all shadow-lg hover:shadow-[#00ffe1]/30">
                        Explore Domains
                    </a>
                    <a href="#projects" className="px-8 py-3 border border-[#00ffe1] text-[#00ffe1] font-medium rounded-md hover:bg-[#00ffe1]/10 transition-colors">
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
}