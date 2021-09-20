import styled from 'styled-components';
import { BaseLayout } from '../layouts';
import projects from '../data/projects.json';
import { ProjectCard } from '../components/projects';

const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  padding-bottom: 1.5rem;
`;

const ProjectsPage = () => {
  
  return (
    <BaseLayout>
      <Title>My projects</Title>
      <p>In the past year, I have worked on several projects. Here is a brief overview of some of these projects.</p>
      <ProjectsList>
        {projects.map(project => {
          return (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          )
        })}
      </ProjectsList>
      

      
    </BaseLayout>
  )
}

export default ProjectsPage;

