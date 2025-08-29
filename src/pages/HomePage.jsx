import Footer from "../components/Footer";
import About from "../sections/About";
import Achievement from "../sections/Achievements";
import Contact from "../sections/Contact";
import Domains from "../sections/Domains";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Hero/>
      <Domains />
      <Projects />
      <Achievement />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}