import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const members = [
  { email: "admin@example.com", password: "admin123" },
  { email: "finance@dept.com", password: "finance2024" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const member = members.find(
      (user) => user.email === email && user.password === password
    );

    if (member) {
      localStorage.setItem("token", "member-token");
      navigate("/dashboard");
    } else {
      setError(" Unauthorized access. Only members can log in.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F1FCF7] flex items-center justify-center px-4">
      <div className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-3xl shadow-lg p-8 md:p-12 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Member Login</h2>
        <p className="text-sm text-gray-500 mb-6">Access restricted to authorized users</p>

        <form className="flex flex-col gap-4 text-left" onSubmit={handleLogin}>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white/80">
            <Mail className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>

          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white/80">
            <Lock className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>

          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

          <button
            type="submit"
            className="mt-6 bg-[#4EC28F] hover:bg-[#3AA877] text-white py-2 rounded-md text-sm font-medium transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
