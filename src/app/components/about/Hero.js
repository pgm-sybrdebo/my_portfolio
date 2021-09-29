import styled from 'styled-components';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../../hooks/useView';
import { PrimButton } from '../buttons';

const Profile = '/media/images/sybren.png';

const HeroStyle = styled.div`
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
  max-width: 20rem;
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

const Button = styled(motion.a)`
  display: block;
`;

const Hero = () => {
  const { ref, inView }=  useInView();
  const animation = useView(inView);

  return (
    <HeroStyle>
      <ProfileImg src={Profile} alt="Sybren De Boever" />
      <div>
        <Title>Hello, My name is <Accent>Sybren De Boever</Accent></Title>
        <p>I am a motivated, ambitious, and hardworking student in computer programming. I have acquired extensive knowledge in the field through my studies of 'Business Administration - Main subject Management and IT' and 'Computer programming'. I can handle working under pressure as well as communicate and collaborate seamlessly in a teamwork environment. My passion for analyzing and solving problems comes from my curious and perfectionistic nature.</p>

        <Button ref={ref} animate={animation} href="/media/CV.pdf" target="_blank">
          <PrimButton text={"My CV"} />
        </Button>
      </div>
    </HeroStyle>
  )
}

export default Hero
