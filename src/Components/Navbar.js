import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    )
  };

//   import React, { useState, useRef } from 'react';
// import styled, {ThemeProvider} from 'styled-components';
// import { useOnClickOutside } from '../hooks';
// import { Burger, Menu } from './MenuParts';
// import FocusLock from 'react-focus-lock';
// import {theme} from '../theme';
// import { BrowserRouter as Link } from 'react-router-dom';


// const BigWrapper = styled.div`
// width: 100%;
// position: fixed;
// background: lightgrey;
// z-index: 100;
// color: black;
// `

// const NavWrapper = styled.div`
// display: grid;
// grid-template-columns: auto auto;
// justify-content: stretch;
// `

// const BrandDiv = styled.div`
// display: grid;
// grid-template-columns: auto auto;
// padding-left: 5%;
// justify-content: left;
// align-items: center;
// transition: 0.8s;
// &:hover {
//     color: aqua;
//     cursor: pointer;
// }
// `

// const DesktopMenuDiv = styled.div`
// display: none;
// padding-right: 15%;
// justify-content: right;
// align-items: center;
// transition: 0.8s;
// @media (min-width: 450px) {
//     display: grid;
//     grid-template-columns: auto auto;
//     grid-gap: 5%;
// }
// &:hover {
//     cursor: pointer;
// }
// `

// const MobileMenuDiv = styled.div`
// display: none;
// padding-right: 15%;
// justify-content: right;
// align-items: center;
// transition: 0.8s;
// @media (max-width: 450px) {
//     display: grid;
// }
// &:hover {
//     cursor: pointer;
// }
// `

// const LogoWrapper =styled.div`
// height: 60px; 
// width: 60px;
// `

// const blackBrand = {
//     color: 'black',
//     transition: 'color 1.2s ease-in-out'
// }
// const whiteBrand = {
//     color: 'white',
//     transition: 'color 1.2s ease-in-out'
// }


// export const Navbar = () => {
//     // let [ slidePos ] = useContext(PositionContext);

//     const [open, setOpen] = useState(false);
//     const node = useRef();
//     const menuId = "main-menu";

//     useOnClickOutside(node, () => setOpen(false));

//     return (
//         <ThemeProvider theme={theme}>
//         <BigWrapper>
//             <NavWrapper>
//                 <BrandDiv>
//                     <LogoWrapper>
//                     <img src={""}></img>
//                     </LogoWrapper>
//                     <Link to="/" >
//                         Exercise Tracker
//                     </Link>
//                 </BrandDiv>

//                 <DesktopMenuDiv>
//                     <Link to='/'>Exercises</Link>
//                     <Link to='/create'>Create Exercise Log</Link>
//                     <Link to='/user'>Create User</Link>
//                 </DesktopMenuDiv>

//                 <MobileMenuDiv>
//                     <FocusLock disabled={!open}>
//                         <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
//                         <Menu open={open} setOpen={setOpen} id={menuId} />
//                     </FocusLock>
//                 </MobileMenuDiv>
//             </NavWrapper>
//         </BigWrapper>
//         </ThemeProvider>
//     )
// }

// export default Navbar;