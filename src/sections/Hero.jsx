'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  /* Parallax background */
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '25%']), { stiffness: 100, damping: 30, mass: 1 });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  /* Smooth spring for numbers */

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* background parallax layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 bg-grid-slate-800/[0.2] bg-[size:32px_32px]"
      />

      {/* foreground content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 45 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 inline-block rounded-full border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-primary)]"
        >
          Where Mechanics Meets Machine Learning
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-black text-5xl leading-none tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-[var(--color-white)]">Computational</span>{' '}
          <span className="text-[var(--color-primary)]">Mechanics</span>
          <br />
          <span className="text-[var(--color-white)]">& Design Club</span>
        </motion.h1>

        {/* sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-muted)] sm:text-xl"
        >
          We solve real-world problems that traditional mechanical engineering can’t touch—
          fusing CAD, FEA & AI/ML into products that move the world forward.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-md bg-[var(--color-primary)] px-7 py-3 font-bold text-[var(--color-bg)] shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">Explore Projects</span>
            <span className="absolute inset-0 -z-10 h-full w-full scale-x-0 bg-white/20 transition-transform duration-300 group-hover:scale-x-100" />
          </a>

          <a
            href="#contact"
            className="rounded-md border border-[var(--color-border)] px-7 py-3 font-semibold text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Join Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
