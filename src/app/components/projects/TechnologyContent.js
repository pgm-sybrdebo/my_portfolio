import styled from 'styled-components';
import { TechnologyCard } from '../projects';

const TechnologiesIntro = styled.p`
  margin: 1rem 0;
  text-align: center;
`;

const TechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechnologyContent = ({technologies}) => {
  return (
    <>
     <TechnologiesIntro>Used technologies:</TechnologiesIntro>
      <TechnologiesList>
        {technologies.map(technology => {
          return (
            <TechnologyCard key={technologies.indexOf(technology)} technology={technology}></TechnologyCard>
          )
        })}
      </TechnologiesList> 
    </>
  )
}

export default TechnologyContent
