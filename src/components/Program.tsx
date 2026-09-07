import { useState } from 'react'
import { programItems } from '../data/program'
import ProgramIcon from './ProgramIcon'

export default function Program() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="program" className="scroll-mt-16 bg-brand py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-black tracking-tight text-ink sm:text-4xl">
          Náš program
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-medium text-ink">
          Komunální volby 2026 – témata, na kterých nám záleží.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programItems.map((item) => {
            const isOpen = openId === item.id

            return (
              <article
                key={item.id}
                className="rounded-2xl border-2 border-ink bg-white p-8 shadow-[6px_6px_0_0_var(--color-ink)]"
              >
                <div className="flex items-center gap-4">
                  <ProgramIcon
                    id={item.id}
                    className="h-10 w-10 shrink-0 text-ink"
                  />
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-wide text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-bold text-neutral-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  <span className="font-bold text-ink">Gestor:</span>{' '}
                  <span className="text-neutral-600">{item.gestor}</span>
                </p>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  {item.points.map((point) => (
                    <li key={point.slice(0, 40)} className="flex gap-2">
                      <span aria-hidden="true" className="font-black text-ink">
                        –
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="mt-5 flex cursor-pointer items-center gap-1.5 text-sm font-bold text-ink underline decoration-2 underline-offset-4"
                >
                  {isOpen ? 'Skrýt' : 'Zjistit více'}
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {isOpen && (
                  <p className="mt-4 text-neutral-700">{item.summary}</p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
