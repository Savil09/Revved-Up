import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Zap, Gauge, Timer, Weight, Shield, Wind,
  DollarSign, History, Info, Play, Heart,
  ArrowLeft, Check, Pause, Volume2
} from 'lucide-react';
import { cars } from '../data/cars';
import { useDreamGarage } from '../hooks/useDreamGarage';
import { cn } from '../lib/utils';
import {
  BarChart, Bar, XAxis, YAxis,
  Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { useState, useRef, useEffect } from 'react';

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);
  const { toggleCar, isInGarage } = useDreamGarage();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (car?.media.engineSoundUrl) {
      const audio = new Audio(car.media.engineSoundUrl);
      audioRef.current = audio;
      const handleEnded = () => setIsPlaying(false);
      const handleError = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);
      return () => {
        audio.pause();
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
        audioRef.current = null;
      };
    }
  }, [car?.media.engineSoundUrl]);

  const toggleAudio = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  if (!car) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
        <Link to="/" className="text-red-500 hover:underline">Return to Catalogue</Link>
      </div>
    );
  }

  const isFavorite = isInGarage(car.id);

  const chartData = [
    { name: 'Horsepower', value: car.specs.horsepower, full: 1600, color: '#ef4444' },
    { name: 'Top Speed (MPH)', value: car.specs.topSpeed.mph, full: 300, color: '#3b82f6' },
    { name: '0-60 (s)', value: 10 - car.specs.acceleration.zeroTo60, display: car.specs.acceleration.zeroTo60, full: 10, color: '#eab308' },
  ];

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={car.media.images[0]}
          alt={car.model}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-20 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Catalogue
            </Link>
            <h2 className="text-white/50 text-xl font-bold uppercase tracking-[0.3em] mb-2">{car.make}</h2>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8">{car.model}</h1>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => toggleCar(car.id)}
                className={cn(
                  'flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300',
                  isFavorite ? 'bg-red-600 text-white' : 'bg-white text-black hover:bg-red-600 hover:text-white'
                )}
              >
                <Heart className={cn('w-5 h-5', isFavorite && 'fill-current')} />
                {isFavorite ? 'In Your Garage' : 'Add to Garage'}
              </button>
              <div className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 font-bold">
                {car.price.msrp}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-20">
          {/* Quick Specs */}
          <section>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Gauge className="w-6 h-6 text-red-500" />
              Performance Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Power', value: `${car.specs.horsepower} HP`, icon: Zap },
                { label: 'Top Speed', value: `${car.specs.topSpeed.mph} MPH`, icon: Gauge },
                { label: '0-60 MPH', value: `${car.specs.acceleration.zeroTo60}s`, icon: Timer },
                { label: 'Weight', value: `${car.specs.weight.kg} KG`, icon: Weight },
              ].map((spec) => (
                <div key={spec.label} className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <spec.icon className="w-5 h-5 text-white/30 mb-4" />
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{spec.label}</p>
                  <p className="text-xl font-bold">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Specs Table */}
          <section>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Info className="w-6 h-6 text-blue-500" />
              Technical Specifications
            </h3>
            <div className="rounded-3xl border border-white/10 overflow-hidden bg-white/5">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    ['Engine', car.specs.engine],
                    ['Torque', `${car.specs.torque.nm} Nm / ${car.specs.torque.lbft} lb-ft`],
                    ['Drivetrain', car.specs.drivetrain],
                    ['Transmission', car.specs.transmission],
                    ['Engine Placement', car.specs.enginePlacement],
                    ['Braking System', car.specs.brakingSystem],
                    ['Aerodynamics', car.specs.aerodynamics],
                    ['Power-to-Weight', car.performance.powerToWeight],
                  ].map(([label, value], i) => (
                    <tr key={label} className={cn(i !== 7 && 'border-b border-white/5')}>
                      <td className="p-4 text-white/40 font-medium text-sm w-1/3">{label}</td>
                      <td className="p-4 font-bold text-sm">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Design */}
          <section>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Wind className="w-6 h-6 text-emerald-500" />
              Design & Innovation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-2">Exterior</h4>
                  <p className="text-white/70 leading-relaxed">{car.design.exterior}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-2">Interior</h4>
                  <p className="text-white/70 leading-relaxed">{car.design.interior}</p>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-6">Key Features</h4>
                <ul className="space-y-4">
                  {car.design.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                      <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-500">
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* History */}
          <section className="p-10 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <History className="w-6 h-6 text-amber-500" />
              Legacy & History
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-2">Evolution</h4>
                <p className="text-lg text-white/80 leading-relaxed italic">"{car.history.evolution}"</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-2">Notable Achievements</h4>
                <p className="text-white/70 leading-relaxed">{car.history.achievements}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Market Info */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-yellow-500" />
              Market Data
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Current Value</p>
                <p className="text-2xl font-bold text-emerald-400">{car.price.currentValue}</p>
              </div>
              <div>
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Production</p>
                <p className="font-medium">{car.price.productionNumbers}</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <span className={cn(
                  'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest',
                  car.price.status === 'In Production' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-red-500/20 text-red-500'
                )}>
                  {car.price.status}
                </span>
              </div>
            </div>
          </div>

          {/* Engine Sound */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-red-600/10 to-transparent border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-red-500" />
              Engine Sound
            </h3>
            <div className="flex items-center gap-6">
              <button
                onClick={toggleAudio}
                className={cn(
                  'w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg',
                  isPlaying
                    ? 'bg-white text-black shadow-white/20'
                    : 'bg-red-600 text-white shadow-red-600/20 hover:bg-red-500'
                )}
              >
                {isPlaying
                  ? <Pause className="w-6 h-6 fill-current" />
                  : <Play className="w-6 h-6 fill-current ml-1" />}
              </button>
              <div className="flex-1 space-y-2">
                <p className="text-sm font-bold uppercase tracking-widest text-white/40">
                  {isPlaying ? 'Revving Engine...' : 'Cold Start Audio'}
                </p>
                <div className="h-8 flex items-center gap-1">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: isPlaying ? [8, 24, 12, 32, 16][i % 5] : 4,
                        opacity: isPlaying ? 1 : 0.3
                      }}
                      transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.05, ease: 'easeInOut' }}
                      className="w-1 bg-red-500 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
            {!car.media.engineSoundUrl && (
              <p className="mt-4 text-[10px] text-white/20 uppercase tracking-widest text-center">
                Audio preview not available for this model
              </p>
            )}
          </div>

          {/* Performance Chart */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 h-[400px]">
            <h3 className="text-xl font-bold mb-6">Performance Metrics</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={chartData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#ffffff50', fontSize: 10 }} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-black/90 border border-white/10 p-2 rounded-lg text-xs">
                          <p className="font-bold">{data.name}: {data.display || data.value}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Video */}
          {car.media.videoUrl && (
            <div className="rounded-3xl overflow-hidden aspect-video">
              <iframe src={car.media.videoUrl} className="w-full h-full" allowFullScreen />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
