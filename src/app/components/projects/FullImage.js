import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useView from "../../hooks/useView";

const ImageContainer = styled.div`
  // width: calc(100vw - 9px);
  width: 100vw;

  position: relative;
  left: 50%;
  right: 50%;
  margin: 3rem -50vw;

  @media (min-width: ${(props) => props.theme.width.elarge}) {
    max-width: ${(props) => props.theme.width.elarge};
    margin: 0 auto;
    position: static;
    width: 100%;
  }

  img {
    max-width: 100%;
    width: 100%;
  }
`;

const FullImage = ({ img, type }) => {
  const { ref, inView } = useInView();
  const animation = useView(inView);

  return (
    <motion.div ref={ref} animate={animation}>
      <ImageContainer>
        {type ? (
          <video width={"100%"} loop autoPlay muted>
            <source src={img} type="video/mp4" />
          </video>
        ) : (
          <img src={img} alt="mockup" />
        )}
      </ImageContainer>
    </motion.div>
  );
};

export default FullImage;
