import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getPlanetes } from '../api/dragonball'
import { useTheme } from '../context/ThemeContext'
import Pagination from '../components/Pagination'

export default function Planetes() {
  const [page, setPage] = useState(1)
  const { dark } = useTheme()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['planetes', page],
    queryFn: () => getPlanetes(page),
    keepPreviousData: true,
  })

  if (isLoading) return (
    <div className="text-center py-32 text-orange-400 text-xl animate-pulse">
      Chargement des planètes...
    </div>
  )

  if (isError) return (
    <div className="text-center py-32 text-red-400">
      ❌ Erreur de chargement
    </div>
  )

  const planetes = data?.items || []
  const total = data?.meta?.totalItems || 0
  const limit = data?.meta?.itemsPerPage || 12

  return (
    <main className="px-10 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-1">Planètes</h1>
        <p className="text-gray-400 text-sm">{total} planètes au total</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {planetes.map((planete) => (
          <Link key={planete.id} to={`/planetes/${planete.id}`} className="flex">
  <div className={`rounded-lg overflow-hidden border hover:border-orange-400 transition flex flex-col h-full ${
  dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
}`}>
  <div className="h-48 overflow-hidden bg-gray-800 shrink-0">
    <img
      src={planete.image}
      alt={planete.name}
      className="w-full h-full object-cover hover:scale-105 transition duration-500"
    />
  </div>
  <div className="p-4 flex flex-col flex-1">
    <h3 className="font-bold text-lg mb-1">{planete.name}</h3>
    <p className={`text-sm line-clamp-3 flex-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
      {planete.description}
    </p>
    {planete.isDestroyed && (
      <span className="mt-3 inline-block text-xs bg-red-500 text-white px-2 py-0.5 rounded w-fit">
        Détruite
      </span>
    )}
  </div>
</div>
        </Link>
        ))}
      </div>

      <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />
    </main>
  )
}