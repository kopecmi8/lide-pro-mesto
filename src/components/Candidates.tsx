import { candidates } from '../data/candidates'

export default function Candidates() {
  return (
    <section id="kandidati" className="scroll-mt-16 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-black tracking-tight text-ink sm:text-4xl">
          Naši kandidáti
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-600">
          Lidé, které potkáváte každý den – a kteří chtějí pro Nové Město nad
          Metují pracovat naplno.
        </p>
        <div className="mt-16 space-y-20">
          {candidates.map((candidate, index) => (
            <article
              key={candidate.id}
              id={candidate.id}
              className={`flex flex-col items-center gap-10 lg:items-start ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <img
                src={candidate.photo}
                alt={candidate.name}
                className="w-full max-w-sm rounded-2xl shadow-xl"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-black text-ink sm:text-3xl">
                  {candidate.name}
                </h3>
                <p className="mt-1 inline-block rounded-full bg-brand px-4 py-1 text-sm font-bold text-ink">
                  {candidate.role}
                </p>
                <div className="mt-6 space-y-4 text-neutral-700">
                  {candidate.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
