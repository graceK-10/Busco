import busArcticWhite from '../assets/Pictures/bus1.jpeg';
import busPredatorRed from '../assets/Pictures/bus2.jpeg';
import busSupportImage from '../assets/Pictures/bus3.jpeg';
import busFour from '../assets/Pictures/bus4.jpeg';
import busFive from '../assets/Pictures/WhatsApp Image 2026-02-04 at 12.03.43.jpeg';
import busSix from '../assets/Pictures/WhatsApp Image 2026-02-04 at 12.04.38.jpeg';
import busSeven from '../assets/Pictures/WhatsApp Image 2026-03-11 at 08.38.39.jpeg';

const imagePool = [busArcticWhite, busPredatorRed, busSupportImage, busFour, busFive, busSix, busSeven];

const brochurePaths = {
  hinoEvo3: '/PDF/1_Hino_Predator_Evo3_Handout.pdf',
  hinoRav: '/PDF/2_Hino_1627_Predator_RAV_Handout.pdf',
  hinoSupreme: '/PDF/3_Hino_1627_Predator_Supreme_Handout.pdf',
  manEvo3: '/PDF/4_MAN_18.360_Predator_Evo3_Handout.pdf',
};

const realBus = ({
  id,
  name,
  type,
  brand,
  heroTag,
  image,
  blurb,
  featureTitle,
  featureText,
  specs,
  brochure,
  brochureLabel = 'Open brochure',
  details,
  optionalFeatures,
}) => ({
  id,
  name,
  type,
  brand,
  heroTag,
  image,
  blurb,
  featureTitle,
  featureText,
  specs,
  brochure,
  brochureLabel,
  details,
  optionalFeatures,
  isPlaceholder: false,
  note: '',
});

const placeholderBus = ({ id, name, type, brand, imageIndex, layout, useCase, strength }) => ({
  id,
  name,
  type,
  brand,
  heroTag: 'Placeholder range entry',
  image: imagePool[imageIndex % imagePool.length],
  blurb:
    'Placeholder details — sample marketing copy added for layout planning. Replace this text with the final Busco-approved wording for this model.',
  featureTitle: 'Placeholder positioning',
  featureText:
    'This specification summary was generated as sample content so you can quickly update the final bus messaging later.',
  specs: [
    { label: 'Layout', value: layout },
    { label: 'Cabin', value: 'Placeholder passenger environment' },
    { label: 'Use Case', value: useCase },
    { label: 'Strength', value: strength },
  ],
  brochure: brochurePaths.hinoEvo3,
  brochureLabel: 'Open sample brochure',
  details: [
    'Placeholder details — sample specification content only.',
    'Update body construction, seating, and operator wording with final approved content.',
  ],
  optionalFeatures: ['Placeholder parcel shelves', 'Placeholder radio system', 'Placeholder seat trim'],
  isPlaceholder: true,
  note: 'Placeholder details — wording and brochure to be replaced.',
});

const makePlaceholders = (brand, definitions) =>
  definitions.map((definition, index) =>
    placeholderBus({
      brand,
      imageIndex: index,
      ...definition,
    })
  );

export const predatorBrandTabs = [
  { id: 'hino', label: 'Hino' },
  { id: 'predator', label: 'Predator' },
  { id: 'mercedes', label: 'Mercedes' },
  { id: 'volvo', label: 'Volvo' },
  { id: 'man', label: 'MAN' },
  { id: 'scania', label: 'Scania' },
];

