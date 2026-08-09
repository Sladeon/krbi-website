'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';
import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: "Do you build dashboards?",
    a: "We build reporting infrastructure, but only after we've aligned your organization on what to measure. A dashboard without shared definitions is just a fancy Excel file. We focus on the definitions first."
  },
  {
    q: "How is this different from other BI consultants?",
    a: "Most BI consultants start by asking what reports you want. We start by asking what decisions you need to make and who owns the outcome. That usually means talking to Finance, Operations, and IT together, which most vendors don't do."
  },
  {
    q: "What's the timeline?",
    a: "A typical engagement runs four to six months depending on complexity. The discovery call helps us scope it. You'll see measurable progress within the first 90 days."
  },
  {
    q: "Do you require an ERP system?",
    a: "No. We work with whatever systems you have. That might be QuickBooks, NetSuite, SAP, or a combination of accounting software, spreadsheets, and operational databases. We can ingest and reconcile data across multiple sources."
  },
  {
    q: "Can you work with our IT team or do you replace them?",
    a: "We work with your IT team. We're comfortable translating requirements between Finance, Operations, and IT, but your team owns the data architecture long-term. Our job is to make sure all three departments are asking for the same thing."
  },
  {
    q: "What's the investment?",
    a: "It depends on the scope. A simple governance framework might run $15K–$25K. A full multi-department engagement with reporting infrastructure can be $75K–$150K+. Let's talk on a discovery call."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const services = [
  {
    href: '/governance',
    title: 'Data Governance',
    text: 'One metric, one definition, one owner. We align Finance, Operations, and IT on what the numbers mean before anything gets built.',
  },
  {
    href: '/dashboards',
    title: 'KPI Dashboards',
    text: 'Power BI reporting connected to accountability. Every metric has an owner, a cadence, and a decision it exists to force.',
  },
  {
    href: '/insights',
    title: 'Insights & Alignment',
    text: 'We surface the disagreements hiding in your data and turn them into shared definitions your whole leadership team acts on.',
  },
];

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}

      <HeroSection
        tall
        imageSrc="/images/hero-home.jpg"
        imageAlt="Two workers reviewing production notes together on a spotless food manufacturing floor"
        eyebrow="Manufacturing Business Intelligence"
        title={
          <>
            Your Finance team calls it shrink. Operations calls it waste.{' '}
            <span className="text-steel-soft">
              Nobody acts on a number they don't understand.
            </span>
          </>
        }
        subtitle="Kettle River BI translates between departments, defines clean metrics, and builds the accountability structures that drive real improvement."
        primaryCta={{ label: 'Schedule a Discovery Call', onClick: () => setShowForm(true) }}
        secondaryCta={{ label: 'Read the Case Study', href: '/case-study' }}
        stats={[
          { value: '30%', label: 'YoY loss & waste reduction' },
          { value: '$2M', label: 'Annual savings delivered' },
          { value: '6 mo', label: 'From kickoff to measurable results' },
        ]}
      />

      {/* ---------- THE PROBLEM ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">The Problem</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Same plant. Same quarter. Three different numbers.
              </h2>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-10 grid grid-cols-3 gap-3 md:gap-4">
                {[
                  { dept: 'Finance', num: '3.2%', desc: 'of COGS, per the GL' },
                  { dept: 'Operations', num: '2.1%', desc: 'per production reports' },
                  { dept: 'Sales', num: '0.8%', desc: 'per customer credits' },
                ].map(({ dept, num, desc }, i) => (
                  <div
                    key={dept}
                    className="rounded-lg border border-navy/10 bg-cream-soft p-4 text-center md:p-6"
                  >
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-bluegrey">
                      {dept}
                    </p>
                    <p className="my-2 text-3xl font-bold text-steel md:text-4xl">{num}</p>
                    <p className="text-[0.78rem] leading-snug text-navy/50">{desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-6 text-lg leading-relaxed text-navy/75">
                The problem isn't usually that you lack data. It's that your organization lacks
                agreement on what the data means. Finance measures shrink as a P&amp;L variance
                against budget. Operations measures waste as units lost in production. Sales tracks
                it as customer credits and returns. IT sits somewhere in the middle, maintaining
                systems nobody fully understands.
              </p>
              <p className="mb-6 leading-relaxed text-navy/70">
                Nobody is wrong. Everyone is operating from incomplete information. The result:
                siloed decisions, finger-pointing in meetings, and millions of dollars left on the
                table. When Finance asks for a loss and waste report, IT builds something that
                satisfies the letter of the request but not the spirit. You get a dashboard that
                shows a number, but nobody can act on it. Action requires ownership. Ownership
                requires agreement on what you're measuring and why it matters.
              </p>
              <p className="border-l-2 border-steel pl-5 font-medium text-navy">
                You have the data. You have smart people. What you don't have is shared
                definitions. Without them, every decision is negotiated, every report is
                questioned, and every improvement stalls.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- OUR APPROACH ---------- */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Our Approach</p>
            <h2 className="mb-5 max-w-2xl text-3xl font-bold md:text-4xl">
              We don't start with dashboards. We start with agreement.
            </h2>
            <p className="mb-14 max-w-3xl leading-relaxed text-navy/70">
              We sit with Finance, Operations, IT, and the functional owners: warehouse managers,
              production supervisors, sales leadership. We ask what loss and waste means as each of
              them sees it, how they track it today, and what decisions the number needs to inform.
              The goal isn't a fancy dashboard. It's an organization that acts on the same number.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Align',
                text: 'Every department defines the metric together. Controllable loss gets separated from non-controllable loss, so owners only carry numbers they can actually move.',
              },
              {
                n: '02',
                title: 'Quantify',
                text: 'We trace each metric to its source systems and reconcile it against the P&L. One number, one source of truth, defensible in any meeting.',
              },
              {
                n: '03',
                title: 'Own',
                text: 'Every metric gets a named owner and a review cadence. Reporting and governance structures keep those owners engaged after we leave.',
              },
            ].map(({ n, title, text }, i) => (
              <Reveal key={n} delay={i * 0.12}>
                <div className="card-lift h-full rounded-xl border border-navy/10 bg-white p-8">
                  <p className="mb-5 text-sm font-bold tracking-widest text-steel">{n}</p>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-navy/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- REAL RESULTS ---------- */}
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow eyebrow-light mb-4">Real Results</p>
              <h2 className="mb-6 text-3xl font-bold !text-white md:text-4xl">
                30% less loss and waste. In six months.
              </h2>
              <p className="mb-6 leading-relaxed text-white/70">
                At one food manufacturer, this approach delivered 30% year-over-year improvement in
                loss and waste metrics within six months. That translated to approximately $2M in
                measurable savings. More importantly, it replaced a culture of siloed Excel tools
                and department-versus-department meetings with a team-oriented approach to data and
                problem-solving.
              </p>
              <p className="mb-9 leading-relaxed text-white/70">
                Each owner now manages a specific metric and develops plans to improve it. Finance
                and Operations still speak different languages, but they're looking at the same
                number and drawing the same conclusions. That alignment is what drives results.
              </p>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 font-semibold text-steel-soft transition-colors hover:text-white"
              >
                Read the full case study
                <span aria-hidden>→</span>
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <figure className="rounded-xl border border-white/10 bg-navy-soft p-8 md:p-10">
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="mb-6" aria-hidden>
                  <path d="M0 28V16.8C0 7.1 5.7 1.3 15.1 0l1.6 4.6c-5.4 1.3-8.2 4.4-8.5 8.6H15V28H0zm21 0V16.8C21 7.1 26.7 1.3 36 0l1.6 4.6c-5.4 1.3-8.2 4.4-8.5 8.6H36V28H21z" fill="#5D8597" transform="scale(0.95)"/>
                </svg>
                <blockquote className="mb-6 text-lg leading-relaxed text-white/85">
                  Kettle River BI was instrumental in helping us break through the hundreds of
                  Excel-based data management solutions that managers had accumulated... Kettle
                  River was truly transformational for our organization, both in the way we looked
                  at data and the way we worked together.
                </blockquote>
                <figcaption className="text-sm text-white/50">
                  <span className="font-semibold text-white/80">Sebastian Pastore</span>
                  <br />
                  Former COO, Smith Brothers
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <Reveal>
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="mb-14 max-w-2xl text-3xl font-bold md:text-4xl">
            Three ways in. One outcome: numbers your whole team trusts.
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ href, title, text }, i) => (
            <Reveal key={href} delay={i * 0.12}>
              <Link
                href={href}
                className="card-lift group flex h-full flex-col rounded-xl border border-navy/10 bg-white p-8"
              >
                <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-steel">
                  {title}
                </h3>
                <p className="mb-6 flex-1 text-[0.95rem] leading-relaxed text-navy/65">{text}</p>
                <span className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-steel">
                  Learn more <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4 text-center">FAQ</p>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              {faqs.map(({ q, a }) => (
                <details key={q} className="faq-item">
                  <summary>{q}</summary>
                  <div className="faq-body">{a}</div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section id="book" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 lg:px-8">
        <CTABox
          title="Ready to align your organization?"
          description="If your leadership team spends half its time arguing about numbers instead of acting on them, we've seen the path forward. Schedule a 30-minute discovery call. We'll ask you the same questions we asked our other clients, and you'll see within minutes whether this is the right approach for your organization."
          ctaText="Schedule a 30-Minute Discovery Call"
          onClick={() => setShowForm(true)}
        />
      </section>
    </>
  );
}
