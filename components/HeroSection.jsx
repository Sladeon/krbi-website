'use client';

import Image from 'next/image';

export default function HeroSection({ imageSrc, title, subtitle, ctaText }) {
  return (
    <div className="relative h-96 md:h-600 flex items-center justify-center overflow-hidden">
      <Image
        src={imageSrc}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white max-w-3xl px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-lg md:text-xl font-medium mb-8 opacity-95">{subtitle}</p>
        <button className="cta-button">
          {ctaText}
        </button>
      </div>
    </div>
  );
}
