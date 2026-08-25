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
    <>
      <style>{`
            * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #08090e;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .equipe-page {
          min-height: 100vh;
          background: #08090e;
          padding: 70px 40px 90px;
        }
          .equipe-intro {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .equipe-label {
          display: block;
          margin-bottom: 24px;
          color: #4d91ff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .equipe-title {
          margin: 0;
          color: #f3f3f7;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 58px;
          line-height: 1.05;
          font-weight: 700;
        }

        .equipe-description {
          max-width: 500px;
          margin: 28px auto 0;
          color: #aeb9d8;
          font-size: 16px;
          line-height: 1.6;
        }
        

