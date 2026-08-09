'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import FAQSection from '@/components/FAQSection';

export default function Home() {
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

  return (
    <>
      <HeroSection
        imageSrc="/images/01-homepage-hero.png"
        title="Your Finance Team Calls It Shrink. Operations Calls It Waste. Nobody Acts on a Number They Don't Understand."
        subtitle="Kettle River BI translates between departments, defines clean metrics, and builds the accountability structures that drive real improvement."
        ctaText="Schedule a 30-Minute Discovery Call"
      />

      <div className="container mx-auto px-8 py-12">
        <section className="py-8 border-b border-gray-200">
          <div className="opening-narrative">
            <p>The problem isn't usually that you lack data. It's that your organization lacks agreement on what the data means. Finance measures shrink as a P&L variance against budget. Operations measures waste as units lost in production. Sales tracks it as customer credits and returns. IT sits somewhere in the middle, maintaining systems nobody fully understands. Nobody is wrong. Everyone is operating from incomplete information. The result: siloed decisions, finger-pointing in meetings, and millions of dollars left on the table. Kettle River BI solves this by doing something most BI consultants don't: we start with accountants and operations experts, not dashboards.</p>
          </div>

          <h2 className="mt-8 mb-4">The Problem</h2>
          <p className="mb-6 text-gray-700">Finance and Operations speak different languages. Finance owns the P&L and thinks in variance categories and GL accounts. Operations owns the process and thinks in units, efficiency, and control. When Finance asks for a loss and waste report, IT builds something that satisfies the letter of the request but not the spirit. You get a dashboard that shows a number, but nobody can act on it. That's because action requires ownership. And ownership requires agreement on what you're measuring and why it matters. In manufacturing, this disconnect is the root cause of most improvement initiatives that stall. You have the data. You have smart people. But you don't have shared definitions. Without them, every decision is negotiated. Every report is questioned. Every improvement stalls.</p>

          <h2 className="mb-4">Our Approach</h2>
          <p className="mb-6 text-gray-700">We do something different. We start by sitting with Finance, Operations, IT, and the relevant functional owners (warehouse managers, production supervisors, sales leadership). We ask: What is loss and waste as you see it? How do you currently track it? What accounts or data points reflect it? What decisions do you need it to inform? From those conversations, we define two types of loss: controllable (where a specific owner can drive change) and non-controllable (where you can measure impact but not action). We quantify both in a way that reconciles the P&L. Then we assign ownership and accountability. Finally, we build reporting and governance structures that keep those owners engaged. The goal isn't a fancy dashboard. It's an organization that acts on the same number.</p>

          <h2 className="mb-4">Real Results</h2>
          <p className="mb-6 text-gray-700">At one food manufacturer, this approach delivered 30% year-over-year improvement in loss and waste metrics within six months. That translated to approximately $2M in measurable savings. More importantly, it replaced a culture of siloed Excel tools and department-versus-department meetings with a team-oriented approach to data and problem-solving. Each owner now manages a specific metric and develops plans to improve it. The accountability mechanism is transparent and bi-weekly. Finance and Operations still speak different languages, but they're looking at the same number and drawing the same conclusions. That alignment is what drives results.</p>

          <CTABox
            title="Ready to Align Your Organization?"
            description="If your leadership team spends half its time arguing about numbers instead of acting on them, we've seen the path forward. Let's schedule a 30-minute discovery call. We'll ask you the same questions we asked our other clients. You'll see within minutes whether this is the right approach for your organization."
            ctaText="Schedule a 30-Minute Discovery Call"
          />
        </section>

        <section className="py-12">
          <h2 className="mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="pb-8 border-b border-gray-200 last:border-b-0">
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
