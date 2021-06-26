import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@styles/index';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
