import logo from '../assets/logo.jpg'

const navLinks = [
  { href: '#kandidati', label: 'Kandidáti' },
  { href: '#program', label: 'Program' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand/95 shadow-md backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <a href="#uvod" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo Lidé pro město"
            className="h-12 w-12 rounded-full border-2 border-ink"
          />
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Lidé pro město
          </span>
        </a>
        <nav className="flex items-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-ink transition-opacity hover:opacity-70 sm:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
