'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';
import ChecklistGate from '@/components/ChecklistGate';
import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: "Do you build dashboards?",
    a: "Yes. In Power BI, on a governed data layer, so the numbers hold up in the room. The build order matters: definitions first, then the model, then the reports. A dashboard built on numbers Finance and Operations do not agree on is just a faster way to have the same argument."
  },
  {
    q: "What tools do you use, and do we have to buy anything?",
    a: "Power BI, SQL, and your existing ERP. Most manufacturers already license Power BI through Microsoft 365, so there is usually no new platform to buy and no new vendor to manage. Your IT team owns and maintains the model after we leave; we build it and document it so they can."
  },
  {
    q: "How is this different from other BI consultants?",
    a: "Most BI consultants start by asking what reports you want. We start by asking what decisions you need to make and who owns the outcome. That usually means talking to Finance, Operations, and IT together, which most vendors don't do."
  },
  {
    q: "What's the timeline?",
    a: "The assessment takes two weeks. A Foundation Build is 30 to 45 days from design sign-off, and you have one reconciled number that Finance and Operations both sign at about the eight-week mark. Improvement compounds from there under Managed Intelligence; in the case study, the like-for-like reduction was measured over the following year."
  },
  {
    q: "Is our data ready for AI?",
    a: "Probably not yet, and that is the normal answer. An AI assistant inherits whatever your data means today. If two departments define a metric differently, it picks one and does not tell you. Readiness comes from the same work we do anyway: agreed definitions, one source per metric, documented fields, governed access. The free ten-question checklist on the AI Readiness page gives you a score in ten minutes."
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
    a: "Everything is fixed-price, and the numbers are published. A two-week assessment is $5,000 and is credited against a build. A Foundation Build runs $35,000 to $55,000 and is priced from the assessment findings rather than estimated in advance. Managed Intelligence after launch is $3,500 a month. We do not bill hourly. Full detail is on the pricing page."
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

// The three ways the problem shows up, in the buyer's words. Each links to the page that answers it.
const situations = [
  {
    href: '/case-study',
    title: 'Finance and Operations report different numbers for the same thing.',
    text: 'Month-end turns into a debate about whose spreadsheet is right. We get the definitions agreed and traced to source, build the reporting on top, and fix the processes that feed it.',
    cta: 'Read the case study',
  },
  {
    href: '/governance',
    title: 'Power BI grew report by report, or the person who ran it left.',
    text: 'Dozens of workspaces, no owner, former employees still holding admin. We audit what exists, score it, and hand IT an ordered fix list.',
    cta: 'How the audit works',
  },
  {
    href: '/ai-readiness',
    title: 'The board is asking what the AI plan is.',
    text: "You can't put an AI on numbers your own departments don't agree on. We get the data ready first, and tell you honestly how far off it is.",
    cta: 'Check your readiness',
  },
];

// Honest value anchor: arithmetic the buyer can redo, not a claim about their plant.
const costTiles = [
  {
    stat: '$375K',
    title: 'One point of COGS',
    text: 'At a $50M food manufacturer running 75% cost of goods, one percentage point is $375,000 a year. Loss and waste with no owner does not shrink on its own. Run it with your numbers: revenue, times COGS share, times one point.',
  },
  {
    stat: 'Weeks',
    title: 'Hidden labor',
    text: 'Every spreadsheet whose job is reconciling two reports is skilled hours spent proving a number instead of moving it. Month after month, in every department that keeps one.',
  },
  {
    stat: '0',
    title: 'Decisions made',
    text: 'A meeting that argues about whose number is right is a meeting that did not decide anything. The cost is not the hour. It is the quarter that passed before anyone acted.',
  },
];

export default function Home() {
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
        tall
        imageSrc="/images/hero-home.jpg"
        imageAlt="Two workers reviewing production notes together on a spotless food manufacturing floor"
        eyebrow="Data-Driven Continuous Improvement for Food Manufacturers"
        title={
          <>
            Your Finance team calls it shrink. Operations calls it waste.{' '}
            <span className="text-steel-soft">
              Nobody acts on a number they don't understand.
            </span>
          </>
        }
        subtitle="Fixed-price engagements for food and beverage manufacturers from $30M up. We get Finance and Operations agreeing on one set of numbers in eight weeks, build the reporting that tracks them, and fix the processes underneath so the numbers actually move."
        primaryCta={{ label: 'Schedule a Discovery Call', onClick: () => setShowForm(true) }}
        secondaryCta={{ label: 'See Pricing', href: '/pricing' }}
        stats={[
          { value: '37.7%', label: 'Less loss and waste at one client, like for like' },
          { value: '8 wks', label: 'To one number Finance and Ops both sign' },
          { value: '$5,000', label: 'Fixed-price assessment to start. Credited against the build.' },
        ]}
      />

      {/* ---------- THE PROBLEM ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">The Problem</p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Same plant. Same quarter. No agreed number.
              </h2>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {[
                  { dept: 'Finance', src: 'The general ledger' },
                  { dept: 'Operations', src: 'Production reports' },
                  { dept: 'Sales', src: 'Customer credits' },
                  { dept: 'Warehouse', src: 'Inventory variance' },
                ].map(({ dept, src }) => (
                  <div
                    key={dept}
                    className="rounded-lg border border-navy/10 bg-cream-soft p-4 text-center md:p-6"
                  >
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-bluegrey">
                      {dept}
                    </p>
                    <p className="mt-3 text-[0.95rem] font-semibold leading-snug text-steel">
                      {src}
                    </p>
                    <p className="mt-2 text-[0.78rem] text-navy/50">Its own number</p>
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

        {/* What the disagreement costs */}
        <Reveal delay={0.1}>
          <div className="mt-20 border-t border-navy/10 pt-14">
            <p className="eyebrow mb-4">What It Costs</p>
            <h3 className="mb-10 max-w-2xl text-2xl font-bold md:text-3xl">
              The disagreement has a price. Here is how to estimate yours.
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {costTiles.map(({ stat, title, text }) => (
                <div key={title} className="rounded-xl border border-navy/10 bg-cream-soft p-7">
                  <p className="mb-2 text-3xl font-bold text-steel">{stat}</p>
                  <h4 className="mb-3 text-lg font-bold">{title}</h4>
                  <p className="text-[0.92rem] leading-relaxed text-navy/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- WHERE IT STARTS ---------- */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Where It Starts</p>
            <h2 className="mb-14 max-w-2xl text-3xl font-bold md:text-4xl">
              Three ways this shows up. One fix underneath.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {situations.map(({ href, title, text, cta }, i) => (
              <Reveal key={href} delay={i * 0.12}>
                <Link
                  href={href}
                  className="card-lift group flex h-full flex-col rounded-xl border border-navy/10 bg-white p-8"
                >
                  <h3 className="mb-4 text-xl font-bold leading-snug transition-colors group-hover:text-steel">
                    {title}
                  </h3>
                  <p className="mb-6 flex-1 text-[0.95rem] leading-relaxed text-navy/65">{text}</p>
                  <span className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-steel">
                    {cta}{' '}
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
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
              The goal isn't a dashboard. It's an organization that acts on the same number, and a
              continuous-improvement rhythm that keeps moving it after we leave.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                title: 'Fix the process',
                text: 'When the number points at a process, we fix the process: standardized reason codes on inventory adjustments, cycle counting instead of a year-end scramble, purchase orders that separate capital from expense, the ERP used the way it was configured to be.',
              },
              {
                n: '04',
                title: 'Own the rhythm',
                text: 'Every metric gets a named owner and a Plan-Do-Check-Act cadence: set the target, run the plan, check the number, adjust. The reporting keeps that loop honest long after the engagement ends.',
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
                37.7% less loss and waste. Measured like for like.
              </h2>
              <p className="mb-6 leading-relaxed text-white/70">
                At one food manufacturer, this approach delivered a 37.7% year-over-year reduction in
                loss and waste, with every loss account improving. That figure is normalized:
                commodity price movement and a one-time acquisition write-off are excluded, and the
                same months and locations are compared in both years. More importantly, it replaced
                a culture of siloed Excel tools and department-versus-department meetings with a
                team-oriented approach to data and problem-solving.
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
                  <span className="font-semibold text-white/80">Chief Operating Officer</span>
                  <br />
                  Packaged food manufacturer, Pacific Northwest
                  <br />
                  <span className="text-steel-soft">Available as a reference. Ask us on the call.</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- AI READINESS ---------- */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">AI Readiness</p>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Before you connect an AI to your data.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-6 text-lg leading-relaxed text-navy/75">
                Every CFO and COO is being asked what the AI plan is. Copilot sits inside Power BI
                now. Assistants like Claude can connect straight to a data model and answer
                questions in plain English. That is real, and it is already on your IT team's desk.
              </p>
              <p className="mb-6 leading-relaxed text-navy/70">
                On a governed model with every field documented, those tools answer correctly. On
                numbers your own departments disagree about, they answer just as fast, just as
                confidently, and wrong, to leadership. The foundation we build is the prerequisite.
                The assistant is the last thing to plug in, and the easiest.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/ai-readiness" className="btn-primary">
                  What AI-ready data looks like
                </Link>
                <button
                  onClick={() => setGate('ai')}
                  className="btn-ghost !border-navy/20 !text-navy hover:!bg-cream-soft"
                >
                  Take the 10-question checklist
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- FOUNDER ---------- */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <Reveal>
            <div className="mx-auto max-w-sm lg:mx-0">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-steel/40"
                />
                <Image
                  src="/mitch-cauthron.jpg"
                  alt="Mitch Cauthron, founder and principal of Kettle River BI"
                  width={440}
                  height={436}
                  className="relative rounded-2xl"
                />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-navy/60">
                <span className="font-semibold text-navy">Mitch Cauthron</span>
                <br />
                Founder &amp; Principal, Kettle River BI
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="eyebrow mb-4">Who You're Hiring</p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              You hire Kettle River BI. You work with me.
            </h2>
            <div className="space-y-5 leading-relaxed text-navy/70">
              <p>
                Accountant by training. Ten years inside food manufacturing as a cost analyst and
                plant controller, building the reporting Operations actually used and Finance
                actually trusted. Now I do the same work for manufacturers from the outside, and I
                learn your ERP by reading how the data moves through it.
              </p>
              <p className="border-l-2 border-steel pl-5 font-medium text-navy">
                Every engagement starts with me and stays with me. I scope it, I run the sessions
                where your departments agree on the numbers, and I sign off on everything that
                ships. Day-to-day delivery draws on a small team I have worked with for years, so
                you get one accountable person without paying for a bench.
              </p>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-navy/10 pt-7">
              {[
                { value: '15+', label: 'Years in finance and analytics' },
                { value: '10+', label: 'Years inside manufacturing' },
                { value: '1', label: 'Accountable point of contact, start to finish' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-steel md:text-3xl">{value}</p>
                  <p className="mt-1 text-[0.8rem] leading-snug text-navy/50">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">In Their Words</p>
            <h2 className="mb-14 max-w-2xl text-3xl font-bold md:text-4xl">
              Different plants. Different systems. Same outcome.
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                quote:
                  'We lacked effective BI and KPI tools to monitor production and financial performance. Kettle River BI spearheaded the adoption of Power BI dashboarding and KPI tracking for us. With the new custom solution, we have real-time visibility into our operations, enabling data-driven decisions and continuous improvement strategies to thrive in our business.',
                name: 'Charles Nutter',
                role: 'VP of Operations, Oregon Ice Cream',
              },
              {
                quote:
                  'Previously, what took days now can be done in minutes. As a result, the budget was completed weeks ahead of what had been done in the past allowing for a deeper analysis than has ever been done before!',
                name: 'Linda Pearce',
                role: 'CFO, Tillamook Cheese',
              },
              {
                quote:
                  "Kettle River BI automated our company's budget upload and reporting process. The budgeting tools he created were highly functional and incredibly intuitive. Thanks to Mitch's efforts, the data gathering process that had been disjointed and confusing became seamless. Our new, highly automated budgeting process literally saved our budget team weeks of hard work!",
                name: 'Kent Walker',
                role: 'Director of Finance',
              },
              {
                quote:
                  'The most unique attribute that Mitch possesses when bringing data to life is the marrying of his business and accounting acumen with his data mining abilities. Mitch can go beyond the surface level of a request and incorporate additional, meaningful data that will add value to the analysis. I would not hesitate to recommend Mitch to any of the clients I work with.',
                name: 'Travis Hendrick',
                role: 'Director of Finance, Goodfellow Bros Inc.',
              },
            ].map(({ quote, name, role }, i) => (
              <Reveal key={name} delay={(i % 2) * 0.12}>
                <figure className="card-lift flex h-full flex-col rounded-xl border border-navy/10 bg-white p-8">
                  <svg width="28" height="22" viewBox="0 0 36 28" fill="none" className="mb-5 flex-shrink-0" aria-hidden>
                    <path d="M0 28V16.8C0 7.1 5.7 1.3 15.1 0l1.6 4.6c-5.4 1.3-8.2 4.4-8.5 8.6H15V28H0zm21 0V16.8C21 7.1 26.7 1.3 36 0l1.6 4.6c-5.4 1.3-8.2 4.4-8.5 8.6H36V28H21z" fill="#5D8597" />
                  </svg>
                  <blockquote className="mb-6 flex-1 text-[0.95rem] leading-relaxed text-navy/75">
                    {quote}
                  </blockquote>
                  <figcaption className="text-sm text-navy/50">
                    <span className="font-semibold text-navy">{name}</span>
                    <br />
                    {role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRICING ENTRY ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-cream px-8 py-8 md:flex-row md:items-center md:px-10">
            <div>
              <h3 className="mb-1 text-xl font-bold">
                Every engagement is fixed-price, and the prices are published.
              </h3>
              <p className="text-[0.92rem] text-navy/60">
                A $5,000 two-week assessment (data health, governance audit, or AI readiness), a
                $35K to $55K Foundation Build priced from its findings, and $3,500 a month to keep
                it running. No hourly rate, anywhere.
              </p>
            </div>
            <Link href="/pricing" className="btn-primary flex-shrink-0">
              See Pricing
            </Link>
          </div>
        </Reveal>
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
          title="Stop arguing about the number. Start moving it."
          description="If your leadership team spends half its meetings deciding whose spreadsheet is right, a 30-minute discovery call will tell you whether this fits. We ask the same questions we asked the client in the case study, and you will know within minutes whether a $5,000 assessment is worth two weeks of your team's time."
          ctaText="Schedule a 30-Minute Discovery Call"
          onClick={() => setShowForm(true)}
          secondaryText="Not ready to talk? Download the free governance self-audit checklist"
          onSecondaryClick={() => setGate('governance')}
        />
      </section>
    </>
  );
}
