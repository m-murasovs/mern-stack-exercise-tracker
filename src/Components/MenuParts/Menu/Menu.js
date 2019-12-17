import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';



const LinksCont = styled.div`
display: grid;
grid-template-rows: auto auto auto;
padding-bottom: 10%;
`

const Menu = ({ open, toggle, ...props }) => {

	const { x } = useSpring({
		from: { x: 0 },
		x: open ? 0 : 1,
		config: { mass: 1, tension: 270, friction: 60 }
    });
    
    const dropStyle = {
        transform: x
            .interpolate({
                range: [0, 0.3, 0.6, 1],
                output: [0, -10, 0.7, -450]
            })
            .interpolate(xValue => `translate3d(0, ${xValue}px, 0`)
    }
  
    const isHidden = open ? true : false;
//   const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props} style={dropStyle}>
            <LinksCont>
                <Link to='/' onClick={() => toggle(!open)}>Exercises</Link>
                <Link to='/create' onClick={() => toggle(!open)}>Record Exercise</Link>
                <Link to='/user' onClick={() => toggle(!open)}>Create User</Link>
            </LinksCont>
        </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
