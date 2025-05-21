export default function Hero() {
    return (
        <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://picsum.photos/seed/cmdc-hero/1920/1080 "
                    alt="Club background"
                    className="w-full h-full object-cover brightness-50 contrast-100"
                />
            </div>

            {/* Centered Content */}
            <div className="relative z-10 text-center px-4 animate-slideIn">
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
    )
}