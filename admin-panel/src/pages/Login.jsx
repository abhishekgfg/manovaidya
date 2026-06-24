import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate a brief network delay for realism
    setTimeout(() => {
      if (username === 'manovaidya' && password === 'manovaidya123') {
        localStorage.setItem('isAdminAuth', 'true');
        navigate('/');
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 p-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white/10 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl border border-white/20">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 ring-1 ring-blue-400/50">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Admin Portal</h2>
          <p className="mt-2 text-sm text-slate-300">Enter your credentials to access the dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="rounded-lg bg-red-500/10 p-3 text-center text-sm font-medium text-red-400 border border-red-500/20">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <User size={20} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="block w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-slate-400 backdrop-blur-sm transition-all focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Lock size={20} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="block w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-slate-400 backdrop-blur-sm transition-all focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full justify-center rounded-xl bg-blue-600 py-3.5 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-slate-400">
          Secure Manovaidya Admin Access &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
