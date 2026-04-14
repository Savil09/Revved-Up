export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  category: string;
  price: {
    msrp: string;
    currentValue: string;
    status: 'In Production' | 'Discontinued' | 'Extremely Rare';
    productionNumbers: string;
  };
  specs: {
    engine: string;
    horsepower: number;
    torque: { nm: number; lbft: number };
    topSpeed: { kmh: number; mph: number };
    acceleration: { zeroTo100: number; zeroTo60: number };
    drivetrain: 'RWD' | 'AWD' | 'FWD';
    transmission: string;
    enginePlacement: 'Mid-engine' | 'Rear-engine' | 'Front-engine';
    weight: { kg: number; lbs: number };
    brakingSystem: string;
    aerodynamics: string;
  };
  performance: {
    handlingFocus: 'Track-oriented' | 'Street-oriented' | 'Hybrid use';
    powerToWeight: string;
  };
  design: {
    exterior: string;
    interior: string;
    features: string[];
    infotainment: string;
  };
  history: {
    brand: string;
    evolution: string;
    achievements: string;
  };
  media: {
    thumbnail: string;
    images: string[];
    videoUrl?: string;
    engineSoundUrl?: string;
  };
}
