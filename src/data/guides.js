export const maintenanceGuides = [
  {
    id: 'bike-chain-care',
    target: 'Bikes',
    title: 'Motorcycle Chain Cleaning & Tensioning',
    readTime: '4 min read',
    icon: 'Wrench',
    summary: 'Proper motorcycle chain hygiene prevents catastrophic sprocket wear, ensures smooth throttle delivery, and prolongs drivetrain life.',
    steps: [
      'Clean every 500 miles (800 km) using a kerosene or dedicated O-ring safe chain cleaner and grunge brush.',
      'Wipe completely dry with a lint-free rag before applying lubricant.',
      'Apply synthetic chain lube to the inside of the lower run while rotating the rear wheel manually.',
      'Check chain slack according to swingarm sticker specs (typically 25-35 mm) with the bike on its side or paddock stand.'
    ]
  },
  {
    id: 'tire-pressure-temp',
    target: 'Cars & Bikes',
    title: 'Tire Pressure & Cold vs Warm Readings',
    readTime: '3 min read',
    icon: 'Gauge',
    summary: 'Tire pressure is the single most critical safety and performance parameter for both sports cars and motorcycles.',
    steps: [
      'Always gauge pressure when tires are completely cold (at least 3 hours after driving or riding).',
      'For high-speed track riding or driving, compensate for pressure expansion (tyres gain 4-8 PSI as they heat up).',
      'Inspect tread depth, uneven wear patterns (camber wear or cupping), and dry rot cracks near the bead.',
      'Motorcycle front-to-rear pressure balance directly affects flickability, turn-in geometry, and braking stability.'
    ]
  },
  {
    id: 'oil-fluids-breakin',
    target: 'Cars',
    title: 'Engine Oil Selection & Track Fluids',
    readTime: '5 min read',
    icon: 'Droplet',
    summary: 'High-revving naturally aspirated engines and high-boost turbocharged units require stringent thermal viscosity management.',
    steps: [
      'Match OEM viscosity specifications (e.g. 0W-40 Porsche A40 or BMW LL-01) with full synthetic ester or PAO basestocks.',
      'Flush DOT 4 or DOT 5.1 brake fluid annually; high dry-boiling points prevent spongy pedal feel under repeated hard braking.',
      'Check coolant levels and inspect radiator fins for stone damage or debris buildup.',
      'Warm the engine oil to at least 175°F (80°C) before applying wide-open throttle or exceeding 4,000 RPM.'
    ]
  },
  {
    id: 'ev-battery-health',
    target: 'Electric (EV)',
    title: 'EV Battery Longevity & Charging Strategy',
    readTime: '3 min read',
    icon: 'Zap',
    summary: 'Maximize lithium-ion battery lifespan and maintain maximum horsepower output over hundreds of thousands of miles.',
    steps: [
      'Keep daily charging capped at 80% to reduce cathode oxidation and chemical degradation.',
      'Pre-condition the battery pack via the navigation system prior to arriving at DC Fast Chargers.',
      'Avoid parking at extremely low state of charge (<10%) or maximum charge (100%) in extreme heat.',
      'Allow regenerative braking to handle routine deceleration, reducing mechanical brake pad wear.'
    ]
  }
];

export const buyersChecklist = [
  {
    title: 'Pre-Purchase Car Checklist',
    items: [
      'Service History & Recall Verification (check VIN across official manufacturer databases)',
      'Cold Start Test: Listen for timing chain rattle, valve tick, and puffing blue/white smoke',
      'Underside Inspection: Check subframe alignment, CV boot tears, and differential oil weeping',
      'Electronic Scan: Run an OBD-II scanner to detect pending fault codes or cleared readiness monitors'
    ]
  },
  {
    title: 'Pre-Purchase Motorcycle Checklist',
    items: [
      'Steering Head Bearings: Lift front wheel and check for notchiness or play when sweeping handlebars',
      'Fork Seals & Stanchions: Inspect chrome legs for oil rings or stone pitting that ruins rubber seals',
      'Frame Integrity & Stop Knobs: Look closely at steering lock stops for signs of crash impacts',
      'Clutch & Gearbox: Test 2nd gear pull under full load (worn dogs slip into neutral under hard throttle)'
    ]
  }
];
