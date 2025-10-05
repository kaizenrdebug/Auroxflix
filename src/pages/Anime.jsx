import React from "react";
import { Link } from "react-router-dom";

const anime = [
  { title: "Attack on Titan", year: 2013 },
  { title: "Jujutsu Kaisen", year: 2020 }
];

const Anime = () => (
  <div className="max-w-3xl mx-auto py-10 animate-fade-in">
    <h2 className="text-3xl font-bold text-[#2392EE] mb-6">Anime</h2>
    <ul className="space-y-4">
      {anime.map((item) => (
        <li key={item.title} className="flex items-center justify-between bg-white/5 rounded-lg px-6 py-4 shadow transition-all duration-300 hover:bg-white/10">
          <span className="font-semibold text-white text-lg">{item.title} <span className="text-gray-400">({item.year})</span></span>
          <Link to={`/watch/${encodeURIComponent(item.title)}`} className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 transition-all">Watch</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Anime;