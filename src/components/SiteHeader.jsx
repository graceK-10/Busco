import buscoLogo from '../assets/Logos/busco-logo-1.png';

export const defaultNavItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Our Range', href: '#/predator' },
  { label: 'Gallery', href: '#/gallery' },
  { label: 'Spec & Quote', href: '#spec-quote' },
];

export default function SiteHeader({
  navItems = defaultNavItems,
  contactHref = '#/contact',
  backgroundClassName = 'bg-[#f4f1ea]',
  navTextClassName = 'text-red-600',
}) {
  return (
    <section className={`relative overflow-hidden border-b border-black/5 px-4 py-2 sm:px-6 lg:px-8 ${backgroundClassName}`}>
      <div className="mx-auto grid max-w-[1580px] gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <img src={buscoLogo} alt="BUSCO logo" className="mx-auto h-16 w-auto object-contain sm:h-16 lg:mx-0" />

        <nav className={`flex flex-wrap items-center justify-center gap-5 lg:pl-10 text-[13px] font-semibold uppercase tracking-[0.32em] ${navTextClassName}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-black">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2 lg:justify-end">
          <a
            href={contactHref}
            className="inline-flex min-h-[40px] items-center justify-center rounded-md px-5 text-[12px] font-bold uppercase tracking-[0.24em] text-white transition hover:brightness-110"
            style={{ backgroundColor: '#d72626' }}
          >
            Contact
          </a>

          <a
            href="tel:0861114590"
            className="inline-flex min-h-[40px] items-center gap-3 rounded-md border border-white/70 bg-white/95 px-4 text-[0.9rem] font-semibold tracking-[0.08em] text-[#111111] shadow-[0_12px_30px_rgba(0,0,0,0.10)] backdrop-blur-sm"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d72626] text-white shadow-[0_6px_14px_rgba(215,38,38,0.35)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-1.09-.768-2.026-1.834-2.239l-4.423-.885a2.25 2.25 0 0 0-2.186.788l-.97 1.293a18.73 18.73 0 0 1-8.417-8.417l1.293-.97a2.25 2.25 0 0 0 .788-2.186l-.885-4.423A2.25 2.25 0 0 0 3.622 2.25H2.25A2.25 2.25 0 0 0 0 4.5v2.25h2.25Z" />
              </svg>
            </span>
            <span>0861 114 590</span>
          </a>
        </div>
      </div>
    </section>
  );
}