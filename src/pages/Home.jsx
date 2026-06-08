import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPersonnages } from '../api/dragonball'
import { useSearch } from '../context/SearchContext'
import { useFilter } from '../context/FilterContext'
import CharacterCard from '../components/CharacterCard'
import Pagination from '../components/Pagination'
import Filtres from '../components/Filtres'

export default function Home() {
  const [page, setPage] = useState(1)
  const { search } = useSearch()
  const { race, affiliation } = useFilter()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => getPersonnages(page),
    keepPreviousData: true,
  })

  if (isLoading) return (
    <div className="text-center py-32 text-orange-400 text-xl animate-pulse">
      Chargement des personnages...
    </div>
  )

  if (isError) return (
    <div className="text-center py-32 text-red-400">
      <p className="text-xl mb-2">❌ Erreur de chargement</p>
      <p className="text-sm">Vérifie ta connexion internet.</p>
    </div>
  )

  const personnages = data?.items || []
  const total = data?.meta?.totalItems || 0
  const limit = data?.meta?.itemsPerPage || 12

  // Applique tous les filtres
  const filtres = personnages
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => race ? p.race === race : true)
    .filter(p => affiliation ? p.affiliation?.includes(affiliation) : true)

  const filtreActif = search || race || affiliation

  return (
    <main className="px-10 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-1">Personnages</h1>
        <p className="text-gray-400 text-sm">
          {filtreActif
            ? `${filtres.length} résultat(s) trouvé(s)`
            : `${total} personnages au total`
          }
        </p>
      </div>

      {/* Filtres race + affiliation */}
      <Filtres />

      {/* Résultats vides */}
      {filtres.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          Aucun personnage trouvé
        </div>
      )}

      {/* Grille */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtres.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* Pagination cachée si filtre actif */}
      {!filtreActif && (
        <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />
      )}
    </main>
  )
}