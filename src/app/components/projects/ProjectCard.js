import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useView from "../../hooks/useView";

const Card = styled(motion.div)`
  position: relative;
  width: 100%;
  cursor: pointer;
  margin-top: 3rem;

  .imageContainer {
    width: 80%;
    overflow: hidden;
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 0 50%, 0% 0%);
    transition: ${(props) => props.theme.transition.medium};

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.colors.primaryAccentColor};
      mix-blend-mode: multiply;
      opacity: 0;
      transform: translateZ(0);
      transition: ${(props) => props.theme.transition.medium};
    }

    img {
      position: relative;
      width: 120%;
      height: 100%;
      object-fit: cover;
      transition: ${(props) => props.theme.transition.medium};
    }
  }

  .textContainer {
    width: 80%;
    display: block;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0.6) 100%
    );
    position: absolute;
    left: 0rem;
    bottom: 0;
    transition: ${(props) => props.theme.transition.medium};
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.medium};
    display: flex;
    align-items: center;
    padding: 2rem 1rem 1rem 1rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.primaryAccentColor};
    transform: translate(-2rem, 0);
    white-space: nowrap;
    transition: ${(props) => props.theme.transition.medium};
    pointer-events: none;

    @media (min-width: ${(props) => props.theme.width.small}) {
      font-size: ${(props) => props.theme.fontSizes.emedium};
      padding: 3rem 1rem 1rem 1rem;
    }

    @media (min-width: ${(props) => props.theme.width.medium}) {
      padding: 3rem 2rem 2rem 2rem;
      transform: translate(-4rem, 0);
    }

    &::after {
      content: "See more \\2192";
      display: inline-block;
      margin-left: 1rem;
      font-size: ${(props) => props.theme.fontSizes.small};
      font-weight: ${(props) => props.theme.fontWeights.light};
      opacity: 0;
      transform: translateX(-25%);
      transition: ${(props) => props.theme.transition.medium};
    }
  }

  &:hover {
    .imageContainer {
      clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
      transform: translateX(25%);
      transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);

      img {
        transform: translateX(0);
      }

      &::after {
        opacity: 1;
      }
    }

    .textContainer {
      background-image: none;
    }

    span {
      color: ${(props) => props.theme.colors.white};
      transform: translate(-2%, 0);
      transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);

      &::after {
        opacity: 1;
        transform: translateX(0);
        transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    }
  }

  @media (min-width: ${(props) => props.theme.width.medium}) {
    width: 42%;
  }
`;

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView();
  const animation = useView(inView);

  return (
    <Card ref={ref} animate={animation}>
      <Link to={Routes.PROJECTS_DETAILS.replace(":id", project.id)}>
        <div className="imageContainer">
          {project.headerVideo ? (
            <video width={"100%"} loop autoPlay muted>
              <source src={project.image} type="video/mp4" />
            </video>
          ) : (
            <img src={project.image} alt={project.name} />
          )}
        </div>

        <div className="textContainer">
          <span>{project.name}</span>
        </div>
      </Link>
    </Card>
  );
};

export default ProjectCard;
