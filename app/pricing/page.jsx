'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';
import ChecklistGate from '@/components/ChecklistGate';
import Reveal from '@/components/Reveal';

const rungs = [
  {
    step: 'Stage 1',
    name: 'The Assessment',
    price: '$5,000',
    unit: 'fixed',
    duration: '2 weeks',
    summary:
      'Two weeks to the thing you are missing: one number both departments sign, or a count that matches the system, or an honest answer on whether your data can carry an AI. Three doors below, same price, same two weeks.',
    includes: [
      'One reconciled number (or one readiness score) that Finance and Operations both sign',
      'Every source traced, field by field, so the number holds up in the room',
      'The two or three process changes that would move it, with a named owner on each',
      'A written report you keep, and a fixed price for the build if one is warranted',
    ],
    note: 'Credited in full against a Foundation Build signed within 90 days. If the findings do not support a build, we say so and you keep the report.',
    featured: false,
  },
  {
    step: 'Stage 2',
    name: 'Foundation Build',
    price: '$35,000 - $55,000',
    unit: 'fixed',
    duration: '30 to 45 days',
    summary:
      'The governed data layer and the standard dashboard set, built on the definitions your departments agreed to in the assessment. A fixed menu, not a blank canvas.',
    includes: [
      'A governed Power BI data layer with one source of truth per metric',
      'The standard dashboard set: financial, operations, and labor',
      'Every field described in plain English, so your people and your AI assistants read the same definition',
      'The process fixes the assessment pointed at, designed with their owners: reason codes, cycle counting, purchasing discipline, ERP use',
      'Data classification, workspace structure, and security groups',
      'Named owners and a review cadence for every metric',
      'A documentation and handoff packet your IT team keeps and maintains',
    ],
    note: 'Priced from your assessment findings, not from a guess. That is why the assessment comes first, and why we keep the right to reprice or decline a build when the assessment turns up a swamp.',
    featured: true,
  },
  {
    step: 'Stage 3',
    name: 'Managed Intelligence',
    price: '$3,500',
    unit: 'per month',
    duration: 'ongoing',
    summary:
      'Somebody has to own the numbers after launch. This is the part most BI projects skip, and it is why most BI projects quietly stop being used in year two.',
    includes: [
      'Data quality monitoring with alerts before leadership sees a bad number',
      'Model, report, and refresh maintenance',
      'A monthly Plan-Do-Check-Act review with your metric owners: what moved, why, and what changes next month',
      'A defined change envelope, written down, so nobody argues about scope',
    ],
    note: '$42,000 a year, all in. No recruiting, no benefits, no payroll taxes, and no six-month ramp while a new hire learns your ERP.',
    featured: false,
  },
];

// Three doors into Stage 1, named by the number the buyer is arguing about. Same price, same two weeks,
// same credit; what changes is what we score hardest and what the fix list leads with.
// (The governance audit for an existing Power BI estate lives on the governance page.)
const doors = [
  {
    eyebrow: 'Every month the numbers start an argument',
    name: 'Loss & Waste Analysis',
    when: 'Finance books shrink as a P&L variance. Operations counts waste in units. The board pack is late because the two have to be argued into one, and nobody owns the fix.',
    includes: [
      'One loss-and-waste number Finance and Operations both sign',
      'Broken out by cause, controllable separated from non-controllable',
      'A named owner on every line',
      'The process changes that would move it (reason codes, cycle counts, purchasing), scoped for the build',
    ],
    gate: null,
  },
  {
    eyebrow: 'The count never matches the system',
    name: 'Inventory Accuracy Assessment',
    when: 'Shrink shows up at year-end and nobody saw it coming. Adjustments go in as free-text notes. The freezer holds product the system says is not there.',
    includes: [
      'Adjustment-code audit, with the standardized reason-code set you should be using',
      'Count variance by cause and by location',
      'An A/B/C/D cycle-count plan sized to your SKUs',
      'What your ERP is already configured to do that nobody uses',
    ],
    gate: null,
  },
  {
    eyebrow: 'The board asked about AI',
    name: 'AI Readiness Assessment',
    when: 'Someone wants to connect Copilot or an AI assistant to your data, and you need to know if the data can carry it.',
    includes: [
      'Readiness scored on the four things an AI depends on: agreed definitions, one source per metric, documented fields, governed access',
      'Share of your model that is actually documented, field by field',
      'The metrics an assistant would get wrong today, and why',
      'What to fix first, before any AI project is funded',
    ],
    gate: { label: 'Take the free 10-question checklist first', variant: 'ai' },
  },
];

