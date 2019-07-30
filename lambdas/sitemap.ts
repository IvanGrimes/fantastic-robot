import { NowRequest, NowResponse } from '@now/node/dist';
import { createSitemap } from 'sitemap';

export default (req: NowRequest, res: NowResponse) => {
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
