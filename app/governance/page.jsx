'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';
import ChecklistGate from '@/components/ChecklistGate';
import Reveal from '@/components/Reveal';

const tiers = [
  {
    chip: 'Internal',
    chipClass: 'bg-[#e4ede3] text-[#3f6a44]',
    definition: 'Business data with no PII. A broad internal audience is fine.',
    examples: 'Production metrics, QA data, SKU and inventory tracking',
  },
  {
    chip: 'Confidential',
    chipClass: 'bg-[#f4ead1] text-[#8a6415]',
    definition: 'Business-sensitive. Restricted to the relevant department plus leadership.',
    examples: 'Sales quotas, GL and finance detail, margin analysis',
  },
  {
    chip: 'Restricted',
    chipClass: 'bg-[#f5ded3] text-[#9a4a2a]',
    definition: 'Contains customer or employee PII.',
    examples: 'Customer names and addresses, HR and payroll data',
  },
  {
    chip: 'Restricted - Derived',
    chipClass: 'bg-[#f2d9d6] text-[#a3312a]',
    definition:
      'Modeled attributes that imply a sensitive characteristic. The tier most frameworks miss.',
    examples: 'Churn scores or purchase patterns that infer household or health signals',
  },
];

const roles = [
  {
    role: 'Admin',
    who: 'Your IT tenant admin plus one named workspace owner. Nobody else, and never a departed employee.',
  },
  {
    role: 'Member',
    who: "The workspace owner's delegates. People accountable for what gets published.",
  },
  {
    role: 'Contributor',
    who: 'Report builders and analysts who create content but should not manage access.',
  },
  {
    role: 'Viewer',
    who: 'Everyone else, granted through a security group, never one person at a time.',
  },
];

const findings = [
  {
    stat: '1',
    text: 'Departed employee who still held Admin rights on the two highest-risk workspaces, weeks after leaving',
  },
  {
    stat: '24',
    text: 'Independent, unreconciled copies of the same item master table, each report deriving its own version',
  },
  {
    stat: '0',
    text: 'Security groups on a workspace with 25 individually-granted members and four Admins',
  },
  {
    stat: 'PII',
    text: 'Customer records sitting in the same workspace as marketing dashboards, with no access boundary between them',
  },
];