const principles = [
  {
    title: 'No hourly rate. Anywhere.',
    text: 'You are not buying time, you are buying an outcome. An hourly rate rewards us for being slow and punishes you for asking questions. No proposal we send has an hourly rate on it.',
  },
  {
    title: 'Every proposal shows three options.',
    text: 'Core, Core plus adoption, and Core plus adoption plus a first quarter of Managed Intelligence. You choose the depth. We do not decide for you and we do not hide the cheaper option.',
  },
  {
    title: 'Payment rides on delivery.',
    text: '40% on signature, 40% when you sign off on the design, 20% when the numbers reconcile. That last 20% is the point. It makes the reconciliation promise collateral instead of a claim.',
  },
  {
    title: 'Client delays move the calendar, not the price.',
    text: 'The fixed fee assumes you can get us access and answers. If things stall on your side, we re-baseline the schedule in writing. The number does not change.',
  },
  {
    title: 'The reconciliation promise is bounded.',
    text: 'Named sources, named metrics, and a stated cap on discrepancy investigation. Past the cap it is a change order, agreed before the work happens. Open-ended promises are how fixed-price projects turn into hourly ones.',
  },
  {
    title: 'You get an answer to "what if you disappear."',
    text: 'Every proposal states the documentation standard, the handoff packet, and who maintains the system without us. In writing, before you sign, not after you ask.',
  },
];

