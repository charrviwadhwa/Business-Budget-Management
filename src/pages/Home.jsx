import React from "react";
import { ArrowRight, NotebookPen, MonitorSmartphone, RefreshCcw, ShieldCheck,Mail, Lock } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F1FCF7] font-sans text-gray-900 overflow-hidden">

    
      <div className="absolute inset-0 bg-[radial-gradient(#4EC28F_1px,transparent_1px)] [background-size:24px_24px] opacity-60 z-0 animate-[fadeIn_2s_ease-out]" />

     
      
<header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl backdrop-blur-lg bg-white/50 border border-white/30 rounded-full px-8 py-3 shadow-md flex justify-between items-center">

  <h1 className="text-xl font-bold text-[#4EC28F]">BudgeWise</h1>


  <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
    <Link href="/services" className="hover:text-[#4EC28F] transition">Services</Link>
    <a href="/about" className="hover:text-[#4EC28F] transition">About</a>
    <a href="/resources" className="hover:text-[#4EC28F] transition">Resources</a>
    <a href="/FAQ" className="hover:text-[#4EC28F] transition">FAQ</a>
  </nav>

 
  <div className="flex gap-2">
  {/* <Link to="/signup" className="text-sm font-medium border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition">Sign up</Link> */}
<Link to="/login" className="text-sm font-medium border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition">Log in</Link>
</div>


</header>


      
      <section className="relative z-10 flex flex-col items-center text-center px-6 md:px-32 py-20 animate-[fadeUp_0.6s_ease-out] pt-36 pb-20 ">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-4 font-[Playfair]">
          Unlock the potential of<br />budget management now
        </h2>
        <p className="text-gray-600 text-sm max-w-xl mb-6 font-[Inter]">
          Begin your finance journey today! <strong>Secure early access</strong> to our seamless, secure platform built for next-generation financial planning.
        </p>
      </section>

      
      <section className="relative z-10 px-6 md:px-16 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
         
          <div>
            <p className="text-xs tracking-wide text-gray-500 uppercase mb-2">What we do?</p>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 leading-tight">
              We are giving you<br />perfect solutions with<br />our proficient services.
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Our budget management platform enables seamless planning, spending oversight, and departmental tracking with maximum transparency and control.
            </p>
            <button className="bg-[#4EC28F] hover:bg-[#3AA877] transition text-white px-6 py-3 rounded-full text-sm font-medium shadow">
              More Details
            </button>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard icon={<NotebookPen size={28} />} title="Budget Planning" desc="Create yearly or quarterly financial plans with ease and accuracy." />
            <FeatureCard icon={<MonitorSmartphone size={28} />} title="Spend Tracking" desc="Monitor department-wise expenditure and stay within limits." />
            <FeatureCard icon={<RefreshCcw size={28} />} title="Quarterly Updates" desc="Track financial progress per quarter with structured reporting." />
            <FeatureCard icon={<ShieldCheck size={28} />} title="Approval Flow" desc="Built-in workflows for request, approval, and budget revision." />
          </div>
        </div>
      </section>

     
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .font-[Playfair] {
          font-family: 'Playfair Display', serif;
        }
        .font-[Inter] {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition text-center">
      <div className="text-[#4EC28F] mb-3 flex justify-center">{icon}</div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
      
    </div>
  );
}
