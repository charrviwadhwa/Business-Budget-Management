import React from "react";
import { User, Mail, Lock } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-screen bg-[#F1FCF7] flex items-center justify-center px-4">
      <div className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-3xl shadow-lg p-8 md:p-12 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create Account</h2>
        <p className="text-sm text-gray-500 mb-6">Sign up to get started with BudgeWise</p>

        <form className="flex flex-col gap-4 text-left">
          
          <label className="text-sm font-medium text-gray-700">Name</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white/80">
            <User className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>

         
          <label className="text-sm font-medium text-gray-700">Email</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white/80">
            <Mail className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>

          
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white/80">
            <Lock className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="••••••••"
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#4EC28F] hover:bg-[#3AA877] text-white py-2 rounded-md text-sm font-medium transition"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#4EC28F] hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
