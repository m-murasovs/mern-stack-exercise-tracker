import React, { useState, useRef } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { useOnClickOutside } from '../Contexts/BurgerContext.js';
import { Burger, Menu } from './MenuParts';
import FocusLock from 'react-focus-lock';
import {theme} from '../theme';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';

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
color: #F7F7F7;
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

export const NavLinks = styled.span`
color: #F7F7F7;
font-family: ${({ theme }) => theme.primaryFont};
font-size: 1.7vw;
padding-top: 2vw;
@media (max-width: 848px) {
    font-size: 1.7vw;
    }
@media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8em;
}
&:hover {
    cursor: pointer;
    padding-bottom: 2px;
    border-bottom: solid 2px white;
}
`

const linkStyle = {
    textDecoration: 'none',
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
                    <NavLink to="/" style={linkStyle}>
                        <Brand>EXERCISE TRACKER</Brand>
                    </NavLink>
                </BrandDiv>

                <DesktopMenuDiv>
                    <NavLink to='/' exact style={linkStyle} activeStyle={{borderBottom: "solid 2px white"}}>
                        <NavLinks>Exercises</NavLinks>
                    </NavLink>
                    <NavLink to='/create' style={linkStyle} activeStyle={{borderBottom: "solid 2px white"}}>
                        <NavLinks>Record Exercise</NavLinks>
                    </NavLink>
                    <NavLink to='/user' style={linkStyle} activeStyle={{borderBottom: "solid 2px white"}}>
                        <NavLinks>Create User</NavLinks>
                    </NavLink>
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
