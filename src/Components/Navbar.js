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
height: 8%;
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
padding-right: 15%;
justify-content: right;
align-items: center;
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
                    <Link to="/" >
                        <h1>Exercise Tracker</h1>
                    </Link>
                </BrandDiv>

                <DesktopMenuDiv>
                    <li><Link to='/'>Exercises</Link></li>
                    <li><Link to='/create'>Create Exercise Log</Link></li>
                    <li><Link to='/user'>Create User</Link></li>
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
