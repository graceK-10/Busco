import { useEffect, useMemo, useState } from 'react';
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Download, ExternalLink, X } from 'lucide-react';

import buscoLogo from '../assets/Logos/busco-logo-1.png';
import redAccent from '../assets/Logos/red-accent.png';
import { getPredatorBrandData, predatorBrandTabs } from '../data/predatorRangeData';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Our Range', href: '#/predator' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Spec & Quote', href: '#spec-quote' },
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

const buildPredatorHash = (brandId, busId) => `#/predator?brand=${brandId}${busId ? `&bus=${busId}` : ''}`;

const brochureButton = (bus, subtle = false) => (
  <a
    href={bus.brochure}
    target="_blank"
    rel="noreferrer"
    className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition ${
      subtle
        ? 'border border-[#d72626]/20 bg-[#d72626] text-white hover:brightness-110'
        : 'bg-[#d72626] text-white hover:brightness-110'
    }`}
  >
    <Download size={15} /> {bus.brochureLabel}
  </a>
);

function RangeModal({ bus, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!bus) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => event.stopPropagation()}
          className="max-h-[90vh] w-full max-w-[1120px] overflow-auto rounded-[32px] border border-black/10 bg-[#f8f4ee] shadow-[0_28px_80px_rgba(0,0,0,0.22)]"
        >
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[340px] overflow-hidden lg:min-h-full">
              <img src={bus.image} alt={bus.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),transparent_30%,rgba(0,0,0,0.72)_100%)]" />
              <div className="absolute left-0 top-0 p-6">
                <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#111111]">
                  {bus.heroTag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ff8a8a]">{bus.type}</p>
                <h3 className="mt-2 text-[clamp(2rem,4vw,3.4rem)] font-black tracking-[-0.05em] text-white">{bus.name}</h3>
              </div>
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#111111] transition hover:border-black/20 hover:bg-black/[0.03]"
              >
                <X size={18} />
              </button>

              <div className="pr-14">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d72626]">Range details</p>
                <h4 className="mt-4 text-[1.08rem] leading-8 text-black/75">{bus.blurb}</h4>

                {bus.note && (
                  <div className="mt-5 rounded-[20px] border border-amber-300/30 bg-amber-50 px-5 py-4 text-[0.95rem] leading-7 text-amber-900/85">
                    {bus.note}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">{brochureButton(bus, false)}</div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {bus.specs.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-black/8 bg-white px-5 py-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40">{spec.label}</p>
                      <p className="mt-2 text-[0.98rem] font-semibold leading-7 text-[#111111]">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[24px] border border-black/8 bg-white px-6 py-6">
                  <h5 className="text-[1rem] font-bold uppercase tracking-[0.18em] text-[#111111]">Bus details</h5>
                  <div className="mt-4 space-y-3 text-[0.97rem] leading-7 text-black/70">
                    {bus.details.map((detail, index) => (
                      <p key={`${bus.id}-modal-detail-${index}`}>• {detail}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-[24px] border border-black/8 bg-[#111111] px-6 py-6 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">Optional features</p>
                  <ul className="mt-4 space-y-3 text-[0.95rem] leading-7 text-white/72">
                    {bus.optionalFeatures.map((feature, index) => (
                      <li key={`${bus.id}-modal-feature-${index}`}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Predator() {
  const initialParams = useMemo(() => getPredatorParams(), []);
  const [activeBrand, setActiveBrand] = useState(initialParams.brand);
  const [activeBusId, setActiveBusId] = useState(initialParams.bus);
  const [modalBus, setModalBus] = useState(null);

  useEffect(() => {
    const onHashChange = () => {
      const params = getPredatorParams();
      setActiveBrand(params.brand);
      setActiveBusId(params.bus);
      setModalBus(null);
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
    window.location.assign(buildPredatorHash(brandId, busId));
  };

return (
  <div className="min-h-screen bg-[#e5e0d7] text-[#111111]">
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#eee8df_0%,#dfd8ce_100%)]">
      <SiteHeader navItems={navItems} backgroundClassName="bg-[#fbf8f3]" />

      <section>
        <div>
          <div>
            <a href="#quote">
              Spec & Quote
            </a>
          </div>
        </div>
      </section>
    

        <section className="relative px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-[1580px]">
            <div className="mx-auto max-w-[980px] text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d72626]">Predator range</p>
              <h1
                className="mt-4 text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.06em]"
              >
                <span className="text-[#111111]">Explore the </span>
                <span
                  style={{
                    color: '#ffffff',
                    WebkitTextStroke: '1.5px #d72626',
                    textShadow:
                      '1px 1px 0 #d72626, 2px 2px 0 rgba(215,38,38,0.85), 3px 3px 0 rgba(0,0,0,0.18), 0 10px 0 rgba(0,0,0,0.12), 0 18px 28px rgba(0,0,0,0.24)',
                  }}
                >
                  Predator line-up
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-[840px] text-[1.05rem] leading-8 text-black/62">
                Browse the Predator range by chassis brand. The first four buses keep the featured layout, while the remaining grid buses open in a detailed popup with brochure access and model information.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {predatorBrandTabs.map((tab) => {
                const active = activeBrand === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => updateHash(tab.id, '')}
                    className={`rounded-full border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${
                      active
                        ? 'border-[#d72626] bg-[#d72626] text-white shadow-[0_14px_32px_rgba(215,38,38,0.24)]'
                        : 'border-black/12 bg-white/80 text-black/65 hover:border-black/25 hover:text-black'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 rounded-[36px] border border-black/8 bg-[#fffdf9] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.10)] backdrop-blur-sm sm:p-8 xl:p-10">
              <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d72626]">Brand tab</p>
                  <h2 className="mt-3 text-[clamp(2rem,3vw,3.4rem)] font-black tracking-[-0.04em] text-[#111111]">{brandData.title}</h2>
                  <p className="mt-4 max-w-[760px] text-[1rem] leading-8 text-black/62">{brandData.intro}</p>
                </div>
                <div className="rounded-full border border-black/10 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/55">
                  {brandBuses.length} buses in this tab
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_380px]">
                <motion.article
                  key={activeBus.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden rounded-[32px] border border-black/8 bg-[#f3ede4]"
                >
                  <div className="relative h-[360px] overflow-hidden sm:h-[480px]">
                    <img src={activeBus.image} alt={activeBus.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),transparent_30%,rgba(0,0,0,0.78)_100%)]" />
                    <div className="absolute left-0 top-0 p-6 sm:p-8">
                      <span className="inline-flex rounded-full border border-white/15 bg-white/88 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#111111]">
                        {activeBus.heroTag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffb0b0]">{activeBus.type}</p>
                      <h3 className="mt-2 text-[clamp(2rem,4vw,3.4rem)] font-black tracking-[-0.05em] text-white">{activeBus.name}</h3>
                      {activeBus.isPlaceholder && (
                          <p className="mt-3 inline-flex rounded-full border border-amber-300/30 bg-amber-300/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-100">
                          Placeholder details
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 p-6 sm:p-8 xl:grid-cols-[minmax(0,1fr)_320px]">
                    <div>
                      <p className="text-[1rem] leading-8 text-black/72">{activeBus.blurb}</p>

                      {activeBus.note && (
                          <div className="mt-5 rounded-[22px] border border-amber-300/30 bg-amber-50 px-5 py-4 text-[0.95rem] leading-7 text-amber-900/90">
                          {activeBus.note}
                        </div>
                      )}

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {activeBus.specs.map((spec) => (
                          <div key={spec.label} className="rounded-[22px] border border-black/8 bg-[#fbf8f3] px-5 py-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">{spec.label}</p>
                            <p className="mt-2 text-[1rem] font-semibold leading-7 text-[#111111]">{spec.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 rounded-[28px] border border-black/8 bg-[#f9f5ef] p-6">
                        <h4 className="text-[1.05rem] font-bold uppercase tracking-[0.18em] text-[#111111]">Bus details</h4>
                        <div className="mt-4 space-y-3 text-[0.98rem] leading-7 text-black/70">
                          {activeBus.details.map((detail, index) => (
                            <p key={`${activeBus.id}-detail-${index}`}>• {detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      {brochureButton(activeBus, false, 'w-fit')}

                      <div className="rounded-[28px] border border-black/8 bg-[#111111] p-6 text-white">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">Bus insight</p>
                        <h5 className="mt-4 text-[1.2rem] font-semibold leading-7 text-white">{activeBus.featureTitle}</h5>
                        <p className="mt-4 text-[0.98rem] leading-7 text-white/68">{activeBus.featureText}</p>
                      </div>

                      <div className="rounded-[28px] border border-black/8 bg-[#f3efe8] p-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">Optional features</p>
                        <ul className="mt-4 space-y-3 text-[0.95rem] leading-7 text-black/68">
                          {activeBus.optionalFeatures.map((feature, index) => (
                            <li key={`${activeBus.id}-feature-${index}`}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
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
                      className="group overflow-hidden rounded-[28px] border border-black/8 bg-[#f9f5ef] text-left"
                    >
                      <div className="relative h-[240px] overflow-hidden">
                        <img src={bus.image} alt={bus.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),transparent_24%,rgba(0,0,0,0.72)_100%)] transition group-hover:bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.22),rgba(0,0,0,0.76))]" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                          <span className="rounded-full border border-white/40 bg-black/35 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                            Click to view more
                          </span>
                        </div>
                        <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
                          <ArrowUpRight size={18} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#ffb0b0]">{bus.type}</p>
                          <h4 className="mt-2 text-[1.55rem] font-black tracking-[-0.04em] text-white">{bus.name}</h4>
                          {bus.isPlaceholder && <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100">Placeholder details</p>}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                        <p className="max-w-[220px] text-[0.95rem] leading-7 text-black/62">{bus.blurb}</p>
                        {brochureButton(bus, true)}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h4 className="text-[1.1rem] font-bold uppercase tracking-[0.22em] text-[#111111]">More in the {brandData.title} range</h4>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/45">Grid of remaining buses</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {gridBuses.map((bus, index) => (
                    <motion.article
                      key={bus.id}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: index * 0.03 }}
                      className="overflow-hidden rounded-[26px] border border-black/8 bg-[#f7f2ea]"
                    >
                      <button type="button" onClick={() => setModalBus(bus)} className="group block w-full text-left">
                        <div className="relative h-[220px] overflow-hidden">
                          <img src={bus.image} alt={bus.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),transparent_24%,rgba(0,0,0,0.72)_100%)] transition group-hover:bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.22),rgba(0,0,0,0.78))]" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                            <span className="rounded-full border border-white/40 bg-black/35 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                              Click to view more
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffb0b0]">{bus.type}</p>
                            <h5 className="mt-2 text-[1.45rem] font-black tracking-[-0.04em] text-white">{bus.name}</h5>
                          </div>
                        </div>
                      </button>

                      <div className="space-y-4 p-5">
                        {bus.isPlaceholder && (
                          <div className="rounded-[18px] border border-amber-300/30 bg-amber-50 px-4 py-3 text-[0.85rem] leading-6 text-amber-900/90">
                            Placeholder details currently shown for this model.
                          </div>
                        )}
                        <p className="text-[0.95rem] leading-7 text-black/65">{bus.blurb}</p>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => setModalBus(bus)}
                            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black/75 transition hover:text-black"
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

      <RangeModal bus={modalBus} onClose={() => setModalBus(null)} />
      <SiteFooter />
    </div>
  );
}
