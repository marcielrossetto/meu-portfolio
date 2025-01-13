import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #1e3a8a, #2563eb);
    color: #333;
    overflow-x: hidden;
    position: relative;
  }

  body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/assets/fundo2.jpg'); /* Caminho corrigido */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.1; /* Ajuste conforme necessário */
    pointer-events: none; /* Para não interferir com interações */
  }
`; // Fechamento da declaração do GlobalStyle

export default GlobalStyle;
