import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';
import compression from 'compression';
import cluster from 'cluster';
import os from 'os';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

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

      await app.prepare();

      // if (!dev) {
      //   server.use(function (req, res, next) {
      //     const proto = req.headers['x-forwarded-proto'];
      //
      //     if (proto === 'https') {
      //       res.set({
      //         'Strict-Transport-Security': 'max-age=31557600', // one-year
      //       });
      //       return next();
      //     }
      //
      //     res.redirect(`https://${req.headers.host}${req.url}`);
      //   });
      // }

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

      server.listen(port, (err?: any) => {
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
