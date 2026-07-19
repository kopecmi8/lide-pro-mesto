import pavelDostalPhoto from '../assets/pavel-dostal.jpg'
import ludmilaHorakovaPhoto from '../assets/ludmila-horakova.jpg'

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
]
