import Header from '@/components/Header';
import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';

import styled, { createGlobalStyle, css } from 'styled-components';

const Body = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  box-sizing: border-box;
`;

const Home: NextPage = () => {
  return (
    <Body>
      <Head>
        <title>Impress</title>
        <meta name='description' content='Share mechanical switches' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <Landing />
      <Navbar />
    </Body>
  );
};

export default Home;
