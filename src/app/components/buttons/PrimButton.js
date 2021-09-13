import styled, { keyframes } from 'styled-components';


const disappear = keyframes`
from {
  mask-position: 0 0;
}
to {
  mask-position 100% 0;
}
`

const appear = keyframes`
from {
  mask-position: 100% 0;
}
to {
  mask-position 0 0;
}
`

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;
  height: 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 3px solid ${props => props.theme.colors.blackBg};
  transition: all 0.5s ease;

  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.white};
    text-align: center;
    width: 100%;
    overflow: hidden;
    font-size: ${props => props.theme.fontSizes.normal};
  }

  button {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.secondaryAccentColor};
    mask: url(https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png);
    mask-size: 2300% 100%;
    border: none;
    color: ${props => props.theme.colors.blackBg};
    cursor: pointer;
    animation: ${appear} 0.5s steps(22) forwards;
  }

  &:hover {
    border: 3px solid ${props => props.theme.colors.white};

    button {
      animation: ${disappear} 0.5s steps(22) forwards;
    }
  }

`;

const PrimButton = () => {
  return (
    <ButtonContainer>
      <span>Send message</span>

      <button>Send message</button>
    </ButtonContainer>
  )
}

export default PrimButton
