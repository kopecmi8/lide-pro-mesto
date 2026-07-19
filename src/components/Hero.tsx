import cover from '../assets/cover.jpg'
import logo from '../assets/logo.jpg'

export default function Hero() {
  return (
    <section
      id="uvod"
      className="relative flex min-h-screen flex-col items-center justify-center bg-brand bg-cover bg-bottom px-4 pt-20 text-center"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <img
        src={logo}
        alt="Logo Lidé pro město"
        className="h-40 w-40 rounded-full border-4 border-ink shadow-xl sm:h-56 sm:w-56"
      />
      <h1 className="mt-8 max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-6xl">
        Lidé pro město, město pro lidi.
      </h1>
      <p className="mt-6 max-w-xl text-lg font-semibold text-ink sm:text-xl">
        Kandidujeme v komunálních volbách v Novém Městě nad Metují.
      </p>
      <p className="mt-4 rounded-full bg-ink px-6 py-2 text-base font-bold uppercase tracking-wide text-brand sm:text-lg">
        Volby se konají v pátek 9. října 2026
      </p>
      <a
        href="#kandidati"
        className="mt-10 rounded-full bg-ink px-8 py-3 text-lg font-bold text-brand shadow-lg transition-transform hover:scale-105"
      >
        Poznejte nás
      </a>
    </section>
  )
}
