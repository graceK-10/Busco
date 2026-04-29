import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

import img1 from "../assets/Pictures/bus1.jpeg";
import img2 from "../assets/Pictures/bus2.jpeg";
import img3 from "../assets/Pictures/bus3.jpeg";

// 👉 Add more images as needed
const images = [img1, img2, img3, img1, img2, img3];

const navItems = [
  { label: "Home", href: "#/" },
  { label: "About", href: "#/about" },
  { label: "Our Range", href: "#/predator" },
  { label: "Gallery", href: "#/gallery" },
  { label: "Spec & Quote", href: "#/spec-quote" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#111111]">
      <main className="w-full overflow-hidden">
        <SiteHeader navItems={navItems} />

        {/* HEADER */}
        <section className="relative px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d72626]">
              04
            </p>

            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-[-0.05em] text-[#d72626]">
              Gallery
            </h1>

            <p className="mt-4 max-w-[600px] text-[1.05rem] leading-7 text-black/60">
              Explore our range of BUSCO Predator builds — engineered for South
              African roads and designed to move people with confidence.
            </p>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="px-6 pb-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative cursor-pointer overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Gallery ${index}`}
                    className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />

                  <div className="absolute bottom-4 left-4 text-white opacity-0 transition group-hover:opacity-100">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                      View Image
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Preview"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <SiteFooter />
      </main>
    </div>
  );
}