import styled from 'styled-components';
import { animated } from 'react-spring';


export const StyledMenu = styled(animated.nav)`
background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};
text-align: right;
padding: 3em 3em;
position: absolute;
right: 0;
margin-top: 10px;
width: 40%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      margin-top: 0;
    }

  a {
    font-size: 3vw;
    text-transform: uppercase;
    padding: 2rem 0;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 5vw;
      text-align: center;
    }
  }
`;
