import About from './components/About';
import Contact from './components/Contact';
import Domains from './components/Domains';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* DOMAINS SECTION */}
      <Domains />
      {/* PROJECTS SECTION */}
      <Projects />
      {/* ABOUT SECTION */}
      <About />
      {/* CONTACT SECTION */}
      <Contact />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}