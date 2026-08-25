import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFilm, FaBars, FaXmark } from "react-icons/fa6";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-sm transition ${
      isActive
        ? "font-medium text-blue-500"
        : "text-zinc-400 hover:text-blue-500"
    }`;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">

        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500">
            <FaFilm className="text-sm text-zinc-950" />
          </div>

          <span className="text-lg font-bold tracking-tight text-white">
            Streamix
          </span>
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/filme" className={navClass}>
            Filmes
          </NavLink>

          <NavLink to="/favoritos" className={navClass}>
            Favoritos
          </NavLink>

          <NavLink to="/sobre" className={navClass}>
            Sobre
          </NavLink>

          <NavLink to="/equipe" className={navClass}>
            Equipe
          </NavLink>

          <NavLink to="/contato" className={navClass}>
            Contato
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition hover:border-blue-500 hover:text-blue-500 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-zinc-800 bg-zinc-950 px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/filme"
              onClick={closeMenu}
              className={navClass}
            >
              Filmes
            </NavLink>

            <NavLink
              to="/favoritos"
              onClick={closeMenu}
              className={navClass}
            >
              Favoritos
            </NavLink>

            <NavLink
              to="/sobre"
              onClick={closeMenu}
              className={navClass}
            >
              Sobre
            </NavLink>

            <NavLink
              to="/equipe"
              onClick={closeMenu}
              className={navClass}
            >
              Equipe
            </NavLink>

            <NavLink
              to="/contato"
              onClick={closeMenu}
              className={navClass}
            >
              Contato
            </NavLink>

          </div>
        </nav>
      )}
    </header>
  );
}