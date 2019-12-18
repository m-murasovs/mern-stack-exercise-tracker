import { createGlobalStyle } from 'styled-components';
import theme from './theme.js';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Racing+Sans+One&display=swap');

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

    html {
        margin: 0;
        padding: 0;
        font-size: 10px;
        font-family: ${({theme}) => theme.primaryFont};
    },

    body {
        color: #F2F2F2;
    }, 

`

export default GlobalStyles;