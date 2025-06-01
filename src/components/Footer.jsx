export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">CMDC</h3>
                        <p className="text-gray-400 mb-4 max-w-md">
                            A technical club empowering students through hands-on experience in CAD, Simulation, AI/ML, and Product Design.
                        </p>
                        <div className="flex space-x-4">
                            <a target="_blank"href="https://www.instagram.com/cmdc.nitjsr?igsh=anNnMm9ia2lhNzI5" className="text-gray-400 hover:text-[#00ffe1] transition-colors">
                                <img src=".\images\insta.png" alt="d" className="w-16 ml-1 rounded-lg filter invert"/>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'Domains', 'Projects','Achievement', 'About', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[#00ffe1] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Join Us</h4>
                        <p className="text-gray-400 text-sm">
                            Interested in joining our club or collaborating?
                        </p>
                        <a href="#contact" className="inline-block mt-2 px-4 py-2 bg-gradient-to-b from-[#00ffe1] to-[#0a6971] text-black text-sm font-medium rounded-md hover:opacity-90 transition-opacity">
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} CMDC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}