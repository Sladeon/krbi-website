'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

const PDF_PATH = '/downloads/krbi-governance-self-audit.pdf';

/**
 * Email gate for the Data Governance Self-Audit checklist.
 * Captures the lead into the same Supabase `leads` table (tagged via pain_point),
 * then hands over the PDF. Download is never blocked by a failed insert.
 */
export default function ChecklistGate({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape' && onClose) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from('leads').insert([
        { ...formData, pain_point: 'Downloaded: Data Governance Self-Audit Checklist' },
      ]);
      if (error) throw error;
    } catch (error) {
      console.error('Lead capture failed, delivering download anyway:', error);
    } finally {
      setSubmitted(true);
      setLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-[0.95rem] text-navy placeholder:text-navy/35 transition-colors focus:border-steel focus:outline-none focus:ring-2 focus:ring-steel/25';

  return (
    <div
      className="backdrop-in fixed inset-0 z-[60] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checklist-title"
    >
      <div className="modal-in relative w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-navy/40 transition-colors hover:bg-cream hover:text-navy"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-4 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-steel text-white">
              <svg width="22" height="18" viewBox="0 0 12 10" fill="none" aria-hidden>
                <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-navy">It's yours.</h3>
            <p className="mb-6 text-[0.92rem] leading-relaxed text-navy/60">
              Thirteen checks, fifteen minutes. Be honest with the boxes; nobody sees your score
              but you.
            </p>
            <a href={PDF_PATH} download className="btn-primary w-full">
              Download the Checklist (PDF)
            </a>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full rounded-lg py-2 text-[0.9rem] text-navy/50 transition-colors hover:bg-cream hover:text-navy"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow mb-2">Free download</p>
            <h3 id="checklist-title" className="mb-1 text-2xl font-bold text-navy">
              Data Governance Self-Audit
            </h3>
            <p className="mb-6 text-[0.9rem] text-navy/55">
              The same thirteen questions we ask in a paid audit: definitions, access,
              classification, and model hygiene. Score yourself in fifteen minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-[0.85rem] font-medium text-navy/80">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.85rem] font-medium text-navy/80">Work email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.85rem] font-medium text-navy/80">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your company"
                />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                {loading ? 'One moment...' : 'Get the Checklist'}
              </button>
              <p className="text-center text-[0.78rem] text-navy/40">
                No spam. No newsletter you didn't ask for.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
