import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'
import { Heart, ChevronLeft } from 'lucide-react'
import { getPersonnage } from '../api/dragonball'
import { useFavoris } from '../context/FavorisContext'
import { useTheme } from '../context/ThemeContext'

export default function Detail() {
  const { id } = useParams()
  const { toggleFavori, isFavori } = useFavoris()
  const { dark } = useTheme()

  const { data: character, isLoading, isError } = useQuery({
    queryKey: ['character', id],
    queryFn: () => getPersonnage(id),
  })

  if (isLoading) return (
    <div className="text-center py-32 text-orange-400 text-xl animate-pulse">
      Chargement...
    </div>
  )

  if (isError) return (
    <div className="text-center py-32 text-red-400">
      <p className="text-xl mb-2">❌ Personnage introuvable</p>
      <Link to="/" className="text-orange-400 text-sm hover:underline">← Retour</Link>
    </div>
  )

  const favori = isFavori(character.id)

  return (
    <main className="max-w-5xl mx-auto px-10 py-16">
      <Link to="/" className="flex items-center gap-1 text-orange-400 text-sm mb-8 hover:underline">
        <ChevronLeft size={16} /> Retour à la liste
      </Link>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="shrink-0">
          <img
            src={character.image}
            alt={character.name}
            className="w-64 h-80 object-cover object-top rounded-lg border border-orange-500"
          />
          <button
            onClick={() => toggleFavori(character)}
            className={`mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg border transition ${
              favori
                ? 'bg-red-500 border-red-500 text-white'
                : dark ? 'border-gray-700 hover:border-red-400' : 'border-gray-300 hover:border-red-400'
            }`}
          >
            <Heart size={16} className={favori ? 'fill-white' : ''} />
            {favori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          </button>
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-2">{character.name}</h1>
          <p className="text-orange-400 text-lg mb-6">{character.race}</p>

          <div className={`grid grid-cols-2 gap-4 mb-8 p-4 rounded-lg ${dark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div>
              <p className="text-xs text-gray-400 mb-1">Ki</p>
              <p className="font-bold">{character.ki}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Max Ki</p>
              <p className="font-bold">{character.maxKi}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Genre</p>
              <p className="font-bold">{character.gender}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Affiliation</p>
              <p className="font-bold">{character.affiliation}</p>
            </div>
          </div>

          <p className={`text-sm leading-relaxed mb-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            {character.description}
          </p>

          {character.transformations?.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">
                Transformations ({character.transformations.length})
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {character.transformations.map((t) => (
                  <div key={t.id} className={`rounded-lg overflow-hidden border ${
                    dark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <img src={t.image} alt={t.name} className="w-full h-36 object-cover object-top" />
                    <div className="p-3">
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-orange-400 text-xs">Ki : {t.ki}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}