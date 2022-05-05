import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import Post from './Post/Post';

const Container = styled.div`
  height: 100%;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  overflow-y: hidden;
  margin-top: 32px;
`;

const EmptyBox = styled.div`
  width: 21.875rem;
`;

function Landing() {
  return (
    <Container>
      <EmptyBox />
      <Post />
    </Container>
  );
}

export default Landing;
