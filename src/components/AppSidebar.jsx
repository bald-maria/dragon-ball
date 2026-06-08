import { Link, useLocation } from 'react-router-dom'
import { Heart, Home, Globe } from 'lucide-react'
import { useFavoris } from '../context/FavorisContext'
import { useTheme } from '../context/ThemeContext'

export default function AppSidebar() {
  const { favoris } = useFavoris()
  const { dark } = useTheme()
  const location = useLocation()

  const liens = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/favoris', label: 'Favoris', icon: Heart, count: favoris.length },
    { path: '/planetes', label: 'Planètes', icon: Globe },
  ]

  return (
    <aside className={`w-64 min-h-screen border-r flex flex-col ${
      dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    }`}>

      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800">
        <Link to="/" className="text-xl font-bold text-orange-500">
           Dragon Ball
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {liens.map(({ path, label, icon: Icon, count }) => {
          const actif = location.pathname === path
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition ${
                actif
                  ? 'bg-orange-500 text-white'
                  : dark
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                {label}
              </div>
              {count > 0 && (
                <span className={`text-xs rounded-full px-2 py-0.5 ${
                  actif ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'
                }`}>
                  {count}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Favoris aperçu */}
      {favoris.length > 0 && (
        <div className={`px-4 py-4 border-t ${dark ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
            Derniers favoris
          </p>
          <div className="space-y-2">
            {favoris.slice(0, 3).map((f) => (
              <Link
                key={f.id}
                to={`/character/${f.id}`}
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-8 h-8 rounded-full object-cover object-top border border-orange-400"
                />
                <span className="text-sm truncate">{f.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

    </aside>
  )
}