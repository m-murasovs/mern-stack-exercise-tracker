import styled from 'styled-components';

export const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(200%)'};
  text-align: center;
  position: absolute;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 50%;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(200%)'};
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
