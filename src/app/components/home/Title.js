import styled from 'styled-components';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../../hooks/useView';

const TitleStyle = styled(motion.h1)`
  margin-bottom: 1.5rem;
`;

const Accent = styled.span`
  color: ${props => props.theme.colors.primaryAccentColor};
  font-size: ${props => props.theme.fontSizes.emedium};
  line-height: 1.2;

  @media (min-width: ${props => props.theme.width.medium}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

const Title = () => {
  const { ref, inView }=  useInView();
  const animation = useView(inView);
  return (
    <TitleStyle ref={ref} animate={animation}>Hi there, I am <Accent>Sybren De Boever</Accent></TitleStyle>
  )
}

export default Title
