'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';
import Reveal from '@/components/Reveal';

export default function CaseStudy() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      <HeroSection
        imageSrc="/images/hero-case-study.jpg"
        imageAlt="Minimal declining trend curve representing a 30 percent year-over-year loss and waste reduction"
        eyebrow="Case Study · Smith Brothers"
        title="From siloed spreadsheets to $2M in measurable savings."
        subtitle="How we aligned Finance, Operations, Sales, and Warehouse around one definition of loss and waste, and drove 30% year-over-year improvement in six months."
        primaryCta={{ label: 'Explore a Similar Engagement', onClick: () => setShowForm(true) }}
        stats={[
          { value: '30%', label: 'YoY loss & waste reduction' },
          { value: '$2M', label: 'Annual savings' },
          { value: '8 wks', label: 'To one reconciled number' },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Client snapshot */}
        <section className="py-14">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 rounded-xl border border-navy/10 bg-cream-soft px-8 py-6 text-center text-[0.9rem] text-navy/60">
              <span><strong className="text-navy">Smith Brothers</strong></span>
              <span>Packaged food manufacturer</span>
              <span>~150 employees</span>
              <span>$50M annual revenue</span>
              <span>NetSuite ERP</span>
            </div>
          </Reveal>
        </section>

        {/* Challenge */}
        <section className="border-t border-navy/10 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">The Challenge</p>
                <h2 className="text-3xl font-bold">
                  "What is our actual loss and waste?" had three answers
                </h2>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="mb-10 grid grid-cols-3 gap-3 md:gap-4">
                  {[
                    { dept: 'Finance', num: '3.2%', desc: 'of COGS' },
                    { dept: 'Operations', num: '2.1%', desc: 'of COGS' },
                    { dept: 'Sales', num: '0.8%', desc: 'of COGS' },
                  ].map(({ dept, num, desc }) => (
                    <div
                      key={dept}
                      className="rounded-lg border border-navy/10 bg-cream-soft p-4 text-center md:p-6"
                    >
                      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-bluegrey">
                        {dept}
                      </p>
                      <p className="my-2 text-3xl font-bold text-steel md:text-4xl">{num}</p>
                      <p className="text-[0.78rem] text-navy/50">{desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mb-6 leading-relaxed text-navy/70">
                  When we first met with the leadership team at Smith Brothers, they had a problem
                  they could not quite name. The CFO could tell you the P&amp;L impact of loss and
                  waste. Operations could tell you production-floor inefficiencies. The warehouse
                  team could tell you inventory variance. Sales could tell you customer credits.
                  None of them could tell you the same number.
                </p>
                <blockquote className="border-l-2 border-steel pl-5 italic text-navy/80">
                  "We had reports everywhere. Finance had loss and waste. Operations had
                  inefficiency metrics. Sales had credits. Warehouse had variance. When we looked
                  at them together, they did not reconcile. So we spent half our time figuring out
                  what the numbers meant instead of fixing them."
                  <footer className="mt-3 not-italic text-sm text-navy/50">
                    Sebastian Pastore, COO of Smith Brothers
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="border-t border-navy/10 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">The Solution</p>
                <h2 className="text-3xl font-bold">One definition, calculated from actual data</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-6 leading-relaxed text-navy/70">
                We started with a question: what is loss and waste as you see it? We brought
                Finance, Operations, Warehouse, and Sales together and asked each group to define
                it. Then we asked: if we add all these up, where do they reconcile? They didn't.
                The discrepancy was about 1% of COGS, several hundred thousand dollars annually.
              </p>
              <p className="mb-8 leading-relaxed text-navy/70">
                Over a month of weekly sessions, we arrived at a clean separation, and assigned
                owners: Operations Manager, Warehouse Manager, Sales Director, Procurement
                Director, CFO. Using actual data from the GL, operations reports, and sales
                records, we calculated the truth. For the first time, Finance, Operations, and
                Sales were looking at the same number.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-navy/10 bg-cream-soft p-6">
                  <h3 className="mb-2 text-lg font-bold text-steel-deep">Controllable loss</h3>
                  <p className="text-[0.92rem] leading-relaxed text-navy/65">
                    Loss where a specific owner could take action: production scrap, inventory
                    damage, expired goods, rework, process overages.
                  </p>
                </div>
                <div className="rounded-xl border border-navy/10 bg-cream-soft p-6">
                  <h3 className="mb-2 text-lg font-bold text-bluegrey">Non-controllable loss</h3>
                  <p className="text-[0.92rem] leading-relaxed text-navy/65">
                    Loss that could be measured but where the owner operated within constraints set
                    by others: customer credits, standard-cost variance, regulatory disposal.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process redesign */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Process Redesign</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold">
              Beyond metrics: fixing the processes that feed them
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card-lift h-full rounded-xl border border-navy/10 bg-white p-8">
                <h3 className="mb-3 text-xl font-bold">Standardized reason codes</h3>
                <p className="mb-4 text-[0.95rem] leading-relaxed text-navy/65">
                  Warehouse staff used to enter free-form notes: "Damaged this item." "Short-coded."
                  "Missing." We built a required dropdown with standardized reason codes: cycle
                  count, damage in-house, damage vendor, discontinued, donations expired.
                </p>
                <p className="text-[0.95rem] font-medium leading-relaxed text-navy">
                  What was invisible became sortable and actionable. Damaged goods: 45% of
                  variance. Short-coded items: 18%. Each category got an owner responsible for
                  reducing it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="card-lift h-full rounded-xl border border-navy/10 bg-white p-8">
                <h3 className="mb-3 text-xl font-bold">A/B/C/D cycle counting</h3>
                <p className="mb-4 text-[0.95rem] leading-relaxed text-navy/65">
                  We implemented a cycle-counting program in their NetSuite ERP using A/B/C/D
                  inventory priority. A items counted daily, B weekly, C monthly, D quarterly.
                </p>
                <p className="text-[0.95rem] font-medium leading-relaxed text-navy">
                  Active monitoring replaced the reactive inventory close. Ongoing trust in system
                  numbers, and no more month-end arguments about mismatches.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Results */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">The Results</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold">Six months later</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '-18%', label: 'Production scrap, year over year' },
              { value: '-14%', label: 'Inventory variance, year over year' },
              { value: '3.2% → 2.2%', label: 'Loss and waste as share of COGS' },
              { value: '$2M', label: 'In annual savings' },
            ].map(({ value, label }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-navy/10 bg-cream-soft p-7 text-center">
                  <p className="text-[1.7rem] font-bold leading-tight text-steel">{value}</p>
                  <p className="mt-2 text-sm text-navy/55">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-navy/70">
              Within four reviews (eight weeks), the metrics stabilized: Finance, Operations, and
              Sales pulled the same loss and waste number each week. Within three months, all
              departments tracked against specific improvement plans.
            </p>
          </Reveal>
        </section>

        {/* Testimonial */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <figure className="mx-auto max-w-3xl rounded-xl bg-navy p-10 md:p-14">
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="mb-8" aria-hidden>
                <path d="M0 28V16.8C0 7.1 5.7 1.3 15.1 0l1.6 4.6c-5.4 1.3-8.2 4.4-8.5 8.6H15V28H0zm21 0V16.8C21 7.1 26.7 1.3 36 0l1.6 4.6c-5.4 1.3-8.2 4.4-8.5 8.6H36V28H21z" fill="#5D8597"/>
              </svg>
              <blockquote className="space-y-5 leading-relaxed text-white/85">
                <p>
                  Kettle River BI was instrumental in helping us break through the hundreds of
                  Excel-based data management solutions that managers had accumulated to provide
                  answers to questions unique to their own departments, and replace them with
                  flexible BI-based reports that facilitated team-oriented approaches to viewing
                  data and solving problems.
                </p>
                <p>
                  Kettle River BI brought much more to the table than simply building Power BI
                  reports. BI staff were the patient voice in the room, explaining how the tools
                  worked, demonstrating how to manipulate them, and facilitating productive
                  discussion between stakeholders while we were learning. Kettle River was truly
                  transformational for our organization, both in the way we looked at data and the
                  way we worked together.
                </p>
              </blockquote>
              <figcaption className="mt-8 text-sm text-white/50">
                <span className="font-semibold text-white/85">Sebastian Pastore</span>
                <br />
                COO, Smith Brothers
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <section className="py-16">
          <CTABox
            title="Want similar results?"
            description="If your organization has similar challenges, let us explore whether a similar approach would work for you."
            ctaText="Explore a Similar Engagement"
            onClick={() => setShowForm(true)}
          />
        </section>
      </div>
    </>
  );
}
