export interface ProgramItem {
  id: string
  title: string
  subtitle: string
  gestor: string
  points: string[]
  summary: string
}

export const programItems: ProgramItem[] = [
  {
    id: 'bydleni',
    title: 'Bydlení',
    subtitle: 'Dostupné pro každého',
    gestor: 'Vilém Maur',
    points: [
      'Vytvoříme zázemí pro výstavbu v areálu bývalých kasáren, aby ve městě vznikly nové byty.',
      'Podpoříme výstavbu rodinných domů, například odblokováním výstavby v lokalitě Krčínské návrší.',
      'Obnovíme bytový fond města, aby nabízel dostupné nájemní i startovací bydlení pro mladé rodiny.',
    ],
    summary:
      'Dostupné bydlení je základ toho, aby mladí zůstaly v našem městě a nestěhovali se jinam. Proto připravíme infrastrukturu v areálu bývalých kasáren a vytvoříme zde takové podmínky pro investory, aby tu mohli brzy postavit nové byty. Aby mohla vzniknout nová zástavba rodinných domů, změníme územní plán tak, abychom vyřešili zablokovaná místa, například na Krčínském návrší. Pustíme se do postupné obnovy bytového fondu města s cílem vytvořit zázemí pro mladé rodiny. Vytvoříme kvalitní, ale dostupné startovací byty. Rozvoj bydlení patří mezi naše klíčové investiční priority.',
  },
  {
    id: 'seniori',
    title: 'Senioři',
    subtitle: 'Důstojná sociální péče',
    gestor: 'Ludmila Horáková',
    points: [
      'Rozšíříme terénní pečovatelskou službu, její technické zázemí i denní stacionář Domovinka.',
      'Udržíme vysokou úroveň sociálních a pečovatelských služeb pod vedením města.',
      'Využijeme sociální komisi pro pečlivé naslouchání konkrétním potřebám seniorů a jejich rodin.',
    ],
    summary:
      'Udržíme, nebo dokonce zvedneme již tak vysokou úroveň služeb pro starší spoluobčany. Abychom pokryli rostoucí zájem a potřeby, rozšíříme terénní pečovatelskou službu, její technické zázemí i denní stacionář Domovinka. Je důležité, aby sociální a pečovatelské služby zůstaly pod kontrolou města, a proto budeme skrze sociální komisi pečlivě naslouchat lidem, kteří potřebují naši pomoc. Důstojná sociální péče pro nás není fráze, ale služba těm, kteří se starali o nás. Můžeme a chceme tak dát jistotu celým rodinám.',
  },
  {
    id: 'doprava',
    title: 'Doprava',
    subtitle: 'Fungující a bezpečný pohyb',
    gestor: 'Petr Neumann',
    points: [
      'Postavíme novou cyklostezku, propojíme start a cíl, například v úseku Ammann-Vrchoviny.',
      'Prosadíme obnovu autobusového terminálu Na Rychtě a plán oprav rozbitých silnic a chodníků.',
      'Budeme řešit parkování na přetížených sídlištích a zmírníme dopady tranzitní dopravy.',
    ],
    summary:
      'Fungující a bezpečný pohyb po městě zajistí propojení několika oblastí. Zlepšíme hromadnou dopravu přeměnou autobusového terminálu na Rychtě a celé oblasti „zlatého trojúhelníku" na moderní centrum města. Včetně logického propojení s vlakovým nádražím. Důležitá je též cyklodoprava, a proto budeme pracovat na plnohodnotném propojení všech částí města cyklostezkami (Krčín-Vrchoviny, Spy-Krčín) s navázáním na turisticky atraktivní cíle (koupaliště, Peklo, přehrada Rozkoš). Na přetížených sídlištích vyřešíme parkování. Dodáme jasný plán pro řešení rozbitých chodníků a silnic, abychom mohli zajistit jejich postupnou opravu. Budeme zavádět opatření pro minimalizaci vlivu tranzitní dopravy na váš život.',
  },
  {
    id: 'sport',
    title: 'Sport',
    subtitle: 'Organizovaný a zdravý pohyb',
    gestor: 'Michal Bureš',
    points: [
      'Zorganizujeme sportovní aktivity tak, aby si vaše děti mohly vyzkoušet více sportů, než vyberou jeden.',
      'Obnovíme chátrající dětská hřiště a postavíme nové cvičební sestavy pro dostupný zdravý pohyb.',
      'Zajistíme lepší a efektivnější využití sportovišť a tělocvičen, aby sloužily co nejvíce občanů města.',
    ],
    summary:
      'Každé dítě by mělo mít šanci vyzkoušet si více sportů, než se rozhodne pro svého favorita. Město musí tyto první kroky maximálně podpořit. Všichni bychom měli mít příležitost k pohybu a zdravému životnímu stylu. Nejde jen o velké investice. Hlavně potřebujeme lépe zorganizovat to, co už máme: opravit dětská hřiště, vybudovat workoutová místa, otevřít tělocvičny a sportovní areály i mimo sezonu sportovních klubů. Navýšíme podporu sportovním spolkům, a to hlavně těm, které se věnují dětem a mládeži.',
  },
  {
    id: 'vzdelavani-a-kultura',
    title: 'Vzdělávání a kultura',
    subtitle: 'Komplexní a moderní',
    gestor: 'Josef Hylský',
    points: [
      'Zajistíme komplexnější vzdělávání dětí skrze školní psychology, praxi i pomoc s financováním.',
      'Podpoříme sportovní i nesportovní organizace pro rozvoj schopností a dovedností vašich dětí.',
      'Rozpohybujeme rekonstrukci kina a jeho okolí, abyste získali moderní kulturní zařízení.',
    ],
    summary:
      'Podpoříme obětavé učitele a kvalitní vedení základních škol. Budeme spolehlivými partnery školám při změnách financování, při zvyšování tlaku na duševní zdraví dětí a při nástupu umělé inteligence do výuky. Zorganizujeme lepší propojení škol s praxí a podpoříme vznik zázemí pro školní psychology i práci volnočasových organizací, které dětem pomáhají rozvíjet schopnosti a smysluplně trávit čas mimo školu. Budoucnost města stojí i na tom, jaké podmínky vytvoříme pro naše děti.',
  },
  {
    id: 'zivotni-prostredi',
    title: 'Životní prostředí',
    subtitle: 'Zelená a čistá prostranství',
    gestor: 'Pavel Dostál',
    points: [
      'Vybudujeme sběrný dvůr, abyste mohli na jednom místě odložit všechny druhy odpadu.',
      'Zavedeme pozici městského správce zeleně, aby měla péče o zeleň jasnou koordinaci a plán.',
      'Zajistíme systematický a dlouhodobý rozvoj veřejných prostranství ve všech částech města.',
    ],
    summary:
      'Pořádek dělá přátele a proto potřebujeme čisté město. Zlepšíme nakládání s odpadem vytvořením plnohodnotného, dostatečně velkého a dobře dostupného sběrného dvora. Městská zeleň a veřejná prostranství musí být spravována a rozvíjena podle jasného plánu. Zavedeme pozici městského správce zeleně a umocníme roli městského architekta, kteří budou na vše dohlížet. Kvalitní příprava, pečlivá realizace a zodpovědná údržba projektů jsou klíče ke kvalitnímu rozvoji města. Abychom ho dělali systémově, rovnoměrně ve všech částech města a dlouhodobě napříč volebními obdobími.',
  },
  {
    id: 'participace',
    title: 'Participace',
    subtitle: 'Spolupracující veřejnost',
    gestor: 'Václava Horáková',
    points: [
      'Budeme konzultovat důležitá rozhodnutí přímo s vámi, nelíbí se nám rozhodovat o vás bez vás.',
      'Rozvineme participativní rozpočet, abyste se mohli podílet a rozhodovat o menších projektech.',
      'Obnovíme důvěru mezi lidmi ve městě prostřednictvím otevřené, slušné a věcné komunikace.',
    ],
    summary:
      'Pro dobré fungování města je stěžejní zapojit co nejvíce lidí do jeho chodu. Proto budeme důležitá rozhodnutí komunikovat v rámci veřejných projednání, abychom získali váš názor a mohli schválit dlouhodobé záměry dle vašich představ. Dále budeme usilovat o fungování projektu sdíleného rozpočtu Moje Město nad Metují, abyste mohli být zapojeni do navrhování a rozhodování o malých projektech, které pro vás mají velký význam. Slušnou a věcnou komunikací chceme obnovit důvěru mezi lidmi ve městě.',
  },
  {
    id: 'mesto',
    title: 'Město',
    subtitle: 'Přátelské, bezpečné a chytré',
    gestor: 'Jan Neumann',
    points: [
      'Zlepšíme zázemí historického centra města pro turisty i občany.',
      'Podpoříme spolkovou činnost a komunitní život ve všech městských částech.',
      'Dohlídneme na bezpečnost a pořádek v ulicích i chytré fungování úřadu.',
    ],
    summary:
      'Nové Město nad Metují považujeme za jedno z nejkrásnějších měst v republice. Jeho potenciál si zaslouží víc – jak pro turisty, tak pro místní obyvatele. Chceme citlivě rozvíjet turistický ruch. Tak, aby fungovalo dobře soužití obyvatel města s jeho návštěvníky, zejména v historickém centru. Zlepšíme informační servis a zázemí pro pěší turisty i cyklisty. Chceme město, kde bude vzkvétat komunitní život a spolková činnost. Zavedeme pro vás chytré kroky k zajištění větší bezpečnosti a pořádku v ulicích i přívětivějšího fungování městského úřadu.',
  },
]
