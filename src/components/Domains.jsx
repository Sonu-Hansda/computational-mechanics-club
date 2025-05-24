export default function Domains(){
    return (
         <section id="domains" className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technical Domains</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              CMDC focuses on cutting-edge technologies across multiple engineering fields.
            </p>
          </div>

          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "CAD",
                description: "Design mechanical parts, assemblies, and prototypes using tools like SolidWorks and AutoCAD.",
                icon: (
                  <svg className=" w-10 h-10 text-[#00ffe1] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: "Simulation",
                description: "Use ANSYS, MATLAB, and other simulation tools to test designs in virtual environments.",
                icon: (
                  <svg className="w-10 h-10 text-[#00ffe1] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "AI/ML",
                description: "Apply machine learning to solve real-world problems and build intelligent systems.",
                icon: (
                  <svg className="w-10 h-10 text-[#00ffe1] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9h14M5 15h14M5 11h14M5 17h14M5 5h14M5 7h14" />
                  </svg>
                )
              },
              {
                title: "Product Design",
                description: "Create intuitive user experiences and design digital products that solve real problems.",
                icon: (
                  <svg className="w-10 h-10 text-[#00ffe1] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.172 2.172a2 2 0 010 2.828l-8.486 8.486a2 2 0 01-2.828 0l-2.172-2.172a2 2 0 010-2.828L8.657 7.343z" />
                  </svg>
                )
              }
            ].map((domain, index) => (
              <div 
                key={index} 
                className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-[#00ffe1]/30 hover:shadow-lg transition-shadow border border-gray-600 group"
              >
                <div className="transition-transform duration-300 group-hover:scale-105">
                  {domain.icon}
                  <h3 className="text-xl font-bold mb-3">{domain.title}</h3>
                  <p className="text-gray-300">{domain.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}