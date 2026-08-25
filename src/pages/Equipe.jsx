import ayla from "./assets/ayla.PNG";
import gustavo from "./assets/milamonte.PNG";
import gabriela from "./assets/gabriela.PNG";
import manuella from "./assets/manupiva.PNG";
import maria from "./assets/maria.PNG";

export default function Equipe() {
    const equipe = [
  {
    nome: "Ayla Vilela",
    cargo: "DESIGNER",
    image: ayla,
  },
  {
    nome: "Gustavo Milamonte",
    cargo: "DESENVOLVEDOR",
    image: gustavo,
  },
  {
    nome: "Gabriela Camacho",
    cargo: "DESIGNER",
    image: gabriela,
  },
  {
    nome: "Manuella Piva",
    cargo: "DESENVOLVEDORA",
    image: manuella,
  },
  {
    nome: "Maria Vitória Guedes",
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