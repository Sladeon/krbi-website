'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';
import BookingForm from '@/components/BookingForm';

export default function Governance() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
      <HeroSection
        imageSrc="/images/02-problem-visual.png"
        title="Data Does Not Fail. Definitions Do."
        subtitle="Your manufacturing data lives in spreadsheets, accounting systems, and databases that do not talk to each other. The first step is not building a dashboard. It is agreeing on what you are measuring."
        ctaText="Download the Data Governance Checklist"
        onClick={() => setShowForm(true)}
      />

      <div className="container mx-auto px-8 py-12">
        <section className="py-8 border-b border-gray-200">
          <div className="opening-narrative">
            <p>Manufacturing operations depend on clean data, but clean data depends on clean definitions. Governance means agreement. It means Finance, Operations, IT, and the functional owners all understand what a metric means, how it is calculated, who owns it, and what decisions it informs. Without that agreement, you have data fragmentation. With it, you have a foundation for improvement.</p>
          </div>

          <h2 className="mt-8 mb-4">The Problem: Data Fragmentation</h2>
          <p className="mb-6 text-gray-700">Data governance failures manifest as recurring arguments. You run a report in January and pull one number. You run it in February and pull a different one. Nobody knows why. So you investigate. You create a second report to reconcile the first. You create a third spreadsheet to bridge the two systems. Soon you have dozens of shadow reporting systems. By the time leadership notices, you have hundreds of hours of hidden labor tied up in data reconciliation.</p>

          <Image
            src="/images/03-governance-framework.png"
            alt="Three-part governance framework"
            width={1200}
            height={400}
            className="rounded-lg my-8 w-full h-auto"
          />

          <h2 className="mb-4">Our Approach: Three Parts of Governance</h2>
          <p className="mb-6 text-gray-700">We define governance in three parts. First, alignment: Finance, Operations, IT, and the functional owner sit together and define the metric. Second, quantification: we trace the metric to the actual data. In which systems does it live? How do we extract it? What is the single source of truth? Third, ownership: we assign a specific person who reviews the metric weekly or bi-weekly, identifies variances, and develops action plans. That person is accountable. That clarity is what turns data into action.</p>

          <h2 className="mb-4">The Results</h2>
          <p className="mb-6 text-gray-700">When governance works, three things happen simultaneously. First, the data reconciles. Finance and Operations pull the same report and get the same number. Second, action increases. Because people own a metric, they develop plans to improve it. Third, organizational alignment follows. Instead of meetings where different departments argue from different spreadsheets, you have meetings where different departments look at the same data and discuss what to do about it.</p>

          <CTABox
            title="Download Our Data Governance Checklist"
            description="We have captured the data governance framework we use with clients into a checklist. Download it, walk through your organization's current state, and see where the gaps are. If you want to talk through what you discover, schedule a discovery call."
            ctaText="Download the Checklist and Schedule a Call"
            onClick={() => setShowForm(true)}
          />
        </section>
      </div>
    </>
  );
}
