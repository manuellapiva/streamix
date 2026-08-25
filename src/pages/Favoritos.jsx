import { Link } from "react-router-dom";
import { FiHeart } from 'react-icons/fi'
import MovieCard from "../components/CardFilme";
import movies from "../data/filmes";

export default function Favoritos({ favorites, toggleFavorite }) {
  const favoriteMovies = movies.filter(
    (movie) => favorites.includes(movie.id)
  );

  return (
    <main className="min-h-screen bg-[#08080d] px-5 py-10 text-white md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <span className="font-mono text-xs font-medium tracking-[3px] text-blue-500">
          SUA COLEÇÃO
        </span>

        <h1 className="mt-2 font-serif text-4xl font-semibold text-gray-100 md:text-5xl">
          Meus Favoritos
        </h1>

        <p className="mt-2 text-xs text-[#51536d]">
          {favoriteMovies.length} filmes salvos
        </p>

        {favoriteMovies.length > 0 ? (
          <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {favoriteMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </section>
        ) : (
          <section className="flex min-h-[500px] flex-col items-center justify-center text-center">
            <div className="rounded-full border border-[#292938] bg-[#12121a] px-5 py-3 text-2xl">
              <FiHeart size={17}/>
            </div>
            <h2 className="mt-5 font-serif text-2xl text-gray-200">
              Sua coleção está vazia
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-500">
              Adicione alguns filmes aos seus favoritos
              para encontrá-los aqui.
            </p>
            <Link
              to="/filme"
              className="mt-6 rounded bg-blue-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-blue-400">
              Explorar filmes
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}