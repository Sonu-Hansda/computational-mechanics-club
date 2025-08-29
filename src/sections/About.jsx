import { motion } from 'framer-motion';

const story = [
  {
    title: 'Problem',
    desc: 'Traditional Mech hits a wall when software, AI & data enter the room.',
    icon: '🧱',
  },
  {
    title: 'Fusion',
    desc: 'We splice CS + Mech into one discipline: Computational Mechanics.',
    icon: '🔗',
  },
  {
    title: 'Solution',
    desc: 'Real products, faster iterations, impossible designs made real.',
    icon: '🛠️',
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
