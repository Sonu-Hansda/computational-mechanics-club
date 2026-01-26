'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Achievement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="achievement" ref={ref} className="relative isolate bg-[#111] py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* decorative lime glow (desktop only) */}
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute -left-20 top-1/2 hidden h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#B9FF66]/20 blur-3xl lg:block"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {/* animated badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B9FF66]/40 bg-[#B9FF66]/10 px-4 py-1.5 text-sm font-semibold text-[#B9FF66]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#B9FF66]" />
              Latest Win
            </motion.div>

            <h2 className="font-black text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              3<sup className="text-[#B9FF66]">rd</sup> Place
            </h2>
            <p className="mt-2 text-xl font-semibold text-neutral-300">
              Research Design Competition
            </p>

            <p className="mt-6 max-w-xl text-neutral-400">
              Organized by the Indian Society for Applied Mechanics (ISAM) at IIITDM Kancheepuram.
              A four-member CMDC team cracked a real-world mechanics problem—fast, lean and AI-assisted.
            </p>

            {/* team list */}
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
              <span className="font-bold text-neutral-200">Team:</span>
              {['Ravi Ranjan', 'Aditya Singh', 'Sushil Chahande', 'Anubhuti Pali'].map(name => (
                <span key={name} className="text-sm text-neutral-300">
                  {name}
                </span>
              ))}
            </div>

            {/* external link */}
            <a
              href="https://lnkd.in/gqKyFg6N"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-[#B9FF66]"
            >
              Read the full story
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-xl">
              {/* glowing ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#B9FF66] to-transparent opacity-70 blur-md" />
              <img
                src="/images/bat.png"
                alt="Cricket Bat Design"
                className="relative w-full h-auto object-cover"
              />
            </div>
            {/* floating caption */}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-4 left-4 rounded bg-black/70 px-3 py-1 text-xs font-medium text-white"
            >
              Final prototype
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
