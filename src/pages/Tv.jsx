import React from "react";
import { Link } from "react-router-dom";

const shows = [
  { title: "Breaking Bad", year: 2008 },
  { title: "Stranger Things", year: 2016 }
];

const Tv = () => (
  <div className="max-w-3xl mx-auto py-10 animate-fade-in">
    <h2 className="text-3xl font-bold text-[#2392EE] mb-6">TV Shows</h2>
    <ul className="space-y-4">
      {shows.map((show) => (
        <li key={show.title} className="flex items-center justify-between bg-white/5 rounded-lg px-6 py-4 shadow transition-all duration-300 hover:bg-white/10">
          <span className="font-semibold text-white text-lg">{show.title} <span className="text-gray-400">({show.year})</span></span>
          <Link to={`/watch/${encodeURIComponent(show.title)}`} className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 transition-all">Watch</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tv;