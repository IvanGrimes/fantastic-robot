import { NowRequest, NowResponse } from '@now/node/dist';
import { stringify } from 'querystring';
import { axiosServer } from '../../lib/axios.server';

export type MetroListResponse = MetroLineResponse[];

export type MetroLineResponse = {
  id: string;
  // eslint-disable-next-line camelcase
  hex_color: string;
  name: string;
  stations: MetroStationResponse[];
};

export type MetroStationResponse = {
  id: string;
  order: number;
  name: string;
  lat: number;
  lng: number;
};

export default async (req: NowRequest, res: NowResponse) => {
  const { data } = await axiosServer.get(`/metro?${stringify(req.query)}`);

  res.json(data);
};
