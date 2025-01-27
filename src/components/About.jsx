import React, { useEffect, useState } from "react";
import styled from "styled-components";

const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${(props) => (props.isVisible ? "-1" : "-2")};
  overflow: hidden;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 0.5s ease;

  video {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutSection = styled.section`
  padding: 40px;
  text-align: left;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  line-height: 1.6;
  z-index: 10;
  margin-top: 100vh; /* Espaçamento inicial para que apareça após o vídeo */

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
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const aboutSection = document.querySelector("section");
    const headerHeight = 0; // Ajustar conforme necessário (se houver um header fixo)
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop <= headerHeight) {
      setIsVisible(false); // Remove o vídeo
    } else {
      setIsVisible(true); // Exibe o vídeo
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Adiciona o ouvinte de scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpeza ao desmontar o componente
    };
  }, []);

  return (
    <>
      <VideoWrapper isVisible={isVisible}>
        <video autoPlay loop muted>
          <source src="/assets/video3.mp4" type="video/mp4" />
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
