import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Estilos globais para configurar o fundo
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', sans-serif;    
    background-color: #f0f0f0; /* Fundo neutro */
    overflow-x: hidden; /* Remove a rolagem horizontal */
  }
  h1{
    background-color: #3b5708;
    width: 100%;
    color: wheat;
  }
`;

const ProjectsSection = styled.section`
  display: flex; /* Define layout flexível */
  flex-wrap: wrap; /* Permite quebra de linha quando necessário */
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  width: 100vw; /* Ocupa toda a largura */
  height: 100%; /* Ocupa toda a altura */
  min-height: 100vh; /* Garante altura mínima de 100% da tela */
  background-color: #699469; /* Cor de fundo */
  padding: 20px;
  gap: 20px; /* Espaçamento entre os cartões */
  box-sizing: border-box;
  @media (max-width: 780px) {
    /* Aqui você pode ajustar as propriedades se necessário */
    height: 100%; /* No caso de telas menores */
  }
`;


const ProjectCard = styled.div`
  flex: 1 1 calc(35% - 80px); /* Define a largura como 25% menos o espaço */
  max-width: 300px; /* Largura máxima */
  margin: 10px; /* Espaçamento externo */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  img {
    width: 90%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.2rem;
    margin: 15px 0 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    text-align: justify;
  }
  @media (max-width: 480px) {
    h4{
      font-size: 8px;
    }
    p{
      font-size: 5px;
    }
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
      <h1>Projetos</h1>
      <ProjectsSection>
        
        {projectList.map((project) => (
          <ProjectCard key={project.id}>

            <img
              src={project.image || "/assets/default.jpg"} // Caminho para imagem padrão
              alt={project.name}
            />
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectsSection>
    </>
  );
};

export default Projects;
