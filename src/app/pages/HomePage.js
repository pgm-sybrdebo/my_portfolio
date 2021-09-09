import { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {TimelineLite, TweenMax, Power3} from 'gsap';

const connectionEarth = '/media/loading/connection-earth.mp4';
const profileImage = '/media/images/SybrenTest.png';

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
  transition: all 2s ease-in-out;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.medium};
`;

const HeroContainer__left = styled.div`
  width: 58%;
  margin-left: 1.5rem;

  p {
    margin-bottom: 1.5rem;
  }

`;

const HeroContainer__left__welcome = styled.p`
font-size: ${props => props.theme.fontSizes.large};
font-weight: ${props => props.theme.fontWeights.bold};


span {
  color: ${props => props.theme.colors.primaryAccentColor};
}
`;

const ProfileImage = styled.img`
  width: 38%;
`;

const HomePage = () => {
  let tl = new TimelineLite();
  let welcomeText = useRef(null);
  let loadingVideo = useRef(null);

  useEffect(() => {
    tl.from(
      welcomeText,
      0.8,
      {
        opacity: 0,
        y: -20,
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

    // TweenMax.from(
    //   welcomeText,
    //   0.8,
    //   {
    //     opacity: 0,
    //     y: -20,
    //     ease: Power3.easeOut,
    //   }
    // )

    // TweenMax.to(
    //   welcomeText,
    //   0,
    //   {
    //     opacity: 0,
    //     delay: 12,
    //     ease: Power3.easeOut,
    //   }
    // )

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
        }
      }, 'start'
    )

    // TweenMax.to(
    //   loadingVideo,
    //   5,
    //   {
    //     ease: Power3.easeOut,
    //     delay: 12,
    //     css: {
    //       filter: 'opacity(10%)',
    //       position: 'absolute',
    //       left: '-50%'
    //     }
    //   }
    // )

    
  }, [])
  
  
  
  return (
    <div>
      <div>
        <Welcome ref={el => {welcomeText = el}}>Welcome to my portfolio!</Welcome>
        <Video ref={el => {loadingVideo = el}} autoPlay loop muted>
            <source src={connectionEarth} type="video/mp4"></source>
        </Video>
        <HeroContainer>
          <HeroContainer__left>
            <HeroContainer__left__welcome>Hi there, I am <span>Sybren De Boever</span></HeroContainer__left__welcome>
            <p>I am passionate about analyzing and solving problems. This is due to my curious and perfectionist nature.</p>
            <p>After obtaining my master's degree in commercial sciences with a specialization in IT business, I am currently pursuing a degree in programming.</p>
          </HeroContainer__left>
          
          <ProfileImage src={profileImage} alt="Sybren De Boever"></ProfileImage>
        </HeroContainer>
        
      </div>  
    </div>
  )
}

export default HomePage;