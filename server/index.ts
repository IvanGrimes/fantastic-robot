import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';
import compression from 'compression';
import cluster from 'cluster';
import os from 'os';
import * as rendertron from 'rendertron-middleware';
import fs from 'fs';
import https from 'https';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 5000;

const options = {
  key: fs.readFileSync('./ssl/privkey.pem'),
  cert: fs.readFileSync('./ssl/cert.pem'),
};

if (!dev && cluster.isMaster) {
  console.log(`Node cluster master ${process.pid} is running`);

  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  (async () => {
    try {
      const server = express();
      const ssl = https.createServer(options, server);

      await app.prepare();

      server.use(
        rendertron.makeMiddleware({
          proxyUrl: 'http://localhost:3001/render',
        })
      );

      server.use(compression());

      server.use(
        '/static',
        express.static(path.join(__dirname, 'static'), {
          maxAge: dev ? '0' : '365d',
        })
      );

      server.all('*', (req: Request, res: Response) => {
        return handle(req, res);
      });

      ssl.listen(port, (err?: any) => {
        if (err) throw err;
        console.log(
          `> Ready on localhost:${port} - env ${process.env.NODE_ENV}`
        );
      });
    } catch (e) {
      console.error(e);

      process.exit(1);
    }
  })();
}
