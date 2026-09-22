import { useEffect } from 'react'
import type { Article } from '../data/articles'

interface ArticleModalProps {
  article: Article
  onClose: () => void
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
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
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Zavřít"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition-transform hover:scale-105"
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
        <div className="relative shrink-0">
          <img
            src={article.imageDetail}
            alt={article.title}
            className="h-56 w-full object-cover sm:h-72"
          />
          <div className="absolute inset-x-0 bottom-0 bg-white/80 px-6 py-4 shadow-[0_6px_14px_-6px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-8">
            <p className="text-xs font-bold tracking-wide text-neutral-500 uppercase">
              {article.date}
            </p>
            <h3
              id="article-modal-title"
              className="mt-1 text-2xl font-black text-ink sm:text-3xl"
            >
              {article.title}
            </h3>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <p className="text-sm font-black tracking-wide text-ink uppercase">
              {article.kicker}
            </p>
            <div className="mt-4 space-y-4 text-neutral-700">
              {article.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
