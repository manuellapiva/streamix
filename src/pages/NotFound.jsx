import { Link } from "react-router-dom";
import { FaHouse, FaFilm } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 px-6 text-white">
      <section className="relative flex w-full max-w-4xl flex-col items-center justify-center text-center">
        <div className="absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <p className="text-xs font-semibold uppercase tracking-[5px] text-blue-500">
          Erro de reprodução
        </p>
        <h1 className="mt-4 font-serif text-[120px] font-bold leading-none text-slate-50 md:text-[180px]">
          404
        </h1>

        <h2 className="mt-4 font-serif text-3xl font-bold text-slate-50 md:text-5xl">
          Essa cena não existe.
        </h2>

        <p className="mt-5 max-w-lg text-base leading-7 text-gray-400 md:text-lg">
          Parece que o filme que você está procurando saiu de cartaz.
          A página que você tentou acessar não foi encontrada.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="flex items-center gap-3 rounded-md bg-blue-500 px-6 py-3 text-sm font-medium text-gray-950 transition duration-200 hover:bg-blue-700"
          >
            <FaHouse size={13} />
            Voltar para a Home
          </Link>

          <Link
            to="/filme"
            className="flex items-center gap-3 rounded-md border border-blue-500 px-6 py-3 text-sm font-medium text-blue-500 transition duration-200 hover:bg-blue-700 hover:text-gray-950"
          >
            <FaFilm size={13} />
            Explorar catálogo
          </Link>

        </div>
      </section>
    </main>
  );
}