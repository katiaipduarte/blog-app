import { IncomingMessage } from 'http';

export const getLangFromReq = (req: IncomingMessage | undefined) => {
  const headers = req?.headers || {};
  const acceptLanguage = headers['accept-language'];

  return acceptLanguage && acceptLanguage.length > 0
    ? acceptLanguage.split(',')[0]
    : 'en';
};
