import { useEffect } from 'react'
import type { Candidate } from '../data/candidates'

interface CandidateModalProps {
  candidate: Candidate
  onClose: () => void
}

export default function CandidateModal({
  candidate,
  onClose,
}: CandidateModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="candidate-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <img
            src={candidate.photo}
            alt={candidate.name}
            className="h-64 w-full object-cover sm:h-80"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Zavřít"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition-transform hover:scale-105"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <h3
            id="candidate-modal-title"
            className="text-2xl font-black text-ink sm:text-3xl"
          >
            {candidate.name}
          </h3>
          <p className="mt-1 inline-block rounded-full bg-brand px-4 py-1 text-sm font-bold text-ink">
            {candidate.role}
          </p>
          <div className="mt-6 space-y-4 text-neutral-700">
            {candidate.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
