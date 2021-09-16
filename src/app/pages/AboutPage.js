import styled from 'styled-components';
import { BaseLayout } from '../layouts';
import { PrimButton } from '../components/buttons';
import work from '../data/workExperience.json';
import education from '../data/education.json';
import technologies from '../data/usedTechnologies.json';
import { WorkItem } from '../components/about';
import { EducationItem } from '../components/about';
import { TechnologyCard } from '../components/projects';


const Profile = '/media/images/sybren.png';

const Hero = styled.div`
  margin-bottom: 3rem;

  @media (min-width: ${props => props.theme.width.medium}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 48%;
    }
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: ${props => props.theme.width.medium}) {
    width: 48%;
    order: 2;
  }
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const Accent = styled.span`
  color: ${props => props.theme.colors.primaryAccentColor};
  font-size: ${props => props.theme.fontSizes.emedium};

  @media (min-width: ${props => props.theme.width.medium}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

const TimeList = styled.ul`
  border-left: 2px solid ${props => props.theme.colors.primaryAccentColor};
  margin-bottom: 3rem;

  &::before {
    width: 2px;
    height: 2rem;
    background: linear-gradient(180deg, ${props => props.theme.colors.blackBg} 0%, ${props => props.theme.colors.primaryAccentColor} 100%);
    display: block;
    content: '';
    position: relative;
    left: -2.4px;
  }

  &::after {
    width: 2px;
    height: 1.5rem;
    background: linear-gradient(180deg, ${props => props.theme.colors.primaryAccentColor} 0%, ${props => props.theme.colors.blackBg} 100%);
    display: block;
    content: '';
    position: relative;
    left: -2.4px;
  }
`;

const TechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    width: 20%;
  }
`;

const AboutPage = () => {
  
  return (
    <BaseLayout>
      <Hero>
        <ProfileImg src={Profile} alt="Sybren De Boever" />
        <div>
          <Title>Hello, My name is <Accent>Sybren De Boever</Accent></Title>
          <p>I am a motivated, ambitious, and hardworking student in computer programming. I have acquired extensive knowledge in the field through my studies of 'Business Administration - Main subject Management and IT' and 'Computer programming'. I can handle working under pressure as well as communicate and collaborate seamlessly in a teamwork environment. My passion for analyzing and solving problems comes from my curious and perfectionistic nature.</p>
          <a href="/media/CV.pdf" target="_blank">
            <PrimButton text={"My CV"} />
          </a>
        </div>
      </Hero>

      <h2>Work Experience</h2>
      <TimeList>
        {work.map(w => {
          return (
            <WorkItem key={w.id} work={w} />
          )
        })}
      </TimeList>

      <h2>Education</h2>
      <TimeList>
        {education.map(e => {
            return (
              <EducationItem key={e.id} edu={e} />
            )
          })}
      </TimeList>

      <h2>IT skills</h2>
      <TechnologiesList>
        {technologies.map(technology => {
              return (
                <TechnologyCard key={technology.id} technology={technology} />
              )
            })}
      </TechnologiesList>
      
    </BaseLayout>
  )
}

export default AboutPage;

