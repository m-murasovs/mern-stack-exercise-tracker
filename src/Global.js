import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Racing+Sans+One&display=swap');

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

    html {
        margin: 0;
        padding: 0;
        font-size: 10px;
    },

    body {
        font-size: 1vw;
        color: #F2F2F2;
        font-family: 'Roboto';
    }, 

`

export default GlobalStyles;