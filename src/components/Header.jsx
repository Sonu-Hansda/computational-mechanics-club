'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
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

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 bg-[#111] border-b border-neutral-800 transition-transform duration-300 ease-in-out shadow-sm ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
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

                        <button
                            className="md:hidden relative p-2 rounded-md text-neutral-400 hover:text-[#B9FF66] hover:bg-neutral-800 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}

                        className="fixed top-16 right-0 bottom-0 w-full z-40 bg-black/50 backdrop-blur-xl md:hidden flex flex-col justify-center border-t border-white/10"
                    >
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

                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}

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