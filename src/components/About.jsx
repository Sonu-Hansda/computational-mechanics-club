export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            CMDC is a student-run organization focused on building practical skills in modern engineering and tech domains.
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
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#00ffe1] to-[#7d12ff] rounded-lg blur opacity-30"></div>
                        <img
                            src="https://picsum.photos/seed/teamwork/600/400 "
                            alt="Team collaboration"
                            className="relative rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}