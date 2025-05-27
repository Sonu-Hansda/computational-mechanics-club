import { Link, useNavigate } from 'react-router-dom';

export default function AllProjects() {
    const navigate = useNavigate();
    const projectData = [
        {
            title: "Design and Development of  Automated Household Waste Segregation System",
            category: "ANSYS",
            image: "/images/shubham.png"
        },
        {
            title: "ML Based Predictive Modeling of Wire EDM Performance Metrics",
            category: "AI/ML",
            image: "/images/sonu.png"
        },
        {
            title: "CFD-Based Aerodynamic Analysis of the NACA 0012 Airfoil",
            category: "ANSYS",
            image: "/images/vivek1.jpg"
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
            title: "Wack-a-Mole Game",
            category: "UI/UX Game",
            image: "/images/Wack-a-mole.jpg"
        },
        {
            title: "Traffic Light Simulation",
            category: "CFD Analysis",
            image: "/images/traffic_light.png"
        },
        {
            title: "Melody Buzzers",
            category: "AI/ML Project",
            image: "/images/Melody_Buzzers.png"
        },
        {
            title: "Stack Tower Game",
            category: "UI/UX Design",
            image: "/images/Stack_tower_game.jpg"
        },
        {
            title: "RGB Light Control",
            category: "FEA Simulation",
            image: "..//images/RGB_Light_arduino.png"
        },
        {
            title: "Reverse Countdown Display",
            category: "Product Design",
            image: "..//images/Reverse_countdown.png"
        }
    ];

    return (
        
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                   <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 px-4 py-2 bg-[#00ffe1] text-black rounded hover:bg-[#00ffe1]/80 transition"
      >
        Close
      </button>
      
          
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">All Projects</h2>
                
                 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <Link to={`/projects/${index}`} key={index}>
                            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-[#00ffe1]/30 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="p-6 text-white">
                                        <span className="text-sm uppercase tracking-wider text-[#00ffe1]">{project.category}</span>
                                        <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
