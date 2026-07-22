import { useState } from 'react'
import { candidates } from '../data/candidates'
import CandidateModal from './CandidateModal'

export default function Candidates() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedCandidate = candidates.find(
    (candidate) => candidate.id === selectedId,
  )

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
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {candidates.map((candidate) => (
            <button
              key={candidate.id}
              type="button"
              onClick={() => setSelectedId(candidate.id)}
              className="group text-left"
            >
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={candidate.photo}
                  alt={candidate.name}
                  className="aspect-3/4 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-lg font-black text-ink">
                {candidate.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-neutral-600">
                {candidate.role}
              </p>
            </button>
          ))}
        </div>
      </div>

      {selectedCandidate && (
        <CandidateModal
          candidate={selectedCandidate}
          onClose={() => setSelectedId(null)}
        />
      )}
    </section>
  )
}
