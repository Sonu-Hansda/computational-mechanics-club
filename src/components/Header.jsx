// import { useState, useEffect } from "react";


// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [showNav, setShowNav] = useState(true);
//     const [activeSection, setActiveSection] = useState('home');

//     useEffect(() => {
//         const sections = document.querySelectorAll('section[id]');

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActiveSection(entry.target.id);
//                     }
//                 });
//             },
//             { threshold: 0.3 }
//         );

//         sections.forEach((section) => {
//             observer.observe(section);
//         });

//         return () => {
//             sections.forEach((section) => {
//                 observer.unobserve(section);
//             });
//         };
//     }, []);

//     useEffect(() => {
//         let ticking = false;
//         let lastScrollTop = 0;

//         const handleScroll = () => {
//             window.requestAnimationFrame(() => {
//                 if (!ticking) {
//                     const currentScrollTop = window.scrollY;

//                     if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
//                         setShowNav(false);
//                     } else {
//                         setShowNav(true);
//                     }

//                     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
//                     ticking = false;
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <header
//             className={`fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 transition-transform duration-300 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'
//                 }`}
//         >
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center gap-x-2 h-16 md:h-20">
//                     <div className="w-full flex items-center justify-between">
//                         <div className="flex gap-x-1.5 items-center">
//                             <img className="h-8 md:h-12 w-8 md:w-12" src="/images/cmdclogo.png" />
//                             <h2 className="text-white font-semibold text-xl">CMDC</h2>
//                         </div>
//                         {/* Desktop Navigation */}
//                         <nav className="  hidden md:flex space-x-8">
//                             {['home', 'domains', 'projects', 'about', 'contact'].map((item) => (
//                                 <a
//                                     key={item}
//                                     href={`#${item}`}
//                                     className={`capitalize font-medium transition-colors ${activeSection === item
//                                         ? 'text-[#00ffe1]'
//                                         : 'text-gray-300 hover:text-[#00ffe1]'
//                                         }`}
//                                 >
//                                     {item}
//                                 </a>
//                             ))}
//                         </nav>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-700"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             {isMenuOpen ? (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             ) : (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                             )}
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
//                 <nav className="flex flex-col p-4 space-y-4">
//                     {['home', 'domains', 'projects', 'about', 'contact'].map((item) => (
//                         <a
//                             key={item}
//                             href={`#${item}`}
//                             className={`capitalize font-medium py-1 ${activeSection === item
//                                 ? 'text-[#00ffe1]'
//                                 : 'text-gray-300 hover:text-[#00ffe1]'
//                                 }`}
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             {item}
//                         </a>
//                     ))}
//                 </nav>
//             </div>
//         </header>
//     )
// }

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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ease-in-out shadow-sm ${showNav ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo Section */}
                        <div className="flex items-center gap-x-3">
                            <div className="relative">
                                <img 
                                    className="h-10 md:h-14 w-10 md:w-14 rounded-lg invert" 
                                    src="/images/cmdclogo.png" 
                                    alt="CMDC Logo"
                                />
                            </div>
                            <div>
                                <h2 className="text-black font-bold text-xl md:text-2xl tracking-tight">CMDC</h2>
                                <p className="text-gray-600 text-xs hidden md:block">Computational Mechanics</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {['home', 'domains', 'projects', 'about', 'contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className={`relative capitalize font-medium text-lg transition-all duration-300 group ${activeSection === item
                                        ? 'text-black font-semibold'
                                        : 'text-gray-600 hover:text-black'
                                        }`}
                                >
                                    {item}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full ${activeSection === item ? 'w-full' : ''}`}></span>
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative p-3 rounded-xl text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Full Screen Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {/* Background Overlay */}
                <div 
                    className={`absolute inset-0 bg-white transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={closeMenu}
                ></div>
                
                {/* Menu Content */}
                <div className={`relative h-full flex flex-col transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    {/* Header Section with Centered Logo and Cross */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        {/* Empty div for spacing */}
                        <div className="w-12"></div>
                        
                        {/* Centered Logo and Text */}
                        <div className="flex items-center gap-x-3">
                            <img 
                                className="h-12 w-12 rounded-lg invert" 
                                src="/images/cmdclogo.png" 
                                alt="CMDC Logo"
                            />
                            <div>
                                <h2 className="text-black font-bold text-3xl tracking-tight">CMDC</h2>
                            </div>
                        </div>
                        
                        {/* Close Button */}
                        <button
                            className="p-3 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300"
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex-1 flex items-center justify-center bg-white">
                        <nav className="flex flex-col items-center space-y-8">
                            {['home', 'domains', 'projects', 'about', 'contact'].map((item, index) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className={`capitalize font-semibold text-2xl transition-all duration-300 hover:scale-110 transform ${activeSection === item
                                        ? 'text-black'
                                        : 'text-gray-600 hover:text-black'
                                        } ${isMenuOpen ? 'animate-fade-in-up' : ''}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={closeMenu}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Decorative Elements */}
                    <div className="flex justify-center pb-10 bg-white">
                        <div className="flex space-x-2">
                            {[...Array(3)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="w-2 h-2 bg-black rounded-full animate-pulse"
                                    style={{ animationDelay: `${i * 200}ms` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </>
    );
}