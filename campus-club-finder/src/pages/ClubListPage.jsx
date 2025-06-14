import { useState } from 'react'
import { clubs } from '../data/data'
import { Link } from 'react-router-dom'

import cookingImg from '../assets/cooking.jpeg'
import danceImg from '../assets/dance.jpg'
import englishImg from '../assets/english.jpg'
import footballImg from '../assets/football.jpg'
import bandImg from '../assets/band.jpg'

// Map of image ids to imported images
const clubImages = {
  cooking: cookingImg,
  dance: danceImg,
  english: englishImg,
  football: footballImg,
  band: bandImg,
}

function ClubListPage() {
  const [sortOrder, setSortOrder] = useState('asc')
  const [view, setView] = useState('grid')

  const sortedClubs = [...clubs].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  })

  return (
    <div className="p-6">
      {/* Sorting and View Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setSortOrder('asc')}
            className={`px-4 py-2 rounded ${sortOrder === 'asc' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
          >
            Name A-Z
          </button>
          <button
            onClick={() => setSortOrder('desc')}
            className={`px-4 py-2 rounded ${sortOrder === 'desc' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
          >
            Name Z-A
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setView('grid')}
            className={`px-4 py-2 rounded ${view === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
          >
            Grid View
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded ${view === 'list' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
          >
            List View
          </button>
        </div>
      </div>

      {/* Club Cards */}
<div className={view === 'grid' ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-4'}>
  {sortedClubs.map((club) => (
    <div key={club.id} className="border rounded-lg p-4 shadow bg-white">
      
      {view === 'grid' && (
        <img
          src={clubImages[club.id]}
          alt={club.name}
          className="w-full h-48 lg:h-96 object-contain rounded mb-4"
        />
      )}
      
      <h2 className="text-xl font-bold mb-2">{club.name}</h2>
      <p className="mb-4">{club.shortDescription}</p>
      <Link
        to={`/clubs/${club.id}`}
        className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        View Details
      </Link>
    </div>
  ))}
</div>

    </div>
  )
}

export default ClubListPage
