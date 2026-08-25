import { NavLink } from "react-router-dom";
import { FaFilm } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">

        {/* LOGO */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500">
            <FaFilm className="text-sm text-zinc-950" />
          </div>

          <span className="text-lg font-bold tracking-tight text-white">
            Streamix
          </span>
        </NavLink>


        {/* MENU */}
        <nav className="hidden items-center gap-7 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive
                  ? "font-medium text-blue-500"
                  : "text-zinc-400 hover:text-blue-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/filme"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive
                  ? "font-medium text-blue-500"
                  : "text-zinc-400 hover:text-blue-500"
              }`
            }
          >
            Filmes
          </NavLink>

          <NavLink
            to="/favoritos"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive
                  ? "font-medium text-blue-500"
                  : "text-zinc-400 hover:text-blue-500"
              }`
            }
          >
            Favoritos
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive
                  ? "font-medium text-blue-500"
                  : "text-zinc-400 hover:text-blue-500"
              }`
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/equipe"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive
                  ? "font-medium text-blue-500"
                  : "text-zinc-400 hover:text-blue-500"
              }`
            }
          >
            Equipe
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive
                  ? "font-medium text-blue-500"
                  : "text-zinc-400 hover:text-blue-500"
              }`
            }
          >
            Contato
          </NavLink>

        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition hover:border-blue-500 hover:text-blue-500 md:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </button>

      </div>

    </header>
  );
}