import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Estilos globais para configurar o fundo
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-image: url('/assets/background.jpg'); /* Substitua pelo caminho da imagem desejada */
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Garante que o fundo esteja fixo */
    background-repeat: no-repeat;
    color: #333;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
  }
`;

const ProjectsSection = styled.section`
  width: 100%;
  max-width: 1200px; /* Define um limite para o conteúdo */
  margin: 0 auto; /* Centraliza na tela */
  padding: 40px 20px; /* Adiciona espaçamento interno */
  display: flex;
  flex-direction: column; /* Define layout em coluna */
  gap: 20px; /* Espaçamento entre os cartões */
  box-sizing: border-box;
`;

const ProjectCard = styled.div`
  margin: 0 auto; /* Centraliza os cartões horizontalmente */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  width: 100%; /* O cartão ocupa toda a largura disponível */
  max-width: 1200px; /* Limita a largura máxima */
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.5rem;
    margin: 15px 0 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.4;
    text-align: justify;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Principais Funcionalidades",
      description:
        "Formulários Dinâmicos: Criação e gestão simplificada de formulários personalizados.",
      image: "/assets/GerCelular.png",
    },
    {
      id: 2,
      name: "Validação Avançada de Dados",
      description:
        "Verificação em tempo real para dados válidos e precisos.",
      image: "/assets/login.png",
    },
    {
      id: 3,
      name: "Compatibilidade Ampla",
      description:
        "Interface responsiva e otimizada para qualquer dispositivo.",
      image: "/assets/GerCelular.png",
    },
    {
      id: 4,
      name: "Projeto 4",
      description: "Descrição do Projeto 4",
      image: "/assets/GerDesktop.png",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <ProjectsSection>
        <header>
          <h2>Meus Projetos</h2>
        </header>
        {projectList.map((project) => (
          <ProjectCard key={project.id}>
            <img
              src={project.image || "/assets/default.jpg"} // Caminho para imagem padrão
              alt={project.name}
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectsSection>
    </>
  );
};

export default Projects;
