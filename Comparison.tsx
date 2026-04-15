import { useState } from 'react';
import { motion } from 'react';
import { Plus, X, Gauge, Zap, Timer, Weight } from 'lucide-react';
import { cars } from '../cars';
import { cn } from '../utils';

export default function Comparison() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const selectedCars = selectedIds.map(id => cars.find(c => c.id === id)!).filter(Boolean);

  const addCar = (id: string) => {
    if (selectedIds.length < 3 && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const removeCar = (id: string) => {
    setSelectedIds(selectedIds.filter(i => i !== id));
  };

  const metrics = [
    { label: 'Horsepower', key: 'horsepower', icon: Zap, unit: 'HP' },
    { label: 'Top Speed', key: 'topSpeed', icon: Gauge, unit: 'MPH', subKey: 'mph' },
    { label: '0-60 MPH', key: 'acceleration', icon: Timer, unit: 's', subKey: 'zeroTo60' },
    { label: 'Weight', key: 'weight', icon: Weight, unit: 'KG', subKey: 'kg' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-black tracking-tighter mb-4">SIDE-BY-SIDE</h1>
        <p className="text-white/50 text-lg">Compare up to 3 cars across key performance metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[0, 1, 2].map((index) => {
          const car = selectedCars[index];
          return (
            <div key={index} className="relative aspect-[16/10] rounded-3xl border-2 border-dashed border-white/10 flex items-center justify-center overflow-hidden bg-white/5">
              {car ? (
                <>
                  <img src={car.media.thumbnail} className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">{car.make}</h3>
                    <h2 className="text-2xl font-bold mb-4">{car.model}</h2>
                    <button
                      onClick={() => removeCar(car.id)}
                      className="p-2 rounded-full bg-red-600/20 text-red-500 hover:bg-red-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full bg-white/5">
                    <Plus className="w-8 h-8 text-white/20" />
                  </div>
                  <select
                    onChange={(e) => addCar(e.target.value)}
                    className="bg-transparent text-white/40 font-bold uppercase tracking-widest text-xs focus:outline-none cursor-pointer"
                    value=""
                  >
                    <option value="" disabled>Select a car</option>
                    {cars.filter(c => !selectedIds.includes(c.id)).map(c => (
                      <option key={c.id} value={c.id} className="bg-black">{c.make} {c.model}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedCars.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {metrics.map((metric) => (
              <div key={metric.label} className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <metric.icon className="w-5 h-5 text-white/30" />
                  <h4 className="font-bold uppercase tracking-widest text-xs text-white/40">{metric.label}</h4>
                </div>
                <div className="space-y-8">
                  {selectedCars.map((car) => {
                    const value = metric.subKey
                      ? (car.specs as any)[metric.key][metric.subKey]
                      : (car.specs as any)[metric.key];
                    return (
                      <div key={car.id} className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                          <span className="text-xs font-bold text-white/30 truncate max-w-[100px]">{car.model}</span>
                          <span className="text-xl font-black">{value} <span className="text-[10px] text-white/30">{metric.unit}</span></span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min((value / 1600) * 100, 100)}%` }}
                            className="h-full bg-red-600"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
