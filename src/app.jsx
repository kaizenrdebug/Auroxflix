import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Tv from "./pages/Tv.jsx";
import Anime from "./pages/Anime.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Signup from "./pages/auth/Signup.jsx";
import Login from "./pages/auth/Login.jsx";
import Watch from "./pages/details/Watch.jsx";

const App = () => (
  <Router>
    <Header />
    <main style={{ marginTop: "70px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watch/:title" element={<Watch />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;