import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Gauge, Car, Heart, Info, GitCompare } from 'lucide-react';
import { cn } from "./utils";

const navItems = [
  { name: 'Catalogue', path: '/', icon: Car },
  { name: 'Comparison', path: '/comparison', icon: GitCompare },
  { name: 'Dream Garage', path: '/garage', icon: Heart },
  { name: 'About', path: '/about', icon: Info },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <Link to="/" className="flex items-center gap-2 mr-6 group">
          <div className="p-1.5 rounded-lg bg-red-600 group-hover:bg-red-500 transition-colors">
            <Gauge className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold tracking-tighter text-lg bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            REVVED UP
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors rounded-full flex items-center gap-2',
                  isActive ? 'text-white' : 'text-white/50 hover:text-white'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
