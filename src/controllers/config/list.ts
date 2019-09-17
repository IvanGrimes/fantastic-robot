import { NowRequest, NowResponse } from '@now/node/dist';
import { axiosServer } from '../../lib/axios.server';

export type ConfigObjectResponse = {
  [key in ConfigObjectPropertyResponse]: [ConfigObjectValueResponse?];
};

export type ConfigObjectPropertyResponse = 'context' | 'equipment' | 'interior';

export type ConfigObjectValueResponse = { id: string; value: string };

export default async (_req: NowRequest, res: NowResponse) => {
  const { data } = await axiosServer.get<ConfigObjectResponse>(
    `/siteconfig/all`
  );

  res.json(data);
};
