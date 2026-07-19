export interface ProgramItem {
  id: string
  title: string
  icon: string
  points: string[]
}

export const programItems: ProgramItem[] = [
  {
    id: 'bydleni',
    title: 'Bydlení',
    icon: '🏠',
    points: [
      'Připravíme městské pozemky pro novou výstavbu, aby mladé rodiny nemusely z města odcházet.',
      'Opravíme a rozšíříme městský bytový fond včetně startovacích bytů pro mladé.',
      'Podpoříme dostupné bydlení pro seniory i lidi pracující ve školství, zdravotnictví a službách.',
    ],
  },
  {
    id: 'doprava',
    title: 'Doprava',
    icon: '🚌',
    points: [
      'Budeme aktivně prosazovat dostavbu obchvatu města, aby kamiony konečně zmizely z centra.',
      'Zklidníme dopravu v okolí škol a přidáme bezpečné přechody a chodníky.',
      'Zlepšíme parkování v centru i na sídlištích a podpoříme rozvoj cyklostezek.',
    ],
  },
  {
    id: 'seniori',
    title: 'Senioři',
    icon: '💛',
    points: [
      'Udržíme vysokou úroveň pečovatelských a sociálních služeb, na kterou jsme právem hrdí.',
      'Rozšíříme aktivity pro aktivní seniory – kluby, přednášky, výlety i mezigenerační setkávání.',
      'Zajistíme dostupnou pomoc v domácnosti, aby lidé mohli co nejdéle zůstat doma, kde to znají.',
    ],
  },
  {
    id: 'zivotni-prostredi',
    title: 'Životní prostředí',
    icon: '🌳',
    points: [
      'Budeme pečovat o městskou zeleň odborně a dlouhodobě – více stromů, květnatých luk a stínu.',
      'Zadržíme vodu v krajině i ve městě a připravíme město na horka a přívalové deště.',
      'Podpoříme třídění a předcházení vzniku odpadů a čistotu veřejných prostranství.',
    ],
  },
  {
    id: 'kultura',
    title: 'Kultura',
    icon: '🎭',
    points: [
      'Podpoříme místní spolky, knihovnu a komunitní akce, které drží město pohromadě.',
      'Oživíme náměstí a veřejný prostor – trhy, koncerty a festivaly pro všechny generace.',
      'Budeme rozvíjet kulturní dědictví města a jeho jedinečné renesanční centrum.',
    ],
  },
]
