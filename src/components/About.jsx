import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 40px;
  background-color: #fff;
  text-align: center;

  button {
    background: linear-gradient(132deg, rgb(31, 207, 195) 0%, rgb(31, 145, 207) 100%);
    border-radius: 8px;
    width: 100%;
    max-width: 250px;
    height: 60px;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.8s ease, transform 0.2s ease;
    margin-top: 20px;
  }

  button:hover {
    background: linear-gradient(132deg, rgb(224, 235, 213) 0%, rgb(37, 148, 141) 100%);
    transform: scale(1.05);
  }

  button:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    padding: 20px;

    button {
      width: 90%;
      max-width: none;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: 14px;
      height: 50px;
    }
  }
`;

const About = () => {
  return (
    <AboutSection>
      <h2> Inovação em cada linha de código</h2>
      <p>
      Inovação em cada linha de código</p>
<p>Transformando Visões em Realidade Digital</p>
<p>
Sou Marciel um desenvolvedor de software apaixonado por tecnologia
      </p>
      <button>Conheca meu trabalho</button>
    </AboutSection>
  );
};

export default About;