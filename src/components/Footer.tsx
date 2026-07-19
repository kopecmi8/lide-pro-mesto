import logo from '../assets/logo.jpg'

export default function Footer() {
  return (
    <footer id="kontakt" className="scroll-mt-16 bg-ink py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center">
        <img
          src={logo}
          alt="Logo Lidé pro město"
          className="h-20 w-20 rounded-full"
        />
        <p className="text-xl font-black text-brand">
          Lidé pro město, město pro lidi.
        </p>
        <p className="max-w-xl text-sm text-neutral-300">
          Komunální volby 2026 · Nové Město nad Metují · pátek 9. října 2026
        </p>
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Lidé pro město
        </p>
      </div>
    </footer>
  )
}
