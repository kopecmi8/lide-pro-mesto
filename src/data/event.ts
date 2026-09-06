export interface EventProgramItem {
  title: string
  description: string
}

export const event = {
  title: 'Lidé pro město naživo',
  intro:
    'Máte plány na sobotu 12. září? Přijďte za námi do kláštera! Od 9:30 otevíráme běžně nepřístupná místa a věž s úžasným výhledem. Zatímco si děti užijí skákací hrad, my si u dobré kávy rádi poslechneme vaše nápady, jak společně vylepšit naše město.',
  date: 'Sobota 12. září',
  time: 'od 9:30 hodin',
  location: 'Klášter, Nové Město nad Metují',
  admission: 'Vše zdarma',
  // Po tomto datu (včetně) se sekce na webu automaticky přestane zobrazovat.
  hideFrom: new Date('2026-09-13T00:00:00'),
  program: [
    {
      title: 'O politice nepoliticky',
      description: 'Dejte si kávu a řekněte nám, jak vylepšit naše město.',
    },
    {
      title: 'Tajemství kláštera',
      description: 'Nakoukněte do běžně nepřístupných míst a vystoupejte na věž.',
    },
    {
      title: 'Dětská zóna',
      description: 'Vezměte děti na skákací hrad a stezku s úkoly.',
    },
    {
      title: 'Pohoda u ohně',
      description: 'Přidejte se k opékání buřtů a užijte si den.',
    },
  ] as EventProgramItem[],
}

export function isEventActive(now: Date = new Date()): boolean {
  return now < event.hideFrom
}
