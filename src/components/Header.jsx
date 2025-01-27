import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #414763;
  color: #fff; /* Texto branco para contraste */
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #ddd; /* Linha de separação sutil */
  z-index: 1000; /* Garante que o cabeçalho fique sobre outros elementos */
  width: 100%;
  /* Sombras e arredondamento para um design mais moderno */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
  /* Adaptação responsiva */
  @media (max-width: 768px) {
    padding: 15px;
    width: 100%;
  }

  /* Personalização do título */
  h1 {
  font-size: 3rem;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  animation: swingAndColor 5s infinite; /* Aplica a animação */
}

/* Define a animação */
@keyframes swingAndColor {
  0% {
    transform: rotate(0deg); /* Posição inicial */
    color: #4e59ec; /* Cor inicial */
  }
  25% {
    transform: rotate(-5deg); /* Inclina para a esquerda */
    color: #1481f5; /* Azul claro */
  }
  50% {
    transform: rotate(5deg); /* Inclina para a direita */
    color: #14c8e7; /* Laranja */
  }
  75% {
    transform: rotate(-5deg); /* Inclina para a esquerda novamente */
    color: #28A745; /* Verde */
  }
  100% {
    transform: rotate(0deg); /* Volta à posição inicial */
    color: #b0ec4f; /* Cor inicial */
  }
}


  /* Aumenta a responsividade para telas pequenas */
  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Marciel Rossetto</h1>
      <p>Desenvolvedor Web Full'Stack | React | JS | PHP | Banco de Dados </p>
    </HeaderContainer>
  );
};

export default Header;