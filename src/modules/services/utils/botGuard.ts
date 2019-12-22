import { IncomingMessage } from 'http';

const BOTS_USER_AGENTS = [
  'googlebot',
  'mediapartners-google',
  'yandexbot',
  'n/a',
];

export const botGuard = (req: IncomingMessage) => {
  const userAgent = req.rawHeaders.reduce((acc, item, index, array) => {
    if (item === 'user-agent') {
      return array[index + 1].toLowerCase();
    }

    return acc;
  }, '');

  return BOTS_USER_AGENTS.some(ua => userAgent.includes(ua));
};
