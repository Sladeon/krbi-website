'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import CTABox from '@/components/CTABox';

export default function CaseStudy() {
  return (
    <>
      <HeroSection
        imageSrc="/images/05-improvement-chart.png"
        title="From Siloed Spreadsheets to $2M in Measurable Savings."
        subtitle="How we aligned Finance, Operations, Sales, and Warehouse around one definition of loss and waste and drove 30% year-over-year improvement in six months."
        ctaText="Explore a Similar Engagement for Your Organization"
      />

      <div className="container mx-auto px-8 py-12">
        <section className="py-8 border-b border-gray-200">
          <h2 className="mb-4">The Challenge</h2>
          <p className="mb-6 text-gray-700">When we first met with the leadership team at Smith Brothers, a mid-size food manufacturer, they had a problem they could not quite name. The CFO could tell you the P and L impact of loss and waste. Operations could tell you production-floor inefficiencies. The warehouse team could tell you inventory variance. Sales could tell you customer credits. None of them could tell you the same number. When leadership asked, "What is our actual loss and waste?" the answer depended on whom you asked. Finance said 3.2% of COGS. Operations said 2.1%. Sales said 0.8%.</p>

          <p className="mb-6 text-gray-700">Smith Brothers manufactured packaged foods with about 150 employees and 50M in annual revenue. The COO, Sebastian Pastore, knew something was wrong but could not locate it. He said, "We had reports everywhere. Finance had loss and waste. Operations had inefficiency metrics. Sales had credits. Warehouse had variance. When we looked at them together, they did not reconcile. So we spent half our time figuring out what the numbers meant instead of fixing them."</p>

          <h2 className="mb-4">The Solution</h2>
          <p className="mb-6 text-gray-700">We started with a question: What is loss and waste as you see it? We brought Finance, Operations, Warehouse, and Sales together. We asked each group to define loss and waste. Then we asked: If we add all these up, where do they reconcile? They didn't. The discrepancy was about 1% of COGS, but that represented several hundred thousand dollars annually.</p>

          <p className="mb-6 text-gray-700">Over a month of weekly sessions, we arrived at a clean separation. Controllable Loss: Loss where a specific owner could take action (production scrap, inventory damage, expired goods, rework, process overages). Non-Controllable Loss: Loss that could be measured but where the owner operated within constraints set by others (customer credits, standard-cost variance, regulatory disposal). We assigned owners: Operations Manager, Warehouse Manager, Sales Director, Procurement Director, CFO. Using actual data from the GL, operations reports, and sales records, we calculated the truth. For the first time, Finance, Operations, and Sales were looking at the same number.</p>

          <h2 className="mb-4">Process Redesign</h2>
          <p className="mb-6 text-gray-700">Beyond metrics, we redesigned their inventory adjustment process. Previously, warehouse staff entered free-form text notes: Damaged this item. Short-coded. Water damage. Missing. We built a required dropdown form with specific, standardized reason codes: Cycle count. Damage in-house. Damage vendor. Discontinued. Donations expired. Other (with detail). Suddenly, what was previously invisible became sortable and actionable. The team could see: Damaged goods are 45% of variance. Short-coded items are 18%. Each category had an owner responsible for reducing it.</p>

          <p className="mb-6 text-gray-700">We also implemented a cycle-counting program in their NetSuite ERP using A/B/C/D inventory priority. A items (highest value) were counted daily. B items weekly. C items monthly. D items quarterly. This active monitoring replaced their reactive inventory close process. It created ongoing trust in system inventory numbers. No more month-end arguments about mismatches.</p>

          <h2 className="mb-4">Results</h2>
          <p className="mb-6 text-gray-700">Within four reviews (eight weeks), the metrics stabilized. Finance, Operations, and Sales pulled the same loss and waste number each week. Within three months, all departments tracked against specific improvement plans. Within six months: Production scrap declined 18% year-over-year. Inventory variance declined 14% year-over-year. Overall loss and waste declined from 3.2% to 2.2% of COGS (30% YoY reduction). This translated to approximately 2M in annual savings.</p>

          <h2 className="mb-4">The Testimonial</h2>
          <blockquote className="border-l-4 border-blue-600 pl-6 my-8 text-gray-700">
            <p className="mb-4">Kettle River BI was instrumental in helping us break through the hundreds of Excel-based data management solutions that managers had accumulated to provide answers to questions unique to their own departments, and replace them with flexible BI-based reports that facilitated team-oriented approaches to viewing data and solving problems. The legacy Excel-based tools had limited flexibility and questionable accuracy and resulted in department managers either working in silos, or joining calls to argue from the point of view of their reporting tool and data set. This was generally unproductive.</p>
            <p className="mb-4">BI-based reports provided for one source of data and in-the-moment selection and sorting capabilities that eventually fostered a team approach to looking at data and generating solutions. Kettle River BI brought much more to the table than simply building Power BI reports. BI staff were the patient voice in the room, explaining how the tools worked, demonstrating how to manipulate them, and facilitating productive discussion between stakeholders while we were learning. Kettle River was truly transformational for our organization, both in the way we looked at data and the way we worked together.</p>
            <p className="font-semibold">Sebastian Pastore, Former COO, Smith Brothers</p>
          </blockquote>

          <CTABox
            title="Want Similar Results?"
            description="If your organization has similar challenges, let us explore whether a similar approach would work for you."
            ctaText="Explore a Similar Engagement for Your Organization"
          />
        </section>
      </div>
    </>
  );
}
