import { useEffect, useState } from 'react'
import { articles } from '../data/articles'
import ArticleModal from './ArticleModal'

const ARTICLE_HASH_PREFIX = '#aktuality/'

function readArticleIdFromHash(): string | null {
  const { hash } = window.location
  if (!hash.startsWith(ARTICLE_HASH_PREFIX)) return null
  const id = decodeURIComponent(hash.slice(ARTICLE_HASH_PREFIX.length))
  return articles.some((article) => article.id === id) ? id : null
}

export default function Articles() {
  const [selectedId, setSelectedId] = useState<string | null>(() =>
    readArticleIdFromHash(),
  )
  const selectedArticle = articles.find((article) => article.id === selectedId)

  useEffect(() => {
    const syncFromHash = () => setSelectedId(readArticleIdFromHash())
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  const openArticle = (id: string) => {
    window.location.hash = `${ARTICLE_HASH_PREFIX}${encodeURIComponent(id)}`
  }

  const closeArticle = () => {
    window.location.hash = 'aktuality'
  }

  return (
    <section id="aktuality" className="scroll-mt-16 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-black tracking-tight text-ink sm:text-4xl">
          Aktuality
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-600">
          Co se u nás děje a na čem právě pracujeme.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <button
              key={article.id}
              type="button"
              onClick={() => openArticle(article.id)}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-neutral-50 text-left shadow-md ring-1 ring-ink/10 transition-shadow hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink shadow-sm">
                  {article.date}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-black text-ink">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-neutral-600">
                  {article.excerpt}
                </p>
                <span className="mt-5 flex items-center gap-1.5 text-sm font-bold text-ink">
                  Číst celý článek
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={closeArticle} />
      )}
    </section>
  )
}
