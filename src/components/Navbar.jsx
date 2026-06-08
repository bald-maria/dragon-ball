import { Link, useNavigate } from 'react-router-dom'
import { Moon, Sun, Heart, Search } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useFavoris } from '../context/FavorisContext'
import { useSearch } from '../context/SearchContext'

export default function Navbar() {
  const { dark, setDark } = useTheme()
  const { favoris } = useFavoris()
  const { search, setSearch } = useSearch()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearch(e.target.value)
    navigate('/')
  }

  return (
    <nav className={`sticky top-0 z-50 border-b px-10 py-4 flex justify-between items-center gap-6 ${
      dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <Link to="/" className="text-2xl font-bold text-orange-500 shrink-0">

      </Link>

      <div className="relative flex-1 max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un personnage..."
          value={search}
          onChange={handleSearch}
          className={`w-full pl-9 pr-4 py-2 rounded-lg border text-sm focus:outline-none focus:border-orange-400 transition ${
            dark
              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
          }`}
        />
      </div>

      <div className="flex items-center gap-6 shrink-0">
        <Link to="/favoris" className="flex items-center gap-2 text-sm hover:text-orange-500 transition">
          <Heart size={18} className={favoris.length > 0 ? 'fill-red-500 text-red-500' : ''} />
          <span>Favoris</span>
          {favoris.length > 0 && (
            <span className="bg-orange-500 text-white text-xs rounded-full px-2 py-0.5">
              {favoris.length}
            </span>
          )}
        </Link>

        <button onClick={() => setDark(!dark)} className="p-2 rounded-full hover:bg-gray-100 transition">
          {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  )
}