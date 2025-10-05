import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header className="h-16 fixed top-0 left-0 bg-[#2392EE] border-b border-white/10 transition-all duration-500 z-50 py-3 px-4 text-white flex items-center text-md flex-row justify-between w-full animate-fade-in">
      <NavLink to="/" className="text-2xl mr-6 hover:text-purple-400 transition-colors font-bold font-instrument" aria-label="Auroxflix Home">
        Auroxflix
      </NavLink>
      <nav className="flex gap-4">
        <NavLink to="/movies" className="hover:text-white/80 transition">Movies</NavLink>
        <NavLink to="/tv" className="hover:text-white/80 transition">TV Shows</NavLink>
        <NavLink to="/anime" className="hover:text-white/80 transition">Anime</NavLink>
        <NavLink to="/watchlist" className="hover:text-white/80 transition">Watchlist</NavLink>
      </nav>
      <NavLink to="/signup" className="ml-auto bg-purple-500 hover:bg-purple-600 text-white rounded px-4 py-2 transition-all duration-300 font-semibold">
        Sign Up
      </NavLink>
    </header>
  );
};

export default Header;