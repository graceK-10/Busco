import { useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Our Range', href: '#/predator' },
  { label: 'Gallery', href: '#/gallery' },
  { label: 'Spec & Quote', href: '#spec-quote' },
];

const contactPeople = [
  {
    name: 'Mark Tiedemann',
    phone: '082 571 5351',
    email: 'mark@busco.co.za',
  },
  {
    name: 'Willie van Zyl',
    phone: '082 551 1056',
    email: 'willie@busco.co.za',
  },
  {
    name: 'Lloyd Baldwin',
    phone: '082 444 9766',
    email: 'lloyd@busco.co.za',
  },
  {
    name: 'Jay Jonker',
    role: 'Parts sales',
    phone: '067 303 3487',
    email: 'support@busco.co.za',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const mailtoHref = `mailto:lloyd@busco.co.za?subject=${encodeURIComponent(
    `Busco website enquiry from ${form.name || 'Website Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
  )}`;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

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

        <section className="relative px-6 py-14 sm:px-10 lg:px-16 lg:py-18">
          <div className="mx-auto max-w-[1580px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d72626]">
                Contact Busco
              </p>

              <h1 className="mt-4 text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#111111]">
                Let&apos;s start the
                <span
                  className="block"
                  style={{
                    color: '#ffffff',
                    WebkitTextStroke: '1.5px #d72626',
                    textShadow:
                      '1px 1px 0 #d72626, 2px 2px 0 rgba(215,38,38,0.85), 3px 3px 0 rgba(0,0,0,0.18), 0 10px 0 rgba(0,0,0,0.14), 0 18px 28px rgba(0,0,0,0.32)',
                  }}
                >
                  conversation
                </span>
              </h1>
            </motion.div>

            <div className="overflow-hidden rounded-[34px] border border-black/8 bg-white/70 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
              <iframe
                title="Busco Marketing Map"
                src="https://www.google.com/maps?q=25%C2%B059'54.%2028%C2%B026'47%20ext,%201,%20249%20Rembrandt%20St,%20Nestpark%20AH,%20Bapsfontein,%201510,%20South%20Africa&z=15&output=embed"
                className="h-[340px] w-full border-0 sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-20 sm:px-10 lg:px-16 lg:pb-24">
          <div className="relative z-10 mx-auto grid max-w-[1580px] gap-8 xl:grid-cols-[420px_minmax(0,1fr)] xl:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-[30px] border border-black/8 bg-white/75 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8"
            >
              <h2 className="text-[1.5rem] font-black tracking-[-0.04em] text-[#d72626]">
                Address
              </h2>

              <div className="mt-2 space-y-1 text-[1rem] leading-8 text-black/72">
                <p>249 Rembrandt street</p>
                <p>Nestpark Ext 1,</p>
                <p>Bapsfontein Gauteng,</p>
                <p>South Africa</p>
              </div>

              <h3 className="mt-5 text-[1.5rem] font-black tracking-[-0.04em] text-[#d72626]">
                Contact Us
              </h3>

              <div className="mt-2 space-y-5 text-black/72">
                {contactPeople.map((person) => (
                  <div key={person.email}>
                    <p className="font-semibold text-[#111111]">
                      {person.role
                        ? `${person.role} - ${person.name} - ${person.phone}`
                        : `${person.name} - ${person.phone}`}
                    </p>

                    <a href={`mailto:${person.email}`} className="text-[#d72626] hover:underline">
                      {person.email}
                    </a>
                  </div>
                ))}

                <div>
                  <p className="font-semibold text-[#111111]">
                    Telephone - 0861114590 / 011 964 1182
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              action={mailtoHref}
              method="get"
              className="rounded-[30px] border border-black/8 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8"
            >
              <div className="grid gap-4 md:grid-cols-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="min-h-[58px] border border-black/20 bg-transparent px-4 text-[1rem] outline-none transition focus:border-[#d72626]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="min-h-[58px] border border-black/20 bg-transparent px-4 text-[1rem] outline-none transition focus:border-[#d72626]"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="min-h-[58px] border border-black/20 bg-transparent px-4 text-[1rem] outline-none transition focus:border-[#d72626]"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows="8"
                className="mt-4 w-full border border-black/20 bg-transparent px-4 py-4 text-[1rem] outline-none transition focus:border-[#d72626]"
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-black/55">
                  Submit opens your default email app with your enquiry addressed to{' '}
                  <span className="font-semibold text-[#111111]">lloyd@busco.co.za</span>.
                </p>

                <button
                  type="submit"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-[#d72626] px-7 text-[10px] font-bold uppercase tracking-[0.24em] text-white transition hover:brightness-110"
                >
                  Submit
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}