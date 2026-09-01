 # 🎬 Streamix

 Streamix é uma aplicação web para explorar um catálogo de filmes. É possível pesquisar títulos, filtrar por gênero, ordenar os resultados, consultar detalhes e salvar filmes favoritos para acessá-los depois.

 ## ✨ Funcionalidades

 - Catálogo com filmes, notas, gêneros, duração, ano e descrição.
 - Busca de filmes pelo título.
 - Filtro por gênero.
 - Ordenação por relevância, melhor nota, lançamento mais recente ou ordem alfabética.
 - Página de detalhes para cada filme.
 - Lista de favoritos com persistência no navegador usando `localStorage`.
 - Páginas institucionais de início, sobre, equipe e contato.
 - Formulário de contato com validação usando React Hook Form e Zod.
 - Layout responsivo para diferentes tamanhos de tela.

 ## 🛠️ Tecnologias

 - React 19
 - Vite
 - React Router
 - Tailwind CSS
 - React Icons
 - React Hook Form
 - Zod
 - ESLint

 ## 🚀 Como executar

 ### 📋 Pré-requisitos

 - Node.js instalado.
 - npm instalado.

 ### 📦 Instalação

 Clone o repositório, entre na pasta do projeto e instale as dependências:

 ```bash
 npm install
 ```

 Inicie o servidor de desenvolvimento:

 ```bash
 npm run dev
 ```

 Depois, abra no navegador o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

 ## 📜 Scripts disponíveis

 | Comando | Descrição |
 | --- | --- |
 | `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática. |
 | `npm run build` | Gera a versão otimizada para produção. |
 | `npm run preview` | Executa uma prévia da build de produção. |
 | `npm run lint` | Verifica problemas de código com ESLint. |

 ## 🧭 Rotas

 | Rota | Página |
 | --- | --- |
 | `/` | Página inicial |
 | `/filme` | Catálogo de filmes |
 | `/filme/:id` | Detalhes de um filme |
 | `/favoritos` | Filmes favoritos |
 | `/sobre` | Sobre o Streamix |
 | `/contato` | Formulário de contato |
 | `/equipe` | Equipe do projeto |
 | `/*` | Página de Erro |

 ## 📁 Estrutura do projeto

 ```text
 src/
 ├── App.jsx                  # Rotas e estado global de favoritos
 ├── index.css                # Estilos globais
 ├── main.jsx                 # Ponto de entrada da aplicação
 ├── assets/                  # Imagens dos filmes
 ├── components/              # Componentes reutilizáveis
 ├── data/filmes.js           # Dados estáticos do catálogo
 ├── pages/                   # Páginas acessíveis pelas rotas
 └── schemas/                 # Schemas de validação dos formulários
 ```

 ## 💡 Observações

 Os dados dos filmes são estáticos e ficam em `src/data/filmes.js`. Os favoritos são armazenados localmente no navegador; por isso, eles não são compartilhados entre dispositivos ou navegadores diferentes.

 ## 👥 Autores - Grupo 2

 🙅‍♀️ Ayla Cristina da Silva Vilela <br>
 😘 Gabriella Camacho Stavarengo <br>
 😜 Gustavo Millamonte <br>
 😻 Manuella da Silva Piva <br>
 🙄 Maria Vitória Guedes Ferreira

 ## 👨‍🏫 Professores - SENAI

 👨‍💻 Leandro Grosso <br>
 👨‍💻 Eduardo Correia
