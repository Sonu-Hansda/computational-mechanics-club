import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Domains from './components/Domains';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import AllProjects from './components/AllProjects'; 
import { Analytics } from '@vercel/analytics/react';
import Achievement from './components/Achievements';

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
