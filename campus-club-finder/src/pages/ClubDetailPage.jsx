import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { clubs } from '../data/data'
import cookingImg from '../assets/cooking.jpeg'
import danceImg from '../assets/dance.jpg'
import englishImg from '../assets/english.jpg'
import footballImg from '../assets/football.jpg'
import bandImg from '../assets/band.jpg'

const clubImages = {
  cooking: cookingImg,
  dance: danceImg,
  english: englishImg,
  football: footballImg,
  band: bandImg
}

function ClubDetailPage() {
  const { clubId } = useParams()
  const club = clubs.find(c => c.id === clubId)
  const [joined, setJoined] = useState(false)
  const [justJoined, setJustJoined] = useState(false)

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || []
    setJoined(joinedClubs.includes(clubId))
  }, [clubId])

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || []
    joinedClubs.push(clubId)
    localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs))
    setJoined(true)
    setJustJoined(true)
  }

  if (!club) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Club Not Found</h1>
        <Link to="/clubs" className="text-green-600 underline">Back to Clubs</Link>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={clubImages[club.id]}
        alt={club.name}
        className="w-full h-64 object-contain rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
      <p className="text-gray-700 mb-6">{club.description}</p>

      <h2 className="text-xl font-semibold mb-2">Upcoming Events:</h2>
      <ul className="list-disc list-inside mb-6">
        {club.events.map((event, index) => (
          <li key={index}>{event.name} - {event.date}</li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {!joined ? (
          <button
            onClick={handleJoin}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Join Club
          </button>
        ) : (
          <p className="text-green-700 font-semibold">
            Joined ✅ 
          </p>
        )}

        <Link
          to="/clubs"
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          Back to Clubs
        </Link>
      </div>

      {justJoined && (
        <p className="mt-4 text-sm text-green-600">
          Successfully joined <strong>{club.name}</strong>!
        </p>
      )}
    </div>
  )
}

export default ClubDetailPage
