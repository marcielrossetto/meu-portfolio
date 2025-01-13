import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 40px;
  background-color: #f9f9f9;
`;

const ProjectCard = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const Projects = () => {
  const projectList = [
    { id: 1, name: "Projeto 1", description: "Descrição do Projeto 1", image: "/assets/fundo2.jpg" },
    { id: 2, name: "Projeto 2", description: "Descrição do Projeto 2", image: "/assets/fundo.jpg" },
  ];

  return (
    <ProjectsSection>
      <h2>Meus Projetos</h2>
      {projectList.map((project) => (
        <ProjectCard key={project.id}>
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
};

export default Projects;
