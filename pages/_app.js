import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
