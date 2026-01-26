import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Domains from "@/sections/Domains";
import Projects from "@/sections/Projects";
import Achievement from "@/sections/Achievements";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-900 text-gray-100">
            <Header />
            <Hero />
            <Domains />
            <Projects />
            <Achievement />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}