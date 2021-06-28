import { urlRedirectHandler } from '@utils/urlRedirectHandler';

describe('urlRedirectHandler test', () => {
  it('should replace / with blank if found in the end', () => {
    const mocked = 'http://localhost/test/';
    const res = 'http://localhost/test';
    expect(urlRedirectHandler(mocked)).toStrictEqual(res);
  });

  it('should replace /? with ? if found in the end', () => {
    const mocked = 'http://localhost/test/?';
    const res = 'http://localhost/test?';
    expect(urlRedirectHandler(mocked)).toStrictEqual(res);
  });

  it('should return original url', () => {
    const mocked = 'http://localhost/test';
    expect(urlRedirectHandler(mocked)).toStrictEqual(mocked);
  });
});
