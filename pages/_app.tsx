import type { AppProps } from 'next/app';
import NProgress from 'nprogress'; //nprogress module
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import 'styles/nprogress.css';
import { myTheme } from 'styles/theme';
import GlobalFonts from 'styles/GlobalFonts';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalFonts />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
