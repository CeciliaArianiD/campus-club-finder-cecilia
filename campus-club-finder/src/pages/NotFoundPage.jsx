import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Oops! Looks like you took a wrong turn.</p>
      <Link to="/" className="text-blue-500 underline">Go back Home</Link>
    </div>
  )
}

export default NotFoundPage
