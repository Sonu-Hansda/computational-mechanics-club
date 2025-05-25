import { Link } from 'react-router-dom';

export default function Projects() {
    const projectData = [
        {
            title: "CAD Mechanical Arm",
            category: "CAD Design",
            image: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/a42453b182001f5f018a3603a6e1e4f1/large.png"
        },
        {
            title: "Fluid Flow Simulation",
            category: "CFD Analysis",
            image: "https://www.simscale.com/wp-content/uploads/2017/01/flow-around-an-airplane.jpg"
        },
        {
            title: "ML-Based Anomaly Detection",
            category: "AI/ML Project",
            image: "https://cdn.sanity.io/images/oaglaatp/production/ed4d3b041af89853060675b0a5c1ac88ae3cfeba-1369x937.png?w=1369&h=937&auto=format"
        },
        {
            title: "Mobile App Prototype",
            category: "UI/UX Design",
            image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1695314699/catalog/1704744635590299648/dc4jkqbajqluux0ycaow.jpg"
        },
        {
            title: "Structural Stress Test",
            category: "FEA Simulation",
            image: "https://www.citi.ac.ug/public/store/1/default_images/coarses/Structural-Analyis-of-Buildings.png"
        },
        {
            title: "User Interface Wireframe",
            category: "Product Design",
            image: "https://images.ctfassets.net/w6r2i5d8q73s/5DKsAhUu3WXSG5c1NyX7Ga/fa6629512d9c56c52eb9dadea11e82ff/screen-flow-web.png?fm=webp&q=75"
        }
    ];

    return (
        <section id="projects" className="py-16 md:py-24 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Check out some of the exciting projects our members have built.
                    </p>
                </div>

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

                <div className="mt-12 text-center">
                    <a href="#" className="inline-flex items-center px-6 py-3 border border-[#00ffe1] text-[#00ffe1] font-medium rounded-md hover:bg-[#00ffe1]/10 transition-colors">
                        View All Projects
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
