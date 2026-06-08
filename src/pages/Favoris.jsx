import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useFavoris } from '../context/FavorisContext'
import CharacterCard from '../components/CharacterCard'

export default function Favoris() {
  const { favoris } = useFavoris()

  return (
    <main className="px-10 py-12">
      <div className="flex items-center gap-3 mb-10">
        <Heart className="fill-red-500 text-red-500" size={28} />
        <h1 className="text-4xl font-bold">Mes Favoris</h1>
        <span className="bg-orange-500 text-white text-sm rounded-full px-3 py-1">
          {favoris.length}
        </span>
      </div>

      {favoris.length === 0 && (
        <div className="text-center py-32">
          <p className="text-gray-400 text-lg mb-4">Aucun favori pour l'instant</p>
          <Link to="/" className="text-orange-400 hover:underline text-sm">
            ← Parcourir les personnages
          </Link>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favoris.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  )
}