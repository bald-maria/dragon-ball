import { createContext, useContext, useState } from 'react'

const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [race, setRace] = useState('')
  const [affiliation, setAffiliation] = useState('')
  const [planete, setPlanete] = useState('')

  const resetFiltres = () => {
    setRace('')
    setAffiliation('')
    setPlanete('')
  }

  return (
    <FilterContext.Provider value={{
      race, setRace,
      affiliation, setAffiliation,
      planete, setPlanete,
      resetFiltres
    }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
