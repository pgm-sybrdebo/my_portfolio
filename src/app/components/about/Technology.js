import styled from "styled-components";
import technologies from "../../data/usedTechnologies.json";
import { TechnologyCard } from "../projects";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useView from "../../hooks/useView";

const TechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  // li {
  //   width: 20%;
  // }
`;

const Technology = () => {
  const { ref, inView } = useInView();
  const animation = useView(inView);

  return (
    <motion.div ref={ref} animate={animation}>
      <h2>IT skills</h2>
      <TechnologiesList>
        {technologies.map((technology) => {
          return <TechnologyCard key={technology.id} technology={technology} />;
        })}
      </TechnologiesList>
    </motion.div>
  );
};

export default Technology;
