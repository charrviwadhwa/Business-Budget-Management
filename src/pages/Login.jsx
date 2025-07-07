import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Login() {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

     
      navigate("/dashboard");
    } catch (err) {
      setError("❌ Login failed: " + err.message);
    }
  };
  return (
    <div className="min-h-screen bg-[#F1FCF7] flex items-center justify-center px-4">
      <div className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-3xl shadow-lg p-8 md:p-12 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-6">Log in to manage your department's budget</p>

        <form className="flex flex-col gap-4 text-left" onSubmit={handleLogin}>
          {/* Email */}
          <label className="text-sm font-medium text-gray-700">Email</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white/80">
            <Mail className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="email" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>

          {/* Password */}
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white/80">
            <Lock className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="password" required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#4EC28F] hover:bg-[#3AA877] text-white py-2 rounded-md text-sm font-medium transition"
          >
            Log in
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#4EC28F] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
