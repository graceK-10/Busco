import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ArrowUpRight, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

import buscoLogo from '../assets/Logos/busco-logo-1.png';
import splitBackgroundVideo from '../assets/backgrounds/background4.mp4';
import busArcticWhite from '../assets/Pictures/bus1.jpeg';
import busPredatorRed from '../assets/Pictures/bus2.jpeg';
import busSupportImage from '../assets/Pictures/bus3.jpeg';

import scaniaLogo from '../assets/Logos/scania-logo-1.png';
import mercLogo from '../assets/Logos/merc-logo-1.png';
import volvoLogo from '../assets/Logos/volvo-logo-1.png';
import manLogo from '../assets/Logos/man-logo-1.png';
import hinoLogo from '../assets/Logos/hino-logo-1.png';
import oemStripLogo from '../assets/Logos/Busco-logos-4web-2.png';
import redAccent from '../assets/Logos/red-accent.png';

const oemLogos = [
  { name: 'Scania', src: scaniaLogo, wide: false },
  { name: 'Mercedes-Benz', src: mercLogo, wide: false },
  { name: 'Volvo', src: volvoLogo, wide: false },
  { name: 'MAN', src: manLogo, wide: false },
  { name: 'Hino', src: hinoLogo, wide: false },
  { name: 'Busco OEM Network', src: oemStripLogo, wide: true },
];

const navItems = [
  { label: 'About', href: '#/about' },
  { label: 'Range', href: '#range' },
  { label: 'Predator', href: '#predator' },
  { label: 'Contact', href: '#/contact' },
  { label: 'Spec & Quote', href: '#spec-quote' },
];

const colourTabs = [
  {
    id: 'arctic-white',
    number: '01',
    label: 'Arctic White',
    accent: '#f4f1ea',
    text: '#101010',
    pill: '#d72626',
    image: busArcticWhite,
    imagePosition: 'center center',
  },
  {
    id: 'predator-red',
    number: '02',
    label: 'Predator Red',
    accent: '#d72626',
    text: '#fff5f5',
    pill: '#ffffff',
    image: busPredatorRed,
    imagePosition: 'center center',
  },
];

const brandTabs = [
  { id: 'hino', label: 'Hino' },
  { id: 'predator', label: 'Predator' },
  { id: 'mercedes', label: 'Mercedes' },
  { id: 'volvo', label: 'Volvo' },
  { id: 'man', label: 'MAN' },
  { id: 'scania', label: 'Scania' },
];

// const rangeTabs = [
//   { id: 'all', label: 'All' },
//   { id: 'commuter', label: 'Commuter' },
//   { id: 'supreme', label: 'Supreme' },
// ];

