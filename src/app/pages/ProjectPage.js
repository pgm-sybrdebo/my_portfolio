import styled from 'styled-components';
import { BaseLayout } from '../layouts';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json';
import { TechnologyCard } from '../components/projects';

const SplitsContainer = styled.div`
  @media (min-width: ${props => props.theme.width.medium}) {
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

`;

const ImageContainerSplit = styled.div`
  width: calc(100vw - 9px);
  position: relative;
  left: 50%;
  right: 50%;
  margin: 3rem -50vw;

  @media (min-width: ${props => props.theme.width.medium}) {
    width: 48%;
    margin: 0;
    position: static;
  }

  img {
    max-width: 100%;
  }
`;

const ImageContainerSplitRight = styled.div`
  width: calc(100vw - 9px);
  position: relative;
  left: 50%;
  right: 50%;
  margin: 3rem -50vw;

  @media (min-width: ${props => props.theme.width.medium}) {
    width: 48%;
    margin: 0;
    position: static;
    order: 2;
  }

  img {
    max-width: 100%;
    
  }
`;

const ImageContainer = styled.div`
  width: calc(100vw - 9px);
  
  position: relative;
  left: 50%;
  right: 50%;
  margin: 3rem -50vw;
  
  @media (min-width: ${props => props.theme.width.elarge}) {
    max-width: ${props => props.theme.width.elarge};
    margin: 0 auto;
    position: static;
  }

  img {
    max-width: 100%;
    width: 100%;
  }
`;

const HalfContainer = styled.div`
  @media (min-width: ${props => props.theme.width.medium}) {
    width: 48%;
  }
`;


const Title = styled.h1`
  text-align: center;
  margin: 1.5rem 0;
  color: ${props => props.theme.colors.primaryAccentColor};
`;

const Intro = styled.p`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  text-align: center;
`;

const Subtitle = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  text-align: center; 
`;

const DeliverablesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DeliverablesList = styled.ol`
  list-style: inside;
  display: inline-block;

  li {
    margin: 0.75rem 0;
  }

  a {
    position: relative;
    color: ${props => props.theme.colors.white};
    transition: ${props => props.theme.transition.normal};

    &::before {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 0;
      height: 3px;
      background-color: ${props => props.theme.colors.secondaryAccentColor};
      transition: all 0.5s ease;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      right: 0;
      width: 0;
      height: 3px;
      background-color: ${props => props.theme.colors.primaryAccentColor};
      transition: all 0.5s ease;
    }
    
    &:hover {
      color: ${props => props.theme.colors.primaryAccentColor};

      &::before {
        width: 100%;
      }
      
      &::after {
        width: 100%
      }
    }
  }
`;
const TechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;



const TechnologiesIntro = styled.p`
  margin: 1rem 0;
  text-align: center;
`;



const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id - 1];
  return (
    <BaseLayout>
      <ImageContainer>
        <img src={project.image} />
      </ImageContainer>
      <Title>{ project.name }</Title>
      <Intro>{ project.intro }</Intro>
      <Subtitle>Deliverables</Subtitle>
      <DeliverablesContainer>
        <DeliverablesList>
          {project.deliverables.map(deliverable => {
            return (
              <li key={project.deliverables.indexOf(deliverable)}>
                <a href={deliverable.link} target="_blank">{deliverable.name}</a>
              </li>
            )
          })}
        </DeliverablesList>
      </DeliverablesContainer>

      <SplitsContainer>
        <ImageContainerSplit>
          <img src={project.part1Image} />
        </ImageContainerSplit>

        <HalfContainer>
          <p>{project.part1}</p>
        </HalfContainer>
      </SplitsContainer>
      
      <SplitsContainer>
        <ImageContainerSplitRight>
          <img src={project.part2Image} />
        </ImageContainerSplitRight>

        <HalfContainer>
          <TechnologiesIntro>Used technologies:</TechnologiesIntro>
          <TechnologiesList>
            {project.technologies.map(technology => {
              return (
                <TechnologyCard key={project.technologies.indexOf(technology)} technology={technology}></TechnologyCard>
              )
            })}
          </TechnologiesList>
        </HalfContainer>
      </SplitsContainer>
      
      
      <ImageContainer>
        <img src={project.bottomImage} />
      </ImageContainer>
      
    </BaseLayout>
  )
}

export default ProjectPage;

