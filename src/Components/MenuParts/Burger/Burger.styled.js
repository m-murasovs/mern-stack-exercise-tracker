import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3em;
  height: 3em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 3em;
    height: 0.3rem;
    background: ${({ open }) => open ? "white" : "white"};
    border-radius: 10px;
    transition: all 0.25s ease-in-out;
    position: relative;
    transform-origin: 1px;
    z-index: 10000;
    padding-right: 10%;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'opacity(1)' : 'opacity(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
