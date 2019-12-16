import styled from 'styled-components';

export const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-200%)'};
  opacity: ${({ open }) => open ? '1' : '0'};
  text-align: right;
  padding: 3em 3em;
  position: absolute;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 40%;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-200%)'};
    }

  a {
    font-size: 3vw;
    text-transform: uppercase;
    padding: 2rem 0;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 4vw;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
