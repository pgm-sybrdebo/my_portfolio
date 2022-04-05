import styled from "styled-components";

const Technology = styled.li`
  display: flex;
  margin: 1.5rem 1rem;
  width: 25%;
  height: 5rem;

  div {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: ${(props) => props.theme.transition.medium};
    transform-style: preserve-3d;

    img {
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transform: rotateX(0deg);
    }

    .whiteImg {
      filter: invert(100%) sepia(2%) saturate(3%) hue-rotate(19deg)
        brightness(103%) contrast(100%);
    }

    span {
      transform: rotate3d(1, 1, 0, -180deg);
      position: absolute;
      padding: 0.3rem;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border: 3px solid ${(props) => props.theme.colors.primaryAccentColor};
      border-radius: 3px;
      display: flex;
      color: ${(props) => props.theme.colors.primaryAccentColor};
      font-size: ${(props) => props.theme.fontSizes.esmall};
      align-items: center;
      justify-content: center;
      word-break: break-all;
    }
  }

  &:hover div {
    transform: rotate3d(1, 1, 0, -180deg);
  }
`;

const TechnologyCard = ({ technology }) => {
  return (
    <Technology>
      <div>
        <img
          src={technology.image}
          alt={technology.name}
          className={
            technology.name === "Handlebars" ||
            technology.name === "Express" ||
            technology.name === "Apollo"
              ? "whiteImg"
              : ""
          }
        />
        <span>{technology.name}</span>
      </div>
    </Technology>
  );
};

export default TechnologyCard;
