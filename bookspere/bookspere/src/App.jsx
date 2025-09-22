import { useState } from "react";
import Browse from "./Pages/Browse";
import Sell from "./Pages/Sell";
import Help from "./Pages/Help";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import 
function App() {
  const [view, setView] = useState('home'); // home, browse, sell, help, login, dashboard
  const [user, setUser] = useState(null); // null if logged out, user object if logged in

  const renderView = () => {
    switch(view) {
      case 'browse':
        return <Browse />;
      case 'sell':
        return <Sell user={user} setView={setView} />;
      case 'help':
        return <Help />;
      case 'login':
        return <Login setView={setView} setUser={setUser} />;
      case 'dashboard':
          return <Dashboard user={user} setView={setView} />;
      case 'home':
      default:
        return <Home setView={setView} />;
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header setView={setView} user={user} setUser={setUser} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
