import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Filmes from "./pages/Filmes";
import Detalhes from "./components/Detalhes";
import Favoritos from './pages/Favoritos'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Equipe from './pages/Equipe'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
  const [favoritos, setFavoritos] = useState(() => {
    const saved = localStorage.getItem("movie-Favoritos");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "movie-Favoritos",
      JSON.stringify(favoritos)
    );
  }, [favoritos]);

  function toggleFavorite(movieId) {
    setFavoritos((current) => {
      if (current.includes(movieId)) {
        return current.filter((id) => id !== movieId);
      }

      return [...current, movieId];
    });
  }

  return (
    <BrowserRouter>

    <Header/>

      <Routes>

        <Route
          path="/"
          element={<Home/>}
        />

        <Route
          path="/filme"
          element={
            <Filmes
              favorites={favoritos}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/filme/:id"
          element={
            <Detalhes
              favorites={favoritos}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/favoritos"
          element={
            <Favoritos
              favorites={favoritos}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/sobre"
          element={<Sobre/>}
        />

        <Route
          path="/contato"
          element={<Contato/>}
        />

        <Route
          path="/equipe"
          element={<Equipe/>}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
