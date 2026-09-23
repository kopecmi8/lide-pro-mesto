import koupalisteThumb from '../assets/koupaliste-thumb.jpg'
import koupalisteDetail from '../assets/koupaliste-detail.jpg'
import vizeThumb from '../assets/vize-thumb.jpg'
import vizeDetail from '../assets/vize-detail.jpg'

export interface Article {
  id: string
  title: string
  kicker?: string
  date: string
  image: string
  imageDetail: string
  excerpt: string
  /** Položky začínající "## " se v detailu vykreslí jako mezititulek. */
  body: string[]
}

export const articles: Article[] = [
  {
    id: 'nase-vize',
    title: 'Naše vize?',
    date: '23. září 2026',
    image: vizeThumb,
    imageDetail: vizeDetail,
    excerpt:
      'Veřejným prostorem Nového Města nad Metují rezonují 3 významné otázky. Nejsou nám lhostejné, proto touto formou prezentujeme náš plán, jak je řešit.',
    body: [
      'Vážení spoluobčané. Veřejným prostorem Nového Města nad Metují rezonují 3 významné otázky. Nejsou nám lhostejné, proto touto formou prezentujeme náš plán, jak je řešit. Buďte prosím obezřetní, pokud se dozvíte něco zprostředkovaně z jiných zdrojů.',
      '## 1. Doprava a obchvat města',
      'Jsme připraveni řešit dopravu ve městě pomocí jednotlivých kroků, které na sebe budou logicky navazovat. Jsme přesvědčeni, že řada drobných dostupných úprav může být někdy více než jedna zásadní. Jakékoliv záměry však musí být široce komunikované a pečlivě vyhodnocované, než budou uskutečněny. V otázce tranzitní dopravy podporujeme a zasadíme se o takové řešení, které umožní občanskou výstavbu v rozvojových zónách jako je například „Krčínské návrší“. Je nám blízký takový způsob, který bude dostatečně chránit životní prostředí v okolí našeho města. Po technické stránce klademe důraz především na hlučnost dopravy, která nesmí obyvatele Nového Města nad Metují nijak zatěžovat.',
      '## 2. Úbytek obyvatel a bytová výstavba',
      'Není nám lhostejné, že občanů města ubývá. Zejména to, že své nové domovy nacházejí v jiných městech, protože u nás nemají kde zakotvit. Podpoříme tedy vznik dostupného bydlení například podporou družstevní výstavby. Nebo v rámci oprav bytového fondu města připravíme startovací byty pro mladé rodiny. Dále nastavíme rozumnou a dlouhodobou podporu infrastrukturních staveb, umožňující vstup soukromých investorů na trh s bytovou výstavbou. V neposlední řadě uděláme změny územního plánu, aby vznikly co nejdříve nové rodinné domy v rozvojových částech Nového Města nad Metují.',
      '## 3. Péče o stárnoucí populaci',
      'Dnes se obecně dožívají obyvatelé vysokého věku, v Novém Městě nad Metují pak obzvláště. Roste nám tedy potřeba péče o naše stárnoucí obyvatele. Její důstojné řešení je naší zásadní odpovědností vůči našim předkům. Za nejlepší cestu považujeme péči o seniory v jejich přirozeném domácím prostředí. To zajistíme rozšířením terénní pečovatelské služby a navýšením kapacity denního stacionáře Domovinka. Tyto služby si žádají vybudovat i dostatečné technické zázemí – zejména kapacitu kuchyně a prádelny.',
      'Prosíme vás. Pokud chcete znát naše názory a plány na vedení města podrobně a pravdivě, navštivte nejlépe naše živá setkání. A budeme rádi, když se budete zajímat také o příspěvky zveřejněné pod naší hlavičkou na sociálních sítích.',
    ],
  },
  {
    id: 'koupaliste-2027',
    title: 'Koupaliště stojí, co bude dál?',
    kicker: 'Jaký bude ostrý provoz koupaliště?',
    date: '20. září 2026',
    image: koupalisteThumb,
    imageDetail: koupalisteDetail,
    excerpt:
      'Co vás čeká na koupališti v roce 2027? Bude na novou sezónu areál kompletně hotový? Kolik stojí provoz a údržba? Jak se bude sekat trávník? Dělá problémy doprava?',
    body: [
      'Co vás čeká na koupališti v roce 2027? Bude na novou sezónu areál kompletně hotový? Kolik stojí provoz a údržba? Jak se bude sekat trávník? Dělá problémy doprava?',
      'Máme více než měsíc od oficiálního otevření koupaliště. Některé otazníky zůstávají. Stavba ještě není kompletní a chybí dokončit řadu detailů. Ani správa celého areálu není vyladěná zdaleka tak, jak by si podobné rekreační zařízení zasloužilo. Snad hodně ukázal zkušební provoz. Ten se ovšem chýlí ke konci, podobně jako celá zkrácená sezóna. Nastává tedy čas na bilancování, a plánování dalšího provozu.',
      'Ale to, co zůstává většinou skryté oku návštěvníka, ještě není vůbec rozhodnuto. Bude nutné pečlivě připravit plán, jak udržet koupaliště v takové kvalitě, v jaké jsme ho získali. A též rozjet jeho fungování do takových otáček, aby toto krásné místo bylo tím, čím ho jeho protagonisté chtěli mít. Aby opravdu žilo.',
      'Zdá se, že se přípravný tým zabýval zejména stavbou samotnou a neřešil příliš její provoz. Cítíme, že v mnohém autoři myšlenky přešlapují. Hodně neznámých se ladí již poměrně pozdě. My nejsme příznivci řešení, která vznikají metodou pokus-omyl. Zásadní věci musí být důkladně promyšlené, aby byly dlouhodobě funkční.',
      'Například, aby údržba nevyžadovala další lidskou sílu a byla dostupnější, musí se péče o koupaliště zjednodušit. Zkrátka nahradit pracovní sílu lidí za stroje a techniku. Některé automatické systémy jsou již pevnou součástí (závlaha) a pomohly zdárně přečkat položenému trávníkovému koberci sucho a teplé počasí. Ovšem jak bude tento fajnový trávník sečený? To zatím nikdo neví.',
      'Zavítejte na naše sociální sítě a podělte se s námi o zkušenosti a tipy. Co vám zde chybí, jak byste to či ono dělali vy. Je naší povinností se o svěřený majetek svědomitě postarat. A jedině společně to zvládneme lépe.',
    ],
  },
]
