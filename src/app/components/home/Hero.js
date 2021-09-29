import styled from 'styled-components';
import { PrimButton } from '../buttons';
import { Link } from "react-router-dom";
import * as Routes from '../../routes';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../../hooks/useView';
import Title from './Title';
import Text from './Text';


const profileImage = '/media/images/sybren.png';


const HeroContainer = styled.div`
  margin-bottom: 6rem;
  @media (min-width: ${props => props.theme.width.medium}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const HeroContainerLeft = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.width.medium}) {
    width: 58%;
  }

  p {
    margin-bottom: 1.5rem;
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

const Hero = () => {
  const { ref, inView }=  useInView();
  const animation = useView(inView);

  return (
    <HeroContainer>
      <ProfileImage src={profileImage} alt="Sybren De Boever"></ProfileImage>

      <HeroContainerLeft>
        <Title />

        <Text text={"I am a passionate programmer who loves analyzing and solving problems. This is due to my curious and perfectionist nature."} />

        <Text text={"After obtaining my master's degree in commercial sciences with a specialization in IT business, I am currently pursuing a degree in programming."} />

        <motion.div ref={ref} animate={animation}>
          <Link  to={Routes.CONTACT}>
            <PrimButton text={"Get in touch"} />
          </Link>
        </motion.div>
      </HeroContainerLeft>
    </HeroContainer>
  )
}

export default Hero
