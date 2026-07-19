# Lidé pro město

Volební web hnutí **Lidé pro město** pro komunální volby 2026 v Novém Městě nad Metují.

> Lidé pro město, město pro lidi.

## Technologie

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Vývoj

```bash
npm install
npm run dev      # dev server na http://localhost:5173
npm run build    # produkční build do dist/
npm run lint     # oxlint
```

## Struktura

- `src/components/` – komponenty stránky (Header, Hero, Candidates, Program, Footer)
- `src/data/` – obsah oddělený od komponent (kandidáti, programové body)
- `src/assets/` – obrázky a vizuály

## Nasazení

Web se automaticky nasazuje na GitHub Pages při push do větve `main` (viz `.github/workflows/deploy.yml`).
