import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'What Kettle River BI collects when you book a call or download a checklist, where it is stored, and how to have it removed.',
  alternates: { canonical: '/privacy' },
};

const EFFECTIVE = 'September 14, 2026';

const sections = [
  {
    id: 'what',
    title: 'What we collect',
    body: (
      <>
        <p>
          We collect information only when you give it to us through one of two forms on this site.
        </p>
        <ul>
          <li>
            <strong>Discovery call form.</strong> Your name, work email, company, and the data
            problem you describe in the free-text box.
          </li>
          <li>
            <strong>Download forms.</strong> Your name, work email, and company, plus a note of
            which document you downloaded.
          </li>
        </ul>
        <p>
          Reading the site collects nothing personal. We do not run advertising pixels, and the site
          sets no tracking or advertising cookies.
        </p>
      </>
    ),
  },
  {
    id: 'why',
    title: 'What we use it for',
    body: (
      <>
        <ul>
          <li>To reply to you and prepare for the call you booked.</li>
          <li>To send you the document you asked for.</li>
          <li>To follow up once or twice about the specific thing you asked about.</li>
        </ul>
        <p>
          We do not sell your information, share it with advertisers, or add you to a newsletter
          you did not ask to join. If you want the newsletter, tell us and we will add you.
        </p>
      </>
    ),
  },
  {
    id: 'where',
    title: 'Where it lives',
    body: (
      <>
        <p>
          Form submissions are stored in a database hosted by Supabase. The site itself is hosted
          on Vercel, which keeps standard server logs (including IP address) for a short period to
          run and secure the service. We use Vercel Web Analytics for page-view counts. It is
          cookieless, aggregated, and does not follow you across other sites.
        </p>
        <p>
          When you schedule a call, the booking page is run by Calendly. Your name and email are
          passed to Calendly to prefill the form, and Calendly handles that step under its own
          privacy policy. Email between us runs through Google Workspace.
        </p>
        <p>
          Each of these providers processes data on our behalf and is not permitted to use it for
          their own purposes.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: (
      <p>
        We keep form submissions until you ask us to remove them, or until they are clearly no
        longer useful, whichever comes first. Email correspondence is kept as ordinary business
        records.
      </p>
    ),
  },
  {
    id: 'rights',
    title: 'Your choices',
    body: (
      <>
        <p>
          Email{' '}
          <a href="mailto:info@kettleriverbi.com" className="text-steel underline underline-offset-2">
            info@kettleriverbi.com
          </a>{' '}
          and we will do any of the following, usually within a few business days:
        </p>
        <ul>
          <li>Tell you what we hold about you.</li>
          <li>Correct it.</li>
          <li>Delete it.</li>
          <li>Stop contacting you.</li>
        </ul>
        <p>
          Some states give residents specific privacy rights. We honor these requests regardless of
          where you live.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        The site is served over HTTPS. Access to the database and email accounts that hold your
        information is limited to Kettle River BI. No system is perfect, and we do not promise
        otherwise, but we keep the footprint small on purpose.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        If the way we handle information changes, this page changes with it and the date at the top
        moves. Material changes will be noted here for at least thirty days.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Who we are',
    body: (
      <p>
        Kettle River Business Intelligence, Kettle Falls, Washington, United States.{' '}
        <a href="mailto:info@kettleriverbi.com" className="text-steel underline underline-offset-2">
          info@kettleriverbi.com
        </a>
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <header className="bg-navy pb-16 pt-32 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="eyebrow eyebrow-light mb-5">Privacy Policy</p>
          <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-[1.1] !text-white md:text-5xl">
            What we collect, and what we do with it.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/75">
            Short version: we only know what you type into a form, we use it to answer you, and you
            can have it deleted by sending one email.
          </p>
          <p className="mt-6 text-[0.85rem] text-white/45">Effective {EFFECTIVE}</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 py-20 lg:grid-cols-[1fr_2.2fr]">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-steel">
                On this page
              </p>
              <ul className="space-y-2 text-[0.92rem]">
                {sections.map(({ id, title }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-navy/60 transition-colors hover:text-navy">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <article className="max-w-3xl">
            {sections.map(({ id, title, body }, i) => (
              <section
                key={id}
                id={id}
                className={`scroll-mt-28 ${i === 0 ? '' : 'mt-12 border-t border-navy/10 pt-12'}`}
              >
                <h2 className="mb-4 text-2xl font-bold">{title}</h2>
                <div className="policy-body space-y-4 leading-relaxed text-navy/75">{body}</div>
              </section>
            ))}

            <div className="mt-16 rounded-xl border border-navy/10 bg-cream-soft p-8">
              <p className="mb-2 font-semibold text-navy">Questions about this policy?</p>
              <p className="mb-5 text-[0.95rem] text-navy/65">
                Email us and a person answers. The same address handles access, correction, and
                deletion requests.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="mailto:info@kettleriverbi.com" className="btn-primary">
                  info@kettleriverbi.com
                </a>
                <Link href="/" className="btn-ghost !border-navy/20 !text-navy hover:!bg-cream">
                  Back to the site
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
