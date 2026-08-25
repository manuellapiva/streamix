import {
  FaFilm,

} from "react-icons/fa6";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full h-8 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl h-full mx-auto px-5 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-500 flex items-center justify-center rounded-sm">
              <FaFilm className="text-xs text-zinc-950" />
            </div>

            <span className="text-xs font-bold">Streamix</span>
          </div>

          {/* MENU */}
          <nav className="flex items-center gap-6">
            <a
              href="#inicio"
              className="text-xs text-zinc-500 hover:text-blue-500 transition"
            >
              Home
            </a>

            <a
              href="#filmes"
              className="text-xs text-zinc-500 hover:text-blue-500 transition"
            >
              Filmes
            </a>

            <a
              href="#favoritos"
              className="text-xs text-zinc-500 hover:text-blue-500 transition"
            >
              Favoritos
            </a>

            <a href="#sobre" className="text-xs text-blue-500">
              Sobre
            </a>

            <a
              href="#equipe"
              className="text-xs text-zinc-500 hover:text-blue-500 transition"
            >
              Equipe
            </a>

            <a
              href="#contato"
              className="text-xs text-zinc-500 hover:text-blue-500 transition"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

     
        </div>
  );
}
