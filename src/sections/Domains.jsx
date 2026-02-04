'use client';
import { motion } from 'framer-motion';

const domains = [
  {
    title: 'CAD',
    blurb: 'Parametric 3-D models that evolve in real time.',
    img: 'https://images.unsplash.com/photo-1581092333203-42374bcf7d89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Simulation',
    blurb: 'Predict stress, heat & flow before a bolt is turned.',
    img: 'https://media.licdn.com/dms/image/v2/D4E12AQHdMDwJD_iypg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727713149006?e=2147483647&v=beta&t=0AjmIsXqT5IYdmwFIzRN9BYGW_ZI9mTU8eCXB9j_QX8',
  },
  {
    title: 'AI / ML',
    blurb: 'Neural nets that design lighter, stronger parts.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Product Design',
    blurb: 'From prototype to production—fast.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=60',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function Domains() {
  return (
    <section id="domains" className="relative isolate bg-neutral-950 py-24 md:py-32">
      {/* subtle separator gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-surface)]" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-black text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-[var(--color-white)]">Core</span>{' '}
            <span className="text-[var(--color-primary)]">Domains</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-muted)]">
            Everything we build sits at the intersection of code, mechanics and
            machine learning.
          </p>
        </motion.div>

        {/* cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {domains.map(({ title, blurb, img }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] transition-colors hover:border-[var(--color-primary)]"
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/90 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-bold text-xl text-[var(--color-white)]">{title}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{blurb}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
