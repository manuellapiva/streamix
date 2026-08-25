import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiHeart } from "react-icons/fi";
import movies from "../data/filmes";

export default function Detalhes({ favorites, toggleFavorite }) {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08080d] px-5 text-white">
        <div className="text-center">
          <span className="font-mono text-xs tracking-[3px] text-blue-500">
            ERRO
          </span>
          <h1 className="mt-3 font-serif text-4xl">
            Filme não encontrado
          </h1>
          <Link
            to="/"
            className="mt-7 inline-block rounded bg-blue-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-blue-400"
          >
            Voltar ao catálogo
          </Link>
        </div>
      </main>
    );
  }

  const isFavorite = favorites.includes(movie.id);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080d] px-5 pb-16 pt-6 text-white md:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: `url(${movie.image})`}}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#08080d]/75 to-[#08080d]"/>
      <div className="relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white">
          <FiArrowLeft size={16} />
          Voltar
        </Link>

        <section className="mx-auto mt-28 grid max-w-[900px] grid-cols-1 items-center gap-10 md:grid-cols-[240px_1fr] md:gap-11">
          <img src={movie.image} alt={movie.title}
            className="mx-auto h-[358px] w-[240px] rounded border border-[#363643] object-cover shadow-2xl md:mx-0"
          />
          <div>

            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span key={genre}
                  className="rounded border border-[#254578] bg-[#111a2a]/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-blue-400">
                  {genre}
                </span>
              ))}
            </div>

            <h1 className="mt-5 font-serif text-4xl font-semibold text-gray-100 md:text-5xl">
              {movie.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="tracking-[2px] text-blue-500">
                ★★★★★
              </span>
              <strong className="text-blue-400">
                {movie.rating}
              </strong>
              <span>•</span>
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.duration}</span>
            </div>

            <p className="mt-7 max-w-[600px] text-sm leading-7 text-[#a5a6bc] md:text-[15px]">
              {movie.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-7">
              <button
                onClick={() =>
                  toggleFavorite(movie.id)
                }
                className={`flex items-center gap-2 rounded border px-5 py-3 text-sm transition ${
                  isFavorite
                    ? "border-blue-500 bg-transparent text-blue-400 hover:bg-blue-500/10"
                    : "border-blue-500 bg-blue-500 text-black hover:bg-blue-400"
                }`}>
                <FiHeart
                  size={17}
                  fill={isFavorite ? "currentColor" : "none"}
                />

                {isFavorite
                  ? "Nos favoritos"
                  : "Adicionar aos favoritos"}
              </button>

              <Link to="/" className="text-sm text-gray-500 transition hover:text-gray-300">
                Voltar ao catálogo
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-[900px] grid-cols-1 border border-[#20202d] bg-[#14141d]/95 sm:grid-cols-3">
          <div className="border-b border-[#272734] px-5 py-6 text-center sm:border-b-0 sm:border-r">
            <span className="font-mono text-[10px] tracking-[2px] text-[#4f526b]">
              ANO
            </span>
            <strong className="mt-2 block font-serif text-2xl text-gray-100">
              {movie.year}
            </strong>
          </div>
          <div className="border-b border-[#272734] px-5 py-6 text-center sm:border-b-0 sm:border-r">
            <span className="font-mono text-[10px] tracking-[2px] text-[#4f526b]">
              DURAÇÃO
            </span>
            <strong className="mt-2 block font-serif text-2xl text-gray-100">
              {movie.duration}
            </strong>
          </div>
          <div className="px-5 py-6 text-center">
            <span className="font-mono text-[10px] tracking-[2px] text-[#4f526b]">
              AVALIAÇÃO
            </span>
            <strong className="mt-2 block font-serif text-2xl text-gray-100">
              {movie.rating}/10
            </strong>
          </div>
        </section>
      </div>
    </main>
  );
}