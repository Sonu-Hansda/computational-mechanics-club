import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const projects = [
   {
    title:
      "Design and Development of  Automated Household Waste Segregation System",
    category: "ANSYS",
    image: "/images/household-waste.png",
    description:
      "This project addresses the growing challenge of urban waste management by developing a low-cost, automated system for segregating household waste into wet, dry, and metal categories at the source. Manual segregation is often inconsistent, unhygienic, and inefficient, leading to contamination and reduced recycling effectiveness.The proposed solution leverages an Arduino Uno-based control system with IR, moisture, and proximity sensors to detect and classify waste within a second. A stepper-motor-driven rotating base accurately aligns the detected waste with the appropriate bin, while a servo motor opens a trapdoor to release it. This parallel sensing and classification approach ensures high-speed and precise segregation with minimal complexity.The system was visualized using a static 3D CAD model to check alignments and prepare for future mechanical simulations."
      
  },
   {
    title:
      "ML Based Predictive Modeling of Wire EDM Performance Metrics",
    category: "AI/ML",
    image: "/images/ML-Predictive.jpeg",
    description:
      "This project explores the use of machine learning to predict performance outcomes in Wire Electric Discharge Machining (WEDM) under parametric uncertainty. Key machining parameters—Pulse-On Time (Ton), Peak Current (IP), and Servo Voltage (SV)—significantly influence Cutting Rate (CR) and Surface Roughness (SR), but often fluctuate due to real-world operational variability.To address this, a synthetic dataset with Gaussian noise was used to simulate uncertain WEDM conditions. Three models—Linear Regression, Decision Trees, and Support Vector Machines (SVM)—were trained and evaluated. Among them, SVM delivered the highest accuracy, demonstrating strong predictive performance.Sensitivity analysis revealed Ton and IP as the most influential parameters. The study emphasizes the potential of machine learning in improving WEDM accuracy, efficiency, and reliability. Future enhancements will include validation with experimental data and integration of additional parameters like material properties.",
      link:"https://sonu-hansda-minor-project-ecm-semester-4.streamlit.app/"
  },
   {
    title:
      "CFD-Based Aerodynamic Analysis of the NACA 0012 Airfoil",
    category: "ANSYS",
    image: "/images/air-foil.png",
    description:
      "This study focuses on the computational fluid dynamics (CFD) simulation of the NACA 0012 airfoil, a symmetric profile widely used in aerospace and engineering applications. The main objective is to investigate the variation of lift (Cl) and drag (Cd) coefficients with changing angle of attack, using different turbulence models—namely k-ε, k-ω, and SST—within ANSYS Fluent.A key focus is placed on the transition from laminar to turbulent flow, which strongly influences aerodynamic performance. The study performs a grid independence test to ensure solution accuracy and examines how mesh resolution and near-wall turbulence behavior affect simulation results. Comparative analysis is also conducted between a flat plate and the NACA 0012 airfoil, highlighting complex flow phenomena such as vortex shedding, stall, and boundary layer separation.Findings show that the choice of turbulence model significantly impacts simulation accuracy, especially at higher angles of attack. The results are validated against benchmark experimental data, affirming that CFD, when properly configured, can closely replicate physical behavior and improve airfoil design decisions."
  },
   {
    title:
      "BioSkin-AI: A Machine Learning-Powered Self-Healing Prosthetic Skin",
    category: "AI/ML",
    image: "/images/srijan.png",
    description:
      "BioSkin-AI is an innovative project that aims to bridge the gap between smart materials and artificial intelligence to develop an intelligent, self-healing prosthetic skin system. Traditional prosthetic skins suffer from mechanical damage, frequent maintenance, and poor adaptability to extreme conditions. To solve these issues, BioSkin-AI uses Ecoflex™ silicone modified with dynamic disulfide bonds (–S–S–), allowing the material to autonomously heal cracks at room temperature, much like biological wound healing.To complement the material science aspect, the system is integrated with a machine learning model—specifically a Random Forest Regressor—that predicts two key performance metrics: healing efficiency and peak stress. These predictions are based on user-provided inputs such as crack length and temperature, using a synthetic dataset generated through advanced healing kinetics equations.The project further incorporates finite element simulations via ANSYS to validate stress recovery and material behavior. All features are brought together in an interactive web toolkit built with Flask, enabling real-time visualization, graph plotting, and prosthetic skin status monitoring.By combining smart chemistry, mathematical modeling, AI prediction, and simulation, BioSkin-AI proposes a futuristic solution for athletes, soldiers, elderly patients, and others who rely on prosthetics. It paves the way for more resilient, intelligent, and user-friendly prosthetic technologies.",
    link:"https://github.com/SRIJAN-KUMAR7/SHM"
  },
   {
    title:
      "Computer vision-driven Teleoperation Robotic Hand",
    category: "AI/ML",
    image: "/images/sushil.png",
    description:
      "This project aims to develop a robotic hand that mimics human gestures in real time using computer vision. By leveraging MediaPipe and OpenCV, the system accurately tracks hand movements and translates them into motor commands for a servo-driven robotic hand. Communication between the vision system and a microcontroller is handled via a serial interface, enabling seamless gesture-to-motion control.The prototype includes gesture recognition software, a processing unit, and 3D-modeled robotic fingers. The project is currently in the prototyping phase, with successful trials in real-time hand tracking and basic hardware setup. The next steps involve integrating servo motors into a 3D-printed frame and refining the gesture mapping logic.Designed to be intuitive, cost-effective, and suitable for hazardous or assistive remote environments, this system has strong potential in teleoperation, rehabilitation, and robotic assistance applications." ,
      link:"https://github.com/Sushil-09/STT/blob/main"
  },
  {
    title:
      "Fish Fin-Inspired Heat Sink Design",
    category: "OpenSCAD/CAD",
    image: "/images/heat-sink.png",
    description:
      "This project explores a novel approach to thermal management in electronic devices by designing a heat sink inspired by the natural geometry of fish fins. Traditional heat sinks with straight fins often face limitations in airflow and heat dissipation, especially in compact or fanless systems. Drawing from biomimicry, this design uses curved, tilted fins that mimic the flow-efficient structure of fish fins to enhance surface area, guide airflow smoothly, and reduce pressure drop.Using parametric modeling tools like OpenSCAD and Fusion 360, a 3D-printable heat sink was created and evaluated through simulation. Results show improved cooling performance, lower airflow resistance, and better thermal uniformity compared to conventional designs. The project demonstrates how nature-inspired structures can lead to more efficient and sustainable engineering solutions, particularly for low-power and silent electronic systems."
      
  },
  {
    title: "Wack-A-Mole Game",
    category: "CAD Design",
    image: "/images/Wack-a-mole.jpg",
    description:
      "A basic fun and interactive wack-a-mole game made with using Html CSS and JavaScript for users to pass time when they are free which taught me things and enabled me to go deeper in the world of web development. This game is built for just fun and anyone can play it and can suggest changes.",
    link: "https://anoopkr1906.github.io/Whack-a-mole/",
  },
  {
    title: "Traffic Light Simulation using Arduino in Tinkercad",
    category: "Embedded Systems / IoT Simulation",
    image: "/images/trafficLight.jpg",
    description:
      "This project simulates a basic traffic light system using an Arduino Uno and three LEDs.(Red, Yellow, and Green). The Arduino is programmed to control the LEDs in a sequence that mimics real-world traffic lights. Each LED turns on for a specific duration—Green for 'Go', Yellow for 'Caution', and Red for 'Stop'—in a continuous loop. This project helps in understanding digital output control, timing delays, and the concept of traffic automation using Arduino in Tinkercad. ",
    link: "https://www.tinkercad.com/things/bLgKClS4Yut-project-3-traffic-light",
  },
  {
    title: "Melody Buzzers Using Arduino in Tinkercad",
    category: "Embedded Systems / Sound Engineering",
    image: "/images/buzzer.png",
    description:
      "This project demonstrates how to generate melodies using a piezo buzzer connected to an Arduino Uno. The Arduino is programmed to send specific frequencies to the piezo buzzer, creating musical notes. This project is a fun and educational way to learn about sound generation, frequency control, and basic programming using Arduino in Tinkercad. ",
    link: "https://www.tinkercad.com/things/0M2LONhbZF4-project-6-melody-buzzers-",
  },
  {
    title: "Stack Tower Game",
    category: "UI/UX Design",
    image: "/images/stack-tower.png",
    description:
      " A fun and interactive stack tower game made with using Html css and javascript and canvas Api which taught me things and enabled me to go deeper in the world of web development. This game is built for just fun and anyone can play it and can suggest changes .",
    link: "https://anoopkr1906.github.io/Stack-Tower-Game-HTML_CSS_JS/",
  },
  {
    title: "RGB Light Control using Arduino in Tinkercad",
    category: "Embedded Systems / Electronics Simulation",
    image: "/images/rgb-light1.png",
    description:
      "This project showcases how to control an RGB LED using an Arduino Uno. By sending PWM (Pulse Width Modulation) signals to the red, green, and blue pins of the RGB LED, different colors can be created by adjusting the intensity of each component. This project helps in understanding RGB color mixing, PWM control, and the basics of interfacing LEDs with Arduino in Tinkercad. ",
    link: "https://www.tinkercad.com/things/7Q55UmHDH0u-project-10-rgb-light-",
  },
  {
    title: "Reverse Countdown Display using Arduino in Tinkercad",
    category: "Product Design",
    image: "/images/countdown.png",
    description:
      "A wireframe layout for a web product's interface to guide development.",
    link: "https://www.tinkercad.com/things/1sRFlURrtSb-project-11-countdown-light",
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#111] flex items-center justify-center text-neutral-300">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#111] relative isolate py-12 md:py-20">
      {/* subtle scan-line backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-[size:32px_32px] opacity-5" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* back button */}
        <motion.button
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-400 hover:border-[#B9FF66] hover:text-[#B9FF66] transition"
        >
          ← Back
        </motion.button>

        {/* two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* image */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#B9FF66]/20 to-transparent" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-[#B9FF66]">
                {project.category}
              </span>
              <h1 className="mt-2 font-black text-3xl leading-tight text-white md:text-4xl">
                {project.title}
              </h1>

              <p className="mt-6 text-neutral-300 leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>

              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#B9FF66] px-5 py-3 font-bold text-[#111] shadow-lg hover:bg-[#B9FF66]/90 transition"
                >
                  Visit Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
