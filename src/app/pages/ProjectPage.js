import { BaseLayout } from '../layouts';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json';

import { FullImage, Introduction, Deliverables, InformationSection } from '../components/projects';


const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id - 1];
  return (
    <BaseLayout>
      <FullImage img={project.image} />

      <Introduction title={project.name} intro={project.intro} />

      <Deliverables deliverables={project.deliverables} />

      <InformationSection img={project.part1Image} content={project.part1} imgPos={"left"} tech={false} />
   
      <InformationSection img={project.part2Image} content={project.technologies} imgPos={"right"} tech={true} />
      
      <FullImage img={project.bottomImage} />
    </BaseLayout>
  )
}

export default ProjectPage;

