import pavelDostalPhoto from '../assets/pavel-dostal.jpg'
import ludmilaHorakovaPhoto from '../assets/ludmila-horakova.jpg'
import vilemMaurPhoto from '../assets/vilem-maur.jpg'
import michalBuresPhoto from '../assets/michal-bures.jpg'

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
      'zbývají 3 měsíce do komunálních voleb 2026 v Novém Městě nad Metují. Myslím, že je to ten správný čas, kdy vám potřebuji sdělit, že jsem se rozhodl být lídrem nového hnutí a kandidovat na pozici místostarosty města.',
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
]
