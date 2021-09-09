import { createGlobalStyle } from 'styled-components';

import MontserratRegularWoff from './montserrat-regular-webfont.woff';
import MontserratRegularWoff2 from './montserrat-regular-webfont.woff2';
import MontserratLightWoff from './montserrat-light-webfont.woff';
import MontserratLightWoff2 from './montserrat-light-webfont.woff2';
import MontserratBoldWoff from './montserrat-bold-webfont.woff';
import MontserratBoldWoff2 from './montserrat-bold-webfont.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'),
        url(${MontserratRegularWoff2}) format('woff2'),
        url(${MontserratRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: local('Montserrat'),
      url(${MontserratLightWoff2}) format('woff2'),
      url(${MontserratLightWoff}) format('woff');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'),
    url(${MontserratBoldWoff2}) format('woff2'),
    url(${MontserratBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
}
`;