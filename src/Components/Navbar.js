import React, { useState, useRef } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { useOnClickOutside } from '../hooks';
import { Burger, Menu } from './MenuParts';
import FocusLock from 'react-focus-lock';
import {theme} from '../theme';
import { BrowserRouter as Route, Link } from 'react-router-dom';


const BigWrapper = styled.div`
width: 100%;
position: fixed;
background: ${({ theme }) => theme.primaryDark};
z-index: 100;
height: 12%;
`

const NavWrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
justify-content: stretch;
height: 100%;
`

const BrandDiv = styled.div`
display: grid;
grid-template-columns: auto auto;
padding-left: 10%;
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
@media (min-width: 450px) {
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
@media (max-width: 450px) {
    display: grid;
}
&:hover {
    cursor: pointer;
}
`

const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontFamily: "Helvetica, sans-serif",
    fontSize: "1.5vw"
}

const headStyle = {
    boxSizing: "border-box",
    fontFamily: "Racing Sans One, cursive",
    textDecoration: "none",
    color: "white",
    fontSize: "4vw"
}

export const Navbar = () => {

    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
        <BigWrapper>
            <NavWrapper>
                <BrandDiv>
                    <Link to="/" style={headStyle}>
                        Exercise Tracker
                    </Link>
                </BrandDiv>

                <DesktopMenuDiv>
                    <Link to='/' style={linkStyle}>Exercises</Link>
                    <Link to='/create' style={linkStyle}>Create Exercise Log</Link>
                    <Link to='/user' style={linkStyle}>Create User</Link>
                </DesktopMenuDiv>

                <MobileMenuDiv>
                    <FocusLock disabled={!open}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Menu open={open} setOpen={setOpen} id={menuId} />
                    </FocusLock>
                </MobileMenuDiv>
            </NavWrapper>
        </BigWrapper>
        </ThemeProvider>
    )
}
