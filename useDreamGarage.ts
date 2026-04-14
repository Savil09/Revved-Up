import { useState, useEffect } from 'react';

export function useDreamGarage() {
  const [garage, setGarage] = useState<string[]>(() => {
    const saved = localStorage.getItem('dream-garage');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('dream-garage', JSON.stringify(garage));
  }, [garage]);

  const toggleCar = (id: string) => {
    setGarage(prev =>
      prev.includes(id) ? prev.filter(carId => carId !== id) : [...prev, id]
    );
  };

  const isInGarage = (id: string) => garage.includes(id);

  return { garage, toggleCar, isInGarage };
}