export default function Governance() {
  const [showForm, setShowForm] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);

  return (
    <>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      {showChecklist && <ChecklistGate onClose={() => setShowChecklist(false)} />}
      <HeroSection
        imageSrc="/images/hero-governance.jpg"
        imageAlt="Scattered glass panes converging into one ordered row, representing fragmented data becoming governed data"
        eyebrow="Data Governance"
        title="Data does not fail. Definitions do."
        subtitle="Your manufacturing data lives in spreadsheets, accounting systems, and databases that do not talk to each other. The first step is not building a dashboard. It is agreeing on what you are measuring."
        primaryCta={{ label: 'Schedule a Discovery Call', onClick: () => setShowForm(true) }}
        secondaryCta={{ label: 'Download the Self-Audit Checklist', onClick: () => setShowChecklist(true) }}
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

        {/* Approach */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Our Approach</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold">
              Three parts of governance
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
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
        </section>

        {/* In practice: tier framework */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">In Practice</p>
            <h2 className="mb-5 max-w-2xl text-3xl font-bold">
              Classify once. Route everywhere.
            </h2>
            <p className="mb-12 max-w-3xl leading-relaxed text-navy/70">
              Here is what this looks like inside a real BI environment. Every data domain gets
              classified into one of four tiers. Every tier routes to its own workspace with a
              named owner. Access flows through security groups in Active Directory or your
              identity platform, never through one-off individual grants. Classify the data once,
              and every future report inherits the right boundaries automatically.
            </p>
          </Reveal>

          <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map(({ chip, chipClass, definition, examples }, i) => (
              <Reveal key={chip} delay={i * 0.08}>
                <div className="card-lift flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6">
                  <span
                    className={`mb-4 inline-block self-start rounded-full px-3 py-1 text-[0.72rem] font-semibold ${chipClass}`}
                  >
                    {chip}
                  </span>
                  <p className="mb-4 flex-1 text-[0.9rem] font-medium leading-relaxed text-navy">
                    {definition}
                  </p>
                  <p className="text-[0.8rem] leading-relaxed text-navy/50">{examples}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Classify → Route → Own → Grant flow */}
          <Reveal>
            <div className="grid gap-3 md:grid-cols-4">
              {[
                {
                  step: '1 · Classify',
                  text: 'Each data domain gets exactly one tier, decided once by the people who own it.',
                },
                {
                  step: '2 · Route',
                  text: 'Each tier maps to its own workspace. Restricted data never shares a workspace with general content.',
                },
                {
                  step: '3 · Own',
                  text: 'Every workspace has one named owner who approves what gets published and who gets in.',
                },
                {
                  step: '4 · Grant',
                  text: 'Access is granted to security groups, managed in Active Directory. People change; groups persist.',
                },
              ].map(({ step, text }, i) => (
                <div key={step} className="relative rounded-xl border border-navy/10 bg-cream-soft p-6">
                  <p className="mb-2 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-steel">
                    {step}
                  </p>
                  <p className="text-[0.85rem] leading-relaxed text-navy/65">{text}</p>
                  {i < 3 && (
                    <span
                      aria-hidden
                      className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-steel md:flex"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Role assignments */}
          <Reveal delay={0.1}>
            <div className="mt-14 overflow-hidden rounded-xl border border-navy/10">
              <div className="border-b border-navy/10 bg-cream-soft px-6 py-4">
                <h3 className="text-lg font-bold">Who holds which role</h3>
                <p className="text-[0.85rem] text-navy/55">
                  Most BI platforms ship four roles. Most organizations hand them out backwards.
                </p>
              </div>
              <div className="divide-y divide-navy/10 bg-white">
                {roles.map(({ role, who }) => (
                  <div key={role} className="grid gap-1 px-6 py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
                    <p className="font-bold text-steel-deep">{role}</p>
                    <p className="text-[0.92rem] leading-relaxed text-navy/70">{who}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* What audits find */}
        <section className="border-t border-navy/10 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Why It Matters</p>
            <h2 className="mb-5 max-w-2xl text-3xl font-bold">
              What our governance audits actually find
            </h2>
            <p className="mb-12 max-w-3xl leading-relaxed text-navy/70">
              These are real findings from recent BI governance audits at mid-size manufacturers.
              None of them were visible to leadership until someone went looking.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {findings.map(({ stat, text }, i) => (
              <Reveal key={stat + i} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-navy/10 bg-navy p-7">
                  <p className="mb-3 text-3xl font-bold text-steel-soft">{stat}</p>
                  <p className="text-[0.85rem] leading-relaxed text-white/70">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Self-audit band */}
        <section className="py-4">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-cream px-8 py-8 md:flex-row md:items-center md:px-10">
              <div>
                <h3 className="mb-1 text-xl font-bold">Run the thirteen checks yourself first.</h3>
                <p className="text-[0.92rem] text-navy/60">
                  The same questions we ask in a paid audit, as a free 15-minute self-audit.
                  Definitions, access, classification, model hygiene.
                </p>
              </div>
              <button
                onClick={() => setShowChecklist(true)}
                className="btn-primary flex-shrink-0"
              >
                Get the Free Checklist
              </button>
            </div>
          </Reveal>
        </section>

        {/* Two paths */}
        <section className="border-t-0 py-20">
          <Reveal>
            <p className="eyebrow mb-4">Two Ways In</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold">
              Audit what you have, or build it right from the start
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card-lift flex h-full flex-col rounded-xl border border-navy/10 bg-white p-8">
                <h3 className="mb-3 text-xl font-bold">Governance audit</h3>
                <p className="mb-6 flex-1 leading-relaxed text-navy/65">
                  You already have Power BI, Tableau, or a reporting estate that grew
                  report-by-report. We audit every workspace, member, role, and dataset. You get a
                  findings report like the tiles above, a tier classification for your data, and an
                  ordered remediation roadmap your IT team can execute.
                </p>
                <button onClick={() => setShowForm(true)} className="btn-primary self-start">
                  Scope an Audit
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="card-lift flex h-full flex-col rounded-xl border border-navy/10 bg-white p-8">
                <h3 className="mb-3 text-xl font-bold">Build your governance system</h3>
                <p className="mb-6 flex-1 leading-relaxed text-navy/65">
                  You are rolling out BI now and want to skip the cleanup phase entirely. We design
                  the tier framework, workspace structure, security groups, and ownership model
                  before the first report ships, so access never has to be re-litigated
                  report-by-report.
                </p>
                <button onClick={() => setShowForm(true)} className="btn-primary self-start">
                  Scope a Build
                </button>
              </div>
            </Reveal>
          </div>
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
            description="Whether you need an audit of what already exists or a governance system designed from scratch, it starts with the same 30-minute conversation about your data, your systems, and who owns what."
            ctaText="Schedule a Discovery Call"
            onClick={() => setShowForm(true)}
          />
        </section>
      </div>
    </>
  );
}
