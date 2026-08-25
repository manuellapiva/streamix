import genteGrande from "../assets/gente_grande.jpg";
import esposaDeMentirinha from "../assets/esposa_de_mentirinha.jpg";
import vingadoresUltimato from "../assets/vingadores_ultimato.jpeg";
import superman from "../assets/superman.jpg";
import diarioDeUmaPaixao from "../assets/diario_de_uma_paixao.webp";
import it from "../assets/it.jpg";
import telefonePreto from "../assets/telefone_preto.jpg";
import walle from "../assets/walle.jpg";
import interstellar from "../assets/interstellar.png";
import devoradorDeEstrelas from "../assets/devorador_de_estrelas.jfif";
import odisseia from "../assets/odisseia.webp";
import homemAranha from "../assets/homem_aranha.jpg";

const movies = [
  {
    id: 1,
    title: "Gente Grande",
    year: 2010,
    duration: "1h 42min",
    rating: 6.0,
    genres: ["Comédia"],
    image: genteGrande,
    description:
      "Cinco amigos de infância se reencontram anos depois para passar um fim de semana juntos com suas famílias, revivendo antigas amizades e confusões.",
  },

  {
    id: 2,
    title: "Esposa de Mentirinha",
    year: 2011,
    duration: "1h 57min",
    rating: 6.4,
    genres: ["Comédia", "Romance"],
    image: esposaDeMentirinha,
    description:
      "Um cirurgião plástico convence sua assistente a fingir ser sua esposa para esconder uma mentira, mas a situação acaba ficando muito mais complicada.",
  },

  {
    id: 3,
    title: "Vingadores: Ultimato",
    year: 2019,
    duration: "3h 01min",
    rating: 8.2,
    genres: ["Ação", "Aventura", "Sci-Fi"],
    image: vingadoresUltimato,
    description:
      "Após acontecimentos devastadores, os Vingadores restantes precisam encontrar uma maneira de reverter as consequências e enfrentar novamente seu maior inimigo.",
  },

  {
    id: 4,
    title: "Super-Man",
    year: 2025,
    duration: "2h 09min",
    rating: 7.5,
    genres: ["Ação", "Aventura", "Sci-Fi"],
    image: superman,
    description:
      "Um novo capítulo da história do Superman acompanha o herói enquanto ele tenta equilibrar sua origem extraterrestre com sua vida na Terra.",
  },

  {
    id: 5,
    title: "Diário de uma Paixão",
    year: 2004,
    duration: "2h 03min",
    rating: 7.8,
    genres: ["Drama", "Romance"],
    image: diarioDeUmaPaixao,
    description:
      "Um homem lê para uma mulher uma história de amor marcada pelas diferenças sociais, pelo tempo e por uma ligação que permanece mesmo diante das dificuldades.",
  },

  {
    id: 6,
    title: "IT - A Coisa",
    year: 2017,
    duration: "2h 15min",
    rating: 7.3,
    genres: ["Terror", "Suspense"],
    image: it,
    description:
      "Um grupo de crianças enfrenta uma entidade sobrenatural que assume a forma de seus maiores medos e aterroriza uma pequena cidade.",
  },

  {
    id: 7,
    title: "O Telefone Preto",
    year: 2021,
    duration: "1h 43min",
    rating: 7.0,
    genres: ["Terror", "Suspense"],
    image: telefonePreto,
    description:
      "Um garoto sequestrado encontra um telefone misterioso que começa a receber chamadas de vítimas anteriores de seu sequestrador.",
  },

  {
    id: 8,
    title: "WALL-E",
    year: 2008,
    duration: "1h 38min",
    rating: 8.4,
    genres: ["Aventura", "Sci-Fi"],
    image: walle,
    description:
      "Em um futuro distante, um pequeno robô responsável por limpar a Terra abandonada encontra uma nova companhia e acaba descobrindo uma missão que pode mudar o destino da humanidade.",
  },

  {
    id: 9,
    title: "Interstellar",
    year: 2014,
    duration: "2h 49min",
    rating: 8.7,
    genres: ["Sci-Fi", "Drama", "Aventura"],
    image: interstellar,
    description:
      "Com a Terra enfrentando uma crise ambiental, um grupo de exploradores parte em uma missão através de um buraco de minhoca em busca de um novo lar para a humanidade.",
  },

  {
    id: 10,
    title: "Devorador de Estrelas",
    year: 2024,
    duration: "2h 02min",
    rating: 7.6,
    genres: ["Sci-Fi", "Aventura"],
    image: devoradorDeEstrelas,
    description:
      "Uma ameaça misteriosa surge no espaço e começa a consumir fontes de energia estelar, colocando diferentes mundos em risco.",
  },

  {
    id: 11,
    title: "A Odisseia",
    year: 2026,
    duration: "2h 49min",
    rating: 8.0,
    genres: ["Aventura", "Drama"],
    image: odisseia,
    description:
      "Após a Guerra de Troia, um herói inicia uma longa jornada de volta para casa enfrentando criaturas, deuses e desafios que colocam sua determinação à prova.",
  },

  {
    id: 12,
    title: "Homem-Aranha",
    year: 2002,
    duration: "2h 01min",
    rating: 7.4,
    genres: ["Ação", "Aventura", "Sci-Fi"],
    image: homemAranha,
    description:
      "Após ser picado por uma aranha geneticamente modificada, um jovem desenvolve habilidades extraordinárias e decide usá-las para proteger sua cidade.",
  },
];

export default movies;