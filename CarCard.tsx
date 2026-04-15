import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Zap, Gauge, ArrowRight } from 'lucide-react';
import { Car } from './types';
import { cn } from './utils';
import { useDreamGarage } from './useDreamGarage';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { toggleCar, isInGarage } = useDreamGarage();
  const isFavorite = isInGarage(car.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={car.media.thumbnail}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleCar(car.id);
          }}
          className={cn(
            'absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all duration-300',
            isFavorite
              ? 'bg-red-600 text-white'
              : 'bg-black/40 text-white/70 hover:bg-black/60 hover:text-white'
          )}
        >
          <Heart className={cn('w-5 h-5', isFavorite && 'fill-current')} />
        </button>

        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest border border-white/10">
            {car.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">{car.make}</h3>
          <h2 className="text-2xl font-bold tracking-tight group-hover:text-red-500 transition-colors">{car.model}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-white/60">
            <Zap className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium">{car.specs.horsepower} HP</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Gauge className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">{car.specs.topSpeed.mph} MPH</span>
          </div>
        </div>

        <Link
          to={`/car/${car.id}`}
          className="w-full py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 font-bold text-sm group-hover:bg-white group-hover:text-black transition-all duration-300"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
