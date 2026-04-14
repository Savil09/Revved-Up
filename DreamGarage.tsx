import { motion, AnimatePresence } from 'motion/react';
import { Heart, Car as CarIcon, ArrowRight } from 'lucide-react';
import { cars } from '../data/cars';
import { useDreamGarage } from '../hooks/useDreamGarage';
import CarCard from '../components/CarCard';
import { Link } from 'react-router-dom';

export default function DreamGarage() {
  const { garage } = useDreamGarage();
  const favoriteCars = cars.filter(car => garage.includes(car.id));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-4">DREAM GARAGE</h1>
          <p className="text-white/50 text-lg">Your personal collection of automotive masterpieces.</p>
        </div>
        <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
          <Heart className="w-5 h-5 text-red-500 fill-current" />
          <span className="font-bold">{favoriteCars.length} Cars Saved</span>
        </div>
      </div>

      {favoriteCars.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {favoriteCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-32 bg-white/5 border border-white/10 border-dashed rounded-[3rem]">
          <CarIcon className="w-16 h-16 text-white/10 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Your garage is empty</h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            Start exploring the catalogue and save your favorite cars to build your ultimate digital collection.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Explore Catalogue
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  );
}
