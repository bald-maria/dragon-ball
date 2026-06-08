import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import AppSidebar from './components/AppSidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favoris from './pages/Favoris'
import Planetes from './pages/Planetes'
import PlaneteDetail from './pages/PlaneteDetail'

function App() {
  const { dark } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navbar en haut */}
      <Navbar />

      {/* Sidebar + contenu */}
      <div className="flex flex-1">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<Detail />} />
            <Route path="/favoris" element={<Favoris />} />
            <Route path="/planetes" element={<Planetes />} />
            <Route path="/planetes/:id" element={<PlaneteDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App