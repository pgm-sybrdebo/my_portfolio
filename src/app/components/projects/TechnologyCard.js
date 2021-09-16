import styled from 'styled-components';

const Technology = styled.li`
  margin: 1rem;
  width: 25%;
  height: 5rem;


  div {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: ${props => props.theme.transition.medium};
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

    span {
      transform: rotate3d(1, 1, 0, -180deg);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border: 3px solid ${props => props.theme.colors.primaryAccentColor};
      border-radius: 3px;
      display: flex;
      color: ${props => props.theme.colors.primaryAccentColor};
      font-size: ${props => props.theme.fontSizes.esmall};
      align-items: center;
      justify-content: center;
    }
  }

  &:hover div {
    transform: rotate3d(1, 1, 0, -180deg);
  }
`;

const TechnologyCard = ({technology}) => {
  return (
    <Technology>
      <div>
        <img src={technology.image} />
        <span>{technology.name}</span>
      </div>
    </Technology>
  )
}

export default TechnologyCard
