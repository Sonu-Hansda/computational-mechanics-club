import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import AllProjects from './pages/AllProjects'; 
import { Analytics } from '@vercel/analytics/react';
import HomePage from './pages/HomePage';

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
