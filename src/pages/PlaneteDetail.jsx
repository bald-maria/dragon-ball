import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { getPlanete } from '../api/dragonball'
import { useTheme } from '../context/ThemeContext'

export default function PlaneteDetail() {
  const { id } = useParams()
  const { dark } = useTheme()

  const { data: planete, isLoading, isError } = useQuery({
    queryKey: ['planete', id],
    queryFn: () => getPlanete(id),
  })

  if (isLoading) return (
    <div className="text-center py-32 text-orange-400 text-xl animate-pulse">
      Chargement...
    </div>
  )

  if (isError) return (
    <div className="text-center py-32 text-red-400">
      <p className="text-xl mb-2">❌ Planète introuvable</p>
      <Link to="/planetes" className="text-orange-400 text-sm hover:underline">← Retour</Link>
    </div>
  )

  return (
    <main className="max-w-4xl mx-auto px-10 py-16">
      <Link to="/planetes" className="flex items-center gap-1 text-orange-400 text-sm mb-8 hover:underline">
        <ChevronLeft size={16} /> Retour aux planètes
      </Link>

      <div className="flex flex-col md:flex-row gap-12">
        <img
          src={planete.image}
          alt={planete.name}
          className="w-72 h-72 object-cover rounded-lg border border-orange-500 shrink-0"
        />

        <div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-5xl font-bold">{planete.name}</h1>
            {planete.isDestroyed && (
              <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-full">
                Détruite
              </span>
            )}
          </div>

          <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            {planete.description}
          </p>
        </div>
      </div>
    </main>
  )
}