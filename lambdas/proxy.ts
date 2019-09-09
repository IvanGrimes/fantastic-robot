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
      console.log(req.url, req.url.replace('/api', ''));
      return req.url.replace('/api', '');
    },
  })
);

export default server;
