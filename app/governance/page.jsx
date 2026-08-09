'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';
import Reveal from '@/components/Reveal';

export default function Governance() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      <HeroSection
        imageSrc="/images/hero-governance.jpg"
        imageAlt="Scattered glass panes converging into one ordered row, representing fragmented data becoming governed data"
        eyebrow="Data Governance"
        title="Data does not fail. Definitions do."
        subtitle="Your manufacturing data lives in spreadsheets, accounting systems, and databases that do not talk to each other. The first step is not building a dashboard. It is agreeing on what you are measuring."
        primaryCta={{ label: 'Schedule a Discovery Call', onClick: () => setShowForm(true) }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Lead narrative */}
        <section className="mx-auto max-w-3xl py-20">
          <Reveal>
            <p className="text-xl leading-relaxed text-navy/80">
              Manufacturing operations depend on clean data, but clean data depends on clean
              definitions. Governance means agreement. It means Finance, Operations, IT, and the
              functional owners all understand what a metric means, how it is calculated, who owns
              it, and what decisions it informs. Without that agreement, you have data
              fragmentation. With it, you have a foundation for improvement.
            </p>
          </Reveal>
        </section>

        {/* Problem */}
        <section className="border-t border-navy/10 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">The Problem</p>
                <h2 className="text-3xl font-bold">Data fragmentation</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-6 leading-relaxed text-navy/70">
                Data governance failures manifest as recurring arguments. You run a report in
                January and pull one number. You run it in February and pull a different one.
                Nobody knows why. So you investigate. You create a second report to reconcile the
                first. You create a third spreadsheet to bridge the two systems.
              </p>
              <p className="border-l-2 border-steel pl-5 font-medium text-navy">
                Soon you have dozens of shadow reporting systems. By the time leadership notices,
                you have hundreds of hours of hidden labor tied up in data reconciliation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Approach with framework image */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Our Approach</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold">
              Three parts of governance
            </h2>
          </Reveal>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Alignment',
                text: 'Finance, Operations, IT, and the functional owner sit together and define the metric. One definition, agreed in the room.',
              },
              {
                n: '02',
                title: 'Quantification',
                text: 'We trace the metric to the actual data. Which systems does it live in? How do we extract it? What is the single source of truth?',
              },
              {
                n: '03',
                title: 'Ownership',
                text: 'A specific person reviews the metric on a weekly or bi-weekly cadence, identifies variances, and develops action plans. That person is accountable.',
              },
            ].map(({ n, title, text }, i) => (
              <Reveal key={n} delay={i * 0.12}>
                <div className="card-lift h-full rounded-xl border border-navy/10 bg-cream-soft p-8">
                  <p className="mb-5 text-sm font-bold tracking-widest text-steel">{n}</p>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-navy/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <figure className="overflow-hidden rounded-xl border border-navy/10">
              <Image
                src="/images/03-governance-framework.png"
                alt="KRBI three-part data governance framework: alignment, quantification, ownership"
                width={1200}
                height={400}
                className="h-auto w-full"
              />
            </figure>
          </Reveal>
        </section>

        {/* Results */}
        <section className="border-t border-navy/10 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">The Results</p>
                <h2 className="text-3xl font-bold">When governance works</h2>
              </div>
            </Reveal>
            <div className="space-y-6">
              {[
                {
                  title: 'The data reconciles',
                  text: 'Finance and Operations pull the same report and get the same number.',
                },
                {
                  title: 'Action increases',
                  text: 'Because people own a metric, they develop plans to improve it.',
                },
                {
                  title: 'The organization aligns',
                  text: 'Instead of meetings where departments argue from different spreadsheets, you have meetings where departments look at the same data and discuss what to do about it.',
                },
              ].map(({ title, text }, i) => (
                <Reveal key={title} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-steel text-white">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
                        <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold">{title}</h3>
                      <p className="leading-relaxed text-navy/65">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <CTABox
            title="See where your governance gaps are"
            description="We have captured the data governance framework we use with clients into a checklist. Walk through your organization's current state on a 30-minute discovery call, and see where the gaps are."
            ctaText="Schedule a Discovery Call"
            onClick={() => setShowForm(true)}
          />
        </section>
      </div>
    </>
  );
}
