import { useFilter } from '../context/FilterContext'
import { useTheme } from '../context/ThemeContext'

const races = ['', 'Saiyan', 'Human', 'Namekian', 'Android', 'Majin', 'God', 'Angel']
const affiliations = ['', 'Z Fighter', 'Villain', 'Army of Frieza', 'Pride Troopers', 'Neutral']

export default function Filtres() {
  const { race, setRace, affiliation, setAffiliation, resetFiltres } = useFilter()
  const { dark } = useTheme()

  const selectClass = `px-3 py-2 rounded-lg border text-sm focus:outline-none focus:border-orange-400 transition ${
    dark
      ? 'bg-gray-800 border-gray-700 text-white'
      : 'bg-white border-gray-300 text-gray-900'
  }`

  return (
    <div className="flex flex-wrap gap-3 items-center mb-8">

      {/* Filtre race */}
      <select value={race} onChange={e => setRace(e.target.value)} className={selectClass}>
        <option value="">Toutes les races</option>
        {races.filter(r => r).map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      {/* Filtre affiliation */}
      <select value={affiliation} onChange={e => setAffiliation(e.target.value)} className={selectClass}>
        <option value="">Toutes affiliations</option>
        {affiliations.filter(a => a).map(a => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>

      {/* Reset */}
      {(race || affiliation) && (
        <button
          onClick={resetFiltres}
          className="text-sm text-orange-400 hover:underline"
        >
          Réinitialiser
        </button>
      )}

    </div>
  )
}