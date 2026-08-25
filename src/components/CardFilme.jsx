import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CardFilme({ movie, isFavorite, onToggleFavorite }) {
  return (
    <article className="group overflow-hidden rounded border border-[#292938] bg-[#12121a] transition duration-200 hover:-translate-y-1 hover:border-[#3b3b4e]">
      <div className="relative h-[265px] overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
        <span className="absolute left-3 top-3 z-10 rounded border border-[#244d86] bg-[#101923] px-2 py-1 text-xs text-blue-400">
          ★ {movie.rating}
        </span>

        <button
          onClick={() => onToggleFavorite(movie.id)}
          className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded border bg-[#14141d] transition ${
            isFavorite
              ? "border-blue-500 text-blue-400"
              : "border-[#303040] text-gray-500 hover:border-blue-500 hover:text-blue-400"
          }`}
          aria-label="Adicionar aos favoritos"
        >
          <FiHeart
            size={16}
            fill={
              isFavorite
                ? "currentColor"
                : "none"
            }
          />
        </button>

        <Link
          to={`/filme/${movie.id}`}
          className="absolute bottom-3 left-3 z-10 translate-y-2 font-mono text-[11px] font-bold text-blue-400 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100"
        >
          VER DETALHES →
        </Link>
      </div>

      <div className="p-3.5">
        <h2 className="min-h-[42px] font-serif text-base font-semibold leading-tight text-gray-100">
          {movie.title}
        </h2>
        <div className="mt-2 flex gap-2 text-[11px] text-[#747792]">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.duration}</span>
        </div>
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {movie.genres.map((genre) => (
            <span
              key={genre}
              className="rounded border border-[#254578] px-1.5 py-1 font-mono text-[9px] uppercase text-blue-400"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}