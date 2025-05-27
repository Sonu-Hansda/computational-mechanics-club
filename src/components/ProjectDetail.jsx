import { useParams, useNavigate } from "react-router-dom";

const projects = [
   {
    title:
      "Design and Development of  Automated Household Waste Segregation System",
    category: "ANSYS",
    image: "/images/shu.png",
    description:
      "This project addresses the growing challenge of urban waste management by developing a low-cost, automated system for segregating household waste into wet, dry, and metal categories at the source. Manual segregation is often inconsistent, unhygienic, and inefficient, leading to contamination and reduced recycling effectiveness.The proposed solution leverages an Arduino Uno-based control system with IR, moisture, and proximity sensors to detect and classify waste within a second. A stepper-motor-driven rotating base accurately aligns the detected waste with the appropriate bin, while a servo motor opens a trapdoor to release it. This parallel sensing and classification approach ensures high-speed and precise segregation with minimal complexity.The system was visualized using a static 3D CAD model to check alignments and prepare for future mechanical simulations."
      
  },
   {
    title:
      "ML Based Predictive Modeling of Wire EDM Performance Metrics",
    category: "AI/ML",
    image: "/images/sonu.png",
    description:
      "This project explores the use of machine learning to predict performance outcomes in Wire Electric Discharge Machining (WEDM) under parametric uncertainty. Key machining parameters—Pulse-On Time (Ton), Peak Current (IP), and Servo Voltage (SV)—significantly influence Cutting Rate (CR) and Surface Roughness (SR), but often fluctuate due to real-world operational variability.To address this, a synthetic dataset with Gaussian noise was used to simulate uncertain WEDM conditions. Three models—Linear Regression, Decision Trees, and Support Vector Machines (SVM)—were trained and evaluated. Among them, SVM delivered the highest accuracy, demonstrating strong predictive performance.Sensitivity analysis revealed Ton and IP as the most influential parameters. The study emphasizes the potential of machine learning in improving WEDM accuracy, efficiency, and reliability. Future enhancements will include validation with experimental data and integration of additional parameters like material properties.",
      link:"https://sonu-hansda-minor-project-ecm-semester-4.streamlit.app/"
  },
   {
    title:
      "CFD-Based Aerodynamic Analysis of the NACA 0012 Airfoil",
    category: "ANSYS",
    image: "/images/vivek2.jpg",
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
    image: "/images/traffic_light.png",
    description:
      "This project simulates a basic traffic light system using an Arduino Uno and three LEDs.(Red, Yellow, and Green). The Arduino is programmed to control the LEDs in a sequence that mimics real-world traffic lights. Each LED turns on for a specific duration—Green for 'Go', Yellow for 'Caution', and Red for 'Stop'—in a continuous loop. This project helps in understanding digital output control, timing delays, and the concept of traffic automation using Arduino in Tinkercad. ",
    link: "https://www.tinkercad.com/things/bLgKClS4Yut-project-3-traffic-light",
  },
  {
    title: "Melody Buzzers Using Arduino in Tinkercad",
    category: "Embedded Systems / Sound Engineering",
    image: "/images/Melody_Buzzers.png",
    description:
      "This project demonstrates how to generate melodies using a piezo buzzer connected to an Arduino Uno. The Arduino is programmed to send specific frequencies to the piezo buzzer, creating musical notes. This project is a fun and educational way to learn about sound generation, frequency control, and basic programming using Arduino in Tinkercad. ",
    link: "https://www.tinkercad.com/things/0M2LONhbZF4-project-6-melody-buzzers-",
  },
  {
    title: "Stack Tower Game",
    category: "UI/UX Design",
    image: "/images/Stack_tower_game.jpg",
    description:
      " A fun and interactive stack tower game made with using Html css and javascript and canvas Api which taught me things and enabled me to go deeper in the world of web development. This game is built for just fun and anyone can play it and can suggest changes .",
    link: "https://anoopkr1906.github.io/Stack-Tower-Game-HTML_CSS_JS/",
  },
  {
    title: "RGB Light Control using Arduino in Tinkercad",
    category: "Embedded Systems / Electronics Simulation",
    image: "/images/RGB_Light_arduino.png",
    description:
      "This project showcases how to control an RGB LED using an Arduino Uno. By sending PWM (Pulse Width Modulation) signals to the red, green, and blue pins of the RGB LED, different colors can be created by adjusting the intensity of each component. This project helps in understanding RGB color mixing, PWM control, and the basics of interfacing LEDs with Arduino in Tinkercad. ",
    link: "https://www.tinkercad.com/things/7Q55UmHDH0u-project-10-rgb-light-",
  },
  {
    title: "Reverse Countdown Display using Arduino in Tinkercad",
    category: "Product Design",
    image: "/images/Reverse_countdown.png",
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
      <div className="text-center py-20 text-white">Project Not Found</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-6 px-4 py-2 bg-[#00ffe1] text-black rounded hover:bg-[#00ffe1]/80 transition"
        >
          Close
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <h2 className="text-lg text-[#00ffe1] mb-4">{project.category}</h2>
        <p className="text-lg">{project.description}</p>
      </div>
      <div className="max-w-4xl mx-auto mt-5 flex justify-start">
        {project.link && (
          <button
          onClick={() => window.open(project.link, "_blank")}
          className="py-3 px-4 bg-amber-200 rounded-md text-gray-800 hover:bg-gray-700 hover:text-blue-300"
        >
          Visit
        </button>
        )}
      </div>
    </div>
  );
}
