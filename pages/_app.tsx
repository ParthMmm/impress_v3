import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress'; //nprogress module
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import 'styles/nprogress.css';
import { myTheme } from 'styles/theme';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
