import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center min-h-[70vh] justify-center animate-fade-in">
    <h1 className="text-5xl font-bold text-[#2392EE] mb-4">Welcome to Auroxflix</h1>
    <p className="text-xl text-gray-400 mb-8">Stream movies, TV shows, and anime ad-free!</p>
    <div className="flex gap-6">
      <Link to="/movies" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
        Movies
      </Link>
      <Link to="/tv" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
        TV Shows
      </Link>
      <Link to="/anime" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
        Anime
      </Link>
    </div>
  </div>
);

export default Home;