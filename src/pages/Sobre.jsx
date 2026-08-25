import {
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

        {/* MISSÃO */}
        <section id="sobre" className="max-w-7xl mx-auto px-5 mt-12">
          <div className="h-64 border border-zinc-800 bg-zinc-900 flex overflow-hidden">
            {/* TEXTO */}
            <div className="w-1/2 px-10 py-10 flex flex-col justify-center">
              <p className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-2">
                Missão
              </p>

              <h2 className="text-xl font-bold font-serif leading-tight max-w-sm mb-4">
                Cinema como patrimônio cultural
              </h2>

              <p className="text-xs leading-relaxed text-zinc-500 max-w-lg mb-3">
                Acreditamos que filmes são mais do que entretenimento — são
                registros do tempo, da cultura e da humanidade. O Streamix
                existe para facilitar o acesso e a nossa experiência.
              </p>

              <p className="text-xs leading-relaxed text-zinc-500 max-w-lg">
                Nossa curadoria prioriza obras que desafiam, emocionam e
                provocam reflexão. O cinema de arte ao blockbuster tem
                relevância.
              </p>
            </div>

            {/* IMAGEM */}
            <div
              className="
                w-1/2
                h-full
                bg-cover
                bg-center
                relative
              "
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* ESPAÇO ANTES DO FOOTER */}
        <div className="h-64" />
      </main>
    </div>
  );
}
