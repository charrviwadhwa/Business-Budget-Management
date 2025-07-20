import { Menu } from 'lucide-react';

export default function Navbar({ isSidebarOpen, toggleSidebar }) {
  return (
    <header
      className={`flex items-center gap-4 bg-[#F1FCF7] h-16 px-6 sticky top-0 z-10 transition-all duration-300 ${
        isSidebarOpen ? 'ml-64 w-[calc(100vw-16rem)]' : 'ml-16 w-[calc(100vw-4rem)]'
      }`}
    >
      {/* Only show hamburger when sidebar is closed */}
      {!isSidebarOpen && (
        <button onClick={toggleSidebar} className="text-gray-600 hover:text-[#4EC28F]">
          <Menu size={24} />
        </button>
      )}

      <h1 className="text-xl font-bold text-gray-800">Budget Overview</h1>
    </header>
  );
}
