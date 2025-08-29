import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './sections/About';
import Contact from './sections/Contact';
import Domains from './sections/Domains';
import Footer from './components/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import ProjectDetail from './components/ProjectDetail';
import AllProjects from './components/AllProjects'; 
import { Analytics } from '@vercel/analytics/react';
import Achievement from './sections/Achievements';

function HomePage() {
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
         <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
      <Analytics/>
    </Router>
  );
}