const faqs = [
  {
    q: 'Why does the assessment cost money? Everyone else scopes for free.',
    a: 'Because a free scoping call produces a sales document and a paid assessment produces a number your departments have signed. Two weeks of interviews and source tracing is real work, and the output is useful to you whether or not you hire us for the build. It is also how we can quote a fixed price on the build at all. If we sign a Foundation Build within 90 days, the $5,000 comes off that price, so the only way it costs you anything is if we tell you not to build.',
  },
  {
    q: 'Why is the Foundation Build a range instead of one number?',
    a: 'Because the honest answer depends on how many source systems have to be reconciled and how far apart your current definitions are. We do not know that before the assessment, and neither does anyone quoting you a firm number without one. The assessment sets the price inside that range, and we put it in writing before you commit.',
  },
  {
    q: 'Can we skip the assessment and go straight to the build?',
    a: 'No. Pricing a fixed-fee build without measuring the data first is how consultants end up underwater and clients end up with change orders. The assessment is the actuary for the whole engagement.',
  },
  {
    q: 'What if we just want the monthly retainer?',
    a: 'That works when there is already a data layer worth maintaining. If your reporting estate grew report by report with no governance underneath, the retainer would mostly fund firefighting. The assessment tells us which situation you are in.',
  },
  {
    q: 'Who actually does the work?',
    a: 'Mitch Cauthron scopes every engagement, runs the discovery and design sessions where your departments agree on the numbers, and signs off on everything that ships. Project support and project management come in as the work needs it, under his direction. You get one accountable person from the first call to the final reconciliation, and you are never handed off after the sale, because there is no sales team to hand you off from.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function Pricing() {
  const [showForm, setShowForm] = useState(false);
  const [gate, setGate] = useState(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      {gate && <ChecklistGate variant={gate} onClose={() => setGate(null)} />}

      <HeroSection
        imageSrc="/images/hero-pricing.jpg"
        imageAlt="Three machined metal blocks of ascending height standing in an aligned row, representing a three-stage fixed-price engagement ladder"
        eyebrow="Pricing"
        title="Fixed price. Fixed timeline. No hourly billing."
        subtitle="You should know what this costs before you get on a call with anyone. Here are the three stages, what each one includes, and what each one costs."
        primaryCta={{ label: 'Schedule a Discovery Call', onClick: () => setShowForm(true) }}
        secondaryCta={{ label: 'Read the Case Study', href: '/case-study' }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Lead narrative */}
        <section className="mx-auto max-w-3xl py-20">
          <Reveal>
            <p className="text-xl leading-relaxed text-navy/80">
              Most BI consultants quote you an hourly rate and an estimate, then send a change order
              when the data turns out to be messier than the estimate assumed. It always is. We
              price the other way around: measure the data first, then commit to a number and a
              date. The measuring is a real deliverable you pay for, and it comes off the build if
              you go ahead.
            </p>
          </Reveal>
        </section>

        {/* The ladder */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">The Engagement Ladder</p>
            <h2 className="mb-5 max-w-2xl text-3xl font-bold md:text-4xl">
              Three stages. Each one earns the next.
            </h2>
            <p className="mb-14 max-w-3xl leading-relaxed text-navy/70">
              You are never committing to the whole thing at once. Each stage is priced on its own
              and produces something you keep, whether or not you continue.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {rungs.map(({ step, name, price, unit, duration, summary, includes, note, featured }, i) => (
              <Reveal key={name} delay={i * 0.12}>
                <div
                  className={`card-lift flex h-full flex-col rounded-xl border p-8 ${
                    featured
                      ? 'border-steel bg-navy text-white shadow-[0_18px_50px_rgba(26,26,31,0.18)]'
                      : 'border-navy/10 bg-white'
                  }`}
                >
                  <p
                    className={`mb-5 text-[0.78rem] font-bold uppercase tracking-[0.14em] ${
                      featured ? 'text-steel-soft' : 'text-steel'
                    }`}
                  >
                    {step}
                  </p>
                  <h3 className={`mb-4 text-xl font-bold ${featured ? '!text-white' : ''}`}>
                    {name}
                  </h3>

                  <div className={`mb-6 border-b pb-6 ${featured ? 'border-white/15' : 'border-navy/10'}`}>
                    <p className={`text-3xl font-bold ${featured ? '!text-white' : 'text-navy'}`}>
                      {price}
                    </p>
                    <p className={`mt-1 text-[0.85rem] ${featured ? 'text-white/60' : 'text-navy/55'}`}>
                      {unit} · {duration}
                    </p>
                  </div>

                  <p
                    className={`mb-6 text-[0.95rem] leading-relaxed ${
                      featured ? 'text-white/75' : 'text-navy/65'
                    }`}
                  >
                    {summary}
                  </p>

                  <ul className="mb-6 flex-1 space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden
                          className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rotate-45 ${
                            featured ? 'bg-steel-soft' : 'bg-steel'
                          }`}
                        />
                        <span
                          className={`text-[0.88rem] leading-relaxed ${
                            featured ? 'text-white/75' : 'text-navy/70'
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`mb-7 rounded-lg p-4 text-[0.85rem] leading-relaxed ${
                      featured ? 'bg-white/10 text-white/80' : 'bg-cream-soft text-navy/70'
                    }`}
                  >
                    {note}
                  </p>

                  <button
                    onClick={() => setShowForm(true)}
                    className={`btn-primary self-start ${
                      featured ? '!border-white !bg-white !text-steel-deep hover:!bg-cream' : ''
                    }`}
                  >
                    Scope This
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Measurement band */}
        <section className="py-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-navy">
              <Image
                src="/images/pricing-measure.jpg"
                alt="A precision caliper closing on a machined block, representing pricing a build from measured findings rather than an estimate"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1152px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/25" />
              <div className="relative flex min-h-[400px] items-center md:min-h-[460px]">
                <div className="max-w-xl px-8 py-14 md:px-14">
                  <p className="eyebrow eyebrow-light mb-4">Why The Assessment Comes First</p>
                  <h2 className="mb-5 text-2xl font-bold !text-white md:text-3xl">
                    We measure the data, then commit to a number.
                  </h2>
                  <p className="leading-relaxed text-white/75">
                    Anyone can quote a build before looking at your data. The quote is a guess, and
                    the change order arrives later. Two weeks of interviews and source tracing is
                    what lets us put a fixed number and a fixed date in writing, and it is why we
                    keep the right to tell you not to build at all.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Three doors into the same assessment */}
        <section id="assessment" className="scroll-mt-24 border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Three Ways In</p>
            <h2 className="mb-5 max-w-2xl text-3xl font-bold md:text-4xl">
              Same assessment. Pick the number you argue about most.
            </h2>
            <p className="mb-14 max-w-3xl leading-relaxed text-navy/70">
              These are three of the numbers manufacturers argue about most. If yours is a
              different one, the assessment works the same way: two weeks, $5,000, credited in
              full against a build, and one number both departments sign at the end. What changes
              between doors is what we score hardest and what the fix list leads with.
            </p>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {doors.map(({ eyebrow, name, when, includes, gate }, i) => (
              <Reveal key={name} delay={i * 0.1}>
                <div className="card-lift flex h-full flex-col rounded-xl border border-navy/10 bg-white p-8">
                  <p className="mb-4 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-steel">
                    {eyebrow}
                  </p>
                  <h3 className="mb-3 text-xl font-bold">{name}</h3>
                  <p className="mb-6 text-[0.92rem] leading-relaxed text-navy/65">{when}</p>
                  <ul className="mb-6 flex-1 space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-steel" />
                        <span className="text-[0.88rem] leading-relaxed text-navy/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {gate && (
                    <button
                      onClick={() => setGate(gate.variant)}
                      className="inline-flex items-center gap-2 self-start text-[0.9rem] font-semibold text-steel underline decoration-steel/40 underline-offset-4 transition-colors hover:decoration-steel"
                    >
                      {gate.label}
                      <span aria-hidden>→</span>
                    </button>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-10 border-l-2 border-steel pl-5 font-medium text-navy">
              Findings report and prioritized fix list delivered in 10 business days from the day we
              have access, whichever door you come through.
            </p>
          </Reveal>
        </section>

        {/* Pricing principles */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">How We Price</p>
            <h2 className="mb-5 max-w-2xl text-3xl font-bold md:text-4xl">
              The rules we hold ourselves to
            </h2>
            <p className="mb-14 max-w-3xl leading-relaxed text-navy/70">
              These are not marketing lines. They are the pricing rules we wrote for ourselves, and
              every one of them shows up in the actual proposal.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(({ title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="card-lift h-full rounded-xl border border-navy/10 bg-white p-7">
                  <h3 className="mb-3 text-lg font-bold">{title}</h3>
                  <p className="text-[0.9rem] leading-relaxed text-navy/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Payment schedule */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Payment</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold">
              You hold 20% until the numbers reconcile
            </h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                pct: '40%',
                when: 'On signature',
                text: 'Work starts. Access requests go to your IT team the same week.',
              },
              {
                pct: '40%',
                when: 'At design sign-off',
                text: 'You have seen and approved the metric definitions, the data model, and the dashboard specs before anything gets built on top of them.',
              },
              {
                pct: '20%',
                when: 'At reconciled delivery',
                text: 'Finance and Operations pull the same report and get the same number. Until that happens, we have not been paid in full.',
              },
            ].map(({ pct, when, text }, i) => (
              <Reveal key={when} delay={i * 0.1}>
                <div className="relative h-full rounded-xl border border-navy/10 bg-cream-soft p-7">
                  <p className="mb-2 text-3xl font-bold text-steel">{pct}</p>
                  <p className="mb-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-navy/50">
                    {when}
                  </p>
                  <p className="text-[0.88rem] leading-relaxed text-navy/65">{text}</p>
                  {i < 2 && (
                    <span
                      aria-hidden
                      className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-steel md:flex"
                    >
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-navy/10 py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4 text-center">Pricing FAQ</p>
              <h2 className="mb-12 text-center text-3xl font-bold">
                The questions we get before the number lands
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

        <section className="py-16">
          <CTABox
            title="Start with the assessment"
            description="Two weeks, $5,000, and a written diagnostic of where your numbers actually come from. Credited against the build if you go ahead. The discovery call is 30 minutes and costs nothing."
            ctaText="Schedule a 30-Minute Discovery Call"
            onClick={() => setShowForm(true)}
            secondaryText="Not ready to talk? Download the free governance self-audit checklist"
            onSecondaryClick={() => setGate('governance')}
          />
        </section>

        <section className="pb-20 text-center">
          <Reveal>
            <p className="text-[0.95rem] text-navy/55">
              Want to see what a finished engagement looks like first?{' '}
              <Link href="/case-study" className="font-semibold text-steel underline underline-offset-4">
                Read the loss and waste case study
              </Link>
              .
            </p>
          </Reveal>
        </section>
      </div>
    </>
  );
}
