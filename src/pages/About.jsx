import { motion } from 'framer-motion';

import buscoLogo from '../assets/Logos/busco-logo-1.png';
import redAccent from '../assets/Logos/red-accent.png';
import heroBus from '../assets/Pictures/bus1.jpeg';
import supportBus from '../assets/Pictures/bus3.jpeg';
import teamBus from '../assets/Pictures/bus4.jpeg';
import lloydImage from '../assets/team/lloyd.jpg';
import markImage from '../assets/team/mark.jpg';
import willieImage from '../assets/team/willie.jpg';

const managers = [
  {
    name: 'Lloyd Baldwin',
    role: 'Transport Consultant',
    email: 'parts@busco.co.za',
    image: lloydImage,
  },
  {
    name: 'Mark Tiedemann',
    role: 'Member',
    email: 'mark@busco.co.za',
    image: markImage,
  },
  {
    name: 'Willie van Zyl',
    role: 'Member',
    email: 'willie@busco.co.za',
    image: willieImage,
  },
];

const aboutParagraphs = [
  'Busco Marketing was established by a team of well known bus experts to further improve the demands of the bus passenger industry. Busco Marketing has become a respected name in the supply chain of passenger buses. Busco/Busafrica has a team of seasoned bus experts that work very closely with all the bus chassis manufacturers (OEMs) namely: Scania, Mercedes-Benz, VolksWagen M.A.N., Volvo, VDL DAF, Iveco, Hino and UD Truck.',
  'Busco/Busafrica responded to the urgent need for a uniquely designed and developed bus bodywork to meet the high standards of the ever changing needs of bus operators and their passengers. After carefully researching the bus industry’s demands, we accumulated all the necessary information from all the parties concerned and were able to start the design and development of the stylish Predator bodywork.',
  'Busafrica worked very closely with all the chassis OEMs and their technical teams, which resulted in a perfect harmony between chassis and bus bodywork.',
  'Over the past decade the Predator has proved itself to be an outstanding low-cost-of-ownership vehicle with huge success in a variety of different applications.',
  'The Predator is backed up by a team of dedicated personnel with a passion and pride for providing excellent on-time service. The Predator also comes with the peace of mind that a full off-the-shelf back-up parts facility is available at reasonable prices.',
];

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
  { label: 'Range', href: '#/range' },
  { label: 'Predator', href: '#/predator' },
  { label: 'Spec & Quote', href: '#/spec-quote' },
];

