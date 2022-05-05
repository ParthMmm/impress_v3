import Landing from '@/components/Landing';
import type { NextPage } from 'next';
import Head from 'next/head';

import styled, { createGlobalStyle, css } from 'styled-components';

const Box = styled.div`
  h = 100%;
  `;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Impress</title>
        <meta name='description' content='Share mechanical switches' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Landing />
    </>
  );
};

export default Home;
