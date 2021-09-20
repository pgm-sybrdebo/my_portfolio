import { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { Header, Footer } from '../components/layout';
import { PrimButton } from '../components/buttons';
import { Link } from "react-router-dom";
import * as Routes from '../routes';
import projects from '../data/projects.json';
import { ProjectCard } from '../components/projects';



const connectionEarth = '/media/loading/connection-earth.mp4';
const profileImage = '/media/images/sybren.png';

const shine = keyframes`
0% {
  background-position-x: -500%;
}
100% {
  background-position-x: 500%;
}
`

const Welcome = styled.p`
  font-weight: 700;
  margin-top: 8rem;
  padding: 0 1rem;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: uppercase;
  background: linear-gradient(90deg, #070B12, #00b0f0, #070B12);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: ${shine} 12s linear infinite;
  position: relative;
  transition: all 0.2s ease;

  @media (min-width: ${props => props.theme.width.small}) {
    margin-top: 4rem;
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

const Video = styled.video`
  width: 100%;
  filter: opacity(100%);
  top: 10%;
  bottom: 'auto';
  z-index: -1;
  transition: all 2s ease-in-out;
`;

const HeroContainer = styled.div`
  margin-bottom: 6rem;
  @media (min-width: ${props => props.theme.width.medium}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const HeroContainer__left = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.width.medium}) {
    width: 58%;
    margin-left: 1.5rem;
  }
  p {
    margin-bottom: 1.5rem;
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

const ProfileImage = styled.img`
  width: 100%;
  display: block;
  max-width: 20rem;
  margin: 0 auto 3rem auto;

  @media (min-width: ${props => props.theme.width.medium}) {
    width: 38%;
    order: 2;
  }
`;

const Page = styled.div`
  // display: none;
  display: block;
  visibility: visible;
  top: 0;
  max-width: ${props => props.theme.width.elarge};
  margin: 0 auto;
`;

const SuperContainer = styled.div`
  padding: 0 1.5rem;

  @media (min-width: ${props => props.theme.width.medium}) {
    padding: 0 3rem;
  }
`;

const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HomePage = () => {
  let tl = new TimelineLite();
  let welcomeText = useRef(null);
  let loadingVideo = useRef(null);
  let pag = useRef(null);

  useEffect(() => {
    tl.from(
      welcomeText,
      0.8,
      {
        opacity: 0,
        y: -20,
        bottom: 'auto',
        ease: Power3.easeOut,
      }, 'start'
       )
    .to(
      welcomeText,
      0,
      {
        opacity: 0,
        display: 'none',
        delay: 12,
        ease: Power3.easeOut,
      }
    )

    tl.from(
      loadingVideo,
      0.8,
      {
        opacity: 0,
        y: -20,
        ease: Power3.easeOut,
      }, 'start'
       )
    .to(
      loadingVideo,
      5,
      {
        ease: Power3.easeInOut,
        delay: 6,
        css: {
          filter: 'opacity(25%)',
          position: 'absolute',
          left: '-50%',
          top: 'auto',
          bottom: '30%',
        }
      }, 'start'
    )
    
    // tl.to(
    //   pag,
    //   2,
    //   {
    //     ease: Power3.easeInOut,
    //     delay: 14,
    //     css: {
    //       display: 'block',
    //       top: 0,
    //     }
    //   }, 'start'
    // )
    tl.from(
      pag,
      0.5,
      {
        ease: Power3.easeInOut,
        delay: 12,
        y: 2000,
        css: {
          visibility: 'hidden'
        }
      }, 'start'
    )

    
  }, [])
  
  
  
  return (
    <>
      <div>
        <Welcome ref={el => {welcomeText = el}}>Welcome to my portfolio!</Welcome>
          <Video ref={el => {loadingVideo = el}} autoPlay loop muted>
              <source src={connectionEarth} type="video/mp4"></source>
          </Video>
      </div>
      <Page ref={el => {pag = el}}>
        <Header />
        <SuperContainer>
          <HeroContainer>
            <ProfileImage src={profileImage} alt="Sybren De Boever"></ProfileImage>
            <HeroContainer__left>
              <Title>Hi there, I am <Accent>Sybren De Boever</Accent></Title>
              <p>I am a passionate programmer who loves analyzing and solving problems. This is due to my curious and perfectionist nature.</p>
              <p>After obtaining my master's degree in commercial sciences with a specialization in IT business, I am currently pursuing a degree in programming.</p>
              <Link to={Routes.CONTACT}>
                <PrimButton text={"Get in touch"} />
              </Link>
                
            </HeroContainer__left>
          </HeroContainer>

          <h2>Highlighted projects</h2>
          <ProjectsList>
            {projects.map(project => {
              return (
                project.highlighted ? 
                <ProjectCard key={project.id} project={project}></ProjectCard> : ''
              )
            })}
          </ProjectsList>
        </SuperContainer>
        <Footer />
      </Page>  
    </>
  )
}

export default HomePage;