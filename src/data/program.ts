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
