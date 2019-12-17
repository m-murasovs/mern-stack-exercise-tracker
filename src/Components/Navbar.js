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
height: 10vw;
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
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 5%;
height: 100%;
padding-right: 15%;
justify-content: right;
align-items: center;
text-decoration: none;
transition: 0.8s;
@media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
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
@media (max-width: ${({ theme }) => theme.tablet}) {
    display: grid;
}
&:hover {
    cursor: pointer;
}
`

const Brand = styled.h1`
text-decoration: none;
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
`

const NavLinks = styled.span`
text-decoration: none;
color: #FAFAFA;
font-family: "Oxygen", sans-serif;
font-size: 1.7vw;
padding-top: 2vw;
@media (max-width: 848px) {
    font-size: 1.7vw;
    }
`


export const Navbar = (props) => {

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
                    <NavLink to='/' activeClassName="active"><NavLinks>Exercises</NavLinks></NavLink>
                    <NavLink to='/create' activeClassName="active"><NavLinks>Record Exercise</NavLinks></NavLink>
                    <NavLink to='/user' activeClassName="active"><NavLinks>Create User</NavLinks></NavLink>
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
