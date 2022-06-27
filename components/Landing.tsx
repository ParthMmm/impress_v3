import { device } from '@/styles/device';
import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import Post from './Post/Post';
import Sidebar from './Sidebar/Sidebar';

const Container = styled.div`
  height: 100%;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  overflow-y: hidden;
  margin-top: 32px;
  flex-direction: row;
  display: flex;
  overflow-x: hidden;
`;

const EmptyBox = styled.div`
  width: 0;
  visibility: hidden;
  @media ${device.md} {
    visibility: hidden;
    width: 0rem;
  }
  @media ${device.lg} {
    visibility: hidden;
    width: 0;
  }
  @media ${device.xl} {
    visibility: visible;
    width: 21.875rem;
  }
`;

const PostsContainer = styled.div`
  overflow-y: scroll;
  z-index: 1;
  margin-top: 60px;
`;

const SidebarContainer = styled.div``;

function Landing() {
  return (
    <Container>
      <EmptyBox />
      <PostsContainer>
        <Post />
        <Post />
      </PostsContainer>

      <Sidebar />
    </Container>
  );
}

export default Landing;
