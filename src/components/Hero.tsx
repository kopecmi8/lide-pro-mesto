import cover from '../assets/cover.svg'
import logo from '../assets/logo.svg'
import { isEventActive } from '../data/event'

export default function Hero() {
  const eventActive = isEventActive()

  return (
    <section
      id="uvod"
      className="relative flex min-h-screen flex-col items-center justify-center bg-brand bg-bottom bg-cover bg-no-repeat px-4 pt-20 pb-24 text-center sm:pb-32 lg:bg-[length:100%_auto]"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="flex items-center justify-center gap-2 sm:block">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-xl font-black text-brand shadow-lg sm:hidden">
          6
        </span>
        <p className="text-left text-xs font-semibold tracking-wide text-ink sm:text-center sm:text-sm">
          Komunální volby · 9.–10. října 2026 ·{' '}
          <br className="sm:hidden" />
          <span className="whitespace-nowrap">Nové Město nad Metují</span>
        </p>
      </div>
      <img
        src={logo}
        alt="Logo Lidé pro město"
        className="mt-8 h-20 w-auto sm:mt-10 sm:h-28"
      />

      <div className="absolute top-28 right-12 hidden flex-col items-center sm:flex lg:right-24">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-ink text-4xl font-black text-brand shadow-lg">
          6
        </span>
        <span className="mt-2 text-sm leading-tight font-bold text-ink">
          na hlasovacím
          <br />
          lístku
        </span>
      </div>
      <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-5xl lg:max-w-none lg:text-6xl lg:whitespace-nowrap">
        Lidé pro město, město pro lidi.
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#kandidati"
          className="rounded-full bg-ink px-8 py-3 text-lg font-bold text-brand shadow-lg transition-transform hover:scale-105"
        >
          Poznejte nás
        </a>
        {eventActive && (
          <a
            href="#akce"
            className="rounded-full border-2 border-ink bg-brand px-8 py-3 text-lg font-bold text-ink shadow-lg transition-transform hover:scale-105"
          >
            Pozvánka na akci
          </a>
        )}
      </div>
    </section>
  )
}
