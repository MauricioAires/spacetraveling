import { AppProps } from 'next/app';
import { Head } from 'next/document';
import Header from '../components/Header';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <title>spacetraveling.</title>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
