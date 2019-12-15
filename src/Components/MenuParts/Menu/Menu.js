import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const LinksCont = styled.div`
display: grid;
grid-template-rows: auto auto auto;
`

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <LinksCont>
            <Link to='/'>Exercises</Link>
            <Link to='/create'>Create Exercise Log</Link>
            <Link to='/user'>Create User</Link>
        </LinksCont>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
