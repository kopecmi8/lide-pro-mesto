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
        <a
          href="https://www.facebook.com/profile.php?id=61590778490625"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-brand px-6 py-2 font-bold text-ink transition-transform hover:scale-105"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13.5 21.9v-7h2.3l.4-2.8h-2.7V10c0-.8.4-1.6 1.7-1.6h1.3V6a15 15 0 0 0-2.1-.2c-2.2 0-3.6 1.3-3.6 3.7v2.1H8.3v2.8h2.5v7a10 10 0 1 1 2.7 0Z" />
          </svg>
          Sledujte nás na Facebooku
        </a>
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Lidé pro město
        </p>
      </div>
    </footer>
  )
}
