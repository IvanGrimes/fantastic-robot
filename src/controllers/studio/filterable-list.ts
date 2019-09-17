import { NowRequest, NowResponse } from '@now/node/dist';
import { stringify } from 'querystring';
import { axiosServer } from '../../lib/axios.server';

export default async (req: NowRequest, res: NowResponse) => {
  const { data } = await axiosServer.get(
    `/studio/filter?${stringify(req.query)}`
  );

  res.json(data);
};
