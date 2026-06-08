import { createContext, useContext, useState } from 'react'

const FavorisContext = createContext()

export function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([])

  const toggleFavori = (character) => {
    setFavoris(prev =>
      prev.find(f => f.id === character.id)
        ? prev.filter(f => f.id !== character.id)
        : [...prev, character]
    )
  }

  const isFavori = (id) => favoris.some(f => f.id === id)

  return (
    <FavorisContext.Provider value={{ favoris, toggleFavori, isFavori }}>
      {children}
    </FavorisContext.Provider>
  )
}

export const useFavoris = () => useContext(FavorisContext)