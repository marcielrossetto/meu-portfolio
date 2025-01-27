import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Estilo do cabeçalho
const HeaderContainer = styled.header`
  background-color: #031772;
  color: #fff;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #ddd;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &.scrolled {
    transform: translateY(-50px); /* Cabeçalho vai para cima ao rolar */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 3.5rem;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    color: #a8ec08;
    text-shadow: 0 3px 6px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: glowAndBounce 4s infinite;

    /* Aplica gradiente ao texto */
    background: linear-gradient(90deg, #230cf1, #f0a202, #ff6347, #eaebec);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Define a animação do título */
  @keyframes glowAndBounce {
    0%, 100% {
      transform: translateY(0);
      text-shadow: 0 0 10px rgba(55, 148, 140, 0.5), 0 0 20px #2bfa01;
    }
    50% {
      transform: translateY(-10px);
      text-shadow: 0 0 20px rgba(134, 241, 157, 0.8), 0 0 30px #93f048;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

// Estilo para os links do cabeçalho
const LinksContainer = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin: 10px 0;

  a {
    color: #ffd700;
    text-decoration: none;
    font-weight: bold;
    margin: 0 10px;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #0c89f0; /* Muda a cor ao passar o mouse */
      transform: scale(1.1); /* Aumenta ligeiramente o tamanho */
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detecta rolagem da página
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer className={scrolled ? "scrolled" : ""}>
      <h1>Marciel Rossetto</h1>
      <LinksContainer>
        <a href="/#template1">Desenvolvedor Web Full'Stack</a> | 
        <a href="/#template2">React</a> | 
        <a href="/#template3">JavaScript</a> | 
        <a href="/#template4">PHP</a> | 
        <a href="/#template5">Banco de Dados</a> |
        <a href="/#template6">AWS</a>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