const busBrands = {
  hino: {
    title: 'Hino',
    intro:
      'A focused Hino range built for commuter demand, route efficiency, and premium regional movement.',
    buses: [
      {
        id: 'hino-evo-3',
        name: 'Hino EVO 3',
        type: 'Predator Commuter',
        category: 'commuter',
        image: busArcticWhite,
        blurb: 'A compact daily-route body designed for fast passenger movement and dependable city use.',
        featureTitle: 'Best suited for',
        featureText: 'Urban commuter routes, school transport and high-frequency municipal movement.',
        specs: [
          { label: 'Layout', value: 'Front entry / rapid flow' },
          { label: 'Cabin', value: 'High-visibility driver zone' },
          { label: 'Use Case', value: 'Daily commuter circulation' },
          { label: 'Strength', value: 'Compact footprint' },
        ],
      },
      {
        id: 'hino-ray',
        name: 'Hino RAY',
        type: 'Predator Commuter',
        category: 'commuter',
        image: busPredatorRed,
        blurb: 'A more versatile commuter body with improved route comfort and strong operational flexibility.',
        featureTitle: 'What makes it unique',
        featureText: 'Built to bridge short urban runs and longer regional movement.',
        specs: [
          { label: 'Layout', value: 'Balanced city / regional' },
          { label: 'Cabin', value: 'Improved passenger flow' },
          { label: 'Use Case', value: 'Mixed route operation' },
          { label: 'Strength', value: 'Versatile body format' },
        ],
      },
      {
        id: 'hino-supreme',
        name: 'Hino Supreme',
        type: 'Predator Supreme',
        category: 'supreme',
        image: busSupportImage,
        blurb: 'A premium route body with stronger road presence and longer-journey comfort.',
        featureTitle: 'Best suited for',
        featureText: 'Regional passenger routes, staff transport and premium fleet movement.',
        specs: [
          { label: 'Layout', value: 'Premium long-route body' },
          { label: 'Cabin', value: 'Higher comfort emphasis' },
          { label: 'Use Case', value: 'Regional movement' },
          { label: 'Strength', value: 'Executive passenger appeal' },
        ],
      },
        {
        id: 'hino-predator',
        name: 'Hino Predator',
        type: 'Predator Supreme',
        category: 'supreme',
        image: busSupportImage,
        blurb: 'A premium route body with stronger road presence and longer-journey comfort.',
        featureTitle: 'Best suited for',
        featureText: 'Regional passenger routes, staff transport and premium fleet movement.',
        specs: [
          { label: 'Layout', value: 'Premium long-route body' },
          { label: 'Cabin', value: 'Higher comfort emphasis' },
          { label: 'Use Case', value: 'Regional movement' },
          { label: 'Strength', value: 'Executive passenger appeal' },
        ],
      },
    ],
  },

  predator: {
    title: 'Predator',
    intro:
      'The core Predator range balances durability, route efficiency and a recognisable road presence.',
    buses: [
      {
        id: 'predator-core-1',
        name: 'Predator Core',
        type: 'Predator Commuter',
        category: 'commuter',
        image: busPredatorRed,
        blurb: 'A durable everyday platform shaped for consistent route performance.',
        featureTitle: 'Best suited for',
        featureText: 'Fleet operators who need dependable daily passenger movement.',
        specs: [
          { label: 'Layout', value: 'Route-ready format' },
          { label: 'Cabin', value: 'Balanced flow' },
          { label: 'Use Case', value: 'Commuter operations' },
          { label: 'Strength', value: 'Operational durability' },
        ],
      },
      {
        id: 'predator-supreme-1',
        name: 'Predator Supreme',
        type: 'Predator Supreme',
        category: 'supreme',
        image: busArcticWhite,
        blurb: 'A refined version of the platform with a stronger premium passenger appeal.',
        featureTitle: 'What makes it unique',
        featureText: 'Adds a more elevated route experience while staying fleet-practical.',
        specs: [
          { label: 'Layout', value: 'Premium route profile' },
          { label: 'Cabin', value: 'Comfort-led interior' },
          { label: 'Use Case', value: 'Longer route service' },
          { label: 'Strength', value: 'Premium perception' },
        ],
      },
    ],
  },

  mercedes: {
    title: 'Mercedes-Benz',
    intro: 'Built around Mercedes platforms for premium feel, smooth operation and trusted route delivery.',
    buses: [
      {
        id: 'merc-commuter',
        name: 'Mercedes-Benz Commuter',
        type: 'Predator Commuter',
        category: 'commuter',
        image: busPredatorRed,
        blurb: 'A commuter-ready body designed for efficient passenger loading and daily route confidence.',
        featureTitle: 'Best suited for',
        featureText: 'Urban and regional operators who value premium OEM alignment.',
        specs: [
          { label: 'Layout', value: 'Efficient commuter body' },
          { label: 'Cabin', value: 'Premium OEM integration' },
          { label: 'Use Case', value: 'Daily route service' },
          { label: 'Strength', value: 'Brand confidence' },
        ],
      },
    ],
  },

  volvo: {
    title: 'Volvo',
    intro: 'Volvo-based bodies focused on comfort, operational confidence and longer-route presence.',
    buses: [
      {
        id: 'volvo-supreme',
        name: 'Volvo Supreme',
        type: 'Predator Supreme',
        category: 'supreme',
        image: busSupportImage,
        blurb: 'A premium route platform for operators focused on stability and long-distance comfort.',
        featureTitle: 'Best suited for',
        featureText: 'Higher-comfort passenger transport and premium route operations.',
        specs: [
          { label: 'Layout', value: 'Premium route body' },
          { label: 'Cabin', value: 'Comfort-focused' },
          { label: 'Use Case', value: 'Regional passenger travel' },
          { label: 'Strength', value: 'Refined road presence' },
        ],
      },
    ],
  },

  man: {
    title: 'MAN',
    intro: 'MAN-based Predator variants built for daily efficiency and adaptable route use.',
    buses: [
      {
        id: 'man-evo',
        name: 'MAN EVO',
        type: 'Predator Commuter',
        category: 'commuter',
        image: busArcticWhite,
        blurb: 'An adaptable commuter-focused body designed for efficient passenger movement.',
        featureTitle: 'What makes it unique',
        featureText: 'Pairs everyday practicality with a confident, modern bus profile.',
        specs: [
          { label: 'Layout', value: 'Efficient commuter body' },
          { label: 'Cabin', value: 'Modern front-end feel' },
          { label: 'Use Case', value: 'City movement' },
          { label: 'Strength', value: 'Adaptable operation' },
        ],
      },
    ],
  },

  scania: {
    title: 'Scania',
    intro: 'Scania Predator variants designed for robust operations and a more commanding fleet presence.',
    buses: [
      {
        id: 'scania-supreme',
        name: 'Scania Supreme',
        type: 'Predator Supreme',
        category: 'supreme',
        image: busPredatorRed,
        blurb: 'A higher-end configuration built for visibility, comfort and longer-haul passenger movement.',
        featureTitle: 'Best suited for',
        featureText: 'Operators wanting a flagship premium route body.',
        specs: [
          { label: 'Layout', value: 'Flagship premium body' },
          { label: 'Cabin', value: 'Enhanced route comfort' },
          { label: 'Use Case', value: 'Premium route fleets' },
          { label: 'Strength', value: 'Commanding presence' },
        ],
      },
    ],
  },
};



