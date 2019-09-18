import { NowRequest, NowResponse } from '@now/node/dist';
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
  const { city, ...query } = req.query;
  const { data } = await axiosServer.get(`/metro`, {
    params: { cityId: city, ...query },
  });

  res.json(data);
};
