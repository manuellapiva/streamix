import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaStar, FaArrowRight} from "react-icons/fa";
import imagefundo from "../assets/superman.avif";
import CardFilme from "../components/CardFilme";
import movies from '../data/filmes'

export default function Home() {
    const [favorites, setFavorites] = useState([]); 
    function handleToggleFavorite(id) { setFavorites((current) => current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id] ); }
  return (
    <main className="min-h-screen overflow-x-hidden text-white">

      <section className="relative h-screen min-h-700px w-full overflow-hidden">

        <img
          src={imagefundo}
          alt="Superman"
          className="absolute inset-0 h-full w-full brightness-50"
        />

        <div className="relative z-10 flex h-full items-center">

          <div className="ml-[10%] pt-16">

              <span className="h-px w-8 bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-[4px] text-blue-500">
                Filme em destaque
              </span>

            <h1 className="font-serif text-6xl font-bold text-slate-50 md:text-7xl">
              Superman: O Homem de Aço
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-neutral-100">

              <div className="flex items-center gap-2px text-blue-500">
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} className="text-gray-800" />
              </div>

              <span className="font-medium text-blue-500">
                7.5
              </span>

              <span>2013</span>

              <span>2h 23min</span>

              <span className="rounded border border-blue-800 bg-blue-950 px-2 py-1 text-[10px] font-medium uppercase text-blue-500">
                Ação
              </span>

              <span className="rounded border border-blue-800 bg-blue-950 px-2 py-1 text-[10px] font-medium uppercase text-blue-500">
                Aventura
              </span>

              <span className="rounded border border-blue-800 bg-blue-950 px-2 py-1 text-[10px] font-medium uppercase text-blue-500">
                Sci-Fi
              </span>
            </div>

            <p className="mt-7 max-w-500px text-[17px] leading-8 text-gray-300">
              Com a iminente destruição de Krípton, seu planeta natal, 
              Jor-El e sua mulher procuram preservar a raça enviando o 
              filho recém-nascido para a Terra.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link to="/filme/4" className="flex items-center gap-3 rounded-md bg-blue-500 px-6 py-3 text-sm font-medium text-gray-950 transition duration-200 hover:bg-blue-700">
                <FaPlay size={10} />
                Assistir agora
              </Link>

              <Link to="/filme" className="rounded-md border border-blue-500 px-6 py-3 text-sm font-medium text-blue-500 transition duration-200 hover:bg-blue-700 hover:text-gray-950">
                Explorar catálogo
              </Link>

            </div>
          </div>
        </div>
      </section>

    <section className="bg-gray-950 px-6 py-20"> 
        <div className="mx-auto max-w-1216px"> 
            <div className="mb-10 flex items-end justify-between"> 
                <div> 
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-blue-500"> 
                        Seleção editorial 
                    </p> 
                    <h2 className="font-serif text-4xl font-bold text-slate-50 md:text-5xl"> 
                        Filmes em Destaque 
                    </h2> 
                </div> 

            <Link to="/filme" className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-slate-50"> 
                Ver todos 
                <FaArrowRight size={12} /> 
            </Link> 
        </div> 
                    
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6"> 
                {movies.slice(0,6).map((movie) => ( <CardFilme key={movie.id} movie={movie} isFavorite={favorites.includes(movie.id)} onToggleFavorite={handleToggleFavorite} /> ))} 
            </div> 

        </div>
         
    </section>

      <section className="relative flex min-h-500px items-center justify-center border-t border-gray-950 bg-gray-950 px-6 py-28">

        <div className="flex max-w-650px flex-col items-center text-center">

          <h2 className="font-serif text-4xl font-bold leading-[1.1] text-slate-50 md:text-5xl">

            Mais de 12 filmes

            <br />

            <span className="text-blue-500">
              esperando por você
            </span>

          </h2>

          <p className="mt-7 max-w-500px text-base leading-7 text-gray-300">
            Explore o catálogo completo, filtre por gênero e organize seus favoritos.
          </p>

          <Link to="/filme" className="mt-10 rounded-md bg-blue-500 px-8 py-3.5 text-sm font-medium text-gray-950 transition duration-200 hover:bg-blue-700">
            Explorar o catálogo
          </Link>

        </div>

      </section>

    </main>
  );
}