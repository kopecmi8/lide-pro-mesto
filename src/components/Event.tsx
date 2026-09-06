import { event, isEventActive } from '../data/event'

export default function Event() {
  if (!isEventActive()) return null

  return (
    <section id="akce" className="scroll-mt-16 bg-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-bold tracking-wide text-brand uppercase">
          Pozvánka
        </p>
        <h2 className="mt-2 text-center text-3xl font-black tracking-tight sm:text-4xl">
          {event.title}
        </h2>
        <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-3 text-center">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold sm:text-base">
            {event.date} · {event.time}
          </span>
          <span className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-ink sm:text-base">
            {event.admission}
          </span>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {event.program.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <h3 className="text-lg font-black text-brand">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
