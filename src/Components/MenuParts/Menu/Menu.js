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

const Menu = ({ open, setOpen, ...props }) => {
  
    const isHidden = open ? true : false;
//   const tabIndex = isHidden ? 0 : -1;

    const daProps = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props} style={daProps}>
            <LinksCont>
                <Link to='/' onClick={() => setOpen(!open)}>Exercises</Link>
                <Link to='/create' onClick={() => setOpen(!open)}>Record Exercise</Link>
                <Link to='/user' onClick={() => setOpen(!open)}>Create User</Link>
            </LinksCont>
        </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
