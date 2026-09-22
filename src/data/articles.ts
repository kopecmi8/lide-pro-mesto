import koupalisteThumb from '../assets/koupaliste-thumb.jpg'
import koupalisteDetail from '../assets/koupaliste-detail.jpg'

export interface Article {
  id: string
  title: string
  kicker: string
  date: string
  image: string
  imageDetail: string
  excerpt: string
  body: string[]
}

export const articles: Article[] = [
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
