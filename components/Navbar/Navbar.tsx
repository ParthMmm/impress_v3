import { device } from '@/styles/device';
import React from 'react';
import styled from 'styled-components';
import { RiUser4Line, RiSearchLine } from 'react-icons/ri';
type Props = {};

const NavContainer = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  border-top: 6px solid black;
  height: 4rem;
  visibility: visible;
  width: 100%;
  background-color: white;

  @media ${device.lg} {
    visibility: hidden;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  /* align-content: center; */
  padding: 1.5rem;
`;

function Navbar({}: Props) {
  return (
    <NavContainer>
      <ActionsContainer>
        <RiUser4Line size={24} />
        <RiSearchLine size={24} />
      </ActionsContainer>
    </NavContainer>
  );
}

export default Navbar;
