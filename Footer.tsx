import { Link } from 'react-router-dom';
import { Gauge, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="p-1.5 rounded-lg bg-red-600 group-hover:bg-red-500 transition-colors">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold tracking-tighter text-2xl">REVVED UP ENGINES</span>
            </Link>
            <p className="text-white/50 max-w-md leading-relaxed">
              The ultimate digital showroom for automotive excellence. Exploring the engineering,
              beauty, and performance of the world's most iconic supercars and hypercars.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/30">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Catalogue</Link></li>
              <li><Link to="/comparison" className="text-white/60 hover:text-white transition-colors">Comparison Tool</Link></li>
              <li><Link to="/garage" className="text-white/60 hover:text-white transition-colors">Dream Garage</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About Me</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/30">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <p>© 2026 Revved Up Engines. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
