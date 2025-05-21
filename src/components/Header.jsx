import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        let ticking = false;
        let lastScrollTop = 0;

        const handleScroll = () => {
            window.requestAnimationFrame(() => {
                if (!ticking) {
                    const currentScrollTop = window.scrollY;

                    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                        setShowNav(false);
                    } else {
                        setShowNav(true);
                    }

                    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
                    ticking = false;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 transition-transform duration-300 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <a href="#home" className="text-xl font-bold text-[#00ffe1]">CMDC</a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {['home', 'domains', 'projects', 'about', 'contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={`capitalize text-sm font-medium transition-colors ${activeSection === item
                                    ? 'text-[#00ffe1]'
                                    : 'text-gray-300 hover:text-[#00ffe1]'
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
                <nav className="flex flex-col p-4 space-y-4">
                    {['home', 'domains', 'projects', 'about', 'contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className={`capitalize font-medium py-1 ${activeSection === item
                                ? 'text-[#00ffe1]'
                                : 'text-gray-300 hover:text-[#00ffe1]'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}