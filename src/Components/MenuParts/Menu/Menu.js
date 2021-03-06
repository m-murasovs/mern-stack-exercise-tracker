import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import { NavLinks } from '../../Navbar';


const LinksCont = styled.div`
display: grid;
grid-template-rows: auto auto auto;
padding-bottom: 10%;
`

const Menu = ({ open, setOpen, ...props }) => {

	const { x } = useSpring({
		from: { x: 1 },
		x: open ? 0 : 1,
		config: { mass: 10, tension: 140, friction: 40 }
    });
    
    const dropStyle = {
        transform: x
            .interpolate({
                range: [0, 0.3, 0.6, 1],
                output: [0, -1, 3, -450]
            })
            .interpolate(xValue => `translate3d(0, ${xValue}px, 0`)
    }
  
    const isHidden = open ? true : false;
    // const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={isHidden} {...props} style={dropStyle}>
            <LinksCont>
                <Link to='/' onClick={() => setOpen(!open)}><NavLinks>Exercises</NavLinks></Link>
                <Link to='/create' onClick={() => setOpen(!open)}><NavLinks>Record Exercise</NavLinks></Link>
                <Link to='/user' onClick={() => setOpen(!open)}><NavLinks>Create User</NavLinks></Link>
            </LinksCont>
        </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
