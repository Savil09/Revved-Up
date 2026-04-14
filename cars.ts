import { Car } from '../types';

export const cars: Car[] = [
  {
    id: 'ferrari-laferrari',
    make: 'Ferrari',
    model: 'LaFerrari',
    year: 2013,
    category: 'Hypercar',
    price: {
      msrp: '$1,420,000',
      currentValue: '$4,000,000 - $5,000,000',
      status: 'Discontinued',
      productionNumbers: '499 Coupes, 210 Apertas'
    },
    specs: {
      engine: '6.3L V12 Hybrid',
      horsepower: 950,
      torque: { nm: 900, lbft: 664 },
      topSpeed: { kmh: 350, mph: 217 },
      acceleration: { zeroTo100: 2.4, zeroTo60: 2.4 },
      drivetrain: 'RWD',
      transmission: '7-speed Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1255, lbs: 2767 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Active aerodynamics with integrated rear spoiler and underbody flaps'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.75 hp/kg'
    },
    design: {
      exterior: 'Sculpted by the Ferrari Styling Centre, featuring F1-inspired aerodynamics.',
      interior: 'Minimalist, driver-focused cockpit with Alcantara and carbon fiber.',
      features: ['Butterfly doors', 'HY-KERS system', 'Manettino dial'],
      infotainment: 'Ferrari Telemetry system'
    },
    history: {
      brand: 'Ferrari',
      evolution: 'The successor to the Enzo, representing the pinnacle of Ferrari hybrid technology.',
      achievements: 'Fiorano lap time of 1:19.70.'
    },
    media: {
      thumbnail: 'https://static.wikia.nocookie.net/gran-turismo/images/9/9d/Ferrari_LaFerrari_%2713.jpg/revision/latest?cb=20220930181758',
      images: [
        'https://static.wikia.nocookie.net/gran-turismo/images/9/9d/Ferrari_LaFerrari_%2713.jpg/revision/latest?cb=20220930181758',
        'https://static.wikia.nocookie.net/gran-turismo/images/9/9d/Ferrari_LaFerrari_%2713.jpg/revision/latest?cb=20220930181758'
      ],
    }
  },
  {
    id: 'mclaren-p1',
    make: 'McLaren',
    model: 'P1',
    year: 2013,
    category: 'Hypercar',
    price: {
      msrp: '$1,150,000',
      currentValue: '$2,000,000 - $2,500,000',
      status: 'Discontinued',
      productionNumbers: '375 units'
    },
    specs: {
      engine: '3.8L Twin-Turbo V8 Hybrid',
      horsepower: 903,
      torque: { nm: 900, lbft: 664 },
      topSpeed: { kmh: 350, mph: 217 },
      acceleration: { zeroTo100: 2.8, zeroTo60: 2.7 },
      drivetrain: 'RWD',
      transmission: '7-speed Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1395, lbs: 3075 },
      brakingSystem: 'Akebono Carbon Ceramic Brakes',
      aerodynamics: 'Active rear wing with DRS (Drag Reduction System)'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.65 hp/kg'
    },
    design: {
      exterior: 'Shrink-wrapped carbon fiber body for maximum aerodynamic efficiency.',
      interior: 'Ultra-lightweight cabin with exposed carbon fiber and racing seats.',
      features: ['Dihedral doors', 'IPAS (Instant Power Assist System)', 'Race Mode'],
      infotainment: 'McLaren IRIS system'
    },
    history: {
      brand: 'McLaren',
      evolution: 'The spiritual successor to the McLaren F1.',
      achievements: 'Sub-7 minute Nürburgring lap time (unconfirmed officially but widely reported).'
    },
    media: {
      thumbnail: 'https://www.thesupercarblog.com/wp-content/uploads/2023/02/McLaren-P1-HDK-Lanzante-Saudi-Arabia-2.jpg',
      images: [
        'https://www.thesupercarblog.com/wp-content/uploads/2023/02/McLaren-P1-HDK-Lanzante-Saudi-Arabia-2.jpg',
        'https://www.thesupercarblog.com/wp-content/uploads/2023/02/McLaren-P1-HDK-Lanzante-Saudi-Arabia-2.jpg'
      ],
    }
  },
  {
    id: 'porsche-918-spyder',
    make: 'Porsche',
    model: '918 Spyder',
    year: 2013,
    category: 'Hypercar',
    price: {
      msrp: '$845,000',
      currentValue: '$1,800,000 - $2,200,000',
      status: 'Discontinued',
      productionNumbers: '918 units'
    },
    specs: {
      engine: '4.6L V8 Hybrid',
      horsepower: 887,
      torque: { nm: 1280, lbft: 944 },
      topSpeed: { kmh: 345, mph: 214 },
      acceleration: { zeroTo100: 2.5, zeroTo60: 2.2 },
      drivetrain: 'AWD',
      transmission: '7-speed PDK Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1634, lbs: 3602 },
      brakingSystem: 'PCCB (Porsche Ceramic Composite Brake)',
      aerodynamics: 'Porsche Active Aerodynamics (PAA)'
    },
    performance: {
      handlingFocus: 'Hybrid use',
      powerToWeight: '0.54 hp/kg'
    },
    design: {
      exterior: 'Classic Porsche lines with futuristic lighting and top-exit exhausts.',
      interior: 'High-tech floating console with touch-sensitive controls.',
      features: ['Removable roof panels', 'Rear-axle steering', 'Electric-only mode'],
      infotainment: 'Porsche Communication Management (PCM)'
    },
    history: {
      brand: 'Porsche',
      evolution: 'Porsche\'s first plug-in hybrid hypercar.',
      achievements: 'First production car to break the 7-minute barrier at the Nürburgring (6:57).'
    },
    media: {
      thumbnail: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562241660/autoexpress/2/23/porsche-918-spyder-2013-front-action-2.jpg',
      images: [
        'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562241660/autoexpress/2/23/porsche-918-spyder-2013-front-action-2.jpg',
        'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562241660/autoexpress/2/23/porsche-918-spyder-2013-front-action-2.jpg'
      ],
    }
  },
  {
    id: 'lamborghini-aventador-svj',
    make: 'Lamborghini',
    model: 'Aventador SVJ',
    year: 2018,
    category: 'Supercar',
    price: {
      msrp: '$517,770',
      currentValue: '$700,000 - $900,000',
      status: 'Discontinued',
      productionNumbers: '900 units'
    },
    specs: {
      engine: '6.5L V12',
      horsepower: 770,
      torque: { nm: 720, lbft: 531 },
      topSpeed: { kmh: 350, mph: 217 },
      acceleration: { zeroTo100: 2.8, zeroTo60: 2.7 },
      drivetrain: 'AWD',
      transmission: '7-speed ISR (Independent Shifting Rods)',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1525, lbs: 3362 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'ALA 2.0 (Aerodinamica Lamborghini Attiva)'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.50 hp/kg'
    },
    design: {
      exterior: 'Aggressive, jet-fighter inspired styling with massive rear wing.',
      interior: 'Alcantara-heavy cockpit with carbon fiber bucket seats.',
      features: ['Scissor doors', 'Four-wheel steering', 'Active suspension'],
      infotainment: 'Lamborghini Infotainment System'
    },
    history: {
      brand: 'Lamborghini',
      evolution: 'The ultimate evolution of the Aventador platform.',
      achievements: 'Nürburgring Nordschleife record holder (6:44.97) in 2018.'
    },
    media: {
      thumbnail: 'https://www.classicdriver.com/sites/default/files/users/224449/cars_images/224449-1009093-car-20240424_145728-sbxaventadorsvj016.jpg',
      images: [
        'https://www.classicdriver.com/sites/default/files/users/224449/cars_images/224449-1009093-car-20240424_145728-sbxaventadorsvj016.jpg',
        'https://www.classicdriver.com/sites/default/files/users/224449/cars_images/224449-1009093-car-20240424_145728-sbxaventadorsvj016.jpg'
      ],
    }
  },
  {
    id: 'koenigsegg-jesko',
    make: 'Koenigsegg',
    model: 'Jesko',
    year: 2021,
    category: 'Hypercar',
    price: {
      msrp: '$3,000,000',
      currentValue: '$4,000,000+',
      status: 'In Production',
      productionNumbers: '125 units'
    },
    specs: {
      engine: '5.0L Twin-Turbo V8',
      horsepower: 1600,
      torque: { nm: 1500, lbft: 1106 },
      topSpeed: { kmh: 480, mph: 300 },
      acceleration: { zeroTo100: 2.5, zeroTo60: 2.4 },
      drivetrain: 'RWD',
      transmission: '9-speed LST (Light Speed Transmission)',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1420, lbs: 3131 },
      brakingSystem: 'Ventilated Ceramic Discs',
      aerodynamics: 'Over 1000kg of downforce at 275 km/h'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '1.13 hp/kg'
    },
    design: {
      exterior: 'Extreme aerodynamic focus with a massive active rear wing.',
      interior: 'Luxury meets racing with SmartCluster and SmartWheel controls.',
      features: ['Dihedral Synchro-helix doors', 'Triplex suspension', 'Autoskin'],
      infotainment: 'SmartCenter touchscreen'
    },
    history: {
      brand: 'Koenigsegg',
      evolution: 'Named after Jesko von Koenigsegg, the father of founder Christian von Koenigsegg.',
      achievements: 'Designed to be the fastest production car in the world.'
    },
    media: {
      thumbnail: 'https://www.topgear.com/sites/default/files/2021/07/01%209fe7aef8bdc7933d_org.jpg',
      images: [
        'https://www.topgear.com/sites/default/files/2021/07/01%209fe7aef8bdc7933d_org.jpg',
        'https://www.topgear.com/sites/default/files/2021/07/01%209fe7aef8bdc7933d_org.jpg'
      ],
    }
  },
  {
    id: 'ferrari-sf90-stradale',
    make: 'Ferrari',
    model: 'SF90 Stradale',
    year: 2020,
    category: 'Supercar',
    price: {
      msrp: '$507,000',
      currentValue: '$600,000 - $800,000',
      status: 'In Production',
      productionNumbers: 'Unlimited (Series Production)'
    },
    specs: {
      engine: '4.0L Twin-Turbo V8 Hybrid',
      horsepower: 986,
      torque: { nm: 800, lbft: 590 },
      topSpeed: { kmh: 340, mph: 211 },
      acceleration: { zeroTo100: 2.5, zeroTo60: 2.0 },
      drivetrain: 'AWD',
      transmission: '8-speed Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1570, lbs: 3461 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Shut-off Gurney active rear spoiler'
    },
    performance: {
      handlingFocus: 'Hybrid use',
      powerToWeight: '0.63 hp/kg'
    },
    design: {
      exterior: 'Compact and futuristic, with a low center of gravity.',
      interior: 'Fully digital cockpit with HMI (Human Machine Interface) technology.',
      features: ['Electric front axle', 'Assetto Fiorano package', 'eManettino'],
      infotainment: '16-inch curved HD screen'
    },
    history: {
      brand: 'Ferrari',
      evolution: 'Ferrari\'s first series-production PHEV (Plug-in Hybrid Electric Vehicle).',
      achievements: 'Fastest Ferrari road car around Fiorano (1:19.00).'
    },
    media: {
      thumbnail: 'https://www.evoindia.com/evoindia/2020-07/11ebdcdb-8e39-43d2-8b2f-11ea0472d564/Ferrari_SF90Stradale_139.jpg',
      images: [
        'https://www.evoindia.com/evoindia/2020-07/11ebdcdb-8e39-43d2-8b2f-11ea0472d564/Ferrari_SF90Stradale_139.jpg',
        'https://www.evoindia.com/evoindia/2020-07/11ebdcdb-8e39-43d2-8b2f-11ea0472d564/Ferrari_SF90Stradale_139.jpg'
      ],
    }
  },
  {
    id: 'mclaren-senna',
    make: 'McLaren',
    model: 'Senna',
    year: 2018,
    category: 'Hypercar',
    price: {
      msrp: '$837,000',
      currentValue: '$1,000,000 - $1,300,000',
      status: 'Discontinued',
      productionNumbers: '500 units'
    },
    specs: {
      engine: '4.0L Twin-Turbo V8',
      horsepower: 789,
      torque: { nm: 800, lbft: 590 },
      topSpeed: { kmh: 335, mph: 208 },
      acceleration: { zeroTo100: 2.8, zeroTo60: 2.7 },
      drivetrain: 'RWD',
      transmission: '7-speed Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1198, lbs: 2641 },
      brakingSystem: 'Next-gen Carbon Ceramic Brakes',
      aerodynamics: 'Active front and rear aero producing 800kg of downforce'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.66 hp/kg'
    },
    design: {
      exterior: 'Form follows function; every line is designed for aerodynamics.',
      interior: 'Stripped-back, lightweight cabin with optional glass door panels.',
      features: ['Active aero', 'RaceActive Chassis Control II', 'Roof-mounted exhaust'],
      infotainment: 'McLaren Infotainment System'
    },
    history: {
      brand: 'McLaren',
      evolution: 'Named after legendary F1 driver Ayrton Senna.',
      achievements: 'One of the fastest track-legal cars ever made.'
    },
    media: {
      thumbnail: 'https://images.classic.com/vehicles/5304a80b3bd54f691e1f52c9e012b7352305b3f8.jpg?w=1200&h=676&fit=crop',
      images: ['https://images.classic.com/vehicles/5304a80b3bd54f691e1f52c9e012b7352305b3f8.jpg?w=1200&h=676&fit=crop'],
    }
  },
  {
    id: 'pagani-huayra',
    make: 'Pagani',
    model: 'Huayra',
    year: 2012,
    category: 'Hypercar',
    price: {
      msrp: '$1,300,000',
      currentValue: '$3,000,000+',
      status: 'Discontinued',
      productionNumbers: '100 units'
    },
    specs: {
      engine: '6.0L Twin-Turbo V12 (AMG)',
      horsepower: 730,
      torque: { nm: 1000, lbft: 738 },
      topSpeed: { kmh: 383, mph: 238 },
      acceleration: { zeroTo100: 3.2, zeroTo60: 2.8 },
      drivetrain: 'RWD',
      transmission: '7-speed Sequential',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1350, lbs: 2976 },
      brakingSystem: 'Brembo Carbon Ceramic',
      aerodynamics: 'Four independent active flaps'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.54 hp/kg'
    },
    design: {
      exterior: 'Art on wheels; sculpted carbon-titanium body.',
      interior: 'Exquisite craftsmanship with leather, aluminum, and carbon fiber.',
      features: ['Gullwing doors', 'Active aero flaps', 'Titanium exhaust'],
      infotainment: 'Custom Pagani system'
    },
    history: {
      brand: 'Pagani',
      evolution: 'Successor to the Zonda, named after the God of Wind.',
      achievements: 'Top Gear Car of the Year 2012.'
    },
    media: {
      thumbnail: 'https://i0.wp.com/thesupremecarinitiative.com/wp-content/uploads/2020/01/2012-pagani-huayra-front-angle-view-carbuzz-401830-840x560-1.jpg?resize=750%2C500&ssl=1',
      images: ['https://i0.wp.com/thesupremecarinitiative.com/wp-content/uploads/2020/01/2012-pagani-huayra-front-angle-view-carbuzz-401830-840x560-1.jpg?resize=750%2C500&ssl=1'],
    }
  },
  {
    id: 'lamborghini-sian',
    make: 'Lamborghini',
    model: 'Sián FKP 37',
    year: 2020,
    category: 'Hypercar',
    price: {
      msrp: '$3,600,000',
      currentValue: '$4,000,000+',
      status: 'Extremely Rare',
      productionNumbers: '63 Coupes, 19 Roadsters'
    },
    specs: {
      engine: '6.5L V12 Hybrid (Supercapacitor)',
      horsepower: 819,
      torque: { nm: 720, lbft: 531 },
      topSpeed: { kmh: 350, mph: 217 },
      acceleration: { zeroTo100: 2.8, zeroTo60: 2.7 },
      drivetrain: 'AWD',
      transmission: '7-speed ISR',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1600, lbs: 3527 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Active cooling vanes and rear wing'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.51 hp/kg'
    },
    design: {
      exterior: 'Terzo Millennio-inspired design with Y-shaped lights.',
      interior: 'Ad Personam customization with 3D printed parts.',
      features: ['Supercapacitor technology', 'Active cooling vanes', 'Scissor doors'],
      infotainment: 'Lamborghini Touchscreen'
    },
    history: {
      brand: 'Lamborghini',
      evolution: 'Lamborghini\'s first hybrid production car.',
      achievements: 'Named in honor of Ferdinand Karl Piëch (FKP).'
    },
    media: {
      thumbnail: 'https://luxurypulse.com/img/pictures/660c568344936FKP37.jpeg',
      images: ['https://luxurypulse.com/img/pictures/660c568344936FKP37.jpeg'],
    }
  },
  {
    id: 'koenigsegg-agera-rs',
    make: 'Koenigsegg',
    model: 'Agera RS',
    year: 2015,
    category: 'Hypercar',
    price: {
      msrp: '$2,500,000',
      currentValue: '$5,000,000 - $7,000,000',
      status: 'Discontinued',
      productionNumbers: '25 units'
    },
    specs: {
      engine: '5.0L Twin-Turbo V8',
      horsepower: 1160,
      torque: { nm: 1280, lbft: 944 },
      topSpeed: { kmh: 447, mph: 277 },
      acceleration: { zeroTo100: 2.8, zeroTo60: 2.6 },
      drivetrain: 'RWD',
      transmission: '7-speed Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1395, lbs: 3075 },
      brakingSystem: 'Ceramic Discs',
      aerodynamics: 'Active rear wing and front flaps'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.83 hp/kg'
    },
    design: {
      exterior: 'Lightweight carbon fiber body with removable hardtop.',
      interior: 'Minimalist Swedish design with high-end materials.',
      features: ['Triplex suspension', 'Active aero', 'Removable roof'],
      infotainment: 'Koenigsegg Infotainment'
    },
    history: {
      brand: 'Koenigsegg',
      evolution: 'The ultimate version of the Agera line.',
      achievements: 'World speed record for production cars in 2017 (277.87 mph).'
    },
    media: {
      thumbnail: 'https://s1.cdn.autoevolution.com/images/news/koenigsegg-rebuilt-the-agera-rs-gryphon-after-2-crashes-now-spotted-in-the-wild-138138_1.jpg',
      images: ['https://s1.cdn.autoevolution.com/images/news/koenigsegg-rebuilt-the-agera-rs-gryphon-after-2-crashes-now-spotted-in-the-wild-138138_1.jpg'],
    }
  },
  {
    id: 'ferrari-enzo',
    make: 'Ferrari',
    model: 'Enzo',
    year: 2002,
    category: 'Hypercar',
    price: {
      msrp: '$659,330',
      currentValue: '$3,500,000 - $4,500,000',
      status: 'Discontinued',
      productionNumbers: '400 units'
    },
    specs: {
      engine: '6.0L V12',
      horsepower: 651,
      torque: { nm: 657, lbft: 485 },
      topSpeed: { kmh: 350, mph: 217 },
      acceleration: { zeroTo100: 3.3, zeroTo60: 3.1 },
      drivetrain: 'RWD',
      transmission: '6-speed Automated Manual',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1255, lbs: 2767 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Active rear spoiler and front flaps'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.52 hp/kg'
    },
    design: {
      exterior: 'F1-inspired nose and aerodynamic bodywork.',
      interior: 'Carbon fiber and leather with minimal creature comforts.',
      features: ['Butterfly doors', 'F1-style steering wheel', 'Active aero'],
      infotainment: 'None (Analog focus)'
    },
    history: {
      brand: 'Ferrari',
      evolution: 'Named after the company\'s founder, Enzo Ferrari.',
      achievements: 'One of the first road cars to use F1-derived carbon fiber technology.'
    },
    media: {
      thumbnail: 'https://www.classicdriver.com/sites/default/files/cars_images/img_5386_15.jpg',
      images: ['https://www.classicdriver.com/sites/default/files/cars_images/img_5386_15.jpg'],
    }
  },
  {
    id: 'mclaren-speedtail',
    make: 'McLaren',
    model: 'Speedtail',
    year: 2020,
    category: 'Hypercar',
    price: {
      msrp: '$2,250,000',
      currentValue: '$3,500,000+',
      status: 'Extremely Rare',
      productionNumbers: '106 units'
    },
    specs: {
      engine: '4.0L Twin-Turbo V8 Hybrid',
      horsepower: 1035,
      torque: { nm: 1150, lbft: 848 },
      topSpeed: { kmh: 403, mph: 250 },
      acceleration: { zeroTo100: 3.0, zeroTo60: 2.9 },
      drivetrain: 'RWD',
      transmission: '7-speed Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1430, lbs: 3153 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Flexible carbon fiber ailerons'
    },
    performance: {
      handlingFocus: 'Street-oriented',
      powerToWeight: '0.72 hp/kg'
    },
    design: {
      exterior: 'Ultra-streamlined "teardrop" shape for maximum speed.',
      interior: 'Central driving position with two passenger seats.',
      features: ['Dihedral doors', 'Static wheel covers', 'Velocity mode'],
      infotainment: 'Triple-screen dashboard'
    },
    history: {
      brand: 'McLaren',
      evolution: 'Part of the McLaren Ultimate Series, successor to the F1.',
      achievements: 'Fastest McLaren ever built.'
    },
    media: {
      thumbnail: 'https://bringatrailer.com/wp-content/uploads/2022/11/2020_mclaren_speedtail_hw2a1477-1-42410.jpg',
      images: ['https://bringatrailer.com/wp-content/uploads/2022/11/2020_mclaren_speedtail_hw2a1477-1-42410.jpg'],
    }
  },
  {
    id: 'lamborghini-centenario',
    make: 'Lamborghini',
    model: 'Centenario',
    year: 2016,
    category: 'Hypercar',
    price: {
      msrp: '$1,900,000',
      currentValue: '$3,000,000 - $4,000,000',
      status: 'Extremely Rare',
      productionNumbers: '20 Coupes, 20 Roadsters'
    },
    specs: {
      engine: '6.5L V12',
      horsepower: 759,
      torque: { nm: 690, lbft: 509 },
      topSpeed: { kmh: 350, mph: 217 },
      acceleration: { zeroTo100: 2.8, zeroTo60: 2.7 },
      drivetrain: 'AWD',
      transmission: '7-speed ISR',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1520, lbs: 3351 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Active rear wing and massive rear diffuser'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.50 hp/kg'
    },
    design: {
      exterior: 'Full carbon fiber body with extreme aerodynamic elements.',
      interior: 'Customizable Alcantara and carbon fiber interior.',
      features: ['Rear-wheel steering', 'Active aero', 'Scissor doors'],
      infotainment: '10.1-inch touchscreen'
    },
    history: {
      brand: 'Lamborghini',
      evolution: 'Built to celebrate the 100th birthday of Ferruccio Lamborghini.',
      achievements: 'Showcased Lamborghini\'s future design direction.'
    },
    media: {
      thumbnail: 'https://www.ilusso.com/imagetag/2758/main/l/Used-2017-Lamborghini-Centenario-Roadster-1706138752.jpg',
      images: ['https://www.ilusso.com/imagetag/2758/main/l/Used-2017-Lamborghini-Centenario-Roadster-1706138752.jpg'],
    }
  },
  {
    id: 'pagani-zonda-r',
    make: 'Pagani',
    model: 'Zonda R',
    year: 2009,
    category: 'Hypercar',
    price: {
      msrp: '$1,500,000',
      currentValue: '$5,000,000+',
      status: 'Extremely Rare',
      productionNumbers: '15 units'
    },
    specs: {
      engine: '6.0L V12 (AMG)',
      horsepower: 740,
      torque: { nm: 710, lbft: 524 },
      topSpeed: { kmh: 350, mph: 217 },
      acceleration: { zeroTo100: 2.7, zeroTo60: 2.6 },
      drivetrain: 'RWD',
      transmission: '6-speed Sequential',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1070, lbs: 2359 },
      brakingSystem: 'Brembo Carbon Ceramic',
      aerodynamics: 'Fixed rear wing and massive diffuser'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.69 hp/kg'
    },
    design: {
      exterior: 'Pure track machine with exposed carbon fiber.',
      interior: 'Minimalist racing cockpit with roll cage.',
      features: ['Inconel exhaust', 'Magnesium wheels', 'Pneumatic jacks'],
      infotainment: 'None (Racing telemetry)'
    },
    history: {
      brand: 'Pagani',
      evolution: 'The ultimate track-only version of the Zonda.',
      achievements: 'Nürburgring lap time of 6:47.50.'
    },
    media: {
      thumbnail: 'https://media-cloud-hooniverse.s3.us-west-2.amazonaws.com/wp-content/uploads/2020/08/04130903/zondar.jpeg',
      images: ['https://media-cloud-hooniverse.s3.us-west-2.amazonaws.com/wp-content/uploads/2020/08/04130903/zondar.jpeg'],
    }
  },
  {
    id: 'pagani-utopia',
    make: 'Pagani',
    model: 'Utopia',
    year: 2023,
    category: 'Hypercar',
    price: {
      msrp: '$2,200,000',
      currentValue: '$3,000,000+',
      status: 'In Production',
      productionNumbers: '99 units'
    },
    specs: {
      engine: '6.0L Twin-Turbo V12 (AMG)',
      horsepower: 852,
      torque: { nm: 1100, lbft: 811 },
      topSpeed: { kmh: 350, mph: 217 },
      acceleration: { zeroTo100: 3.1, zeroTo60: 2.9 },
      drivetrain: 'RWD',
      transmission: '7-speed Manual or Automated Manual',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1280, lbs: 2822 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Integrated active aero'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.67 hp/kg'
    },
    design: {
      exterior: 'Timeless design blending classic and modern Pagani elements.',
      interior: 'Analog-focused luxury with exposed mechanical parts.',
      features: ['Manual transmission option', 'Carbo-Titanium chassis', 'Butterfly doors'],
      infotainment: 'Minimal digital display'
    },
    history: {
      brand: 'Pagani',
      evolution: 'The third chapter in Pagani\'s history, following Zonda and Huayra.',
      achievements: 'Designed to feel like a timeless mechanical masterpiece.'
    },
    media: {
      thumbnail: 'https://www.topgear.com/sites/default/files/2024/04/DSC01583.jpg',
      images: ['https://www.topgear.com/sites/default/files/2024/04/DSC01583.jpg'],
    }
  },
  {
    id: 'koenigsegg-regera',
    make: 'Koenigsegg',
    model: 'Regera',
    year: 2016,
    category: 'Hypercar',
    price: {
      msrp: '$1,900,000',
      currentValue: '$3,000,000 - $4,000,000',
      status: 'Discontinued',
      productionNumbers: '80 units'
    },
    specs: {
      engine: '5.0L Twin-Turbo V8 Hybrid',
      horsepower: 1500,
      torque: { nm: 2000, lbft: 1475 },
      topSpeed: { kmh: 404, mph: 251 },
      acceleration: { zeroTo100: 2.8, zeroTo60: 2.7 },
      drivetrain: 'RWD',
      transmission: 'Koenigsegg Direct Drive (KDD)',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1590, lbs: 3505 },
      brakingSystem: 'Ceramic Discs',
      aerodynamics: 'Fully active aero system'
    },
    performance: {
      handlingFocus: 'Street-oriented',
      powerToWeight: '0.94 hp/kg'
    },
    design: {
      exterior: 'Elegant and smooth lines with a focus on luxury.',
      interior: 'Opulent cabin with memory foam seats and high-end audio.',
      features: ['Direct Drive system', 'Autoskin', 'Fish-silver paint'],
      infotainment: '9-inch infotainment system'
    },
    history: {
      brand: 'Koenigsegg',
      evolution: 'A luxury-focused alternative to the Agera.',
      achievements: '0-400-0 km/h world record (31.49 seconds).'
    },
    media: {
      thumbnail: 'https://www.supercars.net/blog/wp-content/uploads/2023/02/2016-Koenigsegg-Regera-003-2000-scaled.jpg',
      images: ['https://www.supercars.net/blog/wp-content/uploads/2023/02/2016-Koenigsegg-Regera-003-2000-scaled.jpg'],
    }
  },
  {
    id: 'apollo-ie',
    make: 'Apollo',
    model: 'Intensa Emozione',
    year: 2019,
    category: 'Hypercar',
    price: {
      msrp: '$2,670,000',
      currentValue: '$3,500,000+',
      status: 'Extremely Rare',
      productionNumbers: '10 units'
    },
    specs: {
      engine: '6.3L V12',
      horsepower: 780,
      torque: { nm: 760, lbft: 561 },
      topSpeed: { kmh: 335, mph: 208 },
      acceleration: { zeroTo100: 2.7, zeroTo60: 2.6 },
      drivetrain: 'RWD',
      transmission: '6-speed Sequential',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1250, lbs: 2756 },
      brakingSystem: 'Brembo Carbon Ceramic',
      aerodynamics: 'Massive GT1-style rear wing'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.62 hp/kg'
    },
    design: {
      exterior: 'Wild, alien-like design with extreme aero.',
      interior: 'Fixed seats with adjustable pedals and steering wheel.',
      features: ['Full carbon fiber chassis', 'Triple exhaust tips', 'Gullwing doors'],
      infotainment: 'Minimal digital display'
    },
    history: {
      brand: 'Apollo',
      evolution: 'The rebirth of the Gumpert Apollo brand.',
      achievements: 'Designed to provide a raw, analog driving experience.'
    },
    media: {
      thumbnail: 'https://preview.redd.it/2019-apollo-ie-prototype-3840-x-2160-v0-bu7npdcqsrla1.jpg?auto=webp&s=3fb1a5750d19af6d23549934ee4dc5e5af01ed5b',
      images: ['https://preview.redd.it/2019-apollo-ie-prototype-3840-x-2160-v0-bu7npdcqsrla1.jpg?auto=webp&s=3fb1a5750d19af6d23549934ee4dc5e5af01ed5b'],
    }
  },
  {
    id: 'lykan-hypersport',
    make: 'W Motors',
    model: 'Lykan Hypersport',
    year: 2013,
    category: 'Hypercar',
    price: {
      msrp: '$3,400,000',
      currentValue: '$3,400,000+',
      status: 'Extremely Rare',
      productionNumbers: '7 units'
    },
    specs: {
      engine: '3.7L Twin-Turbo Flat-6',
      horsepower: 780,
      torque: { nm: 960, lbft: 708 },
      topSpeed: { kmh: 395, mph: 245 },
      acceleration: { zeroTo100: 2.8, zeroTo60: 2.7 },
      drivetrain: 'RWD',
      transmission: '6-speed Sequential or 7-speed Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1380, lbs: 3042 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Active rear spoiler'
    },
    performance: {
      handlingFocus: 'Street-oriented',
      powerToWeight: '0.57 hp/kg'
    },
    design: {
      exterior: 'Angular design with diamond-encrusted headlights.',
      interior: 'Gold-stitched leather and holographic display.',
      features: ['Diamond headlights', 'Reverse dihedral doors', 'Holographic UI'],
      infotainment: 'Holographic mid-air display'
    },
    history: {
      brand: 'W Motors',
      evolution: 'The first hypercar produced in the Middle East.',
      achievements: 'Featured in the movie Furious 7.'
    },
    media: {
      thumbnail: 'https://news.dupontregistry.com/cdn/shop/articles/lykanhypersport.jpg?crop=center&height=1104&v=1767085839&width=1920',
      images: ['https://news.dupontregistry.com/cdn/shop/articles/lykanhypersport.jpg?crop=center&height=1104&v=1767085839&width=1920'],
    }
  },
  {
    id: 'aston-martin-valkyrie',
    make: 'Aston Martin',
    model: 'Valkyrie',
    year: 2021,
    category: 'Hypercar',
    price: {
      msrp: '$3,200,000',
      currentValue: '$4,000,000+',
      status: 'In Production',
      productionNumbers: '150 units'
    },
    specs: {
      engine: '6.5L V12 Hybrid (Cosworth)',
      horsepower: 1160,
      torque: { nm: 900, lbft: 664 },
      topSpeed: { kmh: 402, mph: 250 },
      acceleration: { zeroTo100: 2.5, zeroTo60: 2.3 },
      drivetrain: 'RWD',
      transmission: '7-speed Sequential',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1030, lbs: 2271 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Full underbody Venturi tunnels'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '1.13 hp/kg'
    },
    design: {
      exterior: 'Extreme aerodynamic design by Adrian Newey.',
      interior: 'F1-style feet-up driving position.',
      features: ['Active suspension', 'Removable steering wheel', 'Camera mirrors'],
      infotainment: 'Minimal digital displays'
    },
    history: {
      brand: 'Aston Martin',
      evolution: 'A collaboration between Aston Martin and Red Bull Racing.',
      achievements: 'Designed to be as fast as an F1 car around a track.'
    },
    media: {
      thumbnail: 'https://media.gq-magazine.co.uk/photos/6405fb643e977a7efb8a7764/master/pass/Aston-Martin-Valkyrie-HED.jpg',
      images: ['https://media.gq-magazine.co.uk/photos/6405fb643e977a7efb8a7764/master/pass/Aston-Martin-Valkyrie-HED.jpg'],
    }
  },
  {
    id: 'porsche-carrera-gt',
    make: 'Porsche',
    model: 'Carrera GT',
    year: 2004,
    category: 'Supercar',
    price: {
      msrp: '$448,000',
      currentValue: '$1,500,000 - $2,000,000',
      status: 'Discontinued',
      productionNumbers: '1,270 units'
    },
    specs: {
      engine: '5.7L V10',
      horsepower: 603,
      torque: { nm: 590, lbft: 435 },
      topSpeed: { kmh: 330, mph: 205 },
      acceleration: { zeroTo100: 3.9, zeroTo60: 3.5 },
      drivetrain: 'RWD',
      transmission: '6-speed Manual',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1380, lbs: 3042 },
      brakingSystem: 'PCCB (Porsche Ceramic Composite Brake)',
      aerodynamics: 'Active rear wing'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.44 hp/kg'
    },
    design: {
      exterior: 'Timeless Porsche design with a focus on pure mechanical beauty.',
      interior: 'Minimalist with a high-mounted beech wood gear knob.',
      features: ['Manual transmission', 'V10 engine from Le Mans project', 'Targa roof'],
      infotainment: 'Basic audio system'
    },
    history: {
      brand: 'Porsche',
      evolution: 'The last great analog supercar.',
      achievements: 'Widely considered one of the best sounding cars ever made.'
    },
    media: {
      thumbnail: 'https://cdn.dealeraccelerate.com/gtm/1/137/8728/1920x1440/2004-porsche-carrera-gt',
      images: ['https://cdn.dealeraccelerate.com/gtm/1/137/8728/1920x1440/2004-porsche-carrera-gt'],
    }
  },
  {
    id: 'apollo-evo',
    make: 'Apollo',
    model: 'Evo',
    year: 2022,
    category: 'Hypercar',
    price: {
      msrp: '$3,000,000+',
      currentValue: '$3,000,000+',
      status: 'In Production',
      productionNumbers: 'Extremely Limited'
    },
    specs: {
      engine: 'Naturally Aspirated V12',
      horsepower: 780,
      torque: { nm: 760, lbft: 561 },
      topSpeed: { kmh: 335, mph: 208 },
      acceleration: { zeroTo100: 2.7, zeroTo60: 2.6 },
      drivetrain: 'RWD',
      transmission: '6-speed Sequential',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1250, lbs: 2756 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Active aero with "Star" shaped DRLs'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.62 hp/kg'
    },
    design: {
      exterior: 'Extremely aggressive, "Star" inspired design language.',
      interior: 'Futuristic, driver-centric cockpit.',
      features: ['Active aero', 'Star-shaped DRLs', 'Full carbon chassis'],
      infotainment: 'Digital racing display'
    },
    history: {
      brand: 'Apollo',
      evolution: 'The successor to the Intensa Emozione.',
      achievements: 'Pushing the boundaries of automotive design and emotion.'
    },
    media: {
      thumbnail: 'https://www.lus.so/wp-content/uploads/2025/01/wes-tindel-hSqHLTv7Omg-unsplash-Large.jpeg',
      images: ['https://www.lus.so/wp-content/uploads/2025/01/wes-tindel-hSqHLTv7Omg-unsplash-Large.jpeg'],
    }
  },
  {
    id: 'fenyr-supersport',
    make: 'W Motors',
    model: 'Fenyr SuperSport',
    year: 2017,
    category: 'Hypercar',
    price: {
      msrp: '$1,400,000',
      currentValue: '$1,500,000+',
      status: 'In Production',
      productionNumbers: '110 units'
    },
    specs: {
      engine: '3.8L Twin-Turbo Flat-6 (RUF)',
      horsepower: 800,
      torque: { nm: 980, lbft: 722 },
      topSpeed: { kmh: 400, mph: 248 },
      acceleration: { zeroTo100: 2.7, zeroTo60: 2.6 },
      drivetrain: 'RWD',
      transmission: '7-speed Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1350, lbs: 2976 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Active rear wing'
    },
    performance: {
      handlingFocus: 'Street-oriented',
      powerToWeight: '0.59 hp/kg'
    },
    design: {
      exterior: 'Aggressive, sharp-edged design with full carbon fiber body.',
      interior: 'High-tech luxury with customizable materials.',
      features: ['Active aero', 'Reverse-opening doors', 'Custom RUF engine'],
      infotainment: 'W Motors Infotainment'
    },
    history: {
      brand: 'W Motors',
      evolution: 'The second model from W Motors, more performance-focused than the Lykan.',
      achievements: 'Showcasing Middle Eastern engineering on a global stage.'
    },
    media: {
      thumbnail: 'https://www.carrozzieri-italiani.com/wp-content/uploads/2019/08/wmotors_fenyrsupersport_gallery_img_01-1200x736.jpg',
      images: ['https://www.carrozzieri-italiani.com/wp-content/uploads/2019/08/wmotors_fenyrsupersport_gallery_img_01-1200x736.jpg'],
    }
  },
  {
    id: 'aston-martin-valhalla',
    make: 'Aston Martin',
    model: 'Valhalla',
    year: 2024,
    category: 'Hypercar',
    price: {
      msrp: '$800,000',
      currentValue: '$1,000,000+',
      status: 'In Production',
      productionNumbers: '999 units'
    },
    specs: {
      engine: '4.0L Twin-Turbo V8 Hybrid',
      horsepower: 937,
      torque: { nm: 1000, lbft: 738 },
      topSpeed: { kmh: 350, mph: 217 },
      acceleration: { zeroTo100: 2.5, zeroTo60: 2.4 },
      drivetrain: 'AWD',
      transmission: '8-speed Dual-Clutch',
      enginePlacement: 'Mid-engine',
      weight: { kg: 1550, lbs: 3417 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Active aero with Flex-Foil technology'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.60 hp/kg'
    },
    design: {
      exterior: 'Sleek, aerodynamic design inspired by the Valkyrie.',
      interior: 'Driver-focused "Apex Ergonomics" cabin.',
      features: ['Hybrid powertrain', 'Active aero', 'Dihedral doors'],
      infotainment: 'Aston Martin Next-Gen UI'
    },
    history: {
      brand: 'Aston Martin',
      evolution: 'Bridging the gap between the Valkyrie and the standard range.',
      achievements: 'Developed with input from Aston Martin F1 team.'
    },
    media: {
      thumbnail: 'https://www.lux-mag.com/wp-content/uploads/2025/04/Darius-Sanai-Coastal-1-scaled-e1745950817772.jpg',
      images: ['https://www.lux-mag.com/wp-content/uploads/2025/04/Darius-Sanai-Coastal-1-scaled-e1745950817772.jpg'],
    }
  },
  {
    id: 'aston-martin-one-77',
    make: 'Aston Martin',
    model: 'One-77',
    year: 2009,
    category: 'Hypercar',
    price: {
      msrp: '$1,800,000',
      currentValue: '$3,000,000+',
      status: 'Extremely Rare',
      productionNumbers: '77 units'
    },
    specs: {
      engine: '7.3L V12',
      horsepower: 750,
      torque: { nm: 750, lbft: 553 },
      topSpeed: { kmh: 354, mph: 220 },
      acceleration: { zeroTo100: 3.7, zeroTo60: 3.5 },
      drivetrain: 'RWD',
      transmission: '6-speed Automated Manual',
      enginePlacement: 'Front-engine',
      weight: { kg: 1630, lbs: 3594 },
      brakingSystem: 'Carbon Ceramic Brakes',
      aerodynamics: 'Active rear spoiler'
    },
    performance: {
      handlingFocus: 'Street-oriented',
      powerToWeight: '0.46 hp/kg'
    },
    design: {
      exterior: 'The ultimate expression of Aston Martin design and craftsmanship.',
      interior: 'Hand-crafted luxury with carbon fiber and fine leather.',
      features: ['Full carbon fiber monocoque', 'Hand-rolled aluminum body', 'Pushrod suspension'],
      infotainment: 'Premium Bang & Olufsen audio'
    },
    history: {
      brand: 'Aston Martin',
      evolution: 'The most exclusive and powerful naturally aspirated Aston Martin at its launch.',
      achievements: 'Won several design awards including the Concorso d\'Eleganza Design Award.'
    },
    media: {
      thumbnail: 'https://static.wikia.nocookie.net/gran-turismo/images/3/31/Aston_Martin_One-77_%2711.jpg/revision/latest?cb=20250718113538',
      images: ['https://static.wikia.nocookie.net/gran-turismo/images/3/31/Aston_Martin_One-77_%2711.jpg/revision/latest?cb=20250718113538'],
    }
  },
  {
    id: 'porsche-911-gt3-rs',
    make: 'Porsche',
    model: '911 GT3 RS (992)',
    year: 2023,
    category: 'Supercar',
    price: {
      msrp: '$223,800',
      currentValue: '$350,000 - $500,000',
      status: 'In Production',
      productionNumbers: 'Limited Production'
    },
    specs: {
      engine: '4.0L Flat-6',
      horsepower: 518,
      torque: { nm: 465, lbft: 342 },
      topSpeed: { kmh: 296, mph: 184 },
      acceleration: { zeroTo100: 3.2, zeroTo60: 3.0 },
      drivetrain: 'RWD',
      transmission: '7-speed PDK',
      enginePlacement: 'Rear-engine',
      weight: { kg: 1450, lbs: 3197 },
      brakingSystem: 'PCCB (Optional)',
      aerodynamics: 'Active rear wing with DRS and front diffusers'
    },
    performance: {
      handlingFocus: 'Track-oriented',
      powerToWeight: '0.36 hp/kg'
    },
    design: {
      exterior: 'Extreme track-focused aero with massive swan-neck wing.',
      interior: 'Racing-focused with Weissach package options.',
      features: ['DRS (Drag Reduction System)', 'Adjustable suspension from steering wheel', 'Carbon fiber doors'],
      infotainment: 'Porsche Communication Management (PCM)'
    },
    history: {
      brand: 'Porsche',
      evolution: 'The most extreme naturally aspirated 911 ever.',
      achievements: 'Nürburgring lap time of 6:49.328.'
    },
    media: {
      thumbnail: 'https://www.ilusso.com/imagetag/3721/main/l/Used-2023-Porsche-911-GT3-RS-1727392646.jpg',
      images: ['https://www.ilusso.com/imagetag/3721/main/l/Used-2023-Porsche-911-GT3-RS-1727392646.jpg'],
    }
  }
];
