export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
                        <p className="text-lg text-gray-300 mb-6">
                           CMDC is a student-led initiative dedicated to cultivating practical, industry-relevant skills in cutting-edge engineering and technology fields.
                        </p>
                        <p className="text-lg text-gray-300 mb-8">
                            We provide hands-on workshops, collaborative project development, and mentorship to help students grow technically and professionally.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-3xl font-bold text-[#00ffe1]">200+</div>
                                <div className="text-gray-400">Active Members</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#00ffe1]">10+</div>
                                <div className="text-gray-400">Projects Built</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-b from-[#00ffe1] to-[#026969] rounded-lg blur opacity-60"></div>
                        <img
                            src="/images/workshop.jpg"
                            alt="Team collaboration"
                            className="relative rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}