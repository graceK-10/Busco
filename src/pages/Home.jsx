import { useMemo, useState } from 'react';
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Download } from 'lucide-react';

import busArcticWhite from '../assets/Pictures/bus1.jpeg';
import busPredatorRed from '../assets/Pictures/bus2.jpeg';
import busSupportImage from '../assets/Pictures/bus3.jpeg';
import splitBackgroundVideo from '../assets/backgrounds/background4.mp4';
import scaniaLogo from '../assets/Logos/scania-logo-1.png';
import mercLogo from '../assets/Logos/merc-logo-1.png';
import volvoLogo from '../assets/Logos/volvo-logo-1.png';
import manLogo from '../assets/Logos/man-logo-1.png';
import hinoLogo from '../assets/Logos/hino-logo-1.png';
import oemStripLogo from '../assets/Logos/predator-logo-2.png';
import redAccent from '../assets/Logos/red-accent.png';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { getPredatorBrandData, predatorBrandTabs } from '../data/predatorRangeData';

const oemLogos = [
  { name: 'Scania', src: scaniaLogo, wide: false },
  { name: 'Mercedes-Benz', src: mercLogo, wide: false },
  { name: 'Volvo', src: volvoLogo, wide: false },
  { name: 'MAN', src: manLogo, wide: false },
  { name: 'Hino', src: hinoLogo, wide: false },
  { name: 'Busco OEM Network', src: oemStripLogo, wide: true },
];

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Our Range', href: '#/predator' },
  { label: 'Gallery', href: '#gallery' },
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

export default function Home() {
  const [activeTab, setActiveTab] = useState(colourTabs[0].id);
  const [activeBrand, setActiveBrand] = useState(predatorBrandTabs[0].id);
  const [activeBusIndex, setActiveBusIndex] = useState(0);

  const activeScheme = useMemo(
    () => colourTabs.find((tab) => tab.id === activeTab) ?? colourTabs[0],
    [activeTab]
  );
  const activeBrandData = useMemo(() => getPredatorBrandData(activeBrand), [activeBrand]);
  const brandBuses = activeBrandData.buses;
  const safeBusIndex = brandBuses.length === 0 ? 0 : ((activeBusIndex % brandBuses.length) + brandBuses.length) % brandBuses.length;
  const activeBus = brandBuses[safeBusIndex] ?? brandBuses[0];
  const sideBuses = brandBuses.filter((_, index) => index !== safeBusIndex).slice(0, 2);

  const isArcticWhite = activeScheme.id === 'arctic-white';
  const approvalItems = ['NRCS Approved', 'SABS Certified', 'Homologated'];
  const brochureButtonClass = 'inline-flex items-center gap-2 rounded-full bg-[#d72626] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:brightness-110';

  const showPrevBus = () => {
    if (brandBuses.length === 0) return;
    setActiveBusIndex((current) => (current - 1 + brandBuses.length) % brandBuses.length);
  };

  const showNextBus = () => {
    if (brandBuses.length === 0) return;
    setActiveBusIndex((current) => (current + 1) % brandBuses.length);
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
        <section id="home" className="relative flex min-h-[300px] flex-col overflow-hidden lg:min-h-[74vh] 2xl:min-h-[720px]">
          <SiteHeader navItems={navItems} />

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
                    href="#/predator"
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
    Welcome to Busafrica – Busco
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
    People Carriers built with Pride and Passion
  </div>
</div>

<div className="mt-8 max-w-[760px] space-y-6 text-[1.08rem] leading-8 text-black/68 sm:text-[1.12rem]">
  <p>
    <span className="font-semibold text-black">Busco Marketing</span> is the sales
    &amp; marketing division of{" "}
    <span className="font-semibold text-black">Busafrica</span> and offers a
    comprehensive range of passenger buses designed to meet diverse operational
    needs and applications. Our focus is on delivering high-quality, reliable
    solutions that provide peace of mind and exceptional value for money.
  </p>

  <p>
    At Busco / Busafrica, our mission is to exceed customer expectations through
    outstanding service, supported by in-depth product knowledge and decades of
    experience in the passenger transport industry.
  </p>

  <p>
    Busco / Busafrica is an officially approved supplier and homologated bus
    bodywork manufacturer for leading OEM brands, including Scania,
    Mercedes-Benz, Volkswagen-MAN, Volvo, and Hino Trucks.
  </p>
</div>
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
    className="w-[180px] sm:w-[240px] lg:w-[450px] opacity-95"
  />
</div>

<div className="pointer-events-none absolute left-0 top-0 z-10">
  <img
    src={redAccent}
    alt=""
    className="w-[120px] rotate-180 sm:w-[160px] lg:w-[350px] opacity-90"
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
                href="#/predator"
                className="inline-flex items-center rounded-none bg-[#ff2323] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition hover:brightness-110"
              >
                Explore Our Range →
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



        <section id="spec-quote" className="border-t border-black/5 bg-[#f8f5ef] px-6 py-16 text-black/60 sm:px-10 lg:px-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d72626]">Spec &amp; Quote</p>
        </section>

        <section
          id="contact"
          className="border-t border-white/10 px-6 py-16 text-white/75 sm:px-10 lg:px-16"
        >
          <p className="text-sm uppercase tracking-[0.3em]">Contact</p>
        </section>
        <SiteFooter />
      </main>
    </div>
  );
}