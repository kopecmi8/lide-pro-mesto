import { programItems } from '../data/program'

export default function Program() {
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
          {programItems.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border-2 border-ink bg-white p-8 shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              <div className="text-4xl" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="mt-4 text-xl font-black uppercase tracking-wide text-ink">
                {item.title}
              </h3>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
