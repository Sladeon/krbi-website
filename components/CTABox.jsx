import Reveal from '@/components/Reveal';

/**
 * Full-width steel blue call-to-action band.
 */
export default function CTABox({ title, description, ctaText, onClick, secondaryText, onSecondaryClick }) {
  return (
    <Reveal as="section" className="my-4">
      <div className="relative overflow-hidden rounded-xl bg-steel px-8 py-14 text-center md:px-16">
        {/* Subtle diamond watermark echoing the logo mark */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-45 border border-white/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rotate-45 border border-white/10"
        />
        <h2 className="mb-4 text-2xl font-bold !text-white md:text-3xl">{title}</h2>
        <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-white/85">{description}</p>
        <button
          onClick={onClick}
          className="btn-primary !border-white !bg-white !text-steel-deep hover:!bg-cream"
        >
          {ctaText}
        </button>
        {secondaryText && (
          <p className="mt-5">
            <button
              onClick={onSecondaryClick}
              className="text-[0.9rem] font-medium text-white/80 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              {secondaryText}
            </button>
          </p>
        )}
      </div>
    </Reveal>
  );
}
