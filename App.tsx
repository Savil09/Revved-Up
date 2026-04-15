import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from "./Navbar";
import Footer from './Footer';
import Home from './Home';
import CarDetail from './CarDetail';
import Comparison from './Comparison';
import DreamGarage from './DreamGarage';
import About from './About';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/garage" element={<DreamGarage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-500 selection:text-white relative">
        {/* Ambient Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,0,0,0.15),transparent)]" />
        </div>

        <div className="relative z-10">
          <ScrollToTop />
          <Navbar />
          <main className="pt-20">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
