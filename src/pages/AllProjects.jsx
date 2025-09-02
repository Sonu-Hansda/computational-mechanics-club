import { Link, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';

const projects = [
        {
            title: "Design and Development of  Automated Household Waste Segregation System",
            category: "ANSYS",
            image: "/images/household-waste.png"
        },
        {
            title: "ML Based Predictive Modeling of Wire EDM Performance Metrics",
            category: "AI/ML",
            image: "/images/ML-Predictive.jpeg"
        },
        {
            title: "CFD-Based Aerodynamic Analysis of the NACA 0012 Airfoil",
            category: "ANSYS",
            image: "/images/air-foil.png"
        },
        {
            title: "BioSkin-AI: A Machine Learning-Powered Self-Healing Prosthetic Skin",
            category: "AI/ML",
            image: "/images/srijan.png"
        },
        {
            title: "Computer vision-driven Teleoperation Robotic Hand",
            category: "AI/ML",
            image: "/images/sushil.png"
        },
        {
            title: "Fish Fin-Inspired Heat Sink Design",
            category: "OpenSCAD/CAD",
            image: "/images/heat-sink.png"
        },
        {
            title: "Wack-a-Mole Game",
            category: "UI/UX Game",
            image: "/images/Wack-a-mole.jpg"
        },
        {
            title: "Traffic Light Simulation",
            category: "Embedded Systems / IoT Simulation",
            image: "/images/trafficLight.jpg"
        },
        {
            title: "Melody Buzzers",
            category: "Embedded Systems / Sound Engineering",
            image: "/images/buzzer.png",
        },
        {
            title: "Stack Tower Game",
            category: "UI/UX Design",
            image: "/images/stack-tower.png"
        },
        {
            title: "RGB Light Control",
            category: "Embedded Systems / Electronics Simulation",
            image: "..//images/rgb-light1.png"
        },
        {
            title: "Reverse Countdown Display",
            category: "Product Design",
            image: "..//images/countdown.png"
        },
          { title: 'ECM CGPA Tracker', category: 'UI/UX', image: '..//images/cgpaTracker.png' },
    ];

export default function AllProjects() {
    const navigate = useNavigate();

  // stagger heights to break the grid
  const heights = ['h-72', 'h-80', 'h-64', 'h-72', 'h-64', 'h-80'];

  return (
    <section className="relative isolate bg-[#111] py-24 md:py-32">
      {/* subtle scan-line backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-[size:32px_32px] opacity-5" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="font-black text-4xl leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-white">Every</span>{' '}
            <span className="text-[#B9FF66]">Project</span>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0 } }}
              transition={{ type: 'spring', stiffness: 100, delay: i * 0.08 }}
              className={`mb-6 break-inside-avoid group relative overflow-hidden rounded-md border border-neutral-800 bg-[#1a1a1a] ${heights[i % heights.length]}`}
            >
              <Link to={`/projects/${i}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* lime overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B9FF66]">
                      {p.category}
                    </span>
                    <h3 className="mt-1 font-bold text-white text-sm sm:text-base">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* back button */}
        <motion.button
          onClick={() => navigate(-1)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 mx-auto flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-400 hover:border-[#B9FF66] hover:text-[#B9FF66] transition"
        >
          ← Back
        </motion.button>
      </div>
    </section>
  );
}