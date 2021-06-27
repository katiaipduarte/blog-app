import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';

import { useDarkMode } from '@lib/hooks/useDarkMode';
import { GlobalStyle } from '@styles/index';
import { darkTheme } from '@styles/themes/darkTheme';
import { lightTheme } from '@styles/themes/lightTheme';
import LayoutWrapper from '@components/templates/LayoutWrapper/LayoutWrapper';
import { DefaultSEO } from '@lib/seo/DefaultSeo';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <DefaultSeo {...DefaultSEO} />
      <LayoutWrapper
        themeToggler={themeToggler as () => void}
        mountedComponent={mountedComponent as boolean}
        theme={theme as string}
      >
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default App;
