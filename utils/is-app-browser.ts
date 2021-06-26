/**
 * Check the browser to redirect or open a new tab
 *
 * @param {Window} winw
 * @return {boolean}
 */
const IsAppBrowser = (winw: Window) => {
  const rules = [
    'WebView',
    '(iPhone|iPod|iPad)(?!.*Safari/)',
    'Android.*(wv|.0.0.0)'
  ];
  return Boolean(
    winw.navigator.userAgent.match(new RegExp(`(${rules.join('|')})`, 'ig'))
  );
};

export default IsAppBrowser;
