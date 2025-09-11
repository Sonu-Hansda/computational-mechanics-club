import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Automated Household Waste Segregation', category: 'ANSYS', img: '/images/household-waste.png' },
  { title: 'ML-Predictive Wire-EDM Modelling', category: 'AI/ML', img: '/images/ML-Predictive.jpeg' },
  { title: 'CFD NACA 0012 Airfoil Study', category: 'ANSYS', img: '/images/air-foil.png' },
  { title: 'BioSkin-AI Prosthetic Skin', category: 'AI/ML', img: '/images/srijan.png' },
  { title: 'CV-Controlled Tele-Robotic Hand', category: 'AI/ML', img: '/images/sushil.png' },
  { title: 'Fish-Fin Heat-Sink', category: 'OpenSCAD', img: '/images/heat-sink.png' },
  { title: 'Wack-a-Mole Game', category: 'UI/UX', img: '/images/Wack-a-mole.jpg' },
  { title: 'Traffic-Light CFD', category: 'CFD', img: '/images/trafficLight.jpg' },
  { title: 'Melody Buzzers', category: 'AI/ML', img: '/images/buzzer.png' },
  { title: 'Stack-Tower Game', category: 'UI/UX', img: '/images/stack-tower.png' },
  { title: 'RGB-Light Arduino', category: 'FEA', img: '/images/rgb-light1.png' },
  { title: 'ECM CGPA Tracker', category: 'UI/UX', img: '/images/cgpaTracker.png' },
];

export default function Projects() {
  const heights = ['h-80', 'h-96', 'h-72', 'h-80', 'h-72', 'h-96'];

  return (
    <section id="projects" className="relative bg-[var(--color-bg)] py-24 md:py-32">
      {/* subtle separator gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-surface)]" />

      <div className="container mx-auto px-6">
        {/* headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-black text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-[var(--color-white)]">Built</span>{' '}
            <span className="text-[var(--color-primary)]">Projects</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-muted)]">
            Hardware, software and everything in-between—twelve proofs we ship.
          </p>
        </motion.div>

        {/* masonry grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-4"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0 } }}
              transition={{ type: 'spring', stiffness: 100, delay: i * 0.08 }}
              className={`mb-6 break-inside-avoid relative overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] group ${heights[i % heights.length]}`}
            >
              <Link to={`/projects/${i}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* lime scanner overlay */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300" />
                {/* bottom label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent p-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-bold text-[var(--color-white)] text-sm sm:text-base leading-tight">
                    {p.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* “View all” CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/all-projects"
            className="group inline-flex items-center gap-2 rounded-md border border-[var(--color-primary)] px-6 py-3 font-bold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>

          </Link>
        </motion.div>
      </div>
    </section>
  );
}
