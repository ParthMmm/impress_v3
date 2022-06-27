import { createGlobalStyle } from 'styled-components';
import MabryPro from '../public/fonts/MabryPro/MabryPro.otf';

export default createGlobalStyle`
@font-face {
    font-family: 'MabryPro';
    src: url("/fonts/MabryPro.otf");
}
@font-face {
    font-family: 'MabryProBold';
    font-weight: 900;
    src: url("/fonts/MabryProBold.otf");
}
@font-face {
    font-family: 'MabryProBlack';
    src: url("/fonts/MabryProBlack.otf");
}
`;

// src: local('MabryPro'), url(${MabryPro})format ("opentype");
