'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import BookingForm from '@/components/BookingForm';

const links = [
  { href: '/governance', label: 'Data Governance' },
  { href: '/dashboards', label: 'KPI Dashboards' },
  { href: '/insights', label: 'Insights' },
  { href: '/case-study', label: 'Case Study' },
  { href: '/#about', label: 'About' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_1px_20px_rgba(26,26,31,0.08)]' : ''
        } border-b border-navy/5`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Kettle River BI home">
            <Image
              src="/krbi-logo.png"
              alt="Kettle River BI diamond mark"
              width={34}
              height={34}
              priority
            />
            <span className="text-[1.05rem] font-bold tracking-tight text-navy">
              Kettle River <span className="text-steel">BI</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[0.92rem] font-medium transition-colors ${
                    pathname === href
                      ? 'text-steel'
                      : 'text-navy/70 hover:text-steel'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary !px-5 !py-2.5 !text-[0.9rem]"
              >
                Book a Call
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`h-[2px] w-6 bg-navy transition-transform duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-navy transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-navy transition-transform duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-navy/5 bg-white transition-[max-height] duration-300 lg:hidden ${
            menuOpen ? 'max-h-96' : 'max-h-0 border-t-0'
          }`}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-2.5 text-[0.95rem] font-medium ${
                    pathname === href ? 'text-steel' : 'text-navy/80'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setShowForm(true);
                }}
                className="btn-primary w-full !py-3"
              >
                Book a Call
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Rendered outside <nav>: its backdrop-filter would otherwise trap the fixed modal */}
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
    </>
  );
}
