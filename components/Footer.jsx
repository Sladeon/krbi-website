import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        {/* Brand */}
        <div>
          <Image
            src="/logo-white.png"
            alt="Kettle River BI"
            width={190}
            height={107}
            className="mb-5 h-auto w-44"
          />
          <p className="mb-4 text-[0.95rem] italic text-steel-soft">
            business mastery through business intelligence
          </p>
          <p className="max-w-sm text-[0.9rem] leading-relaxed text-white/55">
            Fractional BI analyst and project manager for manufacturers.
            Enterprise-level intelligence at a fraction of the cost of a
            full-time analyst.
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-steel-soft">
            Services
          </p>
          <ul className="space-y-2.5 text-[0.92rem]">
            <li><Link href="/governance" className="text-white/70 transition-colors hover:text-white">Data Governance</Link></li>
            <li><Link href="/dashboards" className="text-white/70 transition-colors hover:text-white">KPI Dashboards</Link></li>
            <li><Link href="/insights" className="text-white/70 transition-colors hover:text-white">Insights &amp; Alignment</Link></li>
            <li><Link href="/case-study" className="text-white/70 transition-colors hover:text-white">Case Study</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-steel-soft">
            Contact
          </p>
          <ul className="space-y-2.5 text-[0.92rem] text-white/70">
            <li>
              <a href="mailto:info@kettleriverbi.com" className="transition-colors hover:text-white">
                info@kettleriverbi.com
              </a>
            </li>
            <li className="pt-1 text-white/45">
              Kettle Falls, WA
              <br />
              Serving manufacturers across the United States
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-[0.82rem] text-white/40 md:flex-row lg:px-8">
          <p>© 2026 Kettle River Business Intelligence. All rights reserved.</p>
          <p>Data Governance · Power BI · Organizational Alignment · KPI Strategy</p>
        </div>
      </div>
    </footer>
  );
}
