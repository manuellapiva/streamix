import { useMemo, useState } from "react";
import MovieCard from "../components/CardFilme";
import SearchBar from "../components/Searchbar";
import movies from "../data/filmes";

const genres = ["Todos", "Ação", "Aventura", "Comédia", "Drama", "Romance", "Sci-Fi", "Suspense", "Terror"];

export default function Filmes({ favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [sort, setSort] = useState("relevance");

  const filteredMovies = useMemo(() => {
    let result = movies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());

      const matchesGenre =
        selectedGenre === "Todos" ||
        movie.genres.includes(selectedGenre);

      return matchesSearch && matchesGenre;
    });

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "recent") {
      result.sort((a, b) => b.year - a.year);
    }

    if (sort === "alphabetical") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return result;
  }, [search, selectedGenre, sort]);

  return (
    <main className="min-h-screen bg-[#08080d] px-5 py-10 text-white md:px-10 lg:px-14">
      <section className="mx-auto max-w-[1400px]">
        <span className="font-mono text-xs font-medium tracking-[3px] text-blue-500">
          EXPLORAR
        </span>
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-gray-100 md:text-5xl">
          Catálogo de Filmes
        </h1>
      </section>
      <section className="mx-auto mt-9 grid max-w-[1400px] grid-cols-1 gap-3 md:grid-cols-[1fr_170px]">
        <SearchBar search={search} setSearch={setSearch}/>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-11 rounded border border-[#292938] bg-[#12121a] px-4 text-sm text-gray-200 outline-none transition focus:border-blue-500">
          <option value="relevance">
            Relevância
          </option>
          <option value="rating">
            Melhor nota
          </option>
          <option value="recent">
            Mais recente
          </option>
          <option value="alphabetical">
            A-Z
          </option>
        </select>
      </section>

      <section className="mx-auto mt-7 flex max-w-[1400px] flex-wrap gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`rounded border px-4 py-2 text-xs transition ${
              selectedGenre === genre
                ? "border-blue-500 bg-blue-500 text-black"
                : "border-[#292938] bg-[#12121a] text-[#8587a2] hover:border-blue-500 hover:text-blue-400"
            }`}>
            {genre}
          </button>
        ))}
      </section>

      <p className="mx-auto mt-9 max-w-[1400px] text-xs text-[#51536d]">
        {filteredMovies.length} filmes encontrados
      </p>

      {filteredMovies.length > 0 ? (
        <section className="mx-auto mt-5 grid max-w-[1400px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      ) : (
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center py-32 text-center">
          <h2 className="font-serif text-2xl text-white">
            Nenhum filme encontrado
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Tente pesquisar outro filme ou selecionar outro gênero.
          </p>
        </div>
      )}
    </main>
  );
}