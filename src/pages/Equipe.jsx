import ayla from "../assets/ayla.PNG";
import gustavo from "../assets/milamonte.PNG";
import gabriela from "../assets/gabriela.PNG";
import manuella from "../assets/manupiva.PNG";
import maria from "../assets/maria.PNG";

export default function Equipe() {
  const equipe = [
    {
      name: "Ayla Vilela",
      cargo: "DESIGNER",
      image: ayla,
    },
    {
      name: "Gustavo Milamonte",
      cargo: "DESENVOLVEDOR",
      image: gustavo,
    },
    {
      name: "Gabriela Camacho",
      cargo: "DESIGNER",
      image: gabriela,
    },
    {
      name: "Manuella Piva",
      cargo: "DESENVOLVEDORA",
      image: manuella,
    },
    {
      name: "Maria Vitória Guedes",
      cargo: "DESENVOLVEDORA",
      image: maria,
    },
  ];

  return (
    <section className="min-h-screen bg-[#08090e] px-8 py-16 font-serif">
      
      {/* INTRODUÇÃO */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-blue-500 text-xs font-bold tracking-[3px]">
          AS PESSOAS POR TRÁS
        </span>

        <h1 className="text-5xl font-bold font-serif text-white mt-5">
          Nossa equipe
        </h1>

        <p className="text-gray-400 mt-6 text-base leading-7">
          Um grupo pequeno e obcecado por cinema, design e tecnologia.
          Construímos o Streamix porque queríamos uma plataforma que
          tratasse filmes com a seriedade que eles merecem.
        </p>
      </div>

      {/* EQUIPE */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {equipe.map((item, index) => (
          <div
            key={index}
            className="bg-[#15151f] border border-[#292a35] rounded-sm overflow-hidden hover:scale-[1.02] transition"
          >
            <div className="w-full h-[340px] bg-[#20212a]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold font-serif text-white">
                {item.name}
              </h2>

              <p className="text-blue-500 text-xs font-bold tracking-[1px] mt-2">
                {item.cargo}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* VALORES */}
      <div className="max-w-6xl mx-auto mt-28">

        <div className="text-center mb-14">
          <span className="text-blue-500 text-xs font-bold tracking-[3px]">
            O QUE NOS GUIA
          </span>

          <h2 className="text-4xl font-bold font-serif text-white mt-4">
            Nossos valores
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#15151f] border border-[#292a35]">

          <div className="p-8 border-b md:border-b-0 md:border-r border-[#292a35]">
            <div className="w-8 h-[1px] bg-blue-500 mb-7"></div>

            <h3 className="text-lg font-bold font-serif text-white">
              Honestidade editorial
            </h3>

            <p className="text-gray-400 mt-4 leading-6">
              Nossas avaliações e curadorias são independentes,
              sem patrocínio ou viés comercial.
            </p>
          </div>

          <div className="p-8 border-b md:border-b-0 md:border-r border-[#292a35]">
            <div className="w-8 h-[1px] bg-blue-500 mb-7"></div>

            <h3 className="text-lg font-bold font-serif text-white">
              Diversidade de olhares
            </h3>

            <p className="text-gray-400 mt-4 leading-6">
              Valorizamos obras de diferentes países, idiomas,
              épocas e perspectivas culturais.
            </p>
          </div>

          <div className="p-8">
            <div className="w-8 h-[1px] bg-blue-500 mb-7"></div>

            <h3 className="text-lg font-bold font-serif text-white">
              Experiência primeiro
            </h3>

            <p className="text-gray-400 mt-4 leading-6">
              Cada detalhe da interface foi pensado para facilitar
              a descoberta e o prazer de navegar.
            </p>
          </div>

        </div>

        {/* ESTATÍSTICAS */}
        <div className="max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 bg-[#15151f] border border-[#292a35]">

          <div className="text-center py-8 px-4 border-r border-b md:border-b-0 border-[#292a35]">
            <h3 className="text-3xl font-bold font-serif text-blue-500">
              2022
            </h3>

            <p className="text-gray-500 text-xs tracking-[2px] mt-2">
              FUNDADO EM
            </p>
          </div>

          <div className="text-center py-8 px-4 border-b md:border-b-0 md:border-r border-[#292a35]">
            <h3 className="text-3xl font-bold font-serif text-blue-500">
              6
            </h3>

            <p className="text-gray-500 text-xs tracking-[2px] mt-2">
              PESSOAS NO TIME
            </p>
          </div>

          <div className="text-center py-8 px-4 border-r border-[#292a35]">
            <h3 className="text-3xl font-bold font-serif text-blue-500">
              12+
            </h3>

            <p className="text-gray-500 text-xs tracking-[2px] mt-2">
              FILMES NO CATÁLOGO
            </p>
          </div>

          <div className="text-center py-8 px-4">
            <h3 className="text-3xl font-bold font-serif text-blue-500">
              100%
            </h3>

            <p className="text-gray-500 text-xs tracking-[2px] mt-2">
              INDEPENDENTE
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}