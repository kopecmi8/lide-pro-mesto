import pavelDostalPhoto from '../assets/fb_dostal.jpg'
import ludmilaHorakovaPhoto from '../assets/fb_horakova_l.jpg'
import vilemMaurPhoto from '../assets/fb_maur.jpg'
import michalBuresPhoto from '../assets/fb_bures.jpg'
import janNeumannPhoto from '../assets/fb_neumann_j.jpg'
import josefHylskyPhoto from '../assets/fb_hylsky.jpg'
import vaclavaHorakovaPhoto from '../assets/fb_horakova_v.jpg'
import petrNeumannPhoto from '../assets/fb_neumann_p.jpg'

export interface Candidate {
  id: string
  name: string
  role: string
  photo: string
  bio: string[]
}

export const candidates: Candidate[] = [
  {
    id: 'pavel-dostal',
    name: 'Pavel Dostál',
    role: 'Lídr kandidátky · kandidát na místostarostu',
    photo: pavelDostalPhoto,
    bio: [
      'Zdravím vás, ahoj,',
      'blíží se komunální volby 2026 v Novém Městě nad Metují a přišel čas, kdy vám potřebuji sdělit, že jsem se rozhodl být lídrem nového hnutí a kandidovat na pozici místostarosty města.',
      'Jmenuji se Pavel Dostál, pracuji jako zahradní architekt a vedoucí údržby Státního zámku Ratibořice, jsem zastupitel města, předseda komise životního prostředí a spolupracuji s městským úřadem v oblasti správy městské zeleně.',
      'Funkci v zastupitelstvu plním svědomitě, je to pro mě poslání a služba městu a jeho lidem, tedy vám občanům a obyvatelům. Vždy se snažím ze všech sil, abychom měli silné vedení města, abychom důležité kroky probírali a schvalovali v co největší shodě. Ctím, že v důležitých tématech máme znát názor všech zúčastněných.',
      'Aktivně se zapojuji do malých i velkých projektů, kde se pokouším přispět co nejvíce svou odborností k jejich kvalitní přípravě, realizaci i provozu. Zeptáte-li se, co zahradník může vědět o tom, jak smysluplně řídit město. Odpovím tak, že právě on musí umět dílo dobře naplánovat, vytvořit a hlavně spravovat, aby mu vzkvétalo. Považuji to za silné předpoklady.',
      'Co mě motivuje? Mám tu rozdělanou práci. Chci do města přinášet i nadále nové myšlenky nejen z tohoto podstatného oboru. Ale též se inspirovat v dobrých příkladech z jiných oblastí, aby mé kroky a rozhodnutí měly dlouhodobý přínos. A pak je to také ono pověstné srdíčko.',
      'Pojďte do toho se mnou a společně vytvoříme město s krásným a funkčním prostředím pro kvalitní život … zkrátka město pro lidi.',
    ],
  },
  {
    id: 'ludmila-horakova',
    name: 'Ludmila Horáková',
    role: 'Zastupitelka · předsedkyně sociální komise',
    photo: ludmilaHorakovaPhoto,
    bio: [
      'Zdravím vás, dobrý den,',
      'jmenuji se Ludmila Horáková, pocházím z Vrchovin a celý život pracuji v lékárně. Ve svém volném čase se již více než 40 let věnuji práci v místní knihovně, kde pravidelně organizuji komunitní akce. Pro děti Noc s Andersenem, výlety nebo exkurze do Škoda Auto Kvasiny.',
      'Do komunální politiky se vracím už popáté. Za sebou mám tři volební období, kdy jsem souběžně s mateřskou dovolenou naplno věnovala svůj čas práci zastupitelky, hlavně jako předsedkyně osadního výboru Vrchoviny. Tehdy jsem musela zvolnit – chtěla jsem být naplno pro své dcery, což se s tehdejším vytížením nedalo skloubit. Ale slíbila jsem si, že až vyrostou, vrátím se. A vrátila jsem se.',
      'Dnes jsem členkou zastupitelstva a politické strany KDU-ČSL, působím v bytové komisi, jsem též předsedkyní sociální komise a členkou osadního výboru Vrchoviny. K příjemným povinnostem patří role oddávající. Práce v komunální politice pro mě má smysl – je to služba lidem, kterým chci naslouchat a pomáhat.',
      'Ze své praxe mám velmi blízko ke starší generaci. V našem městě máme služby pro starší spoluobčany na velmi vysoké úrovni. Chci dále udržet laťku takto vysoko a budu neustále podporovat způsob, jakým to děláme.',
      'Co mě žene dál? Z rodiny mám zakódováno jedno pravidlo: pomáhej druhým. Chci, aby Nové Město nad Metují bylo místem pro život všech generací, kde je lidem skutečně nasloucháno.',
      'Pojďte do toho se mnou. Pojďme se společně postarat o ty, kteří naše město vybudovali.',
    ],
  },
  {
    id: 'vilem-maur',
    name: 'Vilém Maur',
    role: 'Finanční ředitel · bývalý zastupitel a radní',
    photo: vilemMaurPhoto,
    bio: [
      'Zdravím vás, dobrý den,',
      'jmenuji se Vilém Maur, jsem novoměstský rodák a s rodinou žiji v Novém Městě nad Metují celý svůj život.',
      'S manželkou Evou jsme spolu již 37 let a vychovali jsme společně dva dospělé syny. Vystudoval jsem Vysokou školu ekonomickou v Praze a získal titul MBA na Business school of Nederland. Profesně se pohybuji po celou kariéru ve vedení velkých firem na pozici finančního ředitele a ředitele pro logistiku. Aktuálně pracuji již jedenáct let na pozici finančního ředitele ve společnosti, která patří dlouhodobě mezi 100 nejvýznamnějších firem v Česku. V aktuálním volebním období jsem nebyl činný v komunální politice.',
      'Impulsem, který mě ovšem před lety do politiky přivedl, byl listopad roku 1989 a s ním spojená možnost, ale i odpovědnost podílet se na budování demokracie. V městském zastupitelstvu i radě jsem tak působil už v devadesátých letech. Od roku 1990 jsem byl zvolen zastupitelem i radním města několikrát. Tuto zkušenost s vedením a rozhodováním o městě chci teď zúročit znovu.',
      'Po volbách se chci zaměřit na dlouhodobý investiční rozvoj města podle našich programových priorit. Vzhledem k ne zrovna dobrému stavu městských financí je potřeba distancovat se od laciného populismu a soustředit se na skutečně důležité investice. Mezi ně řadím rozvoj bydlení, veřejnou dopravu včetně autobusového nádraží a celé oblasti Rychty, a také dlouho odkládanou rekonstrukci kina. Chci rovněž výrazněji podpořit činnost spolků a sdružení, protože právě ty tvoří skutečný krevní oběh života města.',
      'Řídím se zásadami jako je poctivost, čestnost, proaktivita, otevřenost a pracovitost s orientací na dosažení cíle. Za Lidé pro Město kandiduji, protože pro mě znamenají propojení konzervativních hodnot s aktivní občanskou společností. Mrzí mě, když se ve městě lidé zbytečně rozdělují a nálepkují kvůli osobním zájmům několika jednotlivců. Chci se zasadit o to, abychom mezi sebou znovu vybudovali důvěru.',
      'Pojďte do toho se mnou. Nové Město nad Metují má bohatou historii, na kterou jsme všichni právem hrdí. I jeho budoucí rozvoj si zaslouží dlouhodobý plán naplňovaný promyšlenými a finančně odpovědnými projekty.',
    ],
  },
  {
    id: 'michal-bures',
    name: 'Michal Bureš',
    role: 'Učitel a trenér mládeže',
    photo: michalBuresPhoto,
    bio: [
      'Zdravím vás, ahoj,',
      'jmenuji se Michal Bureš, vyrůstal jsem v Hlinsku, ale během vysokoškolského studia jsem se přestěhoval do Nového Města nad Metují. Přesněji do Krčína, kde žiji dodnes.',
      'Učím na zdejší střední průmyslové škole předměty z oblasti strojírenství a zároveň trénuji mládež v ledním hokeji. Sport mě formoval celý život – sám jsem stále aktivní hráč. V poslední době mě navíc pro svou všestrannost pohltil triatlon a cyklistika. V komunální politice zatím nemám žádnou funkci.',
      'Upřímně si nejsem úplně jistý, co přesně mě do politiky přivádí. Jsem trochu snílek a vizionář, a tak věřím, že díky vstupu do politiky bych mohl něco změnit – i když vím, že svět jeden člověk nezmění. Mohu být ale ten, který jde příkladem a snaží se předávat dobré návyky pro zdravý životní styl a smysluplné vzdělávání.',
      'Chci se zaměřit hlavně na sport a vzdělávání dětí i dospělých. Jedním z mých plánů je, aby si každé dítě mohlo vyzkoušet hned několik různých sportů, než si vybere svého favorita. Město musí tyto první kroky maximálně podpořit, nejen kvalitním zázemím. Rád bych se zasadil o hlubší propojení školní výuky a činnosti sportovních klubů. Chci prosadit formu „třídy zdravého života", tedy dostupnou alternativu k výběrovým sportovním třídám. Potenciál vidím též v obnovení školních dílen propojených s digitálními dovednostmi pro 21. století. V neposlední řadě podpořím rozvoj přírody a veřejného prostoru tak, aby měly rodiny kde aktivně a smysluplně trávit svůj volný čas. Ideálně venku.',
      'Zdraví máme pouze jedno, proto se snažím jít příkladem a žít podle toho, co druhým doporučuji. Být dobrým příkladem druhým je pro mě důležitější než velká slova. Ve městě mi chybí provázanost vzdělávání, sportu a zdravého životního stylu. Stejně tak postrádám užší spolupráci škol s firmami.',
      'Pojďte do toho se mnou. Chci, aby Nové Město nad Metují bylo místem, kde děti i dospělí najdou svůj sport, svůj pohyb a chuť žít zdravě.',
    ],
  },
  {
    id: 'jan-neumann',
    name: 'Jan Neumann',
    role: 'Podnikatel · zakladatel firmy BILLcom',
    photo: janNeumannPhoto,
    bio: [
      'Zdravím vás, dobrý den,',
      'jmenuji se Jan Neumann a Nové Město nad Metují je mým domovem odjakživa. Žiji tu od narození, vystudoval jsem zdejší průmyslovku a poté ČVUT v Praze. Své vzdělání i zkušenosti jsem se ale rozhodl vrátit zpátky domů: založil jsem tu společnost BILLcom, účetní a IT firmu se sídlem na Husově náměstí. S manželkou, která je dětskou lékařkou tady ve městě, jsme spolu vychovali tři děti.',
      'Volný čas trávím nejraději venku a v pohybu. Mám rád turistiku, a to i tu (vysoko)horskou – ať už jsou to Alpy, Orlické hory, nebo i naše Klopotovské a Libchyňské údolí. Považuji je za jedinečná místa a leckteré jiné město nám je může závidět. A k dobré náladě mi stačí i obyčejná procházka se psem.',
      'Do komunální politiky mě přivedlo právě to, co mi na ní dlouhodobě vadí – nekoncepční, až chaotické rozhodování a špatná komunikace mezi zastupiteli. Místo hledání společných řešení se často kopou osobní příkopy, a to vždycky na úkor města. Přesně proto kandiduji za Lidé pro Město – skupinu lidí, které spojuje podobný, hodnotový pohled na rozhodování i na další rozvoj Nového Města.',
      'V životě se řídím třemi zásadami: pravdou, spravedlností a komunikací. Věřím, že důležitý není jen cíl, ale i cesta k němu. A právě odvaha otevřeně vykomunikovat i odlišné názory je to, co mi v naší místní politice nejvíc chybí.',
      'Bydlím na Podskalí, kousek od řeky Metuje, a co se děje kolem ní, mi není lhostejné: ochrana před povodněmi, čistota i každodenní péče o okolí řeky. Stejně tak mě zajímá běžný život v Podskalí: doprava, opravy a drobnosti, které dělají naši čtvrť příjemnou k životu. A samozřejmě celé město – v duchu hesla „dnes pro tebe, zítra pro mne".',
      'Pojďte do toho se mnou. Pojďme z radnice znovu udělat místo, kde se spolu normálně mluví a rozhoduje se s rozvahou – pro Nové Město a pro lidi, kteří v něm žijí.',
    ],
  },
  {
    id: 'josef-hylsky',
    name: 'Josef Hylský',
    role: 'Učitel matematiky a fyziky · bývalý zastupitel',
    photo: josefHylskyPhoto,
    bio: [
      'Dobrý den, ahoj,',
      'jmenuji se Josef Hylský a jsem rodilým Novoměšťákem, který na své město nedá dopustit. Pracuji jako učitel matematiky a fyziky na dobrušském gymnáziu. V roce 2019 jsem obdržel ocenění Ámos fyzikář pro nejoblíbenějšího učitele fyziky v ČR.',
      'Má práce mě i po letech stále baví a naplňuje. Řadu let jsem vedl skautský oddíl a šest let i celé novoměstské skautské středisko. Jsem členem místní organizace KDU-ČSL.',
      'K zájmu o veřejné dění mě přivedli rodiče svou vlastní snahou měnit věci kolem nás k lepšímu. Do komunální politiky jsem tak vstoupil již před dvanácti lety. Po dvě volební období jsem byl zvolený zastupitelem, v tom druhém taky členem Rady města. Kromě jiného bylo mou milou povinností oddávat snoubence při vstupu do manželství. Pro kandidaturu za hnutí „Lidé pro město" jsem se rozhodl proto, že se jedná o skupinu lidí, se kterými nás pojí podobný pohled na svět i na řešení problémů našeho města.',
      'V novém volebním období bych se chtěl zaměřit na oblast školství a práce s dětmi a mládeží. Naše školy i školky mají kvalitní vedení a řadu obětavých učitelů. Z vlastní praxe vím, že tito lidé potřebují především prostor pro tvůrčí činnost a podporu zřizovatele, v našem případě tedy města. Je potřeba, aby město bylo školám spolehlivým partnerem při přechodu financování nepedagogických pracovníků a aby podporovalo působení školních psychologů na školách. Chci podporovat rozvoj dětských hřišť a rozšiřování aktivit, které dostanou děti od mobilů a sociálních sítí zpět do skutečného světa.',
      'Řídím se zásadami slušnosti, spravedlnosti a ochoty pomáhat ostatním. Cítím, že právě slušnost a ochota naslouchat si v místní politice poslední dobou nejvíce chybí. Chci se zasadit o širší shodu na důležitých věcech. V tématech, která nejsou přímo mým šálkem kávy, jsem připravený naslouchat odborníkům.',
      'Pojďte do toho se mnou. Chci, aby Nové Město nad Metují zůstalo nádherným historickým městem, kde se dobře žije dětem, mládeži i dospělým – a kde se spory řeší slušně a s rozvahou.',
    ],
  },
  {
    id: 'vaclava-horakova',
    name: 'Václava Horáková',
    role: 'Kariérová poradkyně · instruktorka lezení',
    photo: vaclavaHorakovaPhoto,
    bio: [
      'Zdravím vás, ahoj,',
      'jmenuji se Václava Horáková, pocházím z Vrchovin, jsem studentka pedagogiky, kariérová poradkyně a instruktorka lezení. Volný čas trávím nejraději venku, v pohybu – nejlépe někde na skalách. Baví mě pracovat s lidmi a předávat jim to, co umím.',
      'V komunální politice jsem zatím nováček. Zapojit se chci pro jednoduchou věc: Nové Město nad Metují mám moc ráda a záleží mi na tom, jak se tu žije. Přestalo mě bavit o věcech jen mluvit a přihlížet. Chci se aktivně podílet na dění kolem nás a reálně měnit věci k lepšímu.',
      'Za Lidé pro Město kandiduji proto, že se jako hnutí dívají do budoucnosti a při rozhodování berou v úvahu, jak město skutečně vypadá a kdo v něm žije. Tak si představuji, že bude smýšlet i konat nové vedení města. Ráda bych se věnovala podpoře sportu a smysluplných volnočasových aktivit. Vím z vlastní zkušenosti, jako instruktorka, jak moc je pohyb důležitý, obzvlášť pro děti a mládež. Chci pomoci oživit veřejný prostor a podpořit komunitní akce.',
      'Nejvíc mi v místní politice chybí dlouhodobá vize přesahující jedno volební období a otevřenější komunikace s lidmi. Chci, aby naše město bylo místem, kde se mladé generaci dobře žije a nemá důvod odtud odcházet jinam.',
      'Pojďte do toho se mnou. Ať je Nové Město místem, kam se mladí chtějí vracet, ne odkud odcházejí.',
    ],
  },
  {
    id: 'petr-neumann',
    name: 'Petr Neumann',
    role: 'Zastupitel města · předseda místní KDU-ČSL',
    photo: petrNeumannPhoto,
    bio: [
      'Zdravím vás, dobrý den,',
      'jmenuji se Petr Neumann, Nové Město nad Metují je mým domovem. Žiji celý svůj život právě tady. Naše rodina je s městem spjata už po několik generací. Vystudoval jsem strojírenství, profesní cesta mě však zavedla do oblasti informačních technologií. Více než třicet let pracuji v IT a posledních osmnáct let působím jako manažer informačního systému ve společnosti KAMAT. Jsem zastupitelem města, členem politické strany KDU-ČSL a aktuálně předsedou její místní organizace.',
      'Ve vedení města zastupuji své spoluobčany nepřetržitě od roku 1998. Letos se budu ucházet o Vaši důvěru již poosmé. Každého mandátu si velmi vážím a nikdy jsem jej nepovažoval za samozřejmost. Do politiky mě přivedla snaha aktivně se podílet na rozvoji města. Vždy jsem věřil, že pokud chce člověk něco změnit k lepšímu, měl by být ochoten převzít i část odpovědnosti. Nové Město nad Metují považuji za jedno z nejkrásnějších měst v republice, jeho potenciál si ale zaslouží víc.',
      'Chci se zaměřit na zlepšení stavu komunikací, chodníků a veřejných prostor jako je například autobusové nádraží na Rychtě. Podporuji život v centru města a rozumnou bytovou politiku, která zde pomůže udržet mladé rodiny.',
      'Za Lidé pro Město kandiduji proto, že s ostatními sdílím podobné hodnoty a představu o budoucnosti města – spojuje nás snaha řešit problémy věcně, odpovědně a s rozvahou. Za téměř třicet let práce v zastupitelstvu jsem nikdy nesliboval nemožné. Nabízím zkušenosti, odpovědnost a ochotu dál pracovat pro město, které mám rád. Snažím se dané slovo dodržet a věci dotahovat do konce.',
      'Pojďte do toho se mnou. Doprava a veřejný prostor v Novém Městě nad Metují si zaslouží mnohem lepší řešení. Chci se o to spolu s vámi zasadit.',
    ],
  },
]
