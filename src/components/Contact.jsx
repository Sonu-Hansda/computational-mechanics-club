export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-300">
                            Want to join us or collaborate? Reach out!
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#00ffe1] focus:border-[#00ffe1] outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#00ffe1] focus:border-[#00ffe1] outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#00ffe1] focus:border-[#00ffe1] outline-none transition-colors"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#00ffe1] focus:border-[#00ffe1] outline-none transition-colors"
                                placeholder="Tell us about your interest..."
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-gradient-to-r from-[#00ffe1] to-[#7d12ff] text-black font-medium rounded-md hover:from-[#7d12ff] hover:to-[#00ffe1] hover:text-white transition-all"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}