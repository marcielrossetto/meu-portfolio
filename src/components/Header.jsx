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
  transition: transform 0.3s ease;

  &.scrolled {
    transform: translateY(-50px); /* Cabeçalho vai para cima ao rolar */
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    animation: swingAndColor 5s infinite;
  }

  /* Define a animação do título */
  @keyframes swingAndColor {
    0% { transform: rotate(0deg); color: #a8af63; }
    25% { transform: rotate(-5deg); color: #1481f5; }
    50% { transform: rotate(5deg); color: #14c8e7; }
    75% { transform: rotate(-5deg); color: #28A745; }
    100% { transform: rotate(0deg); color: #b0ec4f; }
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

// Estilo para o texto do parágrafo
const LinksContainer = styled.p`
  font-size: 1rem;
  color: #fff;
  margin: 10px 0;

  a {
    color: #ffd700;
    text-decoration: none;
    font-weight: bold;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6347; /* Muda a cor ao passar o mouse */
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
        <a href="/template1">Desenvolvedor Web Full'Stack</a> | 
        <a href="/template2">React</a> | 
        <a href="/template3">JS</a> | 
        <a href="/template4">PHP</a> | 
        <a href="/template5">Banco de Dados</a>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
