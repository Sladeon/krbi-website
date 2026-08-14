'use client';

import Image from 'next/image';

/**
 * Full-bleed editorial hero. Left-aligned content over a dark gradient,
 * optional stat strip pinned to the bottom (tall variant).
 */
export default function HeroSection({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  primaryCta,   // { label, onClick } or { label, href }
  secondaryCta, // { label, href }
  stats,        // [{ value, label }]
  tall = false,
}) {
  return (
    <header
      className={`relative flex flex-col justify-center overflow-hidden bg-navy ${
        tall ? 'min-h-[88vh]' : 'min-h-[54vh]'
      }`}
    >
      <div className="absolute inset-0 ken-burns">
        <Image
          src={imageSrc}
          alt={imageAlt || ''}
          fill
          className="object-cover brightness-[0.88]"
          priority
          sizes="100vw"
        />
      </div>

      {/* Directional scrim: readable text, image still visible on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy/85 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="eyebrow eyebrow-light hero-rise mb-5" style={{ '--rise-delay': '0.05s' }}>
              {eyebrow}
            </p>
          )}
          <h1
            className="hero-rise mb-6 text-4xl font-bold leading-[1.1] !text-white [text-shadow:0_2px_28px_rgba(1,1,1,0.55)] md:text-[3.4rem]"
            style={{ '--rise-delay': '0.15s' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="hero-rise mb-9 max-w-xl text-lg leading-relaxed text-white/85 [text-shadow:0_1px_14px_rgba(1,1,1,0.55)] md:text-xl"
              style={{ '--rise-delay': '0.3s' }}
            >
              {subtitle}
            </p>
          )}
          <div
            className="hero-rise flex flex-col gap-4 sm:flex-row"
            style={{ '--rise-delay': '0.45s' }}
          >
            {primaryCta && (
              primaryCta.href ? (
                <a href={primaryCta.href} className="btn-primary">{primaryCta.label}</a>
              ) : (
                <button onClick={primaryCta.onClick} className="btn-primary">
                  {primaryCta.label}
                </button>
              )
            )}
            {secondaryCta && (
              secondaryCta.href ? (
                <a href={secondaryCta.href} className="btn-ghost">
                  {secondaryCta.label}
                </a>
              ) : (
                <button onClick={secondaryCta.onClick} className="btn-ghost">
                  {secondaryCta.label}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {stats && stats.length > 0 && (
        <div
          className="hero-rise relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 lg:px-8"
          style={{ '--rise-delay': '0.6s' }}
        >
          <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-8 md:gap-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white md:text-4xl">{value}</p>
                <p className="mt-1 text-[0.8rem] leading-snug text-white/60 md:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
