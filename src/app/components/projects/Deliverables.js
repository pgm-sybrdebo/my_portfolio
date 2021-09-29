import styled from 'styled-components';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../../hooks/useView';


const Subtitle = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  text-align: center; 
`;

const DeliverablesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DeliverablesList = styled.ol`
  list-style: inside;
  display: inline-block;

  li {
    margin: 0.75rem 0;
  }

  a {
    position: relative;
    color: ${props => props.theme.colors.white};
    transition: ${props => props.theme.transition.normal};

    &::before {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 0;
      height: 3px;
      background-color: ${props => props.theme.colors.secondaryAccentColor};
      transition: all 0.5s ease;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      right: 0;
      width: 0;
      height: 3px;
      background-color: ${props => props.theme.colors.primaryAccentColor};
      transition: all 0.5s ease;
    }
    
    &:hover {
      color: ${props => props.theme.colors.primaryAccentColor};

      &::before {
        width: 100%;
      }
      
      &::after {
        width: 100%
      }
    }
  }
`;

const Deliverables = ({deliverables}) => {
  const { ref, inView }=  useInView();
  const animation = useView(inView);

  return (
    <motion.div ref={ref} animate={animation}>
      <Subtitle>Deliverables</Subtitle>

      <DeliverablesContainer>
        <DeliverablesList>
          {deliverables.map(deliverable => {
            return (
              <li key={deliverables.indexOf(deliverable)}>
                <a href={deliverable.link} rel="noreferrer" target="_blank">{deliverable.name}</a>
              </li>
            )
          })}
        </DeliverablesList>
      </DeliverablesContainer>
    </motion.div>
  )
}

export default Deliverables
