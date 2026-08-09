'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';

export default function Dashboards() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      <HeroSection
        imageSrc="/images/04-case-study-dashboard.png"
        title="A Dashboard Is Only as Useful as the Owner Who Acts on It."
        subtitle="You have data. You have dashboards. Nothing changes. That's because your reporting infrastructure isn't connected to accountability. We build the feedback loops that turn dashboards into action."
        ctaText="See a Live Dashboard Example"
        onClick={() => setShowForm(true)}
      />

      <div className="container mx-auto px-8 py-12">
        <section className="py-8 border-b border-gray-200">
          <h2 className="mb-4">The Problem: Siloed Dashboards</h2>
          <p className="mb-6 text-gray-700">Siloed dashboards create siloed organizations. Operations owns their OEE number. Finance owns the P&L. Sales owns revenue and credits. Nobody owns the connection between them. A dashboard that sits in isolation cannot solve this. You need reporting that connects metrics across departments and creates shared accountability.</p>

          <h2 className="mb-4">Our Approach: Ownership-Driven Dashboards</h2>
          <p className="mb-6 text-gray-700">We start with the questions you need answered: What is the actual cost of loss and waste? What is our OTIF performance trend? Why did margin decline in Q2? Then we work backward to the metrics that answer those questions. Each metric has an owner who is accountable. That combination drives improvement.</p>

          <h2 className="mb-4">The Results</h2>
          <p className="mb-6 text-gray-700">When dashboards are connected to ownership, three changes happen. First, the team reviews the metric on a predictable cadence. They see trends early and respond quickly. Second, each owner develops a plan to improve their specific area. Third, you see measurable improvement quickly.</p>

          <CTABox
            title="Let's Talk About Your KPI Infrastructure"
            description="We'll show you what a KPI dashboard infrastructure looks like and scope what a similar engagement might look like for you."
            ctaText="Schedule a Dashboard Discovery Call"
            onClick={() => setShowForm(true)}
          />
        </section>
      </div>
    </>
  );
}
