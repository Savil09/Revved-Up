import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import { cn } from '../lib/utils';

const brands = Array.from(new Set(cars.map(c => c.make))).sort();

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'hp' | 'speed' | 'year'>('hp');

  const filteredCars = useMemo(() => {
    return cars
      .filter(car => {
        const matchesSearch = `${car.make} ${car.model}`.toLowerCase().includes(search.toLowerCase());
        const matchesBrand = !selectedBrand || car.make === selectedBrand;
        const matchesCategory = !selectedCategory || car.category === selectedCategory;
        return matchesSearch && matchesBrand && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'hp') return b.specs.horsepower - a.specs.horsepower;
        if (sortBy === 'speed') return b.specs.topSpeed.kmh - a.specs.topSpeed.kmh;
        return b.year - a.year;
      });
  }, [search, selectedBrand, selectedCategory, sortBy]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15)_0%,_transparent_70%)]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-7xl md:text-9xl tracking-tighter mb-6 relative inline-block italic skew-x-[-12deg] pr-12"
          >
            <span className="bg-gradient-to-r from-red-800 to-red-500 bg-clip-text text-transparent font-extralight">REVVED</span>
            <span className="bg-gradient-to-r from-red-800 to-red-500 bg-clip-text text-transparent font-black ml-4">UP</span>
            <div className="absolute top-[45%] left-[-5%] w-[110%] h-[2px] bg-[#050505]/30 backdrop-blur-[1px] z-10 pointer-events-none" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Engineering perfection meets raw emotion.
            Explore the pinnacle of automotive excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-red-600 to-transparent" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Filters */}
        <section className="mb-12 sticky top-24 z-40">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                placeholder="Search by make or model..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-red-500/50 transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <select
                value={selectedBrand || ''}
                onChange={(e) => setSelectedBrand(e.target.value || null)}
                className="bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-sm focus:outline-none"
              >
                <option value="" className="bg-black">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand} className="bg-black">{brand}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-sm focus:outline-none"
              >
                <option value="hp" className="bg-black">Sort by Power</option>
                <option value="speed" className="bg-black">Sort by Speed</option>
                <option value="year" className="bg-black">Sort by Year</option>
              </select>

              {(selectedBrand || selectedCategory || search) && (
                <button
                  onClick={() => {
                    setSelectedBrand(null);
                    setSelectedCategory(null);
                    setSearch('');
                  }}
                  className="p-3 rounded-2xl bg-red-600/20 text-red-500 hover:bg-red-600/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-xl">No cars found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
