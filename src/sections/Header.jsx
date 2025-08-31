import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'domains', label: 'Domains' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState('home');

  /* hide on scroll-down */
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const curr = window.scrollY;
      setVisible(curr < 80 || curr < last);
      last = curr;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* scroll-spy */
  useEffect(() => {
    const els = navItems.map(n => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    els.forEach(el => obs.observe(el));
    return () => els.forEach(el => obs.unobserve(el));
  }, []);

  /* body lock */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  /* motion helpers */
  const spring = { type: 'spring', stiffness: 400, damping: 30 };
  const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <>
      <motion.header
        animate={{ y: visible ? 0 : '-100%' }}
        transition={{ duration: 0.25 }}
        className="fixed inset-x-0 top-0 z-40 bg-[#111] border-b border-transparent"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-md object-cover"
                src="/images/cmdclogo.png"
                alt="CMDC"
              />
              <div>
                <h1 className="font-black text-2xl text-[#B9FF66]">CMDC</h1>
                <span className="hidden sm:block text-xs text-neutral-400">
                  Computational Mechanics & Design Club
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  whileHover={{ scale: 1.05 }}
                  className={`relative capitalize font-bold text-base transition-colors ${
                    active === item.id ? 'text-[#B9FF66]' : 'text-neutral-400 hover:text-[#B9FF66]'
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#B9FF66]"
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-md text-neutral-400 hover:text-[#B9FF66]"
              onClick={() => setOpen(!open)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[#111]/90 backdrop-blur-xl md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={spring}
              className="flex flex-col items-center justify-center h-full gap-10"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  {...fadeUp}
                  transition={{ ...spring, delay: i * 0.05 }}
                  className="font-black text-4xl text-neutral-400 hover:text-[#B9FF66]"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}