export default function About() {
  return (
    <div
      className="min-h-screen bg-[#f4f1ea] text-[#111111]"
      style={{
        backgroundImage:
          'radial-gradient(circle at top, rgba(255,255,255,0.95), transparent 62%), linear-gradient(180deg, #f4f1ea 0%, #ece8e0 100%)',
      }}
    >
      <main className="w-full overflow-hidden bg-[#f4f1ea]">
        <section className="relative overflow-hidden border-b border-black/5 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <img src={buscoLogo} alt="BUSCO logo" className="h-16 w-auto object-contain sm:h-16" />

            <nav className="flex flex-wrap items-center gap-5 text-[13px] font-semibold uppercase tracking-[0.32em] text-red-600">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-black">
                  {item.label}
                </a>
              ))}
            </nav>

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
        </section>

        <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-60px] top-[-30px] h-[280px] w-[280px] rounded-full bg-[#d72626]/10 blur-3xl" />
            <div className="absolute left-[-40px] bottom-[-20px] h-[220px] w-[220px] rounded-full bg-[#234d8f]/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1580px] gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d72626]">
                Established in 1996
              </p>
              <h1 className="mt-5 text-[clamp(2.6rem,6vw,5.8rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#111111]">
                About <span className="text-[#d72626]">Busco</span>
              </h1>
              <div
                className="mt-2 text-[clamp(2rem,5vw,4.5rem)] font-black uppercase tracking-[-0.06em]"
                style={{
                  color: '#ffffff',
                  WebkitTextStroke: '1.5px #d72626',
                  textShadow:
                    '1px 1px 0 #d72626, 2px 2px 0 rgba(215,38,38,0.85), 3px 3px 0 rgba(0,0,0,0.18), 0 10px 0 rgba(0,0,0,0.14), 0 18px 28px rgba(0,0,0,0.32)',
                }}
              >
                Built for Africa
              </div>
              <p className="mt-8 max-w-[760px] text-[1.04rem] leading-8 text-black/68">
                Busco Marketing has become a respected name in the passenger bus supply chain by
                combining industry expertise, close OEM partnerships, and practical bodywork
                innovation that serves operators and passengers alike.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75 }}
              className="overflow-hidden rounded-[34px] border border-black/8 bg-white/70 shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-[280px] sm:h-[360px]">
                <img src={heroBus} alt="Busco bus" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),transparent_30%,rgba(0,0,0,0.58)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                    Busco / Busafrica
                  </p>
                  <h2 className="mt-2 text-[clamp(1.8rem,3vw,3rem)] font-black tracking-[-0.05em]">
                    Expertise, compliance and trusted bodywork.
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative border-t border-black/5 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="relative z-10 mx-auto max-w-[1580px]">
            <div className="mb-10 flex items-center gap-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d72626]">
                01
              </span>
              <span className="h-px w-12 bg-black/10" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-black/55">
                Our story
              </span>
            </div>

            <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_380px]">
              <div className="rounded-[32px] border border-black/8 bg-white/72 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-9">
                <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-black tracking-[-0.05em] text-[#111111]">
                  Decades of bus industry experience.
                </h2>

                <div className="mt-8 space-y-6 text-[1rem] leading-8 text-black/68">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <div className="overflow-hidden rounded-[30px] border border-black/8 bg-white/72 shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
                  <div className="h-[220px]">
                    <img src={supportBus} alt="Predator bus" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d72626]">
                      Predator platform
                    </p>
                    <p className="mt-3 text-[0.98rem] leading-7 text-black/65">
                      Designed around operator needs, evolving passenger expectations, and long-term
                      value for ownership.
                    </p>
                  </div>
                </div>

                <div className="rounded-[30px] border border-black/8 bg-[#111111] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/45">
                    At a glance
                  </p>
                  <div className="mt-6 grid gap-5">
                    {[
                      ['1996', 'Established'],
                      ['8+', 'OEM relationships'],
                      ['Predator', 'Signature bodywork'],
                      ['SA', 'Built for local conditions'],
                    ].map(([value, label]) => (
                      <div key={label} className="flex items-end justify-between border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                        <span className="text-[2.2rem] font-black leading-none text-[#ff2323]">
                          {value}
                        </span>
                        <span className="text-right text-[10px] font-semibold uppercase tracking-[0.22em] text-white/58">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-black/5 bg-[#efebe4] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:140px_140px] opacity-[0.18]" />
            <div className="absolute right-[8%] top-[8%] h-[240px] w-[240px] rounded-full bg-[#d72626]/8 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1580px]">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d72626]">
                    02
                  </span>
                  <span className="h-px w-12 bg-black/10" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-black/55">
                    Our management team
                  </span>
                </div>
                <h2 className="text-[clamp(2rem,4vw,3.8rem)] font-black tracking-[-0.05em] text-[#111111]">
                  Leadership guided by real bus industry experience.
                </h2>
                <p className="mt-4 max-w-[760px] text-[1rem] leading-8 text-black/66">
                  Our management team brings practical transport knowledge, technical understanding,
                  and a strong service mindset to every client engagement.
                </p>
              </div>

              <div className="grid max-w-[520px] gap-4 sm:grid-cols-2">
                {[heroBus, teamBus].map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-[24px] border border-black/8 bg-white/70 shadow-[0_14px_40px_rgba(0,0,0,0.05)]"
                  >
                    <img
                      src={image}
                      alt={`Busco bus ${index + 1}`}
                      className="h-[180px] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {managers.map((manager, index) => (
                <motion.div
                  key={manager.email}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[30px] border border-black/8 bg-white/80 shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
                >
                  <div className="relative h-[320px] overflow-hidden">
                    <img
                      src={manager.image}
                      alt={manager.name}
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),transparent_35%,rgba(0,0,0,0.42)_100%)]" />
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#d72626]">
                      Management
                    </p>
                    <h3 className="mt-3 text-[1.7rem] font-black tracking-[-0.04em] text-[#111111]">
                      {manager.name}
                    </h3>
                    <p className="mt-2 text-[0.98rem] font-medium uppercase tracking-[0.16em] text-black/56">
                      {manager.role}
                    </p>

                    <a
                      href={`mailto:${manager.email}`}
                      className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-md bg-[#d72626] px-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition hover:brightness-110"
                    >
                      Email Me
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 z-10">
            <img src={redAccent} alt="" className="w-[180px] sm:w-[240px] lg:w-[250px] opacity-95" />
          </div>
        </section>
      </main>
    </div>
  );
}