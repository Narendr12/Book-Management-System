import { useState } from "react";
import { UserIcon,MenuIcon,CloseIcon,BookIcon } from "./Icons";
export default Header = ({ setView, user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
      setUser(null);
      setView('home');
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView('home')}>
          <BookIcon />
          <h1 className="text-2xl font-bold text-gray-800">BookSphere</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" onClick={() => setView('home')} className="text-gray-600 hover:text-blue-500 transition">Home</a>
          <a href="#" onClick={() => setView('browse')} className="text-gray-600 hover:text-blue-500 transition">Browse</a>
          <a href="#" onClick={() => setView('sell')} className="text-gray-600 hover:text-blue-500 transition">Sell</a>
          <a href="#" onClick={() => setView('help')} className="text-gray-600 hover:text-blue-500 transition">Help</a>
        </nav>
        <div className="flex items-center space-x-4">
            {user ? (
                <>
                    <button onClick={() => setView('dashboard')} className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition">
                        <UserIcon />
                        <span className="hidden sm:inline">{user.name.split(' ')[0]}</span>
                    </button>
                    <button onClick={handleLogout} className="hidden sm:inline bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">Logout</button>
                </>
            ) : (
                <button onClick={() => setView('login')} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Login</button>
            )}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <a href="#" onClick={() => { setView('home'); setIsMenuOpen(false); }} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
          <a href="#" onClick={() => { setView('browse'); setIsMenuOpen(false); }} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Browse</a>
          <a href="#" onClick={() => { setView('sell'); setIsMenuOpen(false); }} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Sell</a>
          <a href="#" onClick={() => { setView('help'); setIsMenuOpen(false); }} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Help</a>
           {user && <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button> }
        </div>
      )}
    </header>
  );
};