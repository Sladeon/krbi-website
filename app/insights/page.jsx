'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';

export default function Insights() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      <HeroSection
        imageSrc="/images/06-org-alignment.png"
        title="Organizations Act When They Agree on the Truth."
        subtitle="Your data exists. Your dashboards exist. Your teams still don't agree on what the numbers mean. The gap between insight and action is organizational alignment."
        ctaText="Align Your Organization. Schedule a Discovery Call."
        onClick={() => setShowForm(true)}
      />

      <div className="container mx-auto px-8 py-12">
        <section className="py-8 border-b border-gray-200">
          <div className="opening-narrative">
            <p>Actionable insights require agreement. Not agreement on tactics, but agreement on truth. What is our actual loss and waste? What is driving it? Who is responsible for which part? Without that agreement, you get tribal knowledge. Everyone has their own spreadsheet. Nobody reconciles them. So nothing changes.</p>
          </div>

          <h2 className="mt-8 mb-4">The Problem: Organizational Silos</h2>
          <p className="mb-6 text-gray-700">Organizations are siloed by default. Finance owns the P&L. Operations owns the process. Sales owns revenue. IT owns the systems. Each group is incentivized to optimize their own area. These aren't bad incentives. They're just incomplete. When they're not coordinated, you get local optimization that hurts global performance. Finance wants to reduce variance. Operations wants to maximize efficiency. Sales wants to maximize revenue. When these incentives aren't aligned, you get finger-pointing instead of collaboration.</p>

          <h2 className="mb-4">Our Approach: Making Dysfunction Visible</h2>
          <p className="mb-6 text-gray-700">We build alignment by making organizational dysfunction visible. We sit down with Finance, Operations, Sales, and whoever else is relevant. We ask them to define a critical metric together. They argue. Finance wants to measure GL variance. Operations wants to measure unit loss. Sales wants to measure credits. We don't resolve the argument. We surface it. We ask: What is being measured? Why does each group measure it differently? What decisions does each measurement inform? Usually, the answer is that all three are right but they're measuring different things. From there, we separate the metric into components that make sense to each group. Then we assign ownership. Finally, we embed it in a governance rhythm. That rhythm is what makes alignment stick.</p>

          <h2 className="mb-4">The Results</h2>
          <p className="mb-6 text-gray-700">When organizations align around a shared truth, decision-making speed increases dramatically. The same metric that used to be a source of argument becomes a source of coordination. That is the shift. Within six months, loss and waste had declined 30% year-over-year. That 2M in savings did not come from a new system or a new tool. It came from an organization that finally agreed on what the problem was and who was responsible for fixing it.</p>

          <CTABox
            title="Start Your Organization's Alignment"
            description="We will help you facilitate that conversation across Finance, Operations, Sales, and IT. You will identify your critical gaps. From there, we will scope a path to alignment."
            ctaText="Schedule an Alignment Discovery Call"
            onClick={() => setShowForm(true)}
          />
        </section>
      </div>
    </>
  );
}
