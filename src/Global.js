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

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }

    .react-datepicker-wrapper,
    .react-datepicker__input-container input {
        display: block;
        height: 2.3em;
        width: 100%;
        border: solid lightgrey 1px;
        border-radius: 0.2em;
        padding-left: 0.5em;
        font-size: 1.4em;
        font-family: ${({ theme }) => theme.primaryFont };
}

    .react-datepicker-wrapper,
    .react-datepicker__input-container input:hover,
    .react-datepicker__input-container input:focus {
        border: solid black 1px;
        cursor: pointer;
    }
`

export default GlobalStyles;