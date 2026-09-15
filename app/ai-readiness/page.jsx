'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';
import ChecklistGate from '@/components/ChecklistGate';
import Reveal from '@/components/Reveal';

const failures = [
  {
    title: 'It picks a definition and does not tell you',
    text: 'Finance books shrink as a P&L variance. Operations counts waste in units. Ask an AI for "loss and waste" and it chooses one, answers confidently, and never mentions the other exists.',
  },
  {
    title: 'It reads the field name, not the meaning',
    text: 'A column called Adj with no description is a guess. A measure with no logic documented is a guess. The assistant fills the gap with something plausible, which is the worst kind of wrong.',
  },
  {
    title: 'It answers fast, and leadership believes it',
    text: 'The number arrives in seconds, formatted, with a sentence of explanation. Nobody checks it against the spreadsheet, because the point of the AI was to stop checking spreadsheets.',
  },
];

const pillars = [
  {
    n: '01',
    title: 'Agreed definitions',
    text: 'One written definition per metric that Finance, Operations, and IT signed. If two departments would give two numbers, the AI inherits the argument.',
  },
  {
    n: '02',
    title: 'One source per metric',
    text: 'Each number traces to one system, one table, one calculation. Not a chain of exports. The assistant queries the source, not a copy of a copy.',
  },
  {
    n: '03',
    title: 'Documented fields',
    text: 'Every column and measure carries a plain-English description: what it is, where it comes from, how it is calculated, how to use it. People read it as a tooltip. AI assistants read it before they answer. This is the piece almost every model is missing, and the cheapest to fix.',
  },
  {
    n: '04',
    title: 'Governed access',
    text: 'Data classified into tiers, access granted through groups. An assistant answering a plant supervisor should not be able to see payroll, and with governance in place it cannot.',
  },
];

const teaser = [
  'Can you pull your top ten SKUs by margin in under five minutes without calling IT?',
  'Do Finance and Operations use the same number when they talk about production performance?',
  'If you opened your reporting model, would every field carry a description of what it is and how it is calculated?',
];

