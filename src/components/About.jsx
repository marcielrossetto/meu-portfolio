import React, { useEffect, useState } from "react";
import styled from "styled-components";

const VideoWrapper = styled.div`
  position: ${(props) => (props.isBackground ? "absolute" : "fixed")};
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isBackground ? "100vh" : "100vh")};
  z-index: ${(props) => (props.isBackground ? "-2" : "-1")};
  overflow: hidden;
  transition: height 0.5s ease, position 0.5s ease;

  video {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
`;

const AboutSection = styled.section`
  padding: 40px;
  text-align: left;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  line-height: 1.6;
  z-index: 10; /* Garante que fique acima do vídeo */
  margin-top: 60vh; /* Adiciona espaçamento para que o conteúdo não fique atrás do vídeo */

  h2 {
    font-size: 1.2rem;
    color: #5AB1A2;
    font-style: italic;
    margin-bottom: 20px;
  }

  p {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 10px 0;
    color: #34D5C5;
  }

  p strong {
    color: #34D5C5;
    font-size: 2.8rem;
    text-shadow: 1px 1px #eee;
    font-weight: bold;
  }

  .highlight {
    color: #f31616;
    font-size: 1rem;
    font-weight: 400;
    text-shadow: none;
    font-family: 'Playwrite India';
  }

  @media (max-width: 768px) {
    p {
      font-size: 2rem;
    }

    p strong {
      font-size: 2.2rem;
      color: #e98b20;
      text-shadow: 1px 1px #eee;
      font-weight: bold;
    }

    .highlight {
      color: #346e60;
      font-size: 10px;
      font-weight: 400;
      text-shadow: none;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 1.5rem;
    }

    p strong {
      font-size: 1.8rem;
    }
  }
`;

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isBackground, setIsBackground] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY); // Captura a posição do scroll
    if (window.scrollY > 600) {
      setIsBackground(true); // Altera para fundo total ao rolar para baixo
    } else {
      setIsBackground(false); // Volta para o modo fixo
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Adiciona o ouvinte de scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpeza ao desmontar o componente
    };
  }, []);

  const scale = Math.max(1 - scrollY / 800, 0.5); // Define o fator de escala com base na rolagem

  return (
    <>
      <VideoWrapper isBackground={isBackground}>
        <video autoPlay loop muted style={{ transform: `scale(${scale})` }}>
          <source src="/assets/video2.mp4" type="video/mp4" />
        </video>
      </VideoWrapper>
      <AboutSection>
        <h2>👋 Olá, eu sou Marciel</h2>
        <p>
          Gosto de fazer "<strong>coisas divertidas</strong>" e{" "}
          <strong>interativas</strong> com código.{" "}
          <span className="highlight">
            Também falo e escrevo sobre essas coisas.
          </span>
        </p>
      </AboutSection>
    </>
  );
};

export default About;
