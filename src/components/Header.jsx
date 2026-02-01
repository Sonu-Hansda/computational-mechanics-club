'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    // 1. Section Observer (Kept same)
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
        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    // 2. Hide Navbar on Scroll (Kept same)
    useEffect(() => {
        let ticking = false;
        let lastScrollTop = 0;
        const handleScroll = () => {
            window.requestAnimationFrame(() => {
                if (!ticking) {
                    const currentScrollTop = window.scrollY;
                    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                        setShowNav(false);
                        // Close menu if user scrolls down aggressively
                        setIsMenuOpen(false);
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

    // 3. Body Scroll Lock
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <>
            {/* MAIN HEADER BAR 
               - Fixed at top
               - High Z-Index (50) to stay ABOVE the menu
               - Solid background so you can't see the menu sliding behind the logo area
            */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 bg-[#111] border-b border-neutral-800 transition-transform duration-300 ease-in-out shadow-sm ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Fixed Logo Section */}
                        <div className="flex items-center gap-x-3">
                            <div className="relative">
                                <img
                                    className="h-10 md:h-14 w-10 md:w-14 rounded-lg"
                                    src="/images/cmdclogo.png"
                                    alt="CMDC Logo"
                                />
                            </div>
                            <div>
                                <h2 className="text-white font-bold text-xl md:text-2xl tracking-tight">CMDC</h2>
                                <p className="text-neutral-400 text-xs hidden md:block">Computational Mechanics</p>
                            </div>
                        </div>

                        {/* Desktop Navigation (Hidden on Mobile) */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {['home', 'domains', 'projects', 'about', 'contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className={`relative capitalize font-medium text-lg transition-all duration-300 group ${activeSection === item
                                        ? 'text-[#B9FF66] font-semibold'
                                        : 'text-neutral-400 hover:text-[#B9FF66]'
                                        }`}
                                >
                                    {item}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B9FF66] transition-all duration-300 group-hover:w-full ${activeSection === item ? 'w-full' : ''}`}></span>
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Toggle Button (Changes icon based on state) */}
                        <button
                            className="md:hidden relative p-2 rounded-md text-neutral-400 hover:text-[#B9FF66] hover:bg-neutral-800 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                // Close Icon (X)
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY 
                - Z-Index 40 (Lower than Header's 50)
                - 'top-16' ensures it starts BELOW the header bar
            */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        /* Side-to-Side Animation */
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}

                        /* VISUAL STYLING:
                           - top-16: Starts immediately after the header (64px)
                           - bg-black/50: 50% opacity to see the green blobs behind
                           - backdrop-blur-xl: Strong blur for frosted glass effect
                        */
                        className="fixed top-16 right-0 bottom-0 w-full z-40 bg-black/50 backdrop-blur-xl md:hidden flex flex-col justify-center border-t border-white/10"
                    >
                        {/* Navigation Links Only (No Logo, No Dots) */}
                        <nav className="flex flex-col items-center space-y-10">
                            {['home', 'domains', 'projects', 'about', 'contact'].map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item}`}
                                    className={`capitalize font-black text-4xl tracking-tight transition-all duration-300 hover:scale-105 ${activeSection === item
                                            ? 'text-[#B9FF66]'
                                            : 'text-white/90 hover:text-[#B9FF66]'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}

                                    /* Staggered text fade-in */
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}

                                    /* Text shadow helps readability on glass backgrounds */
                                    style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}