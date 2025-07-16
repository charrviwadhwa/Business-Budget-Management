import { LayoutDashboard, Users, FileText, BarChart2, Settings, ChevronLeft, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Departments', path: '/departments', icon: Users },
  { name: 'Approvals', path: '/approvals', icon: FileText },
  { name: 'Reports', path: '/reports', icon: BarChart2 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`h-screen bg-white border-r shadow-sm fixed top-0 left-0 z-20 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        {/* Header with Toggle */}
        <div className="flex items-center justify-between p-4">
          <span className={`text-[#4EC28F] font-bold text-xl transition-all duration-200 ${!isOpen && 'opacity-0'}`}>
            BudgetTrack
          </span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-[#4EC28F]">
            {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="mt-4 flex flex-col gap-2">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              to={path}
              key={name}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 text-sm font-medium transition rounded-md mx-2
                ${isActive ? 'bg-[#E0F7ED] text-[#4EC28F]' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              <Icon className="w-5 h-5" />
              {isOpen && <span>{name}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
