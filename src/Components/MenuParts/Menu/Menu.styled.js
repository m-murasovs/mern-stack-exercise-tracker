import styled from 'styled-components';

export const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.primaryDark};
  color: white;
  transform: ${({ open }) => open ? 'translateY(7%)' : 'translateY(-140%)'};
  text-align: left;
  padding: 2rem;
  position: absolute;
  /* margin-top: 4%; */
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
