import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: none; /* Remove o gradiente do body, já que será substituído pela imagem */
    color: #333;
    overflow-x: hidden;
    position: relative;
  }

  body::before {
    content: "";
    position: fixed; /* Fundo fixo */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/assets/computer.png'); /* Caminho para sua imagem */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.1; /* Ajuste a opacidade se necessário */
    z-index: -1; /* Coloca a imagem atrás de todo o conteúdo */
  }
`;



export default GlobalStyle;
