import styled from 'styled-components';
import work from '../../data/workExperience.json';
import WorkItem from './WorkItem';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../../hooks/useView';

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

const Work = () => {
  const { ref, inView }=  useInView();
  const animation = useView(inView);

  return (
    <motion.div ref={ref} animate={animation}>
      <h2>Work Experience</h2>
      
      <TimeList>
        {work.map(w => {
          return (
            <WorkItem key={w.id} work={w} />
          )
        })}
      </TimeList>
    </motion.div>
  )
}

export default Work
