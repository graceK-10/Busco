import { useState } from 'react';
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { galleryImages } from '../data/galleryImages';

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Our Range', href: '#/predator' },
  { label: 'Gallery', href: '#/gallery' },
  { label: 'Spec & Quote', href: '#spec-quote' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      className="min-h-screen bg-[#f4f1ea] text-[#111111]"
      style={{
        backgroundImage:
          'radial-gradient(circle at top, rgba(255,255,255,0.95), transparent 62%), linear-gradient(180deg, #f4f1ea 0%, #ece8e0 100%)',
      }}
    >
      <main className="w-full overflow-hidden bg-[#f4f1ea]">
        <SiteHeader navItems={navItems} />

        <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-[#d72626]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-[#234d8f]/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:140px_140px] opacity-[0.22]" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1580px]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d72626]">
                  04
                </span>
                <span className="h-px w-12 bg-black/10" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-black/55">
                  Busco Gallery
                </span>
              </div>

              <h1 className="max-w-[980px] text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#d72626]">
                Gallery
                <span
                  className="block"
                  style={{
                    color: '#ffffff',
                    WebkitTextStroke: '1.5px #d72626',
                    textShadow:
                      '1px 1px 0 #d72626, 2px 2px 0 rgba(215,38,38,0.85), 3px 3px 0 rgba(0,0,0,0.18), 0 10px 0 rgba(0,0,0,0.14), 0 18px 28px rgba(0,0,0,0.32)',
                  }}
                >
                  Built for Africa
                </span>
              </h1>

              <p className="mt-7 max-w-[720px] text-[1.08rem] leading-8 text-black/65">
                Explore BUSCO Predator builds, bodywork finishes and passenger
                transport designs created for South African roads.
              </p>
            </motion.div>

            <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2 xl:grid-cols-4">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={`${image.title}-${index}`}
                  type="button"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  onClick={() => setSelectedImage(image)}
                  className={`group relative overflow-hidden rounded-[30px] border border-black/8 bg-white/70 text-left shadow-[0_18px_50px_rgba(0,0,0,0.06)] ${
                    image.size === 'large'
                      ? 'md:col-span-2 md:row-span-2'
                      : image.size === 'wide'
                        ? 'md:col-span-2'
                        : ''
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),transparent_35%,rgba(0,0,0,0.76)_100%)]" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d72626] backdrop-blur-sm">
                    {image.category}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h2 className="text-[1.45rem] font-black tracking-[-0.04em] text-white">
                      {image.title}
                    </h2>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                      View Image →
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/5 bg-[#08090d] px-6 py-16 text-white sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1580px] gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#ff2323]">
                Need a specific build?
              </p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.8rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                Speak to Busco about your next passenger carrier.
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-md bg-[#d72626] px-7 text-[10px] font-bold uppercase tracking-[0.24em] text-white transition hover:brightness-110"
              >
                Contact Us
              </a>

              <a
                href="tel:0861114590"
                className="inline-flex min-h-[50px] items-center justify-center rounded-md border border-white/15 px-7 text-[10px] font-bold uppercase tracking-[0.24em] text-white transition hover:border-white/35"
              >
                0861 114 590
              </a>
            </div>
          </div>
        </section>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[90vh] w-full max-w-[1100px] overflow-hidden rounded-[28px] bg-white"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-[#d72626]"
                >
                  ×
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[76vh] w-full object-cover"
                />

                <div className="border-t border-black/10 bg-[#f4f1ea] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d72626]">
                    {selectedImage.category}
                  </p>
                  <h3 className="mt-1 text-[1.5rem] font-black tracking-[-0.04em] text-[#111111]">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <SiteFooter />
      </main>
    </div>
  );
}