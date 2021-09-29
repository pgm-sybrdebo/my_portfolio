import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin: 1.5rem 0;
  color: ${props => props.theme.colors.primaryAccentColor};
`;

const Intro = styled.p`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  text-align: center;
`;

const Introduction = ({title, intro}) => {
  return (
    <div>
      <Title>{ title }</Title>
      <Intro>{ intro }</Intro>
    </div>
  )
}

export default Introduction
