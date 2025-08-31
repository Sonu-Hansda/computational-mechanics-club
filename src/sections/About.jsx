import { motion } from 'framer-motion';

const story = [
  {
    title: 'Problem',
    desc: 'Traditional Mech hits a wall when software, AI & data enter the room.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
,
  },
  {
    title: 'Fusion',
    desc: 'We splice CS + Mech into one discipline: Computational Mechanics.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg>
,
  },
  {
    title: 'Solution',
    desc: 'Real products, faster iterations, impossible designs made real.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>
,
  },
];

export default function About() {
  return (
    <section id="about" className="relative isolate bg-[#111] py-24 md:py-32">
      {/* subtle scan-line backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-[size:32px_32px] opacity-5" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* LEFT: STORY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <h2 className="font-black text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="text-white">Why</span>{' '}
              <span className="text-[#B9FF66]">CMDC?</span>
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-neutral-400">
              We exist at the intersection of code, mechanics and machine learning—
              building things that neither discipline could do alone.
            </p>

            {/* timeline */}
            <div className="mt-10 space-y-8">
              {story.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B9FF66] text-lg font-bold text-[#111]">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-neutral-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

                {/* RIGHT: IMAGE WITH PARALLAX & NEON GLOW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-2"
          >

            {/* parallax-tilt image */}
            <motion.div
              whileHover={{ rotateY: 2, rotateX: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative overflow-hidden bg-primary/5 md:p-6"
            >
              <img
                src="/images/workshop.jpg"
                alt="CMDC mentor on stage guiding juniors"
                className="w-full h-auto object-cover"
              />
              {/* subtle scan-line overlay (optional) */}
              <div className="absolute inset-0 bg-[url('/scanlines.svg')] opacity-10 pointer-events-none" />
            </motion.div>

            {/* floating caption */}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-4 left-4 rounded bg-black/60 px-3 py-1 text-xs font-medium text-white"
            >
              Orientation session & workshop
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
