// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
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

    @media (min-width: ${props => props.theme.width.medium}) {
      font-size: ${props => props.theme.fontSizes.large}
    }
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.medium};

    @media (min-width: ${props => props.theme.width.medium}) {
      font-size: ${props => props.theme.fontSizes.emedium}
    }
  }

  ul {
    list-style: none;
  }

  span {
    font-size: ${props => props.theme.fontSizes.small};
  }

  p {
    font-size: ${props => props.theme.fontSizes.normal};
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