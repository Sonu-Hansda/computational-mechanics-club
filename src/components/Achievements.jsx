export default function Achievement() {
    return (
        <section id="achievement" className="py-16 md:py-24 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Recent Achievement</h2>
                        
                        <p className="text-lg text-gray-300 mb-4">
                            <span className="font-semibold text-[#00ffe1]">Competition:</span> Research Design Competition
                      </p>
                        <p className="text-lg text-gray-300 mb-4">
                            <span className="font-semibold text-[#00ffe1]">Position:</span> 3rd Place
                        </p>
                        <p className="text-lg text-gray-300 mb-4">
                            <span className="font-semibold text-[#00ffe1]">Organized by:</span> Indian Society for Applied Mechanics (ISAM) during the 1st Mechanics Lecture Series at IIITDM Kancheepuram
                        </p>
                        <p className="text-lg text-gray-300 mb-8">
                            <span className="font-semibold text-[#00ffe1]">Team Members:</span> Ravi Ranjan,Aditya Singh,Sushil Chahande and Anubhuti Pali.
                        </p>
                        <a
                            href="https://lnkd.in/gqKyFg6N"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-[#00ffe1] font-semibold hover:underline"
                        >
                            Learn more about our club →
                        </a>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-b from-[#00ffe1] to-[#026969] rounded-lg blur opacity-60"></div>
                        <img
                            src="/images/bat.png"
                            alt="Cricket Bat Design"
                            className="relative rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

