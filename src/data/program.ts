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
      'Budeme prosazovat rozumnou bytovou politiku, která pomůže udržet mladé rodiny ve městě.',
      'Zařadíme rozvoj bydlení mezi klíčové investiční priority města.',
      'Přes bytovou komisi budeme dbát na dostupné nájemní a startovací bydlení.',
    ],
  },
  {
    id: 'doprava',
    title: 'Doprava',
    icon: '🚌',
    points: [
      'Podpoříme rekonstrukci autobusového nádraží a rozvoj celé oblasti Rychty.',
      'Zaměříme se na zlepšení stavu komunikací a chodníků ve městě i v přilehlých čtvrtích.',
      'Budeme dbát na kvalitní a dostupnou veřejnou dopravu pro všechny generace.',
    ],
  },
  {
    id: 'seniori',
    title: 'Senioři',
    icon: '💛',
    points: [
      'Udržíme vysokou úroveň sociálních a pečovatelských služeb, na kterou jsme ve městě právem hrdí.',
      'Přes sociální komisi budeme dál podporovat a rozvíjet péči o starší spoluobčany.',
      'Rozšíříme mezigenerační komunitní akce, díky kterým se lidé v každém věku ve městě potkávají.',
    ],
  },
  {
    id: 'zivotni-prostredi',
    title: 'Životní prostředí',
    icon: '🌳',
    points: [
      'Budeme odborně a dlouhodobě pečovat o městskou zeleň – více stromů, květnatých luk a stínu.',
      'Zaměříme se na ochranu před povodněmi a péči o řeku Metuji a její okolí.',
      'Podpoříme zadržování vody v krajině, aby bylo město připravené na sucho i přívalové deště.',
    ],
  },
  {
    id: 'kultura',
    title: 'Kultura',
    icon: '🎭',
    points: [
      'Podpoříme místní spolky, knihovnu a komunitní akce, díky kterým žije město i mimo úřední hodiny.',
      'Prosadíme dlouho odkládanou rekonstrukci městského kina.',
      'Budeme oživovat náměstí a veřejný prostor – trhy, koncerty a festivaly pro všechny generace.',
    ],
  },
  {
    id: 'skolstvi',
    title: 'Školství',
    icon: '🎓',
    points: [
      'Budeme školám spolehlivým partnerem – od financování nepedagogických pracovníků po podporu školních psychologů.',
      'Podpoříme propojení výuky se zájmovými a sportovními aktivitami a obnovíme školní dílny s důrazem na digitální dovednosti pro 21. století.',
      'Rozšíříme dětská hřiště a aktivity, které dostanou děti od mobilů a sociálních sítí zpět do skutečného světa.',
    ],
  },
  {
    id: 'sport',
    title: 'Sport',
    icon: '⚽',
    points: [
      'Umožníme dětem vyzkoušet si víc sportů, než se rozhodnou pro svého favorita, a podpoříme k tomu kvalitní zázemí.',
      'Prosadíme „třídu zdravého života" jako dostupnou alternativu k výběrovým sportovním třídám.',
      'Podpoříme sportovní kluby a volnočasové aktivity pro všechny generace, aby měl pohyb ve městě pevné místo.',
    ],
  },
  {
    id: 'cestovni-ruch',
    title: 'Cestovní ruch',
    icon: '🧭',
    points: [
      'Budeme rozvíjet turistický potenciál historického centra a jeho jedinečných památek.',
      'Propojíme turistický ruch s místními spolky, akcemi a produkty regionu.',
      'Zlepšíme informační servis a zázemí pro návštěvníky, cyklisty i turisty procházející městem.',
    ],
  },
  {
    id: 'participace',
    title: 'Participace',
    icon: '🤝',
    points: [
      'Budeme důležitá rozhodnutí komunikovat otevřeně a hledat u nich co největší shodu napříč městem.',
      'Zapojíme občany do plánování větších projektů, aby se rozhodovalo s vámi, ne jen o vás.',
      'Chceme obnovit důvěru mezi lidmi ve městě prostřednictvím slušné a věcné komunikace.',
    ],
  },
]
