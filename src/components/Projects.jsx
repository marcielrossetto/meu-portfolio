import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Estilos globais para configurar o fundo e fontes
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5; /* Fundo claro */
    overflow-x: hidden; /* Remove a rolagem horizontal */
  }

  h1.project {
    text-align: center;
    color: #333;
    font-size: 2.5rem;
    margin-top: 20px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column; /* Colocar os projetos um embaixo do outro */
  justify-content: center;
  align-items: center;
  width: 100%; /* Garantir que a seção ocupe 100% da largura */
  min-height: 100vh;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
`;

const ProjectCard = styled.div`
  width: 100%; /* O cartão agora ocupará 100% da largura */
  margin: 10px 0;
  padding: 20px;
  background-color: ${(props) => props.bgColor || '#4caf50'}; /* Cor de fundo personalizada */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Adicionando transição para o zoom e sombra */

  &:hover {
    transform: scale(1.1); /* Efeito de zoom */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Sombra mais forte no hover */
  }

  img {
    width: 40%; /* A imagem ocupará 40% da largura do cartão */
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.5rem;
    margin: 15px 0;
    color: #fff; /* Cor da fonte do título */
  }

  p {
    font-size: 1rem;
    color: #fff; /* Cor da fonte da descrição */
  }


  @media (max-width: 768px) {
    width: 100%; /* Garantir que ocupe toda a largura em dispositivos menores */
  }

  @media (max-width: 480px) {
    width: 100%; /* Garantir que ocupe toda a largura em dispositivos ainda menores */
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
      bgColor: "#ff5733", // Cor personalizada
    },
    {
      id: 2,
      name: "Validação Avançada de Dados",
      description:
        "Verificação em tempo real para dados válidos e precisos.",
      image: "/assets/login.png",
      bgColor: "#33c4ff", // Cor personalizada
    },
    {
      id: 3,
      name: "Compatibilidade Ampla",
      description:
        "Interface responsiva e otimizada para qualquer dispositivo.",
      image: "/assets/GerCelular.png",
      bgColor: "#4caf50", // Cor personalizada
    },
    {
      id: 4,
      name: "Design Moderno",
      description: "Design limpo e simples para melhorar a experiência do usuário.",
      image: "/assets/GerDesktop.png",
      bgColor: "#ffcc00", // Cor personalizada
    },
    {
      id: 5,
      name: "Segurança Avançada",
      description: "Camadas de segurança para proteger os dados dos usuários.",
      image: "/assets/GerCelular.png",
      bgColor: "#9c27b0", // Cor personalizada
    },
  ];

  return (
    <>
      <GlobalStyle />
      <h1 className="project">| ProjetoS |</h1>
      <ProjectsSection>
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            className="project-card"
            bgColor={project.bgColor} // Passando a cor personalizada como prop
          >
            <img
              src={project.image || "/assets/default.jpg"}
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
