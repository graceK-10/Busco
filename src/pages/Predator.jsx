import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, ExternalLink } from 'lucide-react';

import buscoLogo from '../assets/Logos/busco-logo-1.png';
import redAccent from '../assets/Logos/red-accent.png';
import { getPredatorBrandData, predatorBrandTabs } from '../data/predatorRangeData';

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Predator', href: '#/predator' },
  { label: 'Contact', href: '#/contact' },
];

const getPredatorParams = () => {
  const hash = window.location.hash || '#/predator';
  const query = hash.includes('?') ? hash.split('?')[1] : '';
  const params = new URLSearchParams(query);
  return {
    brand: params.get('brand') || 'hino',
    bus: params.get('bus') || '',
  };
};

const brochureButton = (bus, subtle = false) => (
  <a
    href={bus.brochure}
    target="_blank"
    rel="noreferrer"
    className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition ${
      subtle
        ? 'border border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/15'
        : 'bg-[#d72626] text-white hover:brightness-110'
    }`}
  >
    <Download size={15} /> {bus.brochureLabel}
  </a>
);

export default function Predator() {
  const initialParams = useMemo(() => getPredatorParams(), []);
  const [activeBrand, setActiveBrand] = useState(initialParams.brand);
  const [activeBusId, setActiveBusId] = useState(initialParams.bus);

  useEffect(() => {
    const onHashChange = () => {
      const params = getPredatorParams();
      setActiveBrand(params.brand);
      setActiveBusId(params.bus);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const brandData = useMemo(() => getPredatorBrandData(activeBrand), [activeBrand]);
  const brandBuses = brandData.buses;
  const activeBus = brandBuses.find((bus) => bus.id === activeBusId) || brandBuses[0];
  const otherBuses = brandBuses.filter((bus) => bus.id !== activeBus.id);
  const topSideBuses = otherBuses.slice(0, 3);
  const gridBuses = otherBuses.slice(3);

  const updateHash = (brandId, busId) => {
    window.location.hash = `#/predator?brand=${brandId}${busId ? `&bus=${busId}` : ''}`;
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,38,38,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#07080c_0%,#0c1017_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.08]" />
        </div>

        <section className="relative border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1580px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <a href="#/" className="flex items-center gap-4">
              <img src={buscoLogo} alt="BUSCO logo" className="h-16 w-auto object-contain" />
            </a>

            <nav className="flex flex-wrap items-center gap-5 text-[13px] font-semibold uppercase tracking-[0.32em] text-red-500">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap gap-3">
              <a
                href="#/contact"
                className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#d72626] px-5 text-[11px] font-bold uppercase tracking-[0.24em] text-white"
              >
                Contact
              </a>
              <a
                href="#spec-quote"
                className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-white/15 px-5 text-[11px] font-bold uppercase tracking-[0.24em] text-white/85"
              >
                Spec & Quote
              </a>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-[1580px]">
            <div className="max-w-[980px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#ff5a5a]">Predator range</p>
              <h1 className="mt-4 text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
                Explore the <span className="text-[#d72626]">Predator</span> line-up
              </h1>
              <p className="mt-6 max-w-[840px] text-[1.05rem] leading-8 text-white/68">
                Browse the Predator range by chassis brand. Each tab keeps the Busco home-page style: a featured main bus, three supporting image cards beside it, and the rest of the range below with brochure download access.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {predatorBrandTabs.map((tab) => {
                const active = activeBrand === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => updateHash(tab.id, '')}
                    className={`rounded-full border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${
                      active
                        ? 'border-[#d72626] bg-[#d72626] text-white shadow-[0_14px_32px_rgba(215,38,38,0.32)]'
                        : 'border-white/12 bg-white/[0.04] text-white/65 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 rounded-[36px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8 xl:p-10">
              <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ff6a6a]">Brand tab</p>
                  <h2 className="mt-3 text-[clamp(2rem,3vw,3.4rem)] font-black tracking-[-0.04em] text-white">{brandData.title}</h2>
                  <p className="mt-4 max-w-[760px] text-[1rem] leading-8 text-white/66">{brandData.intro}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                  {brandBuses.length} buses in this tab
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_380px]">
                <motion.article
                  key={activeBus.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0e131c]"
                >
                  <div className="relative h-[360px] overflow-hidden sm:h-[480px]">
                    <img src={activeBus.image} alt={activeBus.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),transparent_30%,rgba(0,0,0,0.78)_100%)]" />
                    <div className="absolute left-0 top-0 p-6 sm:p-8">
                      <span className="inline-flex rounded-full border border-white/12 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/90">
                        {activeBus.heroTag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ff6a6a]">{activeBus.type}</p>
                      <h3 className="mt-2 text-[clamp(2rem,4vw,3.4rem)] font-black tracking-[-0.05em] text-white">{activeBus.name}</h3>
                      {activeBus.isPlaceholder && (
                        <p className="mt-3 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-200">
                          Placeholder details
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 p-6 sm:p-8 xl:grid-cols-[minmax(0,1fr)_320px]">
                    <div>
                      <p className="text-[1rem] leading-8 text-white/72">{activeBus.blurb}</p>

                      {activeBus.note && (
                        <div className="mt-5 rounded-[22px] border border-amber-300/20 bg-amber-300/8 px-5 py-4 text-[0.95rem] leading-7 text-amber-100/90">
                          {activeBus.note}
                        </div>
                      )}

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {activeBus.specs.map((spec) => (
                          <div key={spec.label} className="rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">{spec.label}</p>
                            <p className="mt-2 text-[1rem] font-semibold leading-7 text-white">{spec.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-6">
                        <h4 className="text-[1.05rem] font-bold uppercase tracking-[0.18em] text-white">Bus details</h4>
                        <div className="mt-4 space-y-3 text-[0.98rem] leading-7 text-white/70">
                          {activeBus.details.map((detail, index) => (
                            <p key={`${activeBus.id}-detail-${index}`}>• {detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">Bus insight</p>
                        <h5 className="mt-4 text-[1.2rem] font-semibold leading-7 text-white">{activeBus.featureTitle}</h5>
                        <p className="mt-4 text-[0.98rem] leading-7 text-white/68">{activeBus.featureText}</p>
                      </div>

                      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">Optional features</p>
                        <ul className="mt-4 space-y-3 text-[0.95rem] leading-7 text-white/68">
                          {activeBus.optionalFeatures.map((feature, index) => (
                            <li key={`${activeBus.id}-feature-${index}`}>• {feature}</li>
                          ))}
                        </ul>
                      </div>

                      {brochureButton(activeBus)}
                    </div>
                  </div>
                </motion.article>

                <div className="grid gap-5">
                  {topSideBuses.map((bus, index) => (
                    <motion.button
                      key={bus.id}
                      type="button"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.06 }}
                      onClick={() => updateHash(activeBrand, bus.id)}
                      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] text-left"
                    >
                      <div className="relative h-[240px] overflow-hidden">
                        <img src={bus.image} alt={bus.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),transparent_24%,rgba(0,0,0,0.72)_100%)]" />
                        <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
                          <ArrowUpRight size={18} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#ff6a6a]">{bus.type}</p>
                          <h4 className="mt-2 text-[1.55rem] font-black tracking-[-0.04em] text-white">{bus.name}</h4>
                          {bus.isPlaceholder && <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200">Placeholder details</p>}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                        <p className="max-w-[220px] text-[0.95rem] leading-7 text-white/62">{bus.blurb}</p>
                        {brochureButton(bus, true)}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h4 className="text-[1.1rem] font-bold uppercase tracking-[0.22em] text-white">More in the {brandData.title} range</h4>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Grid of remaining buses</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {gridBuses.map((bus, index) => (
                    <motion.article
                      key={bus.id}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: index * 0.03 }}
                      className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04]"
                    >
                      <button type="button" onClick={() => updateHash(activeBrand, bus.id)} className="block w-full text-left">
                        <div className="relative h-[220px] overflow-hidden">
                          <img src={bus.image} alt={bus.name} className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),transparent_24%,rgba(0,0,0,0.72)_100%)]" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff6a6a]">{bus.type}</p>
                            <h5 className="mt-2 text-[1.45rem] font-black tracking-[-0.04em] text-white">{bus.name}</h5>
                          </div>
                        </div>
                      </button>

                      <div className="space-y-4 p-5">
                        {bus.isPlaceholder && (
                          <div className="rounded-[18px] border border-amber-300/20 bg-amber-300/8 px-4 py-3 text-[0.85rem] leading-6 text-amber-100/90">
                            Placeholder details currently shown for this model.
                          </div>
                        )}
                        <p className="text-[0.95rem] leading-7 text-white/65">{bus.blurb}</p>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => updateHash(activeBrand, bus.id)}
                            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/75 transition hover:text-white"
                          >
                            View details <ExternalLink size={14} />
                          </button>
                          {brochureButton(bus, true)}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pointer-events-none absolute bottom-0 right-0 opacity-90">
          <img src={redAccent} alt="" className="w-[220px] sm:w-[260px] lg:w-[420px]" />
        </div>
      </main>
    </div>
  );
}
