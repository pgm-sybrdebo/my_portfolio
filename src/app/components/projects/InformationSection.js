import styled from 'styled-components';
import TechnologyContent from './TechnologyContent';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../../hooks/useView';

const SplitsContainer = styled(motion.div)`
  @media (min-width: ${props => props.theme.width.medium}) {
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const ImageContainerSplit = styled.div`
  // width: calc(100vw - 9px);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 3rem -50vw;

  @media (min-width: ${props => props.theme.width.medium}) {
    width: 48%;
    margin: 0;
    ${({ imgPos }) => imgPos==="right" ? 'order: 2;' : ''}
    position: static;
  }

  img {
    max-width: 100%;

    @media (min-width: ${props => props.theme.width.medium}) {
      border-radius: 3px;
    }
  }
`;


const HalfContainer = styled.div`
  @media (min-width: ${props => props.theme.width.medium}) {
    width: 48%;
  }
`;

const InformationSection = ({img, content, imgPos, tech}) => {
  const { ref, inView }=  useInView();
  const animation = useView(inView);

  return (
    <SplitsContainer ref={ref} animate={animation}>
      <ImageContainerSplit imgPos={imgPos}>
        <img src={img} alt="mockup"/>
      </ImageContainerSplit>

      <HalfContainer>
        {
          tech ? 
          <TechnologyContent technologies={content} /> : 
          <p>{content}</p>
        }
      </HalfContainer>
    </SplitsContainer>
  )
}

export default InformationSection
