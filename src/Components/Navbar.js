import React, { useState, useRef } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { useOnClickOutside } from '../Contexts/BurgerContext.js';
import { Burger, Menu } from './MenuParts';
import FocusLock from 'react-focus-lock';
import {theme} from '../theme';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const BigWrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
justify-content: stretch;
position: fixed;
width: 100%;
height: 10vw;
background: ${({ theme }) => theme.primaryDark};
z-index: 100;
padding-top: 1vw;
transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94) 0s;
animation: 1s ease-out 0s;

@media (max-width: ${({ theme }) => theme.tablet}) {
    height: 12vw;
}
@media (max-width: ${({ theme }) => theme.mobile}) {
    padding-top: 2vw;
    height: 16vw;
}
`

const BrandDiv = styled.div`
display: grid;
grid-template-columns: auto auto;
padding-left: 8%;
justify-content: left;
align-items: center;
transition: 0.8s;
&:hover {
    color: aqua;
    cursor: pointer;
}
`

const MobileMenuDiv = styled.div`
display: none;
padding-right: 15%;
justify-content: right;
align-items: center;
transition: 0.8s;
@media (max-width: ${({ theme }) => theme.tablet}) {
    display: grid;
}
`

const Brand = styled.span`
color: #FAFAFA;
font-family: "Oxygen", sans-serif;
font-style: italic;
font-size: 3.5vw;
@media (max-width: ${({ theme }) => theme.tablet}) {
    padding-top: 1vw;
    font-size: 5.5vw;
    }
@media (max-width: ${({ theme }) => theme.mobile}) {
    padding-top: 2vw;
    font-size: 7vw;
    }
&:hover {
    /* padding-bottom: 2px; */
    border-bottom: solid 2px white;
}
`

const DesktopMenuDiv = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 5%;
padding-right: 15%;
justify-content: right;
align-items: center;
transition: 0.8s;
@media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
}
`

const NavLinks = styled.span`
color: #FAFAFA;
font-family: "Oxygen", sans-serif;
font-size: 1.7vw;
padding-top: 2vw;
@media (max-width: 848px) {
    font-size: 1.7vw;
    }
&:hover {
    cursor: pointer;
    padding-bottom: 2px;
    border-bottom: solid 2px white;
}
`

const linkStyle = {
    textDecoration: 'none',
    transform: 'translateY(5px)'
}


export const Navbar = (props) => {

    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
        <BigWrapper>
                <BrandDiv>
                    <Link to="/" style={linkStyle}>
                        <Brand>EXERCISE TRACKER</Brand>
                    </Link>
                </BrandDiv>

                <DesktopMenuDiv>
                    <Link to='/' style={linkStyle}><NavLinks>Exercises</NavLinks></Link>
                    <Link to='/create' style={linkStyle}><NavLinks>Record Exercise</NavLinks></Link>
                    <Link to='/user' style={linkStyle}><NavLinks>Create User</NavLinks></Link>
                </DesktopMenuDiv>

                <MobileMenuDiv>
                    <FocusLock disabled={!open}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Menu open={open} setOpen={setOpen} id={menuId} />
                    </FocusLock>
                </MobileMenuDiv>
        </BigWrapper>
        </ThemeProvider>
    )
}