export const predatorBrands = {
  hino: {
    title: 'Hino',
    intro:
      'A deeper Hino Predator range for commuter fleets, regional movement, and operator-ready bodywork solutions.',
    buses: [
      realBus({
        id: 'hino-evo-3-commuter',
        name: 'Predator Hino Evo 3 Commuter',
        type: 'Predator Commuter',
        brand: 'hino',
        heroTag: 'Busco range detail',
        image: busArcticWhite,
        blurb:
          'A proven commuter body with hi-rise construction, strong passenger flow, and practical route durability for daily fleet use.',
        featureTitle: 'Best suited for',
        featureText:
          'Urban commuter work, school movement, and high-volume passenger circulation where durability and quick loading matter most.',
        brochure: brochurePaths.hinoEvo3,
        details: [
          '“Hi-Rise” bodywork WA355 “A-grade” 3mm tubular sections fully anti-corrosion phosphate treated with polyurethane / tectile injected into structure.',
          'Fully adjustable driver’s seat with safety belt, flush fitting L.E.D. interior saloon lights, and L.E.D. step and cab lights.',
          '2mm galvanized steel saloon floors, new G.R.P. styled dashboard, battery luggage locker compartment, curved rear tail-lights, and driver cab door.',
          'Split back passenger seats in a (3x2) configuration with fibreglass interior and ceiling panels.',
          'Fully compliant with S.A.B.S. / N.R.C.S. homologation and roll-over compliance with 96% local content bodywork.',
        ],
        optionalFeatures: [
          'Interior parcel shelves',
          'Large luggage lockers – 4.4m square',
          'Convection heaters',
          'Electronic destination boards',
          'Cloth seats',
          'Radio and entertainment system',
          'Safety belts on all seats',
        ],
        specs: [
          { label: 'Layout', value: '3x2 commuter seating' },
          { label: 'Cabin', value: 'LED-lit driver and saloon area' },
          { label: 'Use Case', value: 'Daily commuter routes' },
          { label: 'Strength', value: 'High-volume route durability' },
        ],
      }),
      realBus({
        id: 'hino-rav',
        name: 'Predator Hino R.A.V',
        type: 'Remote Access Vehicle',
        brand: 'hino',
        heroTag: 'Busco range detail',
        image: busPredatorRed,
        blurb:
          'A flexible remote access vehicle configuration designed for more varied route conditions while keeping the Predator bodywork identity intact.',
        featureTitle: 'What makes it unique',
        featureText:
          'It blends commuter practicality with stronger luggage and comfort options for mixed regional work.',
        brochure: brochurePaths.hinoRav,
        details: [
          '“Hi-Rise” WA355 bodywork using anti-corrosion phosphate treated 3mm tubular sections with polyurethane / tectyl injected structure protection.',
          'Fully adjustable driver’s seat, LED saloon lighting, galvanized steel floors, and bodyside battery luggage locker compartment.',
          'Coach slam type passenger door with split back passenger seats in a (3x2) or (2x2) configuration.',
          'Rear luggage compartment and fully compliant S.A.B.S / N.R.C.S homologation with 96% local content bodywork.',
        ],
        optionalFeatures: [
          'Convection heaters',
          'Parcel shelves',
          'Radio & entertainment system',
          'Safety belts on all seats',
          'Forced ventilation',
          'Air-conditioned system',
          'Large luggage lockers – 4m3',
          'Fresh water tank',
          'Fridge',
        ],
        specs: [
          { label: 'Layout', value: '3x2 or 2x2 seating' },
          { label: 'Cabin', value: 'Coach-style passenger entry' },
          { label: 'Use Case', value: 'Mixed commuter / regional routes' },
          { label: 'Strength', value: 'Added luggage flexibility' },
        ],
      }),
      realBus({
        id: 'hino-supreme',
        name: 'Predator Hino Supreme',
        type: 'Predator Supreme',
        brand: 'hino',
        heroTag: 'Busco range detail',
        image: busSupportImage,
        blurb:
          'A more premium Hino configuration with stronger road presence, premium dome styling, and improved passenger comfort for longer work.',
        featureTitle: 'Best suited for',
        featureText:
          'Regional passenger routes, staff transport, and premium operator fleets wanting a more elevated look and feel.',
        brochure: brochurePaths.hinoSupreme,
        details: [
          'New shape Predator Supreme front dome with elephant ear mirrors, deep curved windscreen, and G.R.P wheel arches.',
          'Hi-Rise WA355 bodywork, adjustable driver seat, LED saloon and cab lighting, galvanized steel floors, and insulated G.R.P styled dashboard.',
          'Battery luggage locker compartment, ABS cubby hole above driver, LED rear tail-lights, and manual slam type passenger entrance door.',
          'Split back passenger seats in (3x2) / (2x2) configuration and full S.A.B.S. / N.R.C.S homologation compliance.',
        ],
        optionalFeatures: [
          'Interior parcel shelves',
          'Large luggage lockers – 4.4m square',
          'Radio and entertainment system',
          'Convection heaters',
          'Safety belts on all seats',
          'Forced ventilation',
          'Air conditioner system',
        ],
        specs: [
          { label: 'Layout', value: 'Premium 3x2 / 2x2 seating' },
          { label: 'Cabin', value: 'Supreme front dome styling' },
          { label: 'Use Case', value: 'Regional and staff transport' },
          { label: 'Strength', value: 'Premium road presence' },
        ],
      }),
      ...makePlaceholders('hino', [
        { id: 'hino-urbanliner', name: 'Hino Urbanliner Plus', type: 'Predator Commuter', layout: '3x2 urban commuter', useCase: 'Peak-hour city circulation', strength: 'Quick passenger turnover' },
        { id: 'hino-regional-x', name: 'Hino Regional X', type: 'Predator Supreme', layout: '2x2 regional seating', useCase: 'Regional day routes', strength: 'Comfort-led body plan' },
        { id: 'hino-metroflex', name: 'Hino MetroFlex', type: 'Predator Commuter', layout: '3x2 fleet layout', useCase: 'Municipal transport', strength: 'Route efficiency' },
        { id: 'hino-corridor-max', name: 'Hino Corridor Max', type: 'Predator Commuter', layout: 'High-capacity route plan', useCase: 'Dense corridor movement', strength: 'Passenger volume support' },
        { id: 'hino-premier-route', name: 'Hino Premier Route', type: 'Predator Supreme', layout: '2x2 comfort layout', useCase: 'Premium route operations', strength: 'Executive passenger appeal' },
        { id: 'hino-staffliner', name: 'Hino Staffliner', type: 'Predator Supreme', layout: '2x2 staff movement', useCase: 'Mine and staff transport', strength: 'Long-haul practicality' },
        { id: 'hino-evo-xr', name: 'Hino Evo XR', type: 'Predator Commuter', layout: '3x2 commuter format', useCase: 'School and commuter fleets', strength: 'Versatile deployment' },
      ]),
    ],
  },
  predator: {
    title: 'Predator',
    intro:
      'Core Predator showcase entries used to highlight styling direction, platform identity, and concept positioning across the range.',
    buses: makePlaceholders('predator', [
      { id: 'predator-core', name: 'Predator Core', type: 'Predator Commuter', layout: 'Route-ready format', useCase: 'Daily commuter operations', strength: 'Recognisable fleet identity' },
      { id: 'predator-supreme-plus', name: 'Predator Supreme Plus', type: 'Predator Supreme', layout: 'Premium route profile', useCase: 'Longer regional service', strength: 'Elevated passenger feel' },
      { id: 'predator-route-pro', name: 'Predator Route Pro', type: 'Predator Commuter', layout: 'Fleet commuter layout', useCase: 'Operator mixed routes', strength: 'Serviceable design' },
      { id: 'predator-signature', name: 'Predator Signature', type: 'Predator Supreme', layout: 'Flagship premium body', useCase: 'Executive passenger movement', strength: 'Strong styling presence' },
      { id: 'predator-cityline', name: 'Predator Cityline', type: 'Predator Commuter', layout: 'Urban boarding flow', useCase: 'Inner-city shuttles', strength: 'Fast loading profile' },
      { id: 'predator-regalline', name: 'Predator Regalline', type: 'Predator Supreme', layout: '2x2 comfort body', useCase: 'Regional coaches', strength: 'Premium body impression' },
      { id: 'predator-mobilink', name: 'Predator Mobilink', type: 'Predator Commuter', layout: 'Balanced route cabin', useCase: 'Cross-town service', strength: 'Adaptable duty cycle' },
      { id: 'predator-frontier', name: 'Predator Frontier', type: 'Predator Supreme', layout: 'Extended route layout', useCase: 'Inter-town movement', strength: 'Longer-trip comfort' },
      { id: 'predator-commander', name: 'Predator Commander', type: 'Predator Supreme', layout: 'Premium operator format', useCase: 'Fleet flagship routes', strength: 'Executive identity' },
      { id: 'predator-rapid', name: 'Predator Rapid', type: 'Predator Commuter', layout: 'High-turnover route body', useCase: 'Mass movement corridors', strength: 'Operational efficiency' },
    ]),
  },
  mercedes: {
    title: 'Mercedes-Benz',
    intro:
      'Mercedes-aligned Predator body concepts for fleets prioritising OEM prestige, smooth operation, and premium route confidence.',
    buses: makePlaceholders('mercedes', [
      { id: 'merc-commuter', name: 'Mercedes-Benz Commuter', type: 'Predator Commuter', layout: 'Efficient commuter body', useCase: 'Urban and regional route service', strength: 'Premium OEM perception' },
      { id: 'merc-supreme', name: 'Mercedes-Benz Supreme', type: 'Predator Supreme', layout: '2x2 premium seating', useCase: 'Comfort-led route service', strength: 'Refined passenger feel' },
      { id: 'merc-metrostar', name: 'Mercedes Metrostar', type: 'Predator Commuter', layout: 'City route body', useCase: 'High-frequency municipal routes', strength: 'Easy boarding flow' },
      { id: 'merc-grandtour', name: 'Mercedes GrandTour', type: 'Predator Supreme', layout: 'Regional body format', useCase: 'Intercity movement', strength: 'Premium long-route comfort' },
      { id: 'merc-routemax', name: 'Mercedes RouteMax', type: 'Predator Commuter', layout: 'Balanced commuter plan', useCase: 'Fleet route mix', strength: 'Reliable versatility' },
      { id: 'merc-premier', name: 'Mercedes Premier', type: 'Predator Supreme', layout: 'Flagship cabin setup', useCase: 'VIP transfers', strength: 'Higher-end styling' },
      { id: 'merc-link', name: 'Mercedes Link', type: 'Predator Commuter', layout: 'Everyday route layout', useCase: 'School and commuter transport', strength: 'Brand confidence' },
      { id: 'merc-crossline', name: 'Mercedes Crossline', type: 'Predator Supreme', layout: 'Regional comfort plan', useCase: 'Longer commuter routes', strength: 'Smooth premium experience' },
      { id: 'merc-urban-pro', name: 'Mercedes Urban Pro', type: 'Predator Commuter', layout: 'Rapid loading cabin', useCase: 'Urban transport contracts', strength: 'Daily operational rhythm' },
      { id: 'merc-signature', name: 'Mercedes Signature', type: 'Predator Supreme', layout: 'Executive passenger body', useCase: 'Premium route fleets', strength: 'Flagship market appeal' },
    ]),
  },
  volvo: {
    title: 'Volvo',
    intro:
      'Volvo-based Predator concepts focused on comfort, operational stability, and longer-route confidence for premium fleets.',
    buses: makePlaceholders('volvo', [
      { id: 'volvo-supreme', name: 'Volvo Supreme', type: 'Predator Supreme', layout: 'Premium route body', useCase: 'Regional passenger travel', strength: 'Refined road presence' },
      { id: 'volvo-comfortline', name: 'Volvo Comfortline', type: 'Predator Supreme', layout: 'Comfort-first seating', useCase: 'Longer passenger journeys', strength: 'Passenger comfort' },
      { id: 'volvo-commuter', name: 'Volvo Commuter', type: 'Predator Commuter', layout: 'Fleet commuter layout', useCase: 'Daily route movement', strength: 'Stable route performance' },
      { id: 'volvo-regal', name: 'Volvo Regal', type: 'Predator Supreme', layout: 'Executive route plan', useCase: 'Corporate transport', strength: 'Premium identity' },
      { id: 'volvo-citylink', name: 'Volvo Citylink', type: 'Predator Commuter', layout: 'Urban passenger format', useCase: 'Metropolitan movement', strength: 'Efficient cabin flow' },
      { id: 'volvo-routecraft', name: 'Volvo RouteCraft', type: 'Predator Supreme', layout: 'Regional comfort shell', useCase: 'Inter-town routes', strength: 'Long-route comfort' },
      { id: 'volvo-movemax', name: 'Volvo MoveMax', type: 'Predator Commuter', layout: '3x2 commuter setup', useCase: 'Worker transport', strength: 'Dependable route use' },
      { id: 'volvo-nordic', name: 'Volvo Nordic', type: 'Predator Supreme', layout: 'Premium cabin planning', useCase: 'Touring and charter work', strength: 'Upmarket feel' },
      { id: 'volvo-ranger', name: 'Volvo Ranger', type: 'Predator Commuter', layout: 'Adaptable route body', useCase: 'Mixed route service', strength: 'Flexible deployment' },
      { id: 'volvo-flagship', name: 'Volvo Flagship', type: 'Predator Supreme', layout: 'Flagship premium platform', useCase: 'Prestige route fleets', strength: 'Strong premium presentation' },
    ]),
  },
  man: {
    title: 'MAN',
    intro:
      'MAN-based Predator entries built for route efficiency, commuter durability, and expandable operator range positioning.',
    buses: [
      realBus({
        id: 'man-evo-3-commuter',
        name: 'Predator MAN Evo 3 Commuter',
        type: 'Predator Commuter',
        brand: 'man',
        heroTag: 'Busco range detail',
        image: busFour,
        blurb:
          'A MAN-based commuter body built for everyday route efficiency with the same hi-rise structural approach used across the Predator family.',
        featureTitle: 'Best suited for',
        featureText:
          'Fleet operators needing a dependable commuter platform for high-frequency service and practical route economics.',
        brochure: brochurePaths.manEvo3,
        details: [
          'Hi-Rise bodywork WA355 “A-grade” 3mm tubular sections fully anti-corrosion phosphate treated with polyurethane / tectile injected into structure.',
          'Fully adjustable driver’s seat with safety belt and flush fitting LED saloon, step, and cab lighting.',
          '2mm galvanized steel saloon floors, insulated G.R.P styled dashboard, battery luggage locker compartment, and ABS cubby hole above driver.',
          'Curved LED rear tail-lights, driver cab door, manually operated slam type passenger entrance door, and split back seats in a (3x2) configuration.',
          'Fully S.A.B.S. / N.R.C.S. compliant bodywork with 96% local content.',
        ],
        optionalFeatures: [
          'Interior parcel shelves',
          'Large luggage lockers – 4.4m square',
          'Convection heaters',
          'Electronic destination boards',
          'Cloth seats',
          'Radio and entertainment system',
          'Safety belts on all seats',
        ],
        specs: [
          { label: 'Layout', value: '3x2 commuter seating' },
          { label: 'Cabin', value: 'Modern MAN-based driving area' },
          { label: 'Use Case', value: 'Daily commuter operations' },
          { label: 'Strength', value: 'Practical route durability' },
        ],
      }),
      ...makePlaceholders('man', [
        { id: 'man-routeflex', name: 'MAN RouteFlex', type: 'Predator Commuter', layout: 'Fleet commuter shell', useCase: 'Busy city routes', strength: 'Fast passenger movement' },
        { id: 'man-supreme-x', name: 'MAN Supreme X', type: 'Predator Supreme', layout: '2x2 premium cabin', useCase: 'Regional fleet upgrades', strength: 'Premium road presence' },
        { id: 'man-cityrunner', name: 'MAN CityRunner', type: 'Predator Commuter', layout: 'Urban boarding layout', useCase: 'Metro shuttle work', strength: 'Daily route agility' },
        { id: 'man-grandroute', name: 'MAN GrandRoute', type: 'Predator Supreme', layout: 'Long-route comfort plan', useCase: 'Inter-town movement', strength: 'Higher comfort focus' },
        { id: 'man-corridor', name: 'MAN Corridor', type: 'Predator Commuter', layout: 'High-capacity route format', useCase: 'Mass passenger flow', strength: 'Volume support' },
        { id: 'man-premiumline', name: 'MAN Premiumline', type: 'Predator Supreme', layout: 'Executive route layout', useCase: 'Staff transport', strength: 'Upmarket presentation' },
        { id: 'man-linkmax', name: 'MAN LinkMax', type: 'Predator Commuter', layout: 'Balanced commuter body', useCase: 'Mixed route contracts', strength: 'Operational flexibility' },
        { id: 'man-regional-pro', name: 'MAN Regional Pro', type: 'Predator Supreme', layout: 'Regional seating format', useCase: 'Longer daily trips', strength: 'Comfort and capacity mix' },
        { id: 'man-mobiliner', name: 'MAN Mobiliner', type: 'Predator Commuter', layout: 'Route service body', useCase: 'Worker transport', strength: 'Reliable workhorse setup' },
      ]),
    ],
  },
  scania: {
    title: 'Scania',
    intro:
      'Scania Predator concepts shaped for operators wanting commanding road presence and premium fleet identity.',
    buses: makePlaceholders('scania', [
      { id: 'scania-supreme', name: 'Scania Supreme', type: 'Predator Supreme', layout: 'Flagship premium body', useCase: 'Premium route fleets', strength: 'Commanding presence' },
      { id: 'scania-commuter', name: 'Scania Commuter', type: 'Predator Commuter', layout: 'Daily commuter shell', useCase: 'Urban passenger movement', strength: 'Robust route image' },
      { id: 'scania-grandline', name: 'Scania Grandline', type: 'Predator Supreme', layout: 'Regional luxury plan', useCase: 'Long-distance route service', strength: 'Strong premium appeal' },
      { id: 'scania-citypro', name: 'Scania CityPro', type: 'Predator Commuter', layout: 'Fast boarding layout', useCase: 'City corridor movement', strength: 'Operational pace' },
      { id: 'scania-regal', name: 'Scania Regal', type: 'Predator Supreme', layout: 'Executive route body', useCase: 'Corporate transfers', strength: 'Flagship styling' },
      { id: 'scania-routelink', name: 'Scania RouteLink', type: 'Predator Commuter', layout: 'Balanced route format', useCase: 'Mixed commuter service', strength: 'Fleet adaptability' },
      { id: 'scania-apex', name: 'Scania Apex', type: 'Predator Supreme', layout: 'Premium route layout', useCase: 'Regional charters', strength: 'Elevated customer feel' },
      { id: 'scania-rapidline', name: 'Scania Rapidline', type: 'Predator Commuter', layout: 'High-turnover route body', useCase: 'Dense passenger corridors', strength: 'Passenger throughput' },
      { id: 'scania-elite', name: 'Scania Elite', type: 'Predator Supreme', layout: 'Luxury seating plan', useCase: 'Higher-end transport', strength: 'Prestige positioning' },
      { id: 'scania-workhorse', name: 'Scania Workhorse', type: 'Predator Commuter', layout: 'Everyday operator shell', useCase: 'Daily service fleets', strength: 'Heavy-duty appearance' },
    ]),
  },
};

export const getPredatorBrandData = (brandId = 'hino') =>
  predatorBrands[brandId] ?? predatorBrands.hino;
