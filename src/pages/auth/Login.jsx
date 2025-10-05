import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/movies");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#090a0a] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur rounded-2xl p-6 shadow-xl animate-fade-in">
        <h1 className="text-2xl font-semibold mb-1">Welcome back</h1>
        <p className="text-zinc-400 mb-6">Sign in to sync your watchlist and progress.</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" disabled={loading} className="w-full mt-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 rounded-lg py-2 font-medium transition-all duration-300">
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <div className="mt-6 text-sm text-zinc-400">
          New here?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;