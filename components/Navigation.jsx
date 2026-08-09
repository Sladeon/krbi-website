'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-100">
      <div className="container mx-auto px-8 py-4">
        <ul className="flex gap-8 items-center">
          <li className="mr-auto">
            <Link href="/" className="text-lg font-bold text-gray-900 hover:text-blue-600">
              <div className="flex items-center gap-2">
                <Image
                  src="/krbi-logo.png"
                  alt="Kettle River BI"
                  width={32}
                  height={32}
                  className="rounded-sm"
                />
                <span>Kettle River BI</span>
              </div>
            </Link>
          </li>
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/governance" className="hover:text-blue-600">Data Governance</Link></li>
          <li><Link href="/dashboards" className="hover:text-blue-600">KPI Dashboards</Link></li>
          <li><Link href="/insights" className="hover:text-blue-600">Insights</Link></li>
          <li><Link href="/case-study" className="hover:text-blue-600">Case Study</Link></li>
        </ul>
      </div>
    </nav>
  );
}
