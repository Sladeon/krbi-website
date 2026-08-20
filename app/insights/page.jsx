'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';
import Reveal from '@/components/Reveal';

export default function Insights() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      <HeroSection
        imageSrc="/images/hero-insights.jpg"
        imageAlt="Manufacturing leadership team reviewing one shared dashboard in a boardroom"
        eyebrow="Insights & Alignment"
        title="Organizations act when they agree on the truth."
        subtitle="Your data exists. Your dashboards exist. Your teams still don't agree on what the numbers mean. The gap between insight and action is organizational alignment."
        primaryCta={{ label: 'Schedule an Alignment Discovery Call', onClick: () => setShowForm(true) }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Lead narrative */}
        <section className="mx-auto max-w-3xl py-20">
          <Reveal>
            <p className="text-xl leading-relaxed text-navy/80">
              Actionable insights require agreement. Not agreement on tactics, but agreement on
              truth. What is our actual loss and waste? What is driving it? Who is responsible for
              which part? Without that agreement, you get tribal knowledge. Everyone has their own
              spreadsheet. Nobody reconciles them. So nothing changes.
            </p>
          </Reveal>
        </section>

        {/* Problem */}
        <section className="border-t border-navy/10 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">The Problem</p>
                <h2 className="text-3xl font-bold">Organizations are siloed by default</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-6 leading-relaxed text-navy/70">
                Finance owns the P&amp;L. Operations owns the process. Sales owns revenue. IT owns
                the systems. Each group is incentivized to optimize their own area. These aren't
                bad incentives. They're just incomplete.
              </p>
              <p className="mb-6 leading-relaxed text-navy/70">
                When they're not coordinated, you get local optimization that hurts global
                performance. Finance wants to reduce variance. Operations wants to maximize
                efficiency. Sales wants to maximize revenue.
              </p>
              <p className="border-l-2 border-steel pl-5 font-medium text-navy">
                When these incentives aren't aligned, you get finger-pointing instead of
                collaboration.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Our Approach</p>
            <h2 className="mb-6 max-w-2xl text-3xl font-bold">
              We make organizational dysfunction visible
            </h2>
            <p className="mb-12 max-w-3xl leading-relaxed text-navy/70">
              We sit down with Finance, Operations, Sales, and whoever else is relevant. We ask
              them to define a critical metric together. They argue. Finance wants to measure GL
              variance. Operations wants to measure unit loss. Sales wants to measure credits. We
              don't resolve the argument. We surface it.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Surface the disagreement',
                text: 'What is being measured? Why does each group measure it differently? What decisions does each measurement inform? Usually all three are right. They are measuring different things.',
              },
              {
                n: '02',
                title: 'Separate and assign',
                text: 'We separate the metric into components that make sense to each group. Then we assign ownership for each component.',
              },
              {
                n: '03',
                title: 'Embed the rhythm',
                text: 'We embed the metric in a governance rhythm with a set review cadence. That rhythm is what makes alignment stick.',
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
        </section>

        {/* Results */}
        <section className="border-t border-navy/10 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-4">The Results</p>
              <h2 className="mb-6 text-3xl font-bold">
                The metric that used to start arguments now starts action
              </h2>
              <p className="mb-6 leading-relaxed text-navy/70">
                When organizations align around a shared truth, decision-making speed increases
                dramatically. The same metric that used to be a source of argument becomes a source
                of coordination. That is the shift.
              </p>
              <p className="leading-relaxed text-navy/70">
                Loss and waste declined 37.7% year over year, on a like-for-like comparison. That
                reduction did not come from a new system or a new tool. It came from an organization
                that finally agreed on what the problem was and who was responsible for fixing it.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-navy/10 bg-cream-soft p-8 text-center">
                  <p className="text-4xl font-bold text-steel">37.7%</p>
                  <p className="mt-2 text-sm text-navy/55">YoY decline in loss and waste</p>
                </div>
                <div className="rounded-xl border border-navy/10 bg-cream-soft p-8 text-center">
                  <p className="text-4xl font-bold text-steel">4 of 4</p>
                  <p className="mt-2 text-sm text-navy/55">Loss accounts improved</p>
                </div>
                <div className="col-span-2 rounded-xl bg-navy p-8 text-center">
                  <p className="text-lg font-semibold text-white">
                    Zero new systems. One shared truth.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16">
          <CTABox
            title="Start your organization's alignment"
            description="We will help you facilitate that conversation across Finance, Operations, Sales, and IT. You will identify your critical gaps. From there, we will scope a path to alignment."
            ctaText="Schedule an Alignment Discovery Call"
            onClick={() => setShowForm(true)}
          />
        </section>
      </div>
    </>
  );
}
