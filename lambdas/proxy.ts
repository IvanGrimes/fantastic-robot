import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressHttpProxy from 'express-http-proxy';

const server = express();

server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(
  '/api',
  expressHttpProxy('134.209.250.238', {
    proxyReqPathResolver: req => {
      return req.url.replace('/api', '');
    },
    proxyReqOptDecorator: proxyReqOpts => {
      if (!process.env.API_AUTH) {
        throw new Error('You should define API_AUTH env variable');
      }

      if (!proxyReqOpts.headers) {
        // eslint-disable-next-line no-param-reassign
        proxyReqOpts.headers = {};
      }

      // eslint-disable-next-line no-param-reassign
      proxyReqOpts.headers.Authorization = btoa(process.env.API_AUTH);

      return proxyReqOpts;
    },
  })
);

export default server;
