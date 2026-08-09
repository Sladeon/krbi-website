'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';
import Reveal from '@/components/Reveal';

export default function Dashboards() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      <HeroSection
        imageSrc="/images/hero-dashboards.jpg"
        imageAlt="Engineer reviewing a wall-mounted KPI dashboard in a dim manufacturing operations room"
        eyebrow="KPI Dashboards"
        title="A dashboard is only as useful as the owner who acts on it."
        subtitle="You have data. You have dashboards. Nothing changes. That's because your reporting infrastructure isn't connected to accountability. We build the feedback loops that turn dashboards into action."
        primaryCta={{ label: 'Schedule a Dashboard Discovery Call', onClick: () => setShowForm(true) }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Problem */}
        <section className="py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">The Problem</p>
                <h2 className="text-3xl font-bold">Siloed dashboards create siloed organizations</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-6 leading-relaxed text-navy/70">
                Operations owns their OEE number. Finance owns the P&amp;L. Sales owns revenue and
                credits. Nobody owns the connection between them.
              </p>
              <p className="border-l-2 border-steel pl-5 font-medium text-navy">
                A dashboard that sits in isolation cannot solve this. You need reporting that
                connects metrics across departments and creates shared accountability.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Our Approach</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold">
              Start with the decision. Work backward to the metric.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'The questions first',
                text: 'What is the actual cost of loss and waste? What is our OTIF performance trend? Why did margin decline in Q2? We start with the questions you need answered.',
              },
              {
                title: 'Metrics that answer them',
                text: 'Then we work backward to the metrics that answer those questions, traced to source systems and reconciled against the P&L.',
              },
              {
                title: 'An owner for every metric',
                text: 'Each metric has an owner who is accountable. That combination, metrics plus ownership, is what drives improvement.',
              },
            ].map(({ title, text }, i) => (
              <Reveal key={title} delay={i * 0.12}>
                <div className="card-lift h-full rounded-xl border border-navy/10 bg-cream-soft p-8">
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-navy/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="border-t border-navy/10 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">The Results</p>
                <h2 className="text-3xl font-bold">
                  When dashboards are connected to ownership
                </h2>
              </div>
            </Reveal>
            <div className="space-y-6">
              {[
                {
                  title: 'A predictable review cadence',
                  text: 'The team reviews the metric on a set rhythm. They see trends early and respond quickly.',
                },
                {
                  title: 'Improvement plans per owner',
                  text: 'Each owner develops a plan to improve their specific area, and tracks against it.',
                },
                {
                  title: 'Measurable improvement, fast',
                  text: 'With clear metrics and clear ownership, you see measurable improvement quickly.',
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
            title="Let's talk about your KPI infrastructure"
            description="We'll show you what a KPI dashboard infrastructure looks like and scope what a similar engagement might look like for you."
            ctaText="Schedule a Dashboard Discovery Call"
            onClick={() => setShowForm(true)}
          />
        </section>
      </div>
    </>
  );
}
