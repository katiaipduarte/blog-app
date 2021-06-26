import Router from 'next/router';
import { useEffect } from 'react';

export const PreviousNavigation = () => {
  const cachedScrollPositions: Array<any> = [];

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
      let shouldScrollRestore: any;

      Router.events.on('routeChangeStart', () => {
        if (!shouldScrollRestore) {
          cachedScrollPositions.push([window.scrollX, window.scrollY]);
        }
      });

      Router.events.on('routeChangeComplete', () => {
        if (shouldScrollRestore) {
          const { x, y } = shouldScrollRestore;
          window.scrollTo(x, y);
          shouldScrollRestore = false;
        }
      });

      Router.beforePopState(() => {
        if (cachedScrollPositions.length > 0) {
          const [x, y] = cachedScrollPositions.pop();
          shouldScrollRestore = { x, y };
        }
        return true;
      });
    }
  }, []);
};
