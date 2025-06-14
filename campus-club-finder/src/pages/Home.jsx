import { Link } from 'react-router-dom'
import bgImage from '../assets/sunib.png' // Replace with your image path

function HomePage() {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-contain flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/20 ring-1 ring-black/5 shadow-lg p-10 rounded-xl text-center max-w-xl backdrop-blur-sm">
        <h1 className="text-4xl text-black font-bold mb-4">Welcome to Campus Club Finder</h1>
        <p className="mb-6 text-black">Discover and join awesome student clubs on campus!</p>
        <Link
          to="/clubs"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition"
        >
          Explore Clubs
        </Link>
      </div>
    </div>
  )
}

export default HomePage