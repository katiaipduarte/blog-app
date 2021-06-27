export const urlRedirectHandler = (url: string): string => {
  let replaceUrl = '';

  if (url.endsWith('/')) {
    replaceUrl = url.substring(0, url.length - 1);
  } else {
    replaceUrl = url.replace('/?', '?');
  }

  return replaceUrl;
};
