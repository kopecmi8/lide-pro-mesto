import { useState } from 'react'
import logo from '../assets/logo.jpg'

const navLinks = [
  { href: '#kandidati', label: 'Kandidáti' },
  { href: '#program', label: 'Program' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand/95 shadow-md backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <a
          href="#uvod"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Logo Lidé pro město"
            className="h-12 w-12 rounded-full border-2 border-ink"
          />
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Lidé pro město
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold text-ink transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-ink/10 md:hidden"
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t-2 border-ink/10 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-4 text-lg font-bold text-ink transition-colors hover:bg-ink/10"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
