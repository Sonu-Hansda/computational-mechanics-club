import { useParams, useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "Wack-A-Mole Game",
    category: "CAD Design",
    image: "../public/images/Wack-a-mole.jpg",
    description: "A basic fun and interactive wack-a-mole game made with using Html CSS and JavaScript for users to pass time when they are free which taught me things and enabled me to go deeper in the world of web development. This game is built for just fun and anyone can play it and can suggest changes.",
    link: "https://anoopkr1906.github.io/Whack-a-mole/"
  },
  {
    title: "Traffic Light Simulation using Arduino in Tinkercad",
    category: "CFD Analysis",
    image: "../public/images/traffic_light.png",
    description: "This project simulates a basic traffic light system using an Arduino Uno and three LEDs.(Red, Yellow, and Green). The Arduino is programmed to control the LEDs in a sequence that mimics real-world traffic lights. Each LED turns on for a specific duration—Green for 'Go', Yellow for 'Caution', and Red for 'Stop'—in a continuous loop. This project helps in understanding digital output control, timing delays, and the concept of traffic automation using Arduino in Tinkercad. ",
    link: "https://www.tinkercad.com/things/bLgKClS4Yut-project-3-traffic-light"
  },
  {
    title: "Melody Buzzers Using Arduino in Tinkercad",
    category: "AI/ML Project",
    image: "../../public/images/Melody_Buzzers.png",
    description: "This project demonstrates how to generate melodies using a piezo buzzer connected to an Arduino Uno. The Arduino is programmed to send specific frequencies to the piezo buzzer, creating musical notes. This project is a fun and educational way to learn about sound generation, frequency control, and basic programming using Arduino in Tinkercad. ",
    link: "https://www.tinkercad.com/things/0M2LONhbZF4-project-6-melody-buzzers-"
  },
  {
    title: "Stack Tower Game",
    category: "UI/UX Design",
    image: "../public/images/Stack_tower_game.jpg",
    description: " A fun and interactive stack tower game made with using Html css and javascript and canvas Api which taught me things and enabled me to go deeper in the world of web development. This game is built for just fun and anyone can play it and can suggest changes .",
    link: "https://anoopkr1906.github.io/Stack-Tower-Game-HTML_CSS_JS/"
  },
  {
    title: "RGB Light Control using Arduino in Tinkercad",
    category: "FEA Simulation",
    image: "../../public/images/RGB_Light_arduino.png",
    description: "This project showcases how to control an RGB LED using an Arduino Uno. By sending PWM (Pulse Width Modulation) signals to the red, green, and blue pins of the RGB LED, different colors can be created by adjusting the intensity of each component. This project helps in understanding RGB color mixing, PWM control, and the basics of interfacing LEDs with Arduino in Tinkercad. ",
    link: "https://www.tinkercad.com/things/7Q55UmHDH0u-project-10-rgb-light-"
  },
  {
    title: "Reverse Countdown Display using Arduino in Tinkercad",
    category: "Product Design",
    image: "../../public/images/Reverse_countdown.png",
    description: "A wireframe layout for a web product's interface to guide development.",
    link: "https://www.tinkercad.com/things/1sRFlURrtSb-project-11-countdown-light"
  }
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return <div className="text-center py-20 text-white">Project Not Found</div>;
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
        <img src={project.image} alt={project.title} className="w-full rounded-lg mb-6" />
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <h2 className="text-lg text-[#00ffe1] mb-4">{project.category}</h2>
        <p className="text-lg">{project.description}</p>
        
      </div>
      <div className="max-w-4xl mx-auto mt-5 flex justify-start">
        <button 
        onClick={() => window.open(project.link, '_blank')}
        className="py-3 px-4 bg-amber-200 rounded-md text-gray-800 hover:bg-gray-700 hover:text-blue-300"
        >
          {/* <a href={project.link}>
            Visit
          </a> */}
          Visit
        </button>
      </div>
    </div>
  );
}
