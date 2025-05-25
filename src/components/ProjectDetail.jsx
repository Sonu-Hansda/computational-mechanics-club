import { useParams, useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "CAD Mechanical Arm",
    category: "CAD Design",
    image: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/a42453b182001f5f018a3603a6e1e4f1/large.png",
    description: "A mechanical arm designed using CAD software to replicate human arm movement."
  },
  {
    title: "Fluid Flow Simulation",
    category: "CFD Analysis",
    image: "https://www.simscale.com/wp-content/uploads/2017/01/flow-around-an-airplane.jpg",
    description: "Simulation of fluid dynamics around an airplane using CFD tools."
  },
  {
    title: "ML-Based Anomaly Detection",
    category: "AI/ML Project",
    image: "https://cdn.sanity.io/images/oaglaatp/production/ed4d3b041af89853060675b0a5c1ac88ae3cfeba-1369x937.png?w=1369&h=937&auto=format",
    description: "An ML project for identifying unusual patterns in data streams to detect anomalies."
  },
  {
    title: "Mobile App Prototype",
    category: "UI/UX Design",
    image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1695314699/catalog/1704744635590299648/dc4jkqbajqluux0ycaow.jpg",
    description: "A clickable prototype of a mobile application designed for user testing."
  },
  {
    title: "Structural Stress Test",
    category: "FEA Simulation",
    image: "https://www.citi.ac.ug/public/store/1/default_images/coarses/Structural-Analyis-of-Buildings.png",
    description: "Finite Element Analysis of a building structure under various loads."
  },
  {
    title: "User Interface Wireframe",
    category: "Product Design",
    image: "https://images.ctfassets.net/w6r2i5d8q73s/5DKsAhUu3WXSG5c1NyX7Ga/fa6629512d9c56c52eb9dadea11e82ff/screen-flow-web.png?fm=webp&q=75",
    description: "A wireframe layout for a web product's interface to guide development."
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
    </div>
  );
}
