import styled from 'styled-components';
import education from '../../data/education.json';
import EducationItem from './EducationItem';
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

const Education = () => {
  const { ref, inView }=  useInView();
  const animation = useView(inView);

  return (
    <motion.div ref={ref} animate={animation}>
      <h2>Education</h2>

      <TimeList>
        {education.map(e => {
            return (
              <EducationItem key={e.id} edu={e} />
            )
          })}
      </TimeList>
    </motion.div>
  )
}

export default Education
