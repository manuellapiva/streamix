import {
  FaFilm,
  FaTableCellsLarge,
  FaMagnifyingGlass,
  FaHeart,
  FaCircleInfo,
  FaMobileScreenButton,
  FaStar,
} from "react-icons/fa6";

const funcionalidades = [
  {
    icon: <FaTableCellsLarge />,
    titulo: "Catálogo Curado",
    texto:
      "Uma seleção cinematográfica refinada, com filmes de diferentes gêneros, épocas e origens.",
  },
  {
    icon: <FaMagnifyingGlass />,
    titulo: "Busca e Filtros",
    texto:
      "Encontre seus filmes favoritos por gênero, ano e outros critérios conforme sua preferência em tempo real.",
  },
  {
    icon: <FaHeart />,
    titulo: "Lista de Favoritos",
    texto:
      "Salve os filmes que mais chamaram sua atenção ou que considera indispensáveis na sua lista pessoal.",
  },
  {
    icon: <FaCircleInfo />,
    titulo: "Detalhes Completos",
    texto:
      "Acesse sinopse, elenco, duração, gênero e todas as informações de cada título.",
  },
  {
    icon: <FaMobileScreenButton />,
    titulo: "Design Responsivo",
    texto:
      "Interface adaptada para desktop, tablet e mobile com a mesma qualidade visual.",
  },
  {
    icon: <FaStar />,
    titulo: "Avaliações",
    texto:
      "Veja as avaliações de cada filme de forma clara e visual para tomar decisões certeiras.",
  },
];

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

      {/* CONTEÚDO */}
      <main id="inicio" className="pt-8">
        {/* FUNCIONALIDADES */}
        <section id="filmes" className="max-w-7xl mx-auto px-5 pt-20">
          {/* TÍTULO */}
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-2">
              O que oferecemos
            </p>

            <h1 className="text-2xl font-bold font-serif">
              Funcionalidades da plataforma
            </h1>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {funcionalidades.map((item, index) => (
              <div
                key={index}
                className="
                  min-h-28
                  bg-zinc-900
                  border
                  border-zinc-800
                  p-4
                  transition
                  duration-300
                  hover:border-blue-500
                  hover:bg-zinc-800
                "
              >
                {/* ÍCONE */}
                <div
                  className="
                    w-7
                    h-7
                    border
                    border-blue-500
                    bg-zinc-950
                    flex
                    items-center
                    justify-center
                    mb-3
                  "
                >
                  <span className="text-xs text-blue-500">{item.icon}</span>
                </div>

                {/* TÍTULO */}
                <h2 className="text-sm font-bold mb-1">{item.titulo}</h2>

                {/* DESCRIÇÃO */}
                <p className="text-xs leading-relaxed text-zinc-500">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