export default function Home() {
  const [activeTab, setActiveTab] = useState(colourTabs[0].id);

  const [activeBrand, setActiveBrand] = useState('hino');
const [rangeTab, setRangeTab] = useState('all');
const [activeBusIndex, setActiveBusIndex] = useState(0);
  

  const activeScheme = useMemo(
    () => colourTabs.find((tab) => tab.id === activeTab) ?? colourTabs[0],
    [activeTab]
  );

  const isArcticWhite = activeScheme.id === 'arctic-white';
  const approvalItems = ['NRCS Approved', 'SABS Certified', 'Homologated'];

const activeBrandData = busBrands[activeBrand];
const currentBrandBuses = activeBrandData.buses;

const filteredBuses =
  rangeTab === 'all'
    ? currentBrandBuses
    : currentBrandBuses.filter((bus) => bus.category === rangeTab);

const safeActiveIndex =
  activeBusIndex >= filteredBuses.length ? 0 : activeBusIndex;

const activeBus =
  filteredBuses[safeActiveIndex] || filteredBuses[0] || currentBrandBuses[0];

const sideBuses = filteredBuses.filter((bus) => bus.id !== activeBus?.id);

const selectBus = (busId) => {
  const newIndex = filteredBuses.findIndex((bus) => bus.id === busId);
  if (newIndex !== -1) setActiveBusIndex(newIndex);
};

const showPrevBus = () => {
  if (!filteredBuses.length) return;
  setActiveBusIndex((prev) =>
    prev === 0 ? filteredBuses.length - 1 : prev - 1
  );
};

const showNextBus = () => {
  if (!filteredBuses.length) return;
  setActiveBusIndex((prev) =>
    prev === filteredBuses.length - 1 ? 0 : prev + 1
  );
};



return (
  <div
    className="min-h-screen bg-[#f4f1ea] text-[#111111] dark:bg-[#0b0b0d] dark:text-white"
    style={{
      backgroundImage:
        'radial-gradient(circle at top, rgba(255,255,255,0.95), transparent 62%), linear-gradient(180deg, #f4f1ea 0%, #ece8e0 100%)',
    }}
  >
    <main className="w-full overflow-hidden bg-[#f4f1ea] dark:bg-[#111214]">
        <section
          id="home"
className="relative flex min-h-[300px] flex-col overflow-hidden lg:min-h-[74vh] 2xl:min-h-[720px]"
        >
          <div className="border-b border-white/10 bg-[#f4f1ea] px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={buscoLogo}
                  alt="BUSCO logo"
                  className="h-16 w-auto object-contain sm:h-16"
                />
              </div>

              <nav className="flex flex-wrap items-center gap-5 text-[13px] font-semibold uppercase tracking-[0.32em] text-red-600">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition hover:text-black"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col items-start gap-2 lg:items-end">
              <div className="flex flex-col items-start gap-2 lg:items-end">
                <a
                  href="#/contact"
                  className="inline-flex min-h-[40px] items-center justify-center rounded-md px-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white transition hover:brightness-110"
                  style={{ backgroundColor: '#d72626' }}
                >
                  Contact
                </a>


<a
  href="tel:0861114590"
  className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/95 px-4 py-2.5 text-[1.02rem] font-semibold tracking-[0.08em] text-[#111111] shadow-[0_12px_30px_rgba(0,0,0,0.10)] backdrop-blur-sm"
>
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d72626] text-white shadow-[0_6px_14px_rgba(215,38,38,0.35)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-1.09-.768-2.026-1.834-2.239l-4.423-.885a2.25 2.25 0 0 0-2.186.788l-.97 1.293a18.73 18.73 0 0 1-8.417-8.417l1.293-.97a2.25 2.25 0 0 0 .788-2.186l-.885-4.423A2.25 2.25 0 0 0 3.622 2.25H2.25A2.25 2.25 0 0 0 0 4.5v2.25h2.25Z" />
    </svg>
  </span>
  <span>0861 114 590</span>
</a>



              </div>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 bg-[#f4f1ea]/20 px-4 py-2 sm:px-6 lg:px-8">
            <div className="grid gap-3 xl:grid-cols-2">
              {colourTabs.map((tab) => {
                const isActive = tab.id === activeScheme.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className="flex min-h-[42px] items-center gap-2.5 rounded-md border px-3.5 text-left transition duration-300 hover:border-white/25"
                    style={{
                      borderColor: isActive ? tab.accent : 'rgba(215,38,38,10)',
                      backgroundColor: isActive
                        ? 'rgba(215,38,0,0.2)'
                        : 'rgba(255,255,255,0.2)',
                      boxShadow: isActive
                        ? `inset 0 0 0 1px ${tab.accent}40`
                        : 'none',
                    }}
                  >
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full border border-red-600"
                        style={{ backgroundColor: tab.accent }}
                      />
                      <span
                        className="h-2.5 w-2.5 rounded-full border border-black"
                        style={{ backgroundColor: tab.pill }}
                      />
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-red-600">
                      {tab.number} {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid flex-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div
              className="relative flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-12 xl:py-16"
              style={{
                background: `linear-gradient(180deg, ${activeScheme.accent} 0%, color-mix(in srgb, ${activeScheme.accent} 82%, black) 100%)`,
                color: activeScheme.text,
              }}
            >
              <div
                className="absolute inset-y-0 right-0 hidden w-16 lg:block"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 100%)',
                }}
              />

              <div className="relative z-10 max-w-[430px]">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] opacity-75">
                  Est. 1996 — South Africa
                </p>

                <h1
                  className="text-[clamp(3.2rem,7vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.05em]"
                  style={{ color: isArcticWhite ? '#d72626' : activeScheme.text }}
                >
                  BUSCO
                </h1>

                <div
                  className="busco-predator-title mt-1 text-[clamp(2.5rem,6vw,5.4rem)] font-black uppercase leading-[0.9] tracking-[-0.05em]"
                  style={{
                    color: isArcticWhite ? '#ffffff' : activeScheme.accent,
                    WebkitTextStroke: isArcticWhite
                      ? '1.5px #d72626'
                      : '1.5px rgba(255,255,255,0.92)',
                    textShadow: isArcticWhite
                      ? '1px 1px 0 #d72626, 2px 2px 0 rgba(215,38,38,0.85), 3px 3px 0 rgba(0,0,0,0.18), 0 10px 0 rgba(0,0,0,0.14), 0 18px 28px rgba(0,0,0,0.32)'
                      : `1px 1px 0 rgba(255,255,255,0.95), 2px 2px 0 ${activeScheme.accent}88, 3px 3px 0 rgba(0,0,0,0.18), 0 10px 0 rgba(0,0,0,0.14), 0 18px 28px rgba(0,0,0,0.32)`,
                  }}
                >
                  PREDATOR
                </div>

                <p className="mt-5 max-w-[360px] text-[11px] font-medium uppercase tracking-[0.28em] opacity-70 sm:text-[12px]">
                  Homologated Bus Bodywork — Built for Africa
                </p>

                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href="#range"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-md px-6 text-[10px] font-bold uppercase tracking-[0.22em] transition hover:translate-x-0.5"
                    style={{
                      backgroundColor: isArcticWhite ? '#d72626' : '#ffffff',
                      color: isArcticWhite ? '#ffffff' : '#111111',
                    }}
                  >
                    Explore Range <span className="ml-2 text-base">→</span>
                  </a>

                  <a
                    href="#spec-quote"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-md border px-6 text-[10px] font-bold uppercase tracking-[0.22em] transition"
                    style={{
                      borderColor: `${activeScheme.text}55`,
                      color: activeScheme.text,
                    }}
                  >
                    Spec &amp; Quote
                  </a>
                </div>
              </div>
            </div>

            <div
              className="relative isolate min-h-[360px] overflow-hidden sm:min-h-[420px] lg:min-h-0"
              style={{ transform: 'rotate(180deg)' }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={splitBackgroundVideo} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_26%,rgba(0,0,0,0.3)_100%)]" />

              <AnimatePresence mode="sync" initial={false}>
                <div
                  key={activeScheme.id}
                  className="absolute inset-0"
                  style={{ transform: 'rotate(180deg)' }}
                >
                  <motion.img
                    src={activeScheme.image}
                    alt={activeScheme.label}
                   initial={{ opacity: 0, x: 45, scale: 1.01 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -25, scale: 1 }}
                  // transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover drop-shadow-[0_40px_24px_rgba(0,0,0,0.34)]"
                    style={{ objectPosition: activeScheme.imagePosition }}
                  />
                </div>
              </AnimatePresence>

              <div
                className="pointer-events-none absolute left-5 top-6 hidden max-w-[200px] text-white/90 md:block lg:left-8 lg:top-8"
                style={{ transform: 'rotate(180deg)' }}
              >
                <div className="mb-2 h-px w-20 bg-white/35" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em]">
                  360° View
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                  Approvals
                </p>

                <ul className="mt-2.5 space-y-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/78">
                  {approvalItems.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: activeScheme.accent }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

{/* ABOUT SECTION START */}
<section
  id="about"
  className="relative border-t border-black/5 bg-[#f1efec] px-6 py-16 text-[#111111] sm:px-10 lg:px-16 lg:py-24"
>
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_38%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:140px_140px] opacity-[0.24]" />
    <div className="absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-[#d72626]/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-[#234d8f]/10 blur-3xl" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1580px]">
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 flex items-center gap-4"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d72626]">
        01
      </span>
      <span className="h-px w-12 bg-black/10" />
      <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-black/55">
        About Busco
      </span>
    </motion.div>

    <div className="grid gap-12 xl:grid-cols-[minmax(0,1.2fr)_420px] xl:items-start">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
<div className="max-w-[980px] leading-none">
  <h2 className="text-[clamp(2rem,4vw,4rem)] font-black tracking-[-0.055em] text-[#d72626]">
    Built for Africa.
  </h2>

  <div
    className="mt-1 text-[clamp(2rem,4vw,4rem)] font-black tracking-[-0.06em]"
    style={{
      color: '#ffffff',
      WebkitTextStroke: '1.5px #d72626',
      textShadow:
        '1px 1px 0 #d72626, 2px 2px 0 rgba(215,38,38,0.85), 3px 3px 0 rgba(0,0,0,0.18), 0 10px 0 rgba(0,0,0,0.14), 0 18px 28px rgba(0,0,0,0.32)',
    }}
  >
    Engineered for trust.
  </div>
</div>

        <p className="mt-8 max-w-[760px] text-[1.08rem] leading-8 text-black/68 sm:text-[1.12rem]">
          <span className="font-semibold text-black">Busco Marketing</span> is the sales &amp;
          marketing division of <span className="font-semibold text-black">Busafrica</span> —
          South Africa&apos;s premier manufacturer and supplier of NRCS/SABS approved, fully
          homologated bus bodywork. Since 1996 we have delivered peace of mind products with
          outstanding quality at value for money — built for Africa, trusted across the continent.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[32px] border border-black/8 bg-white/70 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-8"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">
          At a glance
        </p>

        <div className="mt-6 space-y-6">
          {[
            { value: '29+', label: 'Years Experience', color: '#d72626' },
            { value: '8', label: 'OEM Partners', color: '#234d8f' },
            { value: '14', label: 'Predator Models', color: '#d6a21d' },
            { value: '2', label: 'Body Variants', color: '#2f7a55' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08 * index }}
              className={`flex items-end justify-between gap-4 ${
                index !== 3 ? 'border-b border-black/8 pb-5' : ''
              }`}
            >
<span
  className="text-[3rem] font-black leading-none tracking-[-0.05em] text-black"
  style={{
    textShadow: `1px 0 0 ${item.color}, 0 1px 0 ${item.color}, 2px 0 0 ${item.color}, 0 2px 0 ${item.color}, 2px 2px 0 ${item.color}`
  }}
>
  {item.value}
</span>
              <span className="pb-1 text-right text-[11px] font-semibold uppercase tracking-[0.22em] text-black/48">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
      {[
        {
          icon: '✓',
          title: 'NRCS Approved',
          text: 'Full National Regulator for Compulsory Specifications approval — meeting the highest SA passenger transport standards.',
          color: '#2f7a55',
        },
        {
          icon: '✓',
          title: 'SABS Certified',
          text: 'South African Bureau of Standards certified bodywork — quality and compliance guaranteed on every build.',
          color: '#d72626',
        },
        {
          icon: '◈',
          title: 'Fully Homologated',
          text: 'Across 8 OEM chassis platforms — officially authorised bus bodywork manufacturer with full type approval.',
          color: '#234d8f',
        },
        {
          icon: '★',
          title: 'Est. 1996 — Heritage',
          text: '29+ years of unmatched expertise in South African bus bodywork — knowledge built into every Predator.',
          color: '#d6a21d',
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="group relative overflow-hidden rounded-[28px] border border-black/8 bg-white/72 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
        >
          <div
            className="absolute inset-x-0 top-0 h-[3px]"
            style={{ backgroundColor: item.color }}
          />

          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold text-white"
            style={{ backgroundColor: item.color }}
          >
            {item.icon}
          </div>

          <h3 className="mt-6 text-[0.98rem] font-bold uppercase tracking-[0.14em] text-[#111111]">
            {item.title}
          </h3>

          <p className="mt-3 text-[1rem] leading-7 text-black/64">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>

<motion.div
  initial={{ opacity: 0, y: 34 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  className="mt-16 overflow-hidden"
>
  <div className="relative overflow-hidden py-10">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f1efec] to-transparent sm:w-28" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f1efec] to-transparent sm:w-28" />

    <div
      className="flex w-max items-center gap-24 px-14"
      style={{ animation: 'buscoMarquee 34s linear infinite' }}
    >
      {[...oemLogos, ...oemLogos].map((logo, index) => (
        <div
          key={`${logo.name}-${index}`}
          className="relative flex h-[130px] items-center justify-center"
        >
          <span className="absolute bottom-[14px] left-1/2 h-[18px] w-[75%] -translate-x-1/2 rounded-full bg-black/18 blur-md" />

          <img
            src={logo.src}
            alt={logo.name}
            className={`relative z-10 w-auto object-contain opacity-95 ${
              logo.wide ? 'max-h-32' : 'max-h-32'
            }`}
          />
        </div>
      ))}
    </div>
  </div>
</motion.div>
  </div>

  <style>
    {`
      @keyframes buscoMarquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}
  </style>
  <div className="pointer-events-none absolute bottom-0 right-0 z-10">
  <img
    src={redAccent}
    alt=""
    className="w-[180px] sm:w-[240px] lg:w-[250px] opacity-95"
  />
</div>

<div className="pointer-events-none absolute left-0 top-0 z-10">
  <img
    src={redAccent}
    alt=""
    className="w-[120px] rotate-180 sm:w-[160px] lg:w-[220px] opacity-90"
  />
</div>

{/* <div className="pointer-events-none absolute right-0 top-0 z-10">
  <img
    src={redAccent}
    alt=""
    className="w-[120px] rotate-180 sm:w-[160px] lg:w-[220px] opacity-90"
  />
</div> */}
</section>
{/* ABOUT SECTION END */}

{/* PREDATOR SECTION START */}
<section
  id="predator"
  className="relative overflow-hidden border-t border-white/10 bg-[#08090d] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24"
>
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,38,38,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:140px_140px] opacity-[0.08]" />
    <div className="absolute left-[18%] top-[15%] h-[220px] w-[220px] rounded-full bg-[#d72626]/12 blur-3xl" />
    <div className="absolute right-[8%] bottom-[12%] h-[180px] w-[180px] rounded-full bg-white/6 blur-3xl" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1580px]">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 flex items-center gap-4"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#ff2323]">
        03
      </span>
      <span className="h-px w-12 bg-white/15" />
      <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white/60">
        The Predator
      </span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] shadow-[0_28px_90px_rgba(0,0,0,0.28)]"
    >
      <div className="grid gap-0 xl:grid-cols-[56%_44%]">
        <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]">
          <img
            src={busArcticWhite}
            alt="Predator flagship"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,12,0.12),rgba(7,8,12,0.04)_38%,rgba(7,8,12,0.6)_100%),linear-gradient(180deg,transparent_30%,rgba(7,8,12,0.65)_100%)]" />

          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#08090d] to-transparent" />

          <div className="absolute left-0 top-0 h-full w-full">
            <div className="absolute left-[12%] top-[14%] h-[420px] w-[2px] rotate-[35deg] bg-[linear-gradient(180deg,transparent,rgba(255,40,40,0.65),transparent)] blur-[1px]" />
            <div className="absolute left-[28%] top-[28%] h-[320px] w-[2px] rotate-[35deg] bg-[linear-gradient(180deg,transparent,rgba(255,40,40,0.32),transparent)] blur-[2px]" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="mb-3 inline-flex items-center rounded-none bg-[#ff2323] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              Flagship Predator Design
            </div>

            <div className="max-w-[620px] leading-none">
              <h3 className="text-[clamp(2rem,4vw,4rem)] font-black tracking-[-0.06em] text-white">
                PREDATOR
              </h3>
              <div className="text-[clamp(2rem,4vw,4rem)] font-black tracking-[-0.06em] text-[#ff2323]">
                BUILT FOR AFRICA
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 xl:px-12">
          <div className="max-w-[580px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ff5f5f]">
              Purpose-built platform
            </p>

            <h4 className="mt-5 text-[clamp(2rem,3vw,2rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">
              A modern bus bodywork platform designed to move people with confidence.
            </h4>

            <p className="mt-6 text-[1.04rem] leading-8 text-white/66">
              Predator is BUSCO’s signature bodywork platform — engineered for South African
              roads, route demand, and regulatory confidence. From commuter movement to more
              premium regional transport, Predator combines practical durability with a stronger
              visual identity on the road.
            </p>

            <div className="mt-8 grid gap-0 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.02] sm:grid-cols-2">
              {[
                { value: '2', label: 'Variants', color: '#ff2323' },
                { value: '8', label: 'OEM Chassis', color: '#2876ff' },
                { value: 'NRCS', label: 'Certified', color: '#1fd16c' },
                { value: 'ZA', label: 'Made in SA', color: '#ffb100' },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`px-6 py-5 ${index % 2 === 0 ? 'sm:border-r' : ''} ${index < 2 ? 'border-b' : ''} border-white/10`}
                >
                  <div
                    className="text-[2.25rem] font-black leading-none"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#range"
                className="inline-flex items-center rounded-none bg-[#ff2323] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition hover:brightness-110"
              >
                Explore Predator →
              </a>
              <a
                href="#spec-quote"
                className="inline-flex items-center rounded-none border border-white/15 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white/86 transition hover:border-white/30 hover:text-white"
              >
                Configure Yours
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    <div className="mt-8 grid gap-5 lg:grid-cols-3">
      {[
        {
          image: busPredatorRed,
          title: 'Predator Commuter',
          text: 'Focused on route efficiency, fast passenger movement, and everyday operational durability.',
        },
        {
          image: busSupportImage,
          title: 'Predator Supreme',
          text: 'A more premium interpretation of the platform with elevated comfort and stronger road presence.',
        },
        {
          image: busPredatorRed,
          title: 'Predator Identity',
          text: 'Distinctive front-end styling, practical body engineering, and a design language built for operators.',
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: index * 0.08 }}
          className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
        >
          <div className="relative h-[240px] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent_25%,rgba(0,0,0,0.64)_100%)]" />
          </div>

          <div className="px-6 py-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#ff5f5f]">
              Predator Platform
            </p>
            <h5 className="mt-2 text-[1.7rem] font-black tracking-[-0.04em] text-white">
              {item.title}
            </h5>
            <p className="mt-3 text-[0.98rem] leading-7 text-white/62">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* PREDATOR SECTION END */}

{/* RANGE SECTION START */}
<section
  id="range"
  className="relative overflow-hidden border-t border-black/5 bg-[#f4f1ea] px-6 py-16 text-[#111111] sm:px-10 lg:px-16 lg:py-24"
>
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(215,38,38,0.75),transparent_48%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:140px_140px] opacity-[0.22]" />
    <div className="absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-[#d72626]/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-[#234d8f]/8 blur-3xl" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1580px]">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between"
    >
      <div>
        <div className="mb-6 flex items-center gap-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d72626]">
            02
          </span>
          <span className="h-px w-12 bg-black/10" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-black/55">
            The Range
          </span>
        </div>

        <div className="max-w-[980px] leading-none">
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-black tracking-[-0.055em] text-[#111111]">
            The <span className="text-[#d72626]">Predator</span>
          </h2>

          <div
            className="mt-1 text-[clamp(2rem,4vw,4rem)] font-black tracking-[-0.06em]"
            style={{
              color: '#ffffff',
              WebkitTextStroke: '1.5px #d72626',
              textShadow:
                '1px 1px 0 #d72626, 2px 2px 0 rgba(215,38,38,0.85), 3px 3px 0 rgba(0,0,0,0.18), 0 10px 0 rgba(0,0,0,0.14), 0 18px 28px rgba(0,0,0,0.32)',
            }}
          >
            Range
          </div>
        </div>
      </div>

<div className="mb-4 flex flex-wrap gap-3">
  {brandTabs.map((tab) => {
    const active = activeBrand === tab.id;

    return (
      <button
        key={tab.id}
        type="button"
        onClick={() => {
          setActiveBrand(tab.id);
          setRangeTab('all');
          setActiveBusIndex(0);
        }}
        className={`min-w-[118px] rounded-none border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${
          active
            ? 'border-[#111111] bg-[#111111] text-white'
            : 'border-black/15 bg-white/50 text-black/60 hover:border-black/25 hover:text-black'
        }`}
      >
        {tab.label}
      </button>
    );
  })}
</div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">
          Brand
        </p>
<h3 className="mt-2 text-[clamp(2rem,4vw,3.1rem)] font-black tracking-[-0.04em] text-[#111111]">
  {activeBrandData.title}
</h3>
<p className="mt-3 max-w-[620px] text-[1rem] leading-7 text-black/62">
  {activeBrandData.intro}
</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={showPrevBus}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black transition hover:-translate-y-0.5 hover:border-black/20"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={showNextBus}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black transition hover:-translate-y-0.5 hover:border-black/20"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>

    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.18fr)_420px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBus.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[34px] border border-black/8 bg-white/70 shadow-[0_22px_65px_rgba(0,0,0,0.06)] backdrop-blur-sm"
        >
          <div className="relative h-[340px] overflow-hidden sm:h-[420px]">
            <img
              src={activeBus.image}
              alt={activeBus.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),transparent_28%,rgba(0,0,0,0.58)_100%)]" />

            <a
              href="#spec-quote"
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5"
            >
              <ArrowUpRight size={18} />
            </a>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
<p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ff6a6a]">
  {activeBus.type}
</p>
<h4 className="mt-2 text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.04em] text-white">
  {activeBus.name}
</h4>
            </div>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div>
<p className="max-w-[720px] text-[1.02rem] leading-8 text-black/66">
  {activeBus.blurb}
</p>

<div className="mt-6 grid gap-4 sm:grid-cols-2">
  {activeBus.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-[22px] border border-black/8 bg-black/[0.02] px-5 py-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/42">
                      {spec.label}
                    </p>
                    <p className="mt-2 text-[1rem] font-semibold leading-7 text-[#111111]">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] border border-black/8 bg-[#111111] p-6 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                Bus insight
              </p>
<h5 className="mt-4 text-[1.2rem] font-semibold leading-7">
  {activeBus.featureTitle}
</h5>
<p className="mt-4 text-[0.98rem] leading-7 text-white/68">
  {activeBus.featureText}
</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
        {sideBuses.map((bus, index) => (
          <motion.button
            key={bus.id}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            onClick={() => selectBus(bus.id)}
            className="group overflow-hidden rounded-[28px] border border-black/8 bg-white/70 text-left shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm"
          >
            <div className="relative h-[230px] overflow-hidden">
              <img
                src={bus.image}
                alt={bus.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),transparent_25%,rgba(0,0,0,0.56)_100%)]" />

              <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition duration-300 group-hover:-translate-y-0.5">
                <ArrowUpRight size={18} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#ff6a6a]">
                  {bus.type}
                </p>
                <h5 className="mt-2 text-[1.8rem] font-black tracking-[-0.04em] text-white">
                  {bus.name}
                </h5>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  </div>
</section>

{/* RANGE SECTION END */}


        <section
          id="spec-quote"
          className="border-t border-white/10 px-6 py-16 text-white/75 sm:px-10 lg:px-16"
        >
          <p className="text-sm uppercase tracking-[0.3em]">Spec &amp; Quote</p>
        </section>

        <section
          id="contact"
          className="border-t border-white/10 px-6 py-16 text-white/75 sm:px-10 lg:px-16"
        >
          <p className="text-sm uppercase tracking-[0.3em]">Contact</p>
        </section>
      </main>
    </div>
  );
}