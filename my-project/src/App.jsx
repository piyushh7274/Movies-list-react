import './css/App.css'
import Home from "./pages/Home"
import Fav from './pages/Favs';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';

function App() {
  const MovieNumber = 1;
  
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Fav />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App