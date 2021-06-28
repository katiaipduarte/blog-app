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
import { PostsContext } from '@lib/context/posts';
import { sortByDate } from '@utils/sortByDate';
import { useFetch } from '@lib/hooks/useFetch';
import { Post } from '@interfaces/post';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const req = useFetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`);

  useEffect(() => {
    if (req.status === 'fetched') {
      setPosts(sortByDate(req.data as Post[]));
      setLoading(false);
    }
  }, [req]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <DefaultSeo {...DefaultSEO} />
      <LayoutWrapper
        themeToggler={themeToggler as () => void}
        mountedComponent={mountedComponent as boolean}
        theme={theme as string}
      >
        <PostsContext.Provider value={{ loading, posts }}>
          <Component {...pageProps} />
        </PostsContext.Provider>
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default App;
