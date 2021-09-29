// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html,
  #root, body {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.blackBg};
    color: #fff;
    font-family: 'Montserrat';
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.emedium};
    line-height: 1.2;

    @media (min-width: ${props => props.theme.width.medium}) {
      font-size: ${props => props.theme.fontSizes.large};
    }
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.medium};
    line-height: 1.2;

    @media (min-width: ${props => props.theme.width.medium}) {
      font-size: ${props => props.theme.fontSizes.emedium};
    }
  }

  ul {
    list-style: none;
  }

  span {
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 1.5;
  }

  p {
    font-size: ${props => props.theme.fontSizes.normal};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  input, textarea {
    font-family: 'Montserrat';
    font-size: ${props => props.theme.fontSizes.small};
    padding-bottom 1rem;
  }

  button {
    font-family: 'Montserrat';
    font-size: ${props => props.theme.fontSizes.normal};
  }
`;
 
export default GlobalStyle;