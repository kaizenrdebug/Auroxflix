import React from "react";
import { Link } from "react-router-dom";

const movies = [
  { title: "Inception", year: 2010 },
  { title: "Parasite", year: 2019 },
  { title: "Avengers: Endgame", year: 2019 }
];

const Movies = () => (
  <div className="max-w-3xl mx-auto py-10 animate-fade-in">
    <h2 className="text-3xl font-bold text-[#2392EE] mb-6">Movies</h2>
    <ul className="space-y-4">
      {movies.map((movie) => (
        <li key={movie.title} className="flex items-center justify-between bg-white/5 rounded-lg px-6 py-4 shadow transition-all duration-300 hover:bg-white/10">
          <span className="font-semibold text-white text-lg">{movie.title} <span className="text-gray-400">({movie.year})</span></span>
          <Link to={`/watch/${encodeURIComponent(movie.title)}`} className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 transition-all">Watch</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Movies;