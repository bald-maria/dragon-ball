import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useFavoris } from '../context/FavorisContext'
import { useTheme } from '../context/ThemeContext'

export default function CharacterCard({ character }) {
  const { toggleFavori, isFavori } = useFavoris()
  const { dark } = useTheme()
  const favori = isFavori(character.id)

  return (
    <div className={`rounded-lg overflow-hidden border transition hover:border-orange-400 hover:shadow-lg ${
      dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <Link to={`/character/${character.id}`}>
        <div className="h-56 overflow-hidden bg-gray-800">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
          />
        </div>
      </Link>

      <div className="p-4 flex justify-between items-start">
        <div>
          <h3 className="font-bold text-base mb-1">{character.name}</h3>
          <p className="text-orange-400 text-sm">{character.race}</p>
          <p className={`text-xs mt-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            Ki : {character.ki}
          </p>
        </div>
        <button onClick={() => toggleFavori(character)} className="p-1 hover:scale-110 transition">
          <Heart size={20} className={favori ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
        </button>
      </div>
    </div>
  )
}