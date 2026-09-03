import cover from '../assets/cover.svg'
import logo from '../assets/logo.svg'

export default function Hero() {
  return (
    <section
      id="uvod"
      className="relative flex min-h-screen flex-col items-center justify-center bg-brand bg-cover bg-bottom px-4 pt-20 pb-24 text-center sm:pb-32"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <p className="text-xs font-semibold tracking-wide text-ink sm:text-sm">
        Komunální volby · 9.–10. října 2026 · Nové Město nad Metují
      </p>
      <img
        src={logo}
        alt="Logo Lidé pro město"
        className="mt-8 h-20 w-auto sm:mt-10 sm:h-28"
      />
      <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-5xl lg:max-w-none lg:text-6xl lg:whitespace-nowrap">
        Lidé pro město, město pro lidi.
      </h1>
      <a
        href="#kandidati"
        className="mt-10 rounded-full bg-ink px-8 py-3 text-lg font-bold text-brand shadow-lg transition-transform hover:scale-105"
      >
        Poznejte nás
      </a>
    </section>
  )
}
