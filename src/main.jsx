import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { FavorisProvider } from './context/FavorisContext'
import { SearchProvider } from './context/SearchContext'
import { FilterProvider } from './context/FilterContext'
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <FavorisProvider>
            <SearchProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </SearchProvider>
          </FavorisProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)