export default function AiReadiness() {
  const [showForm, setShowForm] = useState(false);
  const [gate, setGate] = useState(null);

  return (
    <>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      {gate && <ChecklistGate variant={gate} onClose={() => setGate(null)} />}

      <HeroSection
        imageSrc="/images/hero-insights.jpg"
        imageAlt="Manufacturing leadership team reviewing one shared dashboard in a boardroom"
        eyebrow="AI Readiness"
        title="You can't put an AI on numbers your own departments don't agree on."
        subtitle="Before anyone connects Copilot, Claude, or an AI agent to your operations data, the data has to agree with itself. Here is what ready looks like, and a ten-minute way to find out how far off you are."
        primaryCta={{ label: 'Get the AI Readiness Checklist', onClick: () => setGate('ai') }}
        secondaryCta={{ label: 'Scope an AI Readiness Assessment', onClick: () => setShowForm(true) }}
      />

      {/* ---------- THE SITUATION ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">The Situation</p>
              <h2 className="text-3xl font-bold md:text-4xl">The board asked. Now what?</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-6 text-lg leading-relaxed text-navy/75">
              AI assistants can now query your data directly. Copilot sits inside Power BI.
              Assistants like Claude connect to a semantic model through a connector (an MCP
              server, for your IT team) and answer questions in plain English. That is real, it
              is inexpensive, and it is already on someone's desk at your company.
            </p>
            <p className="mb-6 leading-relaxed text-navy/70">
              What decides whether it helps or hurts is not the model you pick. It is the data
              underneath. An assistant inherits exactly what your data means today: every
              undocumented field, every metric two departments define differently, every
              spreadsheet that quietly patches two systems together.
            </p>
            <p className="border-l-2 border-steel pl-5 font-medium text-navy">
              The work that makes data AI-ready is the same work that makes Finance and
              Operations agree on a number. We were doing it before it had this name.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHAT GOES WRONG ---------- */}
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="eyebrow eyebrow-light mb-4">Ungoverned Data</p>
            <h2 className="mb-14 max-w-2xl text-3xl font-bold !text-white md:text-4xl">
              What an AI does with numbers nobody agreed on
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {failures.map(({ title, text }, i) => (
              <Reveal key={title} delay={i * 0.12}>
                <div className="h-full rounded-xl border border-white/10 bg-navy-soft p-8">
                  <h3 className="mb-3 text-xl font-bold !text-white">{title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-white/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT READY LOOKS LIKE ---------- */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">What Ready Looks Like</p>
            <h2 className="mb-5 max-w-2xl text-3xl font-bold md:text-4xl">
              Four things an AI depends on. None of them are AI.
            </h2>
            <p className="mb-14 max-w-3xl leading-relaxed text-navy/70">
              This is the foundation we build in every engagement. The assistant is the last thing
              to plug in, and the easiest.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map(({ n, title, text }, i) => (
              <Reveal key={n} delay={i * 0.1}>
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

      {/* ---------- METADATA STANDARD ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Documented Fields</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                The standard we apply to every field. Yours to use.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-6 leading-relaxed text-navy/70">
              Every column and measure in a model we build carries one description in one
              format. It reads as a tooltip for the person hovering over a chart, and it is what
              an AI assistant reads before it decides what a field means. Five sections, pipe
              separated, so people and machines parse it the same way.
            </p>
            <div className="mb-6 overflow-x-auto rounded-xl border border-navy/10 bg-cream-soft p-6">
              <p className="mb-3 font-mono text-[0.82rem] leading-relaxed text-steel-deep">
                [Plain-English summary]. | Source: [origin system]. | Logic: [how it is calculated].
                | Report alias: [display name, if different]. | Note: [how to use it correctly].
              </p>
              <p className="font-mono text-[0.82rem] leading-relaxed text-navy/70">
                Of the recipients who opened the message, the share who clicked something. |
                Logic: DIVIDE([Total Clicks], [Total Opens]). Returns blank when opens are zero. |
                Note: CTOR = Click-To-Open Rate. Compare within channel and audience type.
              </p>
            </div>
            <p className="mb-8 leading-relaxed text-navy/70">
              The rules matter as much as the format: the note never carries a number that will
              age, every abbreviation is decoded where it appears, and a field that displays under
              a different name in reports says so. The full standard, with worked examples, is
              free. There is nothing secret in it. It is just work most teams have not done.
            </p>
            <button onClick={() => setGate('descriptions')} className="btn-primary">
              Get the Field Description Standard
            </button>
          </Reveal>
        </div>
      </section>

      {/* ---------- CHECKLIST ---------- */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-4">Find Out Where You Stand</p>
              <h2 className="mb-5 text-3xl font-bold md:text-4xl">Ten questions. Ten minutes.</h2>
              <p className="mb-8 leading-relaxed text-navy/70">
                Yes-or-no questions a CFO or COO can answer without calling IT. Count the yes
                answers and the scoring guide tells you whether to move, prepare, or start with
                the foundation. Three of the ten:
              </p>
              <ul className="mb-9 space-y-4">
                {teaser.map((q) => (
                  <li key={q} className="flex gap-3">
                    <span aria-hidden className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-steel" />
                    <span className="leading-relaxed text-navy/80">{q}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setGate('ai')} className="btn-primary">
                Get the AI Readiness Checklist
              </button>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-xl border border-navy/10 bg-white p-8 md:p-10">
                <p className="eyebrow mb-4">Scored Low?</p>
                <h3 className="mb-4 text-2xl font-bold">The AI Readiness Assessment</h3>
                <p className="mb-5 leading-relaxed text-navy/70">
                  Two weeks and $5,000, fixed. We score your data on the four pillars above,
                  trace where each core metric actually comes from, and hand you a written fix
                  list in priority order. Credited in full against a Foundation Build signed within
                  90 days.
                </p>
                <p className="mb-7 border-l-2 border-steel pl-5 text-[0.95rem] font-medium text-navy">
                  If the honest answer is that you are further off than an AI project can absorb,
                  we say so, and you keep the report.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button onClick={() => setShowForm(true)} className="btn-primary">
                    Scope the Assessment
                  </button>
                  <Link href="/pricing" className="btn-ghost !border-navy/20 !text-navy hover:!bg-cream">
                    See All Pricing
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <CTABox
          title="Get the data ready before the AI arrives."
          description="A 30-minute discovery call. Bring the question the board asked you; we will tell you what has to be true about your data before an AI can answer it, and how far off you are."
          ctaText="Schedule a 30-Minute Discovery Call"
          onClick={() => setShowForm(true)}
          secondaryText="Not ready to talk? Take the ten-question readiness checklist"
          onSecondaryClick={() => setGate('ai')}
        />
      </section>
    </>
  );
}
