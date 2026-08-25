import {
  FaFilm,
} from "react-icons/fa6";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 h-8 w-full border-b border-zinc-800 bg-zinc-950">
      
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5">

        {/* LOGO */}
        <div className="flex items-center gap-1">

          <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-blue-500">
            <FaFilm className="text-xs text-zinc-950" />
          </div>

          <span className="text-xs font-bold">
            Streamix
          </span>

        </div>

        {/* MENU */}
        <nav className="flex items-center gap-6">

          <a
            href="#inicio"
            className="text-xs text-zinc-500 transition hover:text-blue-500"
          >
            Home
          </a>

          <a
            href="#filmes"
            className="text-xs text-zinc-500 transition hover:text-blue-500"
          >
            Filmes
          </a>

          <a
            href="#favoritos"
            className="text-xs text-zinc-500 transition hover:text-blue-500"
          >
            Favoritos
          </a>

          <a
            href="#sobre"
            className="text-xs text-blue-500"
          >
            Sobre
          </a>

          <a
            href="#equipe"
            className="text-xs text-zinc-500 transition hover:text-blue-500"
          >
            Equipe
          </a>

          <a
            href="#contato"
            className="text-xs text-zinc-500 transition hover:text-blue-500"
          >
            Contato
          </a>

        </nav>

      </div>

    </header>
  );
}