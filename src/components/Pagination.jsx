import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Pagination({ page, total, limit, onPageChange }) {
  const { dark } = useTheme()
  const totalPages = Math.ceil(total / limit)

  return (
    <div className="flex items-center justify-center gap-4 mt-12">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={`p-2 rounded-lg border transition disabled:opacity-30 ${
          dark ? 'border-gray-700 hover:border-orange-400' : 'border-gray-300 hover:border-orange-400'
        }`}
      >
        <ChevronLeft size={18} />
      </button>

      <span className="text-sm">
        Page <span className="font-bold text-orange-500">{page}</span> sur {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={`p-2 rounded-lg border transition disabled:opacity-30 ${
          dark ? 'border-gray-700 hover:border-orange-400' : 'border-gray-300 hover:border-orange-400'
        }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}