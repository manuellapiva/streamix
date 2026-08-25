import ayla from "./assets/ayla.PNG";
import gustavo from "./assets/milamonte.PNG";
import gabriela from "./assets/gabriela.PNG";
import manuella from "./assets/manupiva.PNG";
import maria from "./assets/maria.PNG";

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
    <section className="min-h-screen bg-[#08090e] px-8 py-16">

      <div className="max-w-3xl mx-auto text-center">
        <span className="text-blue-500 text-xs font-bold tracking-[3px]">
          AS PESSOAS POR TRÁS
        </span>

        <h1 className="text-5xl font-bold text-white mt-5">
          Nossa equipe
        </h1>

        <p className="text-gray-400 mt-6 text-base leading-7">
          Um grupo pequeno e obcecado por cinema, design e tecnologia.
          Construímos o Streamix porque queríamos uma plataforma que
          tratasse filmes com a seriedade que eles merecem.
        </p>
      </div>

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
              <h2 className="text-xl font-bold text-white">
                {item.name}
              </h2>

              <p className="text-blue-500 text-xs font-bold tracking-[1px] mt-2">
                {item.cargo}
              </p>
            </div>
          </div>
        ))}
      </div>
