import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#08090e] border-t border-[#242631] px-6 md:px-12 pt-16 pb-5">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 pb-12">

          <div>
            <div className="flex items-center gap-3">

              <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                <div className="grid grid-cols-2 gap-[2px]">
                  <span className="w-2 h-2 bg-[#08090e]"></span>
                  <span className="w-2 h-2 bg-[#08090e]"></span>
                  <span className="w-2 h-2 bg-[#08090e]"></span>
                  <span className="w-2 h-2 bg-[#08090e]"></span>
                </div>
              </div>

              <h2 className="text-white text-xl font-bold font-serif">
                Streamix
              </h2>

            </div>

            <p className="text-gray-400 text-sm leading-[23px] mt-5 max-w-[310px]">
              Uma plataforma criada para amantes do cinema.
              Descubra, organize e explore os melhores filmes
              com uma experiência editorial única.
            </p>
          </div>


          <div className="md:ml-auto">
            <h3 className="text-gray-500 text-xs font-semibold tracking-[1.5px] mb-5">
              NAVEGAR
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 text-sm hover:text-blue-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/filmes"
                  className="text-gray-400 text-sm hover:text-blue-500 transition"
                >
                  Filmes
                </Link>
              </li>

              <li>
                <Link
                  to="/favoritos"
                  className="text-gray-400 text-sm hover:text-blue-500 transition"
                >
                  Favoritos
                </Link>
              </li>

              <li>
                <Link
                  to="/sobre"
                  className="text-gray-400 text-sm hover:text-blue-500 transition"
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  to="/equipe"
                  className="text-gray-400 text-sm hover:text-blue-500 transition"
                >
                  Equipe
                </Link>
              </li>

              <li>
                <Link
                  to="/contato"
                  className="text-gray-400 text-sm hover:text-blue-500 transition"
                >
                  Contato
                </Link>
              </li>

            </ul>
          </div>


          <div>
            <h3 className="text-gray-500 text-xs font-semibold tracking-[1.5px] mb-5">
              GÊNEROS
            </h3>

            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                Drama
              </li>

              <li className="text-gray-400 text-sm">
                Thriller
              </li>

              <li className="text-gray-400 text-sm">
                Sci-Fi
              </li>

              <li className="text-gray-400 text-sm">
                Noir
              </li>

              <li className="text-gray-400 text-sm">
                Terror
              </li>

              <li className="text-gray-400 text-sm">
                Ação
              </li>
            </ul>
          </div>

        </div>


        <div className="border-t border-[#242631]"></div>


        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">

          <p className="text-[#3f4a68] text-xs">
            © 2024 Streamix. Todos os direitos reservados.
          </p>

          <p className="text-[#3f4a68] text-xs">
            Design e desenvolvimento com amor pelo cinema.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;