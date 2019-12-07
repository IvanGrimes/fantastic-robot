import { NextApiRequest, NextApiResponse } from 'next';
import { createSitemap } from 'sitemap';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const sitemap = createSitemap({
    hostname: req.headers.host,
    cacheTime: 600000,
  });

  sitemap.toXML((err, xml) => {
    if (err) {
      console.log(err);
      res.writeHead(500);
      res.end();
    }

    res.end(xml);
  });
};
