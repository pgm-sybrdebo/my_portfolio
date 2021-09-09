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

  a {
    text-decoration: none;
  }
`;
 
export default GlobalStyle;