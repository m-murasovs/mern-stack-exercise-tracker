import React, { useState, useRef } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { useOnClickOutside } from '../hooks';
import { Burger, Menu } from './MenuParts';
import FocusLock from 'react-focus-lock';
import {theme} from '../theme';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';


const BigWrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
justify-content: stretch;
width: 100%;
position: fixed;
background: ${({ theme }) => theme.primaryDark};
z-index: 100;
height: 6em;
@media (max-width: ${({ theme }) => theme.tablet}) {
        height: 8em;
    }
@media (max-width: ${({ theme }) => theme.mobile}) {
        padding-top: 2vw;
        height: 14vw;
    }
`

const BrandDiv = styled.div`
display: grid;
grid-template-columns: auto auto;
padding-left: 8%;
height: 100%;
justify-content: left;
align-items: center;
transition: 0.8s;
&:hover {
    color: aqua;
    cursor: pointer;
}
`

const DesktopMenuDiv = styled.div`
display: none;
height: 100%;
padding-right: 15%;
justify-content: right;
align-items: center;
text-decoration: none;
transition: 0.8s;
@media (min-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 5%;
}
&:hover {
    cursor: pointer;
}
`

const MobileMenuDiv = styled.div`
display: none;
padding-right: 15%;
justify-content: right;
align-items: center;
transition: 0.8s;
@media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
}
&:hover {
    cursor: pointer;
}
`

const Brand = styled.h1`
text-decoration: none;
color: #F2F2F2;
font-family: "Racing Sans One", sans-serif;
font-size: 4em;
@media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 6vw;
    }
@media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 8vw;
    }
`

const NavLinks = styled.span`
text-decoration: none;
color: #F2F2F2;
font-family: "Roboto", sans-serif;
font-size: 2em;
`


export const Navbar = () => {

    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
        <BigWrapper>
                <BrandDiv>
                    <NavLink to="/" >
                        <Brand>EXERCISE TRACKER</Brand>
                    </NavLink>
                </BrandDiv>

                <DesktopMenuDiv>
                    <NavLink to='/'><NavLinks>Exercises</NavLinks></NavLink>
                    <NavLink to='/create'><NavLinks>Create Exercise Log</NavLinks></NavLink>
                    <NavLink to='/user'><NavLinks>Create User</NavLinks></NavLink>
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
