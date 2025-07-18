export default function Navbar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white shadow flex items-center justify-end px-6 z-30">
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700">
          🔔
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold">Charvi Wadhwa</p>
            <p className="text-gray-500 text-xs">charvi@email.com</p>
          </div>
        </div>
        
      </div>
    </header>
  );
}
