import styled from 'styled-components';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../../hooks/useView';
import projects from '../../data/projects.json';
import { ProjectCard } from '../projects';


const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Highlights = () => {
  const { ref, inView }=  useInView();
  const animation = useView(inView);

  return (
    <>
      <motion.h2 ref={ref} animate={animation}>Highlighted projects</motion.h2>
      <ProjectsList>
        {projects.map(project => {
          return (
            project.highlighted ? 
            <ProjectCard key={project.id} project={project}></ProjectCard> : ''
          )
        })}
      </ProjectsList>
    </>
  )
}

export default Highlights
