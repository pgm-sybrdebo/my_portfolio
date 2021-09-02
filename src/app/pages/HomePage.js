import { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {TweenMax, Power3} from 'gsap';

const connectionEarth = '/media/loading/connection-earth.mp4'

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
  opacity:0;
  margin-top: 8rem;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.slarge};
  text-transform: uppercase;
  background: linear-gradient(90deg, #070B12, #00b0f0, #070B12);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: ${shine} 12s linear infinite;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  // filter:opacity(60%);
`;

const HomePage = () => {
  let welcomeText = useRef(null);
  let logoItem = useRef('hello');

  useEffect(() => {
    console.log(logoItem);
    TweenMax.to(
      logoItem,
      5,
      {
        y: -8000,
        x: -200,
        ease: Power3.easeOut,
        delay: 2,
        css: {
          filter: 'opacity(10%)',
          position: 'absolute',
          left: '-50%'
        }
      }
    )

    TweenMax.to(
      welcomeText,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
      }
    )
  }, [])

  
  console.log(logoItem);
  
  
  
  return (
    <div>
      <div>
        <Welcome ref={el => {welcomeText = el}}>Welcome to my portfolio!</Welcome>
        <Video ref={el => {logoItem = el}} autoPlay loop muted>
            <source src={connectionEarth} type="video/mp4"></source>
        </Video>
      </div>  
    </div>
  )
}

export default HomePage;