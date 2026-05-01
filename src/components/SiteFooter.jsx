import buscoLogo from '../assets/Logos/busco-logo-1.png';

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#111111] px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1580px] gap-10 lg:grid-cols-[320px_1fr]">
        <div>
          <img
            src={buscoLogo}
            alt="BUSCO logo"
            className="h-16 w-auto object-contain brightness-[1.2]"
          />

          <p className="mt-5 max-w-[280px] text-[0.95rem] leading-7 text-white/68">
            Built for Africa with trusted bodywork solutions, fleet support, parts support, and
            dependable service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff5f5f]">
              Address
            </p>

            <div className="mt-4 space-y-1 text-[0.98rem] leading-7 text-white/74">
              <p>249 Rembrandt street</p>
              <p>Nestpark Ext 1,</p>
              <p>Bapsfontein Gauteng,</p>
              <p>South Africa</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff5f5f]">
              Contact
            </p>

            <div className="mt-4 space-y-2 text-[0.98rem] leading-7 text-white/74">
              <p>
                <a href="tel:0861114590" className="text-white hover:text-[#ff5f5f]">
                  0861114590
                </a>
                {' / '}
                <a href="tel:0119641182" className="text-white hover:text-[#ff5f5f]">
                  011 964 1182
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff5f5f]">
              Email
            </p>

            <div className="mt-4 space-y-3 text-[0.98rem] leading-7 text-white/74">
              <p>
                Parts:{' '}
                <a href="mailto:parts@busco.co.za" className="text-white hover:text-[#ff5f5f]">
                  parts@busco.co.za
                </a>
              </p>

              <p>
                Contact:{' '}
                <a href="mailto:info@busco.co.za" className="text-white hover:text-[#ff5f5f]">
                  info@busco.co.za
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff5f5f]">
              Office Hours
            </p>

            <div className="mt-4 space-y-2 text-[0.98rem] leading-7 text-white/74">
              <p>Mon - Thursday 08h00 - 16h30</p>
              <p>Friday 08h00 - 14h00</p>
              <p>Sat - Sun closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1580px] border-t border-white/10 pt-6">
        <p className="text-[0.85rem] leading-6 text-white/45">
          © {new Date().getFullYear()} Busco Marketing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}