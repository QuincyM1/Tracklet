import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to the Tracker Dashboard</h1>
      <p className="mb-12 text-gray-600 text-center max-w-md">
        Choose which dashboard you'd like to explore:
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <Link
          to="/lowes"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 text-lg text-center"
        >
          🏬 Lowe’s Tracker
        </Link>
        <Link
          to="/amazon"
          className="px-8 py-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 text-lg text-center"
        >
          🛒 Amazon Tracker
        </Link>
      </div>
    </div>
  );
}
