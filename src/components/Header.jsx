import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed; /* Fixa o cabeçalho no topo da tela */
  top: 0;
  left: 0;
  right: 0;
  background-color: #414763;
  color: #fff; /* Texto branco para contraste */
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #ddd; /* Linha de separação sutil */
  z-index: 1000; /* Garante que o cabeçalho fique sobre outros elementos */

  /* Sombras e arredondamento para um design mais moderno */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
  max-width: 600px;
  /* Adaptação responsiva */
  @media (max-width: 768px) {
    padding: 15px;
    width: 100%;
  }

  /* Personalização do título */
  h1 {
    font-size: 2rem;
    margin: 0;
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
      <p>Desenvolvedor Web Full'Stack | React | JS | PHP | BD </p>
    </HeaderContainer>
  );
};

export default Header;