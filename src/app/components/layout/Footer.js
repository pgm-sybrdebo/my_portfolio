import styled from 'styled-components';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../../hooks/useView';

const FooterStyle = styled(motion.footer)`
  padding: 3rem 1.5rem 1.5rem 1.5rem;
`;

const Creator = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
`;


const Footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const { ref, inView }=  useInView({
    triggerOnce: true
  });
  const animation = useView(inView);

  return (
    <FooterStyle ref={ref} animate={animation}>
      <Creator>© Sybren De Boever - {currentYear}</Creator> 
    </FooterStyle>
  )
}

export default Footer
