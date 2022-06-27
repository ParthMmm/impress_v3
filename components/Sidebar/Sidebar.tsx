import React from 'react';
import styled from 'styled-components';
import { device } from '@/styles/device';
type Props = {};

const SidebarContainer = styled.div`
  z-index: 0;
  height: 20%;
  width: 0;
  visibility: hidden;
  display: flex;
  margin-top: 12rem;
  border-radius: 12px;
  @media ${device.lg} {
    width: 21.875rem;
    visibility: visible;
  }
  /* display: flex; */
  /* position: fixed; */
  justify-content: flex-end;
`;

const InnerContainer = styled.div`
  border: 4px solid;
  position: fixed;
  height: 0rem;
  width: 0rem;
  border-radius: 12px;
  padding: 12px 16px;
  margin: auto;
  visibility: hidden;
  /* display: flex;
  justify-content: flex-end;
  flex-direction: column; */
  @media ${device.lg} {
    height: 16rem;
    width: 12rem;
    visibility: hidden;
  }
  @media ${device.xl} {
    height: 24rem;
    width: 20rem;
    visibility: visible;
  }
`;

function Sidebar({}: Props) {
  return (
    <SidebarContainer>
      <InnerContainer>yoyoyoyo</InnerContